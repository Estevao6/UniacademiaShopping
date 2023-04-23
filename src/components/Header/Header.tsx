import React, { FC } from 'react';
import { HeaderWrapper } from './Header.styled';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
 <HeaderWrapper data-testid="Header">
    Header Component
 </HeaderWrapper>
);

export default Header;
