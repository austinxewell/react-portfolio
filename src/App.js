import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav/index'
import About from './components/About/index'
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';



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
    <Footer />
    </body>
  );
}

export default App;