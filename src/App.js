import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// component imports
import Nav from './components/Nav/index'
import Professional from './components/Professional/index';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Personal from './components/Personal';

function App() {
  const [currentPage, handlePageChange] = useState('Professional');

  const renderPage = (currentPage) => {
    switch (currentPage) {
      case 'Professional':
        return <Professional />;
      case 'Personal':
        return <Personal />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;

    }
  };

  return (
    <body>
      <Router>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        <div>
          <Switch>
            <Route exact path='/' component={Professional} />
            <Route exact path='/personal' component={Personal} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/resume' component={Resume} />

            <Route component={Professional} />
          </Switch>
        </div>
      </Router>
    </body>
  );
}

export default App;