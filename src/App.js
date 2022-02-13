import React from 'react';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import Header from 'components/organisms/Header/Header';
import Form from 'components/organisms/Form/Form';
import TodoList from 'components/organisms/TodoList/TodoList';
import { useSelector } from 'react-redux';

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
  const themeMode = useSelector((state) => state.themeMode);
  return (
    <ThemeProvider theme={themeMode === 'light' ? theme.light : theme.dark}>
      <GlobalStyles />
      <Container>
        <Header />
        <Form />
        <TodoList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
