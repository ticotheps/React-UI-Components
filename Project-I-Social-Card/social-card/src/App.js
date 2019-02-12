import React from 'react';
import ReactDOM from 'react-dom';

import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <HeaderContainer />
      <CardContainer />
      <Footer />
    </div>
  );
};

export default App;
