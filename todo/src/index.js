import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import {toDosuserReduser, userReduser} from "./Store/Redousers";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(combineReducers({user:userReduser,todos:toDosuserReduser}),composeEnhancers(
  applyMiddleware(thunk)
));
ReactDOM.render(
  <React.StrictMode>
 <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>‏
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
