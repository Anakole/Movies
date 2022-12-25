import { SearchForm } from 'components/SearchForm/SearchForm';
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'services/Api';

export const Movies = () => {
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
    <div>
      <SearchForm value={movieName} onSubmit={handleFormSubmit} />
      <ul>
        {movies.map(({ poster_path, id, original_title }) => (
          <li key={id}>
            <Link
              to={`/movies/${id}`}
              state={{ from: `/movies?query=${movieName}` }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={original_title}
              />
              <h2>{original_title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
