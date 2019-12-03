import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import HomeContainer from './home/HomeContainer';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={HomeContainer} />
        <Route path='/home' component={HomeContainer} />
      </div>
    </Router>
  );
};

export default App;
