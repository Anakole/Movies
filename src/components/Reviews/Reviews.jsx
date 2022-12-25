import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/Api';
import { ReviewsItem } from './Reviews.styled';
import { Paragraph, TitleName } from 'components/Cast/Cast.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function addMovieReviews() {
      try {
        const { results } = await getMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        console.log(error);
      }
    }

    addMovieReviews();
  }, [movieId]);

  return (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <ReviewsItem key={id}>
          <TitleName>Author: {author}</TitleName>
          <Paragraph>{content}</Paragraph>
        </ReviewsItem>
      ))}
    </ul>
  );
};

export default Reviews;
