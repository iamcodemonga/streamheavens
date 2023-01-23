import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import '/node_modules/bootstrap/dist/js/bootstrap';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <ScrollToTop />
        <App />
    </BrowserRouter>
  </React.StrictMode>
);
