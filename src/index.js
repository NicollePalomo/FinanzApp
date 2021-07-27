import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "@fortawesome/fontawesome-free/css/all.min.css";


ReactDOM.render(
  <BrowserRouter>
  
      <App />
  </BrowserRouter>,
  document.getElementById("root")
 );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
