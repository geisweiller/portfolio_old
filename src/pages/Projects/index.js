import React from 'react';

import {
  Wrapper, Project, ColumnLeft, ColumnRight,
} from './styles';

const Projects = () => (
  <Wrapper>

    <ColumnLeft>
      <Project>
        <strong>Sereia-Tattoo-Web-front-backend</strong>
        <p>Loja virtual utilizando ReactJs + Redux + Saga</p>
      </Project>
      <Project>
        <strong>Repositório</strong>
        <p>Loja virtual utilizando ReactJs + Redux + Saga</p>
      </Project>
      <Project>
        <strong>Repositório</strong>
        <p>Loja virtual utilizando ReactJs + Redux + Saga</p>
      </Project>
    </ColumnLeft>
    <ColumnRight>
      <Project>
        <strong>Repositório</strong>
        <p>Loja virtual utilizando ReactJs + Redux + Saga</p>
      </Project>
      <Project>
        <strong>Repositório</strong>
        <p>Loja virtual utilizando ReactJs + Redux + Saga</p>
      </Project>
      <Project>
        <strong>Repositório</strong>
        <p>Loja virtual utilizando ReactJs + Redux + Saga</p>
      </Project>
    </ColumnRight>

  </Wrapper>

);

export default Projects;
