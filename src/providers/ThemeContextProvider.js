import React, { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

export const ThemeContext = createContext({});

const ThemeContextProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');
  const handleChangeTheme = () => {
    if (themeMode === 'light') {
      setThemeMode('dark');
    } else {
      setThemeMode('light');
    }
  };
  return (
    <ThemeContext.Provider value={{ themeMode, handleChangeTheme }}>
      <ThemeProvider theme={themeMode === 'light' ? theme.light : theme.dark}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
