import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/Api';
import {
  Paragraph,
  CastImg,
  CastItem,
  CastList,
  TitleName,
} from './Cast.styled';

const Cast = () => {
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

  return (
    <CastList>
      {cast.map(({ cast_id, name, character, profile_path }) => (
        <CastItem key={cast_id}>
          <CastImg
            src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
            alt={name}
          />
          <TitleName>{name}</TitleName>
          <Paragraph>{character}</Paragraph>
        </CastItem>
      ))}
    </CastList>
  );
};

export default Cast;
