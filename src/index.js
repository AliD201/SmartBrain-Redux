import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App-Redux';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, combineReducers } from 'redux'
import {Provider  } from 'react-redux'
import { connect } from 'react-redux'
import {createLogger } from 'redux-logger'
import {inputImage, route, signIn} from './Redux/reducers'

// Redux " store part "
// get a reducer inside the store
// collecting reducers in an Object
const rootReducer = combineReducers({inputImage, route, signIn})
const logger = createLogger();
// order matter here
const store = createStore(rootReducer,applyMiddleware(logger))
// pass the provider the store so it will be the holder of the big picture

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
