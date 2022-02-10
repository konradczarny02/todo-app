import { createGlobalStyle } from 'styled-components';
import bgDark from 'assets/images/bgDark.png';
import bgLight from 'assets/images/bgLight.png';
import bgDarkMobile from 'assets/images/bgDarkMobile.png';
import bgLightMobile from 'assets/images/bgLightMobile.png';

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
    background-repeat: no-repeat;
    background-color: ${({ theme }) => theme.background};
    background-image: url(${({ theme }) => {
      if (theme.bgImg === 'bgLight') {
        return bgLightMobile;
      } else {
        return bgDarkMobile;
      }
    }});
    background-size: contain;

    @media (min-width: 700px) {
      background-image: url(${({ theme }) => {
        if (theme.bgImg === 'bgLight') {
          return bgLight;
        } else {
          return bgDark;
        }
      }});
    }
  }

  a, button, input {
    font-family: 'Josefin Sans', sans-serif;
  }
`;
