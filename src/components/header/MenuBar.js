import React from 'react';
import { LogoweFresh } from '../../assests/Img';
import { Item, Logo, MenuBarContainer, MenuList } from './Styled';

function MenuBar() {
    return (
        <MenuBarContainer>
            <Logo>
            <LogoweFresh />
            </Logo>
            <MenuList>
                <Item>Our App</Item>
                <Item>For Business</Item>
                <Item>About us</Item>
                <Item>English</Item>
            </MenuList>
        </MenuBarContainer>
    );
}

export default MenuBar;