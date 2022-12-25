import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/Api';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function addMovieCast() {
      try {
        const { cast } = await getMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    }

    addMovieCast();
  }, [movieId]);

  console.log(cast);

  return (
    <ul>
      {cast.map(({ cast_id, name, character, profile_path }) => (
        <li key={cast_id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
            alt={name}
          />
          <h2>{name}</h2>
          <p>{character}</p>
        </li>
      ))}
    </ul>
  );
};
