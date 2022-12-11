import React, { createContext } from 'react';
import {Provider} from 'react-redux';
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

// export const StoreContext = createContext();
// //We will ass store to the provider
// console.log('StoreContext', StoreContext); 

// class Provider extends React.Component {
//   render() {
//     const {store} = this.props;
//     return(
//     <StoreContext.Provider value={store}>
//       {this.props.children}  
//     </StoreContext.Provider>
//     ) ////It will render the App component in Provider tag
//   }
// }


// const connectedAppComponent = connect(callback)(App);
// export function connect (callback) {
//   return function (Component) { //We have to connect this component to the store
//     class ConnectedComponent extends React.Component {
//       constructor(props) {
//         super(props);
//         this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());//To prevent memory waste
//       }
      
//       componentWillUnmount() {
//         this.unsubscribe();
//       }

//       render () {
//         const {store} = this.props;
//         const state = store.getState();
//         const dataToBePassedAsProps = callback(state);  //callback gives the props which the component needs
//         return <Component 
//         {...dataToBePassedAsProps} 
//         dispatch={store.dispatch} 
//         />
//       }
//     };
//     //We use the wrapper here because we have to subscribe the component to the store
//     class ConnectedComponentWrapper extends React.Component{
//       render() {
//         return( 
//         <StoreContext.Consumer>
//           {store => <ConnectedComponent store={store} /> }
//         </StoreContext.Consumer>
//       );
//     }
//   }
//     return ConnectedComponentWrapper;  
  
//   };
// }

// console.log('Before State', store.getState());
// //Action object
// //We can send actions to our store using dispatch func
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{ name: 'Superman' }]
// })
// console.log('After State', store.getState());

ReactDOM.render(
  <Provider store={store} >
    <App   />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
