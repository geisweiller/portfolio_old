/* eslint-disable react/prop-types */
import React from 'react';
import Switch from '@material-ui/core/Switch';
import { useSelector, useDispatch } from 'react-redux';

import { FooterWrapper } from './styles';

export default function Footer() {
  const active = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  function toggleDarkModeOff() {
    dispatch({ type: 'SET_DARKMODE_OFF', darkMode: false });
  }

  function toggleDarkModeOn() {
    dispatch({ type: 'SET_DARKMODE_ON', darkMode: true });
  }

  function toggleDarkMode() {
    if (active === false) {
      toggleDarkModeOn();
    } else {
      toggleDarkModeOff();
    }
  }
  return (
    <FooterWrapper theme={active}>
      <div className="switch">
        <Switch
          color="default"
          onChange={toggleDarkMode}
        />
        <p>Modo escuro</p>
      </div>
      <nav>
        <a href="https://drive.google.com/uc?export=download&id=1et02y71sWvNlofGHYrUT0Y_7EPVfBluB">Baixe meu CV</a>
        <a href="https://www.linkedin.com/in/arthur-geisweiller-414587b7/" alt="Linkedin">Linkedin</a>
        <a href="https://www.facebook.com/arthurgeisweiller/" alt="Facebook">Facebook</a>
        <a href="https://www.instagram.com/arthurgeisweiller" alt="Instagram">Instagram</a>
      </nav>
    </FooterWrapper>
  );
}
