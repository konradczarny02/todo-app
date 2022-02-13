import React from 'react';
import { ReactComponent as Moon } from 'assets/images/moon.svg';
import { ReactComponent as Sun } from 'assets/images/sun.svg';
import { useDispatch, useSelector } from 'react-redux';
import { themeSlice } from 'store/themeSlice';

const ThemeSwitch = () => {
  const themeMode = useSelector((state) => state.themeMode);
  const dispatch = useDispatch();
  return (
    <div>
      {themeMode === 'light' ? (
        <Moon onClick={() => dispatch(themeSlice.actions.change())} />
      ) : (
        <Sun onClick={() => dispatch(themeSlice.actions.change())} />
      )}
    </div>
  );
};

export default ThemeSwitch;
