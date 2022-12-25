import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 0 30px 30px 30px;
`;

export const Header = styled.header`
  height: 60px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
`;

export const StyledLink = styled(NavLink)`
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

  :hover {
    background-color: #23313a;
  }
`;
