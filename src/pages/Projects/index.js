import React from 'react';

import {
  Wrapper, Project, ColumnLeft, ColumnRight, ProjectsContainer,
} from './styles';

const Projects = () => (
  <Wrapper>

    <ProjectsContainer>
      <ColumnLeft>
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
    </ProjectsContainer>
  </Wrapper>

);

export default Projects;
