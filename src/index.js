import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'index.css';
import registerServiceWorker from 'utils/registerServiceWorker';
import store from 'store';

import App from './routes';

const MyApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<MyApp />, document.getElementById('root'));
registerServiceWorker();
