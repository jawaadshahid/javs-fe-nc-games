import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import { UserProvider } from "./contexts/User";
import { LoadProvider } from "./contexts/Load";

ReactDOM.render(
  <LoadProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </LoadProvider>,
  document.getElementById("root")
);