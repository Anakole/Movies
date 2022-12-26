import {
  ListStyled,
  MovieCard,
  MovieName,
  PosterStyled,
  StyledListLink,
  TrendsTitle,
} from './TrendsList.styled';
import PropTypes from 'prop-types';

export const TrendsList = ({ trends, location }) => {
  return (
    <>
      <TrendsTitle>Trending today</TrendsTitle>
      <ListStyled>
        {trends.map(({ id, original_title, poster_path }) => (
          <MovieCard key={id}>
            <StyledListLink to={`/movies/${id}`} state={{ from: location }}>
              <PosterStyled
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={original_title}
              />
              <MovieName>{original_title}</MovieName>
            </StyledListLink>
          </MovieCard>
        ))}
      </ListStyled>
    </>
  );
};

TrendsList.propTypes = {
  trends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ),
  location: PropTypes.object.isRequired,
};
