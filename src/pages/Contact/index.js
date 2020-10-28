/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import { useSelector } from 'react-redux';
import { Wrapper, LeftContainer, RightContainer } from './styles';
import './alertStyle.css';

import Phonelogo from '../../assets/logos/Phone_logo.png';
import WhatsLogo from '../../assets/logos/Whatsapp_logo.png';
import MailLogo from '../../assets/logos/Email_logo.png';
import PhonelogoDarkMode from '../../assets/logos/Phone_logo_darkMode.png';
import WhatsLogoDarkMode from '../../assets/logos/Whatsapp_logo_darkMode.png';
import MailLogoDarkMode from '../../assets/logos/Email_logo_darkMode.png';

export default function Contact() {
  const active = useSelector((state) => state.darkMode);
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function formReset() {
    document.getElementById('mail').reset();
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateId = 'template_zphgoso';
    const data = {
      message: feedback,
      name,
      email,
    };

    emailjs.send('gmail', templateId, data, 'user_oxZJfR0n7r4pLJ7Ejn5tj').then(() => {
      swal({
        title: 'Mensagem enviada!',
        text: 'Entrarei em contato em breve!',
        icon: 'success',
        button: 'Fechar',
      });
    }).catch(() => {
      swal({
        title: 'Ops!',
        text: 'Houve um erro, verifique seus dados ou tente novamente mais tarde.',
        icon: 'error',
        button: 'Fechar',
      });
    });
    formReset();
  };

  return (
    <Wrapper theme={active}>
      <LeftContainer theme={active}>
        <strong>ENTRE EM CONTATO</strong>
        <div>
          <span>
            {active === true ? (<img src={PhonelogoDarkMode} alt="Telefone" width="60px" />) : (<img src={Phonelogo} alt="Telefone" width="60px" />)}

            <p>+55071999080236</p>
          </span>
          <span>
            {active === true ? (<img src={WhatsLogoDarkMode} alt="Telefone" width="60px" />) : (<img src={WhatsLogo} alt="Telefone" width="60px" />)}
            <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5571999080236&text=Olá!%20Gostaria%20de%20falar%20com%20voc%C3%AA!">
              Clique aqui e fale comigo pelo Whatsapp!
            </a>
          </span>
          <span>
            {active === true ? (<img src={MailLogoDarkMode} alt="Telefone" width="60px" />) : (<img src={MailLogo} alt="Telefone" width="60px" />)}
            <p>geisweiller@gmail.com</p>
          </span>
        </div>
      </LeftContainer>
      <RightContainer theme={active}>
        <div>
          <form className="mail" id="mail" onSubmit={handleSubmit}>
            <span className="id">
              <input type="text" onChange={(event) => setName(event.target.value)} placeholder="Nome" required />
              <input type="text" onChange={(event) => setEmail(event.target.value)} placeholder="E-mail" required />
            </span>
            <span className="message">
              <textarea onChange={(event) => setFeedback(event.target.value)} placeholder="Sua mensagem" required />
              <button type="submit">Envie sua mensagem!</button>
            </span>
          </form>
        </div>
      </RightContainer>
    </Wrapper>
  );
}
