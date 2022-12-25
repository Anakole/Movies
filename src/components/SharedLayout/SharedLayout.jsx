import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  Navigation,
  StyledLink,
} from './SharedLayout.styled';
import { MdLocalMovies, MdOutlineScreenSearchDesktop } from 'react-icons/md';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Navigation>
          <StyledLink to="/">
            <MdLocalMovies />
            Home
          </StyledLink>
          <StyledLink to="/movies">
            <MdOutlineScreenSearchDesktop />
            Movies
          </StyledLink>
        </Navigation>
      </Header>

      <Suspense fallback={<div>Load page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
