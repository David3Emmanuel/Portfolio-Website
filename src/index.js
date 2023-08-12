import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import 'material-icons/iconfont/material-icons.css';

import App from './App';

const container = document.getElementById('root');
const root = container.hasChildNodes() ? ReactDOMClient.hydrateRoot(container) : ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);