import React from 'react';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import styled from 'styled-components';
import Header from 'components/organisms/Header/Header';
import ThemeContextProvider from 'providers/ThemeContextProvider';
import Form from 'components/organisms/Form/Form';

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  @media (min-width: 700px) {
    min-width: 630px;
    width: 60%;
  }
`;

function App() {
  return (
    <ThemeContextProvider>
      <GlobalStyles />
      <Container>
        <Header />
        <Form />
      </Container>
    </ThemeContextProvider>
  );
}

export default App;
