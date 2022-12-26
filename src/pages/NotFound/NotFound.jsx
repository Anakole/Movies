import {
  NotFoundBox,
  NotFoundHome,
  NotFoundText,
  NotFoundTitle,
} from './NotFound.styled';

const NotFound = () => {
  return (
    <NotFoundBox>
      <NotFoundTitle>Not Found</NotFoundTitle>
      <NotFoundText>Try again:</NotFoundText>
      <NotFoundHome to="/">Home</NotFoundHome>
    </NotFoundBox>
  );
};

export default NotFound;
