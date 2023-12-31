import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from 'redux-persist';
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Futura:wght@700&display=swap"
/>;



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
      <App />
      </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

