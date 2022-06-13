import styled from 'styled-components';

export const BodyContainer = styled.div`
background-repeat: no-repeat;
background-size: contain;
background-image: url(./assests/img/header-bg-desktop.svg);
@media (max-width: 768px) {
    background-image: url(./assests/img/header-bg-mobile.svg);
}
`
;