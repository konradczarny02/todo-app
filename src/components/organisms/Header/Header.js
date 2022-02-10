import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import ThemeSwitch from 'components/atoms/ThemeSwitch/ThemeSwitch';
import { HeaderWrapper } from 'components/organisms/Header/Header.styles';

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>TODO</Title>
      <ThemeSwitch />
    </HeaderWrapper>
  );
};

export default Header;
