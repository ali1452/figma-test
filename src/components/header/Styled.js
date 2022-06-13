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
  color: #FFFFFF;
  margin-left: 2.36%;
  margin-top: 10.6%;    
@media (min-width: 768px) {
  color: #FFFFFF;
  margin-left: 17.36%;
  margin-top: 10.6%;    
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
display:none;
@media(min-width: 786px){
display:flex;
margin-top: 0.4%;
margin-right: 17.3%;
}
`;

export const IconMobileUI =styled.div`
display: flex;
margin-top: 2.0%;
margin-left: 45%;
@media(min-width: 786px){
  display:none;
}
`;
export const Item = styled.div`
margin-top: 4%;
margin-left: 27.23%;
white-space: nowrap;
cursor: pointer;
`;

export const BannerText = styled.div`
font-size: 22px;
display: flex;
justify-content: center;
line-height: 30px;
@media(min-width: 786px){
font-size: 52px;
line-height: 70px;
display: block;
}
`;

export const BannerTextBold = styled.div`
font-size: 22px;
line-height: 40px;
font-weight:600;
margin-bottom: 5%;
display: flex;
justify-content: center;
@media(min-width: 786px){
font-size: 52px;
line-height: 70px;
font-weight:600;
margin-bottom: 5%;
}
`;
export const InputField = styled.input`
width: 50%;
height: 4.5%;
border:none;
padding: 3%;
border-radius: 4px;
margin:4%;
@media(min-width: 786px){
width: 60%;
height: 3.5%;
border:none;
padding: 1%;
}
`;

export const FieldBtn = styled.button`
width: 30%;
padding: 3%;
color: #14243C;
border-radius: 4px;
background: #FFD476;
text-align: center;
border:none;
@media(min-width:786px){
width: 25%;
height: 5%;
padding: 1%;
text-align: center;
color: #14243C;
background: #FFD476;
margin-left: 2px;
border:none;
}
`;

export const TextAvailable = styled.div`
color: #000;
display: flex;
justify-content: center;
margin-top:4%;
margin-bottom:4%;
@media(min-width: 786px){
display: block;
color: #FFFFFF;
margin-top:4%;
margin-bottom:4%;
}
`;
export const StoreMobileUI =styled.div`
display: flex;
justify-content: center;
@media(min-width:786px){
display: block;

}
`;
