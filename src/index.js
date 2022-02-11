import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import { LoadProvider } from "./contexts/Load";
import { CurrentUserProvider } from "./contexts/CurrentUser";

ReactDOM.render(
  <LoadProvider>
    <CurrentUserProvider>
      <App />
    </CurrentUserProvider>
  </LoadProvider>,
  document.getElementById("root")
);