import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


import './index.css';
import App from './components/App';
import rootReducer from './reducers';


// This is the curried form of function logger(obj, next, action)
//This will contain 2 props. Dispatch prop and getState prop. We are decoupling them here 
// const logger = function({dispatch, getState}){
//   return function (next){
//     return function (action){
//       //middleware code
//       console.log('ACTION_TYPE =', action.type)
//       next(action)
//     }
//   }
// }
//var f = () => () => {return 1};
//f()()

const logger = ({dispatch, getState}) => (next) => (action) => {
  //logger code
  if (typeof action !== 'function'){
    console.log('ACTION_TYPE =', action.type)
  }
  next(action)
}

//Because we are returned a function instead of an object in the action file. So  we use thunk middleware
// const thunk = ({ dispatch, getState}) => (next) => (action) => {
//   if(typeof action === 'function' ){
//     action(dispatch);
//     return;
//   }
//   next(action);
// }



const store = createStore(rootReducer, applyMiddleware(logger, thunk));
console.log('store', store);

// console.log('Before State', store.getState());
// //Action object
// //We can send actions to our store using dispatch func
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{ name: 'Superman' }]
// })
// console.log('After State', store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store = {store} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
