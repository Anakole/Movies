import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const TrendsTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: start;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 2px;
  color: #75b8bf;
  margin: 20px;
`;

export const ListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  gap: 5px;
`;

export const MovieCard = styled.li`
  padding: 5px;
  background-color: #1d2830;
  flex-basis: calc((100% - 50px) / 10);

  :hover {
    background-color: #23313a;
  }
`;

export const PosterStyled = styled.img`
  width: 289px;
  height: 433px;
`;

export const MovieName = styled.h2`
  font-size: 16px;
  line-height: 1.6;
  font-weight: 500;
  color: #75b8bf;
`;

export const StyledListLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;
