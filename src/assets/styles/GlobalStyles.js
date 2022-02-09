import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 18px;
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Josefin Sans', sans-serif;
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100%;
    background-color: ${({ theme }) => theme.background};
  }

  a, button, input {
    font-family: 'Josefin Sans', sans-serif;
  }
`;
