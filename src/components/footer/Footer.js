import { LogoweFresh, GooglePlay, AppStore } from "../../assests/Img";

import { MainContainer, Item, CopyRight, Title, Description, Container, Divider } from './Styled';
import React from 'react';

function Footer() {
    return (
        <>
            <MainContainer>
                <Container>
                    <Item>
                        <LogoweFresh />
                    </Item>
                    <Item>
                        <Title>Service Area</Title>
                        <Description>Lorem ipsum dol Psum dolor Sum dolor Lorem ipsum</Description>
                    </Item>
                    <Item>
                        <Title>About</Title>
                        <Description>Story of WeFresh Read our blog Sign up to deliver</Description>
                    </Item>
                    <Item>
                        <Title>Help</Title>
                        <Description>Help centre Read FAQs Community Security</Description>
                    </Item>
                    <Item>
                        <Title>Available on</Title>
                        <Description>
                            <AppStore /> <GooglePlay/>
                        </Description>
                    </Item>
                </Container>
                <Divider />
                <CopyRight>© 2020  WeFresh.  All Rights Reserved.</CopyRight>

            </MainContainer>
        </>
    );
}

export default Footer;