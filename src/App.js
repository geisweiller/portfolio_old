import React from 'react';
import Routes from './routes';

import GlobalStyle from './styles/global';

import Footer from './components/Footer';

const App = () => (

  <div className="app">
    <GlobalStyle />
    <Routes />
    <Footer />
  </div>
);

export default App;
