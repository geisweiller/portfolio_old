import React from 'react';
import { Link } from 'react-router-dom';
// import MenuSharpIcon from '@material-ui/icons/MenuSharp';

import { HeaderWrapper } from './styles';
import logo from '../../assets/logos/AG_logo.png';

const Header = () => (
  <HeaderWrapper>
    <nav className="nav-logo">
      <Link to="/">
        <img src={logo} alt="AG logo" width="100px" />
      </Link>
    </nav>
    <nav className="nav-links">
      <Link to="/about">SOBRE MIM</Link>
      <Link to="/projects">PROJETOS</Link>
      <Link to="/skills">HABILIDADES</Link>
      <Link to="/contact">CONTATO</Link>
    </nav>
    <aside className="menu">
      {/* <button type="button"><MenuSharpIcon /></button> */}
    </aside>
  </HeaderWrapper>
);

export default Header;
