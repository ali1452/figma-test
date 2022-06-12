import styled from 'styled-components';

export const MainContainer = styled.div`
width: 100%;
background: #F2F9FF;
`
;

export const Container = styled.div`
padding-top: 4%;
padding-bottom: 4%;
margin-right: 15px;
margin-left: 15px;
@media (min-width: 768px) {
    display: flex;
    margin-left: 15%;
    margin-right: 15%;
  }
`
;

export const Divider = styled.div`
mix-blend-mode: normal;
opacity: 0.1;
border: 1px solid #868E95
`
;

export const CopyRight = styled.div`
height: 30px;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 30px;
color: #868E95;
margin-left: 15%;
`
;

export const Item = styled.div`
width: 120px;
margin-right: 80px;
margin-bottom: 40px;
`;

export const Title = styled.div`
font-weight: 600;
font-size: 16px;
line-height: 24px;
margin-bottom: 10px;
text-transform: uppercase;
`;

export const Description = styled.div`
font-weight: 400;
font-size: 16px;
line-height: 30px;
color: #868E95;
`;
