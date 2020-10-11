import React from 'react';

import { Wrapper, LeftContainer, RightContainer } from './styles';

import Phonelogo from '../../assets/logos/Phone_logo.png';
import WhatsLogo from '../../assets/logos/Whatsapp_logo.png';
import MailLogo from '../../assets/logos/Email_logo.png';

const Contact = () => (
  <Wrapper>
    <LeftContainer>
      <strong>ENTRE EM CONTATO</strong>
      <div>
        <span>
          <img src={Phonelogo} alt="Telefone" width="60px" />
          <p>+55071999080236</p>
        </span>
        <span>
          <img src={WhatsLogo} alt="Telefone" width="60px" />
          <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5571999080236&text=Ola!%20Gostaria%20de%20falar%20com%20voc%C3%AA!">Fale comigo pelo Whatsapp!</a>
        </span>
        <span>
          <img src={MailLogo} alt="Telefone" width="60px" />
          <p>geisweiller@gmail.com</p>
        </span>
      </div>
    </LeftContainer>
    <RightContainer>
      <div>
        <span>
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Sobrenome" />
        </span>
        <span className="message">
          <textarea placeholder="Sua mensagem" />
          <button type="button">Envie sua mensagem!</button>
        </span>
      </div>
    </RightContainer>
  </Wrapper>
);

export default Contact;
