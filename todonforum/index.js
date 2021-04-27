import React from 'react';//main library
import ReactDOM from 'react-dom';//react support library to do  dom operarions
import './index.css';//main css file
import App from './App';//importing main app component to this file
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from './store/store';
//render :show it in html component in html id
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
