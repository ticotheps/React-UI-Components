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
      <a className="App-CardContainer-anchor" href="https://www.reactjs.org">
        <CardContainer />
      </a>
      
      <Footer />
    </div>
  );
};

export default App;
