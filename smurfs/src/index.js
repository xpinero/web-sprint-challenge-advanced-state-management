import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import "./index.css";
import App from "./components/App";
import {smurfReducer} from './reducers/smurfReducer';

const store = createStore(smurfReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
