import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  </React.StrictMode>
);