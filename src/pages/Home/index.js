import React from 'react';

import {
  Wrapper, TextContainer, WelcomeText, ImageContainer,
} from './styles';

import author from '../../assets/img/author.png';

const Main = () => (
  <Wrapper>
    <TextContainer>
      <WelcomeText>
        <p>Olá, meu nome é</p>
        {' '}
        <strong>ARTHUR GEISWEILLER</strong>
        {' '}
        <p>Bem vindo(a) ao meu portfólio</p>
      </WelcomeText>
    </TextContainer>
    <ImageContainer>
      <img src={author} alt="Arthur Geisweiller" />
    </ImageContainer>
  </Wrapper>
);

export default Main;
