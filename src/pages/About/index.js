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
          On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by th charms of pleasure of the
          moment, so blinded by desire, tht they cannot foresee the pain and trouble
          that are On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by th charms of pleasure of the

        </p>
      </span>
    </UpperContainer>
    <LowerContainer>
      <span className="experience">
        <p>
          On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by th charms of pleasure of the
          moment, so blinded by desire, tht they cannot foresee the pain and trouble
          that are On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by th charms of pleasure of the

        </p>
      </span>
      <span className="title-experience">
        <strong>EXPERIÊNCIA</strong>
      </span>

    </LowerContainer>
  </Wrapper>
);

export default About;
