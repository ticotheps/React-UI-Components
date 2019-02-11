import React from 'react';
import ReactDOM from 'react-dom';

import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <HeaderContainer />
      <CardContainer />
    </div>
  );
};

export default App;
