/* eslint-disable max-len */
import React from 'react';

import { Wrapper, UpperContainer, LowerContainer } from './styles';

const About = () => (
  <Wrapper>
    <UpperContainer>
      <span className="title-about">
        <strong>SOBRE MIM</strong>
        <a href="https://drive.google.com/uc?export=download&id=1et02y71sWvNlofGHYrUT0Y_7EPVfBluB">Baixe meu CV</a>
      </span>
      <span className="about">
        <p>
          Graduando em Ciência da Computação pela UNIFACS e formado em Engenharia Ambiental(2016.2), na mesma universidade.
          Atualmente estou focando em dominar a Stack de Frontend atráves de estudos diários. Procuro cada vez mais me desafiar,
          desenvolvendo diferentes aplicações Web e Mobile, utilizando as mais novas tecnologias relacionadas à Stack. Estou sempre
          disposto a novos desafios que façam enriquecer ainda mais meus conhecimentos.
        </p>
      </span>
    </UpperContainer>
    <LowerContainer>
      <span className="experience">
        <p>
          Estagiário de Engenharia Ambiental - Construtora Odebrecht. Tal experiência me permitiu
          aprender sobre o meio empresarial bem como planejar projetos, gerenciamento de tempo, liderar e ser liderado.
          <br />
          <br />
          Estágiario de Testes de Software - BRISA.
          Trabalhei em um ambiente onde era preciso apresentar resultados de qualidade e em um curto espaço
          de tempo, pois a entrega dos projetos eram diárias. Ambas as experiências me permitiram aprender à trabalhar em sinergia com
          equipes no âmbito de resolução de problemas da melhor forma possível.
        </p>
      </span>
      <span className="title-experience">
        <strong>EXPERIÊNCIA</strong>
      </span>

    </LowerContainer>
  </Wrapper>
);

export default About;
