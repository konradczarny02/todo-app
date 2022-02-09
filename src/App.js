import React from 'react';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

console.log('hello');

function App() {
  return (
    <ThemeProvider theme={theme.dark}>
      <GlobalStyles />
      <h1>Hello</h1>
    </ThemeProvider>
  );
}

export default App;
