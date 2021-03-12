import styled from 'styled-components';

export const StyledButton = styled.button`
  --azalea: rgb(181, 25, 119);
  border: 2px solid var(--azalea);
  border-radius: 5px;
  color: var(--azalea);
  font-size: large;
  margin: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const Container = styled.main`
  align-items: center;
  background-color: seashell;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
`;

export const Title = styled.article`
  color: midnightblue;
  font-family: 'Open Sans', sans-serif;
`;

export const ErrorArticle = styled.article`
  --azalea: rgb(181, 25, 119);
  color: var(--azalea);
  font-family: 'Roboto', sans-serif;
`;

export const Para = styled.p`
  margin: 0;
`;