import React from 'react';
import Routes from './routes';

import './styles/global.css';

import Footer from './components/Footer';

const App = () => (

  <div className="app">
    <Routes />
    <Footer />
  </div>
);

export default App;
