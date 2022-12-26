import { useState, useEffect, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import { getMovieById } from 'services/Api';
import {
  BackLink,
  Details,
  DetailsContainer,
  DetailsImg,
  DetailsLink,
  DetailsNav,
  DetailsOptions,
  DetailsTable,
  DetailsText,
  DetailsTitle,
  DetailsLine,
} from './MovieDetails.styled';

import moviePoster from 'components/img/movie-poster.jpg';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    async function addMovieById() {
      try {
        const movie = await getMovieById(movieId);
        setMovie(movie);
        setGenres(movie.genres);
      } catch (error) {
        console.log(error);
      }
    }

    addMovieById();
  }, [movieId]);

  const { original_title, poster_path, vote_average, overview, release_date } =
    movie;
  const posterLink = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <DetailsContainer>
      <BackLink to={backLink}>
        <BsArrowLeftShort />
        Back
      </BackLink>
      <Details>
        <DetailsImg
          src={poster_path !== null ? posterLink : moviePoster}
          alt={original_title}
        />
        <div>
          <DetailsTitle>
            {original_title} ({new Date(release_date).getFullYear()})
          </DetailsTitle>
          <DetailsTable>
            <DetailsLine>
              <DetailsOptions>User score:</DetailsOptions>
              <DetailsText>{Math.round(vote_average * 10)}%</DetailsText>
            </DetailsLine>
            <DetailsLine>
              <DetailsOptions>Genres:</DetailsOptions>
              <DetailsText>
                {genres.map(({ name }) => name).join(', ')}
              </DetailsText>
            </DetailsLine>
            <DetailsLine>
              <DetailsOptions>Overview:</DetailsOptions>
              <DetailsText>{overview}</DetailsText>
            </DetailsLine>
          </DetailsTable>
          <DetailsNav>
            <DetailsLink to="cast" state={{ from: backLink }}>
              Cast
            </DetailsLink>
            <DetailsLink to="reviews" state={{ from: backLink }}>
              Reviews
            </DetailsLink>
          </DetailsNav>
          <Suspense fallback={<div>Load more...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </Details>
    </DetailsContainer>
  );
};

export default MovieDetails;
