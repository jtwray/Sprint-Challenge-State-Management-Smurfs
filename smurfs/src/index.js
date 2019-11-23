import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"
import logger from "redux-logger"
import thunk from 'redux-thunk'

import reducerIndex from './reducers'

import "./index.css";
import App from "./components/App";


const composeEnhancers = window.__REDUX_DEVTOOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducerIndex, composeEnhancers(applyMiddleware(thunk, logger)))


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root"));
