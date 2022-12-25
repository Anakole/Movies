import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'services/Api';

export const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = location.state?.from ?? '/movies';

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
    <main>
      <div>
        <Link to={backLink}>Back</Link>
        <img src={posterLink} alt={original_title} />
        <div>
          <h1>
            {original_title} ({new Date(release_date).getFullYear()})
          </h1>
          <p>User score: {Math.round(vote_average * 10)}%</p>
          <p>Overview: {overview}</p>
          <p>Genres:</p>
          {genres.map(({ name }) => name).join(', ')}
        </div>
      </div>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </main>
  );
};
