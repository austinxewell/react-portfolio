import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav/index'
import About from './components/About/index'
import Portfolio from './components/Portfolio';



function App() {

  const [currentPage, handlePageChange] = useState('About');

  const renderPage = (currentPage) => {
    switch(currentPage) {
      case 'About':
        return <About />;
        case 'Portfolio':
          return <Portfolio />
    }
  };

  return (
    <body>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
    <div>{renderPage(currentPage)}</div>
    </body>
  );
}

export default App;
