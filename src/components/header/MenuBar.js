import { FcMenu } from 'react-icons/fc';
import React from 'react';
import { LogoweFresh } from '../../assests/Img';
import { IconMobileUI, Item, Logo, MenuBarContainer, MenuList } from './Styled';

function MenuBar() {
    return (
        <MenuBarContainer>
            <Logo>
            <LogoweFresh />
            </Logo>
            <MenuList>
                <Item onClick={()=>alert('hello world')}>Our App</Item>
                <Item>For Business</Item>
                <Item>About us</Item>
                <Item>English</Item>
            </MenuList>
            <IconMobileUI><FcMenu  fontSize="2.0em" /></IconMobileUI>            
        </MenuBarContainer>
    );
}

export default MenuBar;