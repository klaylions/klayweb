import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
// import { Provider } from 'react-redux';
// import store from './store';
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { Web3ContextProvider } from "./hooks/web3/web3-context";
ReactDOM.render(
  <BrowserRouter>
    {/* <Provider store={store}> */}
    <React.StrictMode>
      <Web3ContextProvider>
        <App />
      </Web3ContextProvider>
    </React.StrictMode>
    {/* </Provider> */}
  </BrowserRouter>,
  document.getElementById("root")
);
