import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
  gap: 5px;
`;

export const Input = styled.input`
  color: #75b8bf;
  font-size: 16px;
  background: #11181c;
  border: 2px solid #1d2830;
  padding: 10px;
  width: 400px;
  height: 20px;
`;

export const SearchButton = styled.button`
  background: #1d2830;
  color: #75b8bf;
  border: none;
  width: 60px;
  height: 44px;

  & svg {
    width: 1.5em;
    height: 1.5em;
  }

  :hover {
    background-color: #23313a;
  }
`;
