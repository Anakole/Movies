import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const BackLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  padding: 10px;
  background: #1d2830;
  text-decoration: none;
  text-transform: uppercase;
  color: #75b8bf;
  margin: 15px 0;

  & svg {
    width: 1.5em;
    height: 1.5em;
  }
`;

export const DetailsContainer = styled.div`
  margin: 0 60px;
  height: 100vh;
`;

export const DetailsImg = styled.img`
  width: 500px;
  margin-right: 40px;
`;

export const Details = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
`;

export const DetailsTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const DetailsTr = styled.tr`
  font-size: 20px;
`;

export const DetailsTitle = styled.h1`
  background: #1d2830;
  color: #75b8bf;
  margin: 0;
  padding: 20px;
  text-align: left;
`;

export const DetailsOptions = styled.td`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100px;
  color: #75b8bf94;
  font-weight: 500;
  padding: 20px;
`;

export const DetailsText = styled.td`
  color: #75b8bf;
  font-weight: 400;
  padding: 20px;
`;

export const DetailsNav = styled.nav`
  display: flex;
  gap: 16px;
  margin: 30px 0;
`;

export const DetailsLink = styled(NavLink)`
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
`;
