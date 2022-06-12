import React from 'react';
import { Store } from '../../assests/Img';
import { Grocery } from '../../assests/Img';
import { Cafe } from '../../assests/Img';
import { Food } from '../../assests/Img';
import { ServiceContainer,StoreContainer,IconItem } from './Styled';

function Services() {
    return (
        <>
        <ServiceContainer>
            We’ve more services
        </ServiceContainer>
        <StoreContainer>
        <IconItem><Store/></IconItem>
        <IconItem><Grocery/></IconItem>
        <IconItem><Cafe/></IconItem>
        <IconItem><Food/></IconItem>
        </StoreContainer>
        </>
    );
}

export default Services;