import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import '/node_modules/bootstrap/dist/js/bootstrap';
import './index.css';

const store = configureStore({
  reducer: {}
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <ScrollToTop />
        <Provider store={store}>
          <App />
        </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
