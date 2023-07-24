import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { Phonebook } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Phonebook />
  </React.StrictMode>
);
