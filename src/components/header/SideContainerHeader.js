import React from 'react';
import { AppStore, GooglePlay } from '../../assests/Img';
import { BannerText, BannerTextBold, FieldBtn, InputField, SideContainer, StoreMobileUI, TextAvailable } from './Styled';

function SideContainerHeader() {
    return (
            <SideContainer>
       <BannerText>The Smart Way</BannerText> 
       <BannerTextBold>to Order your Food</BannerTextBold>
       <InputField type="number" name="phonenumber" placeholder='Enter your number'></InputField>
       <FieldBtn>Send</FieldBtn>
       <TextAvailable>Available on</TextAvailable>
       <StoreMobileUI><AppStore/> <GooglePlay/></StoreMobileUI>
       </SideContainer> 
    );
}

export default SideContainerHeader;