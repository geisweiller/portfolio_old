/* eslint-disable max-len */
import React from 'react';

import { Wrapper, UpperContainer, LowerContainer } from './styles';

const About = () => (
  <Wrapper>
    <UpperContainer>
      <span className="title-about">
        <strong>SOBRE MIM</strong>
        <button type="button">Baixe meu CV</button>
      </span>
      <span className="about">
        <p>
          Sou graduando em Ciência da Computação pela UNIFACS e já formado em Engenharia Ambiental, na mesma universidade.
          Atualmente estou focando em dominar a Stack de Frontend atráves de estudos diários. Procuro cada vez mais me desafiar,
          desenvolvendo diferentes aplicações Web e Mobile, utilizando as mais novas tecnologias relacionadas à Stack. Estou sempre
          disposto a novos desafios que façam enriquecer ainda mais meus conhecimentos.
        </p>
      </span>
    </UpperContainer>
    <LowerContainer>
      <span className="experience">
        <p>
          Já trabalhei na construtora Odebrecht como estagiário de Engenharia Ambiental. Tal experiência me permitiu
          aprender sobre o meio empresarial bem como planejar projetos, lidar com prazos, liderar e ser liderado. Também estagiei na empresa BRISA,
          na área de testes de softwares embarcados, onde era preciso apresentar resultados de qualidade e em um curto espaço
          de tempo, pois a entrega dos projetos eram diárias. Ambas as experiências me permitiram aprender à trabalhar em sinergia com
          uma equipe para obter os resultados da melhor forma possível.
        </p>
      </span>
      <span className="title-experience">
        <strong>EXPERIÊNCIA</strong>
      </span>

    </LowerContainer>
  </Wrapper>
);

export default About;
