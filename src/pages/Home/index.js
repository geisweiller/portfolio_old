import React from 'react';
import { useSelector } from 'react-redux';
import {
  Wrapper, TextContainer, WelcomeText, ImageContainer,
} from './styles';

import author from '../../assets/img/author.png';

export default function Main() {
  const active = useSelector((state) => state.darkMode);

  return (
    <Wrapper theme={active}>
      <TextContainer>
        <WelcomeText theme={active}>
          <p>Olá, meu nome é</p>
          {' '}
          <strong id="name">ARTHUR GEISWEILLER</strong>
          {' '}
          <p>Bem vindo(a) ao meu portfólio</p>
        </WelcomeText>
      </TextContainer>
      <ImageContainer>
        <img src={author} alt="Arthur Geisweiller" />
      </ImageContainer>
    </Wrapper>
  );
}
