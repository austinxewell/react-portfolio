import React from 'react';
import './App.css';
import Nav from './components/Nav/index'
import About from './components/About/index'
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
      <Nav />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
