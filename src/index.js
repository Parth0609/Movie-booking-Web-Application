import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom'; // Import BrowserRouter
import React, { Suspense, StrictMode } from "react";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<div />}>
    <StrictMode>
      <Router>
        <App />
      </Router>
    </StrictMode>
  </Suspense>
);

reportWebVitals();
