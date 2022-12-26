import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NotFoundBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NotFoundTitle = styled.h1`
  color: #75b8bf;
  text-transform: uppercase;
  font-size: 50px;
`;

export const NotFoundHome = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100px;
  padding: 20px;
  color: #75b8bf;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  background-color: #23313a;

  :hover {
    background-color: #2c3f4b;
  }
`;

export const NotFoundText = styled.p`
  color: #75b8bfb7;
`;
