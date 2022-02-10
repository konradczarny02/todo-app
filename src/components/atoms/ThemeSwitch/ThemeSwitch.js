import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeContextProvider';
import { ReactComponent as Moon } from 'assets/images/moon.svg';
import { ReactComponent as Sun } from 'assets/images/sun.svg';

const ThemeSwitch = () => {
  const { themeMode, handleChangeTheme } = useContext(ThemeContext);
  console.log(themeMode);
  return <div>{themeMode === 'light' ? <Moon onClick={handleChangeTheme} /> : <Sun onClick={handleChangeTheme} />}</div>;
};

export default ThemeSwitch;
