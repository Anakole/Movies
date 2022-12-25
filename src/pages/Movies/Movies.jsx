import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'services/Api';
import { StartSearch } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearcnParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!movieName) {
      return;
    }

    async function addSearchMovies() {
      try {
        const { results } = await getSearchMovies(
          movieName.toLowerCase().trim()
        );
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    }

    addSearchMovies();
  }, [movieName]);

  const handleFormSubmit = query => {
    setSearcnParams(query !== '' ? { query } : {});
  };

  return (
    <>
      <SearchForm value={movieName} onSubmit={handleFormSubmit} />
      {movies.length !== 0 ? (
        <MoviesList movies={movies} movieName={movieName} />
      ) : (
        <StartSearch>Start searching for a movie</StartSearch>
      )}
    </>
  );
};

export default Movies;
