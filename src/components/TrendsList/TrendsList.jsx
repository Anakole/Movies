import {
  ListStyled,
  MovieCard,
  MovieName,
  PosterStyled,
  StyledListLink,
  TrendsTitle,
} from './TrendsList.styled';

export const TrendsList = ({ trends }) => {
  return (
    <>
      <TrendsTitle>Trending today</TrendsTitle>
      <ListStyled>
        {trends.map(({ id, original_title, poster_path, release_date }) => (
          <MovieCard key={id}>
            <StyledListLink to={`movies/${id}`} state={{ from: '/' }}>
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
