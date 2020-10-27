import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';

import { FooterWrapper } from './styles';

export default function Footer() {
  const [darkMode, setDarkMode] = useState(false);

  function darkModeFunction() {
    if (darkMode === false) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }

  return (
    <FooterWrapper>
      <Switch
        color="default"
        onChange={darkModeFunction}
      />
      <nav>
        <a href="https://drive.google.com/uc?export=download&id=1et02y71sWvNlofGHYrUT0Y_7EPVfBluB">Baixe meu CV</a>
        <a href="https://www.linkedin.com/in/arthur-geisweiller-414587b7/" alt="Linkedin">Linkedin</a>
        <a href="https://www.facebook.com/arthurgeisweiller/" alt="Facebook">Facebook</a>
        <a href="https://www.instagram.com/arthurgeisweiller" alt="Instagram">Instagram</a>
      </nav>
    </FooterWrapper>
  );
}
