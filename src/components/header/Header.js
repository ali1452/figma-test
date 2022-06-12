import HeaderPhoneImage from './HeaderPhoneImage';
import SideContainerHeader from './SideContainerHeader'; 
import MenuBar from './MenuBar';

import React from 'react';
import { CombineContainer } from './Styled';



function Header() {
    return (
        <React.Fragment>
            <MenuBar />
            <CombineContainer>
            <SideContainerHeader /><HeaderPhoneImage />
            </CombineContainer>
       </React.Fragment>
    );
}

export default Header;