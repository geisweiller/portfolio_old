import React from 'react';

import { Wrapper, TechContainer, Tech } from './styles';
import logo from '../../assets/logos/React_logo.png';

const Skills = () => (
  <Wrapper>
    <TechContainer>
      <Tech>
        <img src={logo} alt="React" width="100px" />
        <strong>
          ReactJs
        </strong>
        <p>
          Utilizo esse framework para construções de aplicações Web.
        </p>
      </Tech>
      <Tech>
        <img src={logo} alt="React" width="100px" />
        <strong>
          ReactJs
        </strong>
        <p>
          Utilizo esse framework para construções de aplicações Web.
        </p>
      </Tech>
      <Tech>
        <img src={logo} alt="React" width="100px" />
        <strong>
          ReactJs
        </strong>
        <p>
          Utilizo esse framework para construções de aplicações Web.
        </p>
      </Tech>
      <Tech>
        <img src={logo} alt="React" width="100px" />
        <strong>
          ReactJs
        </strong>
        <p>
          Utilizo esse framework para construções de aplicações Web.
        </p>
      </Tech>
    </TechContainer>
  </Wrapper>
);

export default Skills;
