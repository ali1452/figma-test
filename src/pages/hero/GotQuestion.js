import React from 'react';
import { QuestionContainer, QuestionItem, Box, TextArea, BoxLine, Title, Description, BottomBoxItem, BottomBox, CaptionItem } from './Styled';

function GotQuestion() {
    return (
        <QuestionContainer>
            <QuestionItem>Got Question?</QuestionItem>
            <CaptionItem>Perfect, we’ve got answers!</CaptionItem>
            <Box>How to get started?</Box>
            <TextArea>
            <BoxLine>Lorem ipsum dolor sit amet, consectetur adipis</BoxLine>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                 </TextArea>
                 <Box>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Box>
                 <Box>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Box>
                 <Box>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Box>
            <QuestionItem>Still have a question?</QuestionItem>
            <CaptionItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore</CaptionItem>
            <BottomBox>
            <BottomBoxItem>
                <Title>+66 8959888</Title>
                <Description>Lorem ipsum dolor sit amet, consectetur</Description>
            </BottomBoxItem>
            <BottomBoxItem>
                <Title>Support@service.com</Title>
                <Description>Lorem ipsum dolor sit amet, consectetur</Description>
                </BottomBoxItem> 
                </BottomBox>
</QuestionContainer>
    );
}

export default GotQuestion;