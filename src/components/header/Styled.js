import styled from "styled-components";
import '../../assests/Img/index'

export const HeaderContainer = styled.div`
height: 840px;
`
;
export const CombineContainer = styled.div`
display: block;
@media (min-width: 768px) {
    display: flex;
  }
`;

export const SideContainer = styled.div`
min-width:25%;
color: #FFFFFF;
margin-left: 17.36%;
margin-top: 10.6%;
@media (min-width: 768px) {
    
    
  }

`;
 
export const SideContainerMobile = styled(SideContainer)`
margin-left: 5.36%;
margin-top: 5%;

`;

export const MenuBarContainer = styled.div`
height: 10.7%;
display:flex;
`;
 

export const Logo = styled.div`
width: 7.5%;
height: 4.77%;
margin-left: 17.36%;
margin-right:18%;
margin-top: 1.5%;
`;

export const MenuList = styled.div`
display:flex;
margin-top: 0.4%;
margin-right: 17.3%;
`;

export const Item = styled.div`
margin-top: 4%;
margin-left: 27.23%;
white-space: nowrap;
`;

export const BannerText = styled.div`
font-size: 52px;
line-height: 70px;
`;

export const BannerTextBold = styled.div`
font-size: 52px;
line-height: 70px;
font-weight:600;
margin-bottom: 5%;
`;
export const InputField = styled.input`
width: 60%;
height: 3.5%;
border:none;
padding: 1%;

`;

export const FieldBtn = styled.button`
width: 25%;
height: 5%;
text-align: center;
color: #14243C;
background: #FFD476;
margin-left: 20px;
border:none;
`;

export const TextAvailable = styled.div`
color: #FFFFFF;
margin-top:4%;
margin-bottom:4%;
`;

