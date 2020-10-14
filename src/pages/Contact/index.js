/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';

import { Wrapper, LeftContainer, RightContainer } from './styles';
import './alertStyle.css';

import Phonelogo from '../../assets/logos/Phone_logo.png';
import WhatsLogo from '../../assets/logos/Whatsapp_logo.png';
import MailLogo from '../../assets/logos/Email_logo.png';

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      feedback: '',
      name: '',
      email: '',
    };
  }

  nameChange = (event) => {
    this.setState({ name: event.target.value });
  }

  emailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  messageChange = (event) => {
    this.setState({ feedback: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { feedback, name, email } = this.state;
    const templateId = 'template_zphgoso';

    this.sendFeedback(templateId, {
      message: feedback,
      name,
      email,
    });

    this.formReset();
  }

  sendFeedback = (templateId, data) => {
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
  }

  formReset() {
    document.getElementById('mail').reset();
  }

  render() {
    return (
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
              <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5571999080236&text=Olá!%20Gostaria%20de%20falar%20com%20voc%C3%AA!">
                Clique aqui e fale comigo pelo Whatsapp!
              </a>
            </span>
            <span>
              <img src={MailLogo} alt="Telefone" width="60px" />
              <p>geisweiller@gmail.com</p>
            </span>
          </div>
        </LeftContainer>
        <RightContainer>
          <div>
            <form className="mail" id="mail" onSubmit={this.handleSubmit}>
              <span className="id">
                <input type="text" onChange={this.nameChange} placeholder="Nome" required />
                <input type="text" onChange={this.emailChange} placeholder="E-mail" required />
              </span>
              <span className="message">
                <textarea onChange={this.messageChange} placeholder="Sua mensagem" required />
                <button type="submit">Envie sua mensagem!</button>
              </span>
            </form>
          </div>
        </RightContainer>
      </Wrapper>
    );
  }
}
