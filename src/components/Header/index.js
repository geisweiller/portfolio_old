import React from 'react';
import { Link } from 'react-router-dom';
// import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import { useSelector } from 'react-redux';
import { HeaderWrapper } from './styles';
import logo from '../../assets/logos/AG_logo.png';
import logoDark from '../../assets/logos/AG_logo_darkMode.png';

export default function Header() {
  const active = useSelector((state) => state.darkMode);

  return (
    <HeaderWrapper theme={active}>
      <nav className="nav-logo">
        <Link to="/">
          { active === true ? (

            (
              <img src={logoDark} alt="AG logo" width="100px" />)
          ) : (

            <img src={logo} alt="AG logo" width="100px" />
          )}

        </Link>
      </nav>
      <nav className="nav-links">
        <Link to="/about">SOBRE MIM</Link>
        <Link to="/projects">PROJETOS</Link>
        <Link to="/skills">HABILIDADES</Link>
        <Link to="/contact">CONTATO</Link>
      </nav>
      <aside className="menu" />
    </HeaderWrapper>
  );
}
