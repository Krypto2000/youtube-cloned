import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './base.scss';
import { Provider } from 'react-redux';
import store from './redux/Store';
import { BrowserRouter as Router} from 'react-router-dom';

// Initialize root
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Render the App component
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
    <App />
    </Router>
    </Provider>
  </React.StrictMode>
);
