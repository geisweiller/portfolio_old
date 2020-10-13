/* eslint-disable max-len */
import React from 'react';

import { Wrapper, TechContainer, Tech } from './styles';
import logoReact from '../../assets/logos/React_logo.png';
import logoJs from '../../assets/logos/Js_logo.png';
import logoNode from '../../assets/logos/Node_logo.png';
import logoUX from '../../assets/logos/UX_logo.png';

const Skills = () => (
  <Wrapper>
    <TechContainer>
      <Tech>
        <div>
          <img src={logoJs} alt="React" width="100px" />
          <strong>
            JavaScript
          </strong>
        </div>
        <div>
          <p>
            Possuo conhecimento avançado nessa linguagem, bem como os conceitos trazidos pelo
            ES6+, como: Webpack, Classes, Arrow functions, Desestruturação, Import/Export, Async/Await, Rest/Spread.
          </p>
        </div>
      </Tech>
      <Tech>
        <div>
          <img src={logoReact} alt="React" width="100px" />
          <strong>
            ReactJs e React Native
          </strong>
        </div>
        <div>
          <p>
            Meu maior foco de aprendizado. Desenvolvi esse portfólio atráves do ReactJs justamente para apresentar
            meu conhecimento da ferramenta, utilizei conceitos de SPA e Stateful Components. A cada dia procuro aprender mais sobre essa biblioteca que torna mais simples
            o desenvolvimento de interfaces Web e Mobile.
          </p>
        </div>
      </Tech>
      <Tech>
        <div>
          <img src={logoNode} alt="React" width="100px" />
          <strong>
            NodeJs
          </strong>
        </div>
        <div>
          <p>
            Apesar de não ser o foco da Stack de Frontend, possuo conhecimento básico nessa tecnologia.
            Já desenvolvi algumas aplicações utilizando o NodeJs.
          </p>
        </div>
      </Tech>
      <Tech>
        <div>
          <img src={logoUX} alt="React" width="100px" />
          <strong>
            UI/UX
          </strong>
        </div>
        <div>
          <p>
            Por ser um desenvolvedor Frontend, me interesso bastante pelos conceitos UI/UX.
            Já participei de cursos referentes ao assunto, para entender melhor o processo e
            entregar resultados mais satisfatórios.
          </p>
        </div>
      </Tech>
    </TechContainer>
  </Wrapper>
);

export default Skills;
