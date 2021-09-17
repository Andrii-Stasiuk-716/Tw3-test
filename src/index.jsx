import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { builder } from '@builder.io/react';
import { App } from './App';

builder.init('b1f8c11006604e4a9ddf2975c3f19881');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
