import styled from 'styled-components';

export const ServiceContainer = styled.div`
height: 167%;
font-size: 42px;
line-height: 70px;
text-align: center;
margin-top: 17.36%;
margin-bottom: 9%;
color: #68BAE3;
`;

export const StoreContainer = styled.div`
background: #CCCCCC;
display: flex;
align-items: center;
`;

export const IconItem = styled.div`
width:220px;
height:240px;

`;
export const QuestionContainer = styled.div`
text-align: center;
margin-top: 17.36%;
margin-bottom: 9%;
width: 100%;
@media(min-width:786px){
margin-top: 17.36%;
margin-bottom: 9%;
height: 167%;
text-align: center;
};
}
`;
 
export const QuestionItem = styled.div`
font-size: 22px;
color: #68BAE3;
margin-top: 30%;
@media(min-width:786px){
    font-size: 42px;
    color: #68BAE3;}
`;
export const CaptionItem = styled.div`
color: #868E95;
padding: 2%;
text-align: center;
@media(min-width: 786px){
    width: 40%;
    margin-left:28%; 
    font-size: 22px;
    text-align: center;}
`;

export const Box = styled.div`
width: 100%;
margin-left: 0;
margin-top: 4%; 
padding: 8px;
text-align: left;
border-bottom: 1px solid #E8E8E8;

@media(min-width:786px){
width: 50%;
border: 1px solid #E8E8E8;
border-radius: 4px;
margin-left:23%;
margin-bottom: 1%;
text-align: left;
padding: 12px;
}
`;

export const BoxLine = styled.div`
color: #68BAE3;
margin-bottom: 1%;
`;

export const TextArea = styled(Box)`
width: 100%;
color: #868E95;
padding: 8px;
margin-left: 0;

@media(min-width: 768px){ 
    width: 50%;
    border: 1px solid #68BAE3;
}
`;

export const BottomBox = styled.div`
diplay: flex;
flex-direction: row;
justify-content:center;
}

@media(min-width:768px){
display: flex;
justify-content:center;}
`;

export const BottomBoxItem = styled.div`
padding: 10%;
padding-top: 18%;
width: 240px;
overflow:auto;
border: 1px solid #E8E8E8;
border-radius: 10px;
margin-left: 8%;
margin-bottom: 2%;
@media(min-width: 786px){
padding: 1%;
padding-top: 4%;
width: 240px;
overflow:auto;
border: 1px solid #E8E8E8;
margin: 2%;
}
`;

export const Title = styled.div`
font-size:22px;
`;

export const Description = styled.div`
font-size: 16px;
`