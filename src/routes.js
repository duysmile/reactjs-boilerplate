import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from 'pages/Home';
import Analysis from 'pages/Analysis';

const App = (_props) => {
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/analysis/:playStoreId' component={Analysis} />
    </div>
  </Router>
};

export default App;
