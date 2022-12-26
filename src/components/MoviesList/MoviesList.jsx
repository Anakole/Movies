import {
  ListStyled,
  MovieCard,
  MovieName,
  PosterStyled,
  StyledListLink,
} from 'components/TrendsList/TrendsList.styled';
import PropTypes from 'prop-types';
import moviePoster from '../img/movie-poster.jpg';

export const MoviesList = ({ movies, location }) => {
  return (
    <ListStyled>
      {movies.map(({ poster_path, id, original_title }) => (
        <MovieCard key={id}>
          <StyledListLink to={`/movies/${id}`} state={{ from: location }}>
            <PosterStyled
              src={
                poster_path !== null
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : moviePoster
              }
              alt={original_title}
            />
            <MovieName>{original_title}</MovieName>
          </StyledListLink>
        </MovieCard>
      ))}
    </ListStyled>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ),
  location: PropTypes.object.isRequired,
};
