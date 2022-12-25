import styled from '@emotion/styled';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  gap: 5px;
`;
export const CastItem = styled.li`
  text-align: center;
  padding: 5px;
  background-color: #1d2830;
  flex-basis: calc((100% - 50px) / 10);

  :hover {
    background-color: #23313a;
  }
`;
export const CastImg = styled.img`
  width: 170px;
`;
export const TitleName = styled.h2`
  font-size: 20px;
  font-weight: 500;
  color: #75b8bf;
  margin-bottom: 8px;
`;
export const Paragraph = styled.p`
  color: #75b8bf94;
`;
