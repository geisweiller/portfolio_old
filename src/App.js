import React from 'react';

import { useSelector } from 'react-redux';
import Routes from './routes';
import GlobalStyle from './styles/global';

import Footer from './components/Footer';

export default function App() {
  const active = useSelector((state) => state.darkMode);

  return (

    <div className="app">
      <GlobalStyle theme={active} />
      <Routes />
      <Footer />
    </div>

  );
}
