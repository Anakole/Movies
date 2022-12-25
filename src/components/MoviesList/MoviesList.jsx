import {
  ListStyled,
  MovieCard,
  MovieName,
  PosterStyled,
  StyledListLink,
} from 'components/TrendsList/TrendsList.styled';

export const MoviesList = ({ movies, movieName }) => {
  return (
    <ListStyled>
      {movies.map(({ poster_path, id, original_title }) => (
        <MovieCard key={id}>
          <StyledListLink
            to={`/movies/${id}`}
            state={{ from: `/movies?query=${movieName}` }}
          >
            <PosterStyled
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={original_title}
            />
            <MovieName>{original_title}</MovieName>
          </StyledListLink>
        </MovieCard>
      ))}
    </ListStyled>
  );
};
