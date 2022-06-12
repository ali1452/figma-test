import React from 'react';
import { HeaderPhone } from '../../assests/Img';
import { SideContainer, SideContainerMobile } from './Styled';

function HeaderPhoneImage(props) {
    return (
        <SideContainerMobile>
            <HeaderPhone />
        </SideContainerMobile>
    );
}

export default HeaderPhoneImage;