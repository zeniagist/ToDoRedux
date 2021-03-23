import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import todos from './reducers';
import { addTodo, toggleTodo, deleteTodo } from './actions';

// created store
const store = createStore(todos);

console.log('Initial State', store.getState());

// Dispatch add To-Do actions
store.dispatch(addTodo('Dispatch my first action'));
console.log('State after adding first todo', store.getState());

store.dispatch(addTodo('Take 2 hours rest'));
console.log('State after adding second todo', store.getState());

store.dispatch(addTodo('Resume learning about Redux'));
console.log('State after adding third todo', store.getState());

// Dispatch toggle To-Do actions
store.dispatch(toggleTodo(0));
console.log('State after toggling first todo', store.getState());

store.dispatch(toggleTodo(1));
console.log('State after toggling second todo', store.getState());

store.dispatch(toggleTodo(2));
console.log('State after toggling third todo', store.getState());

// Dispatch delete To-Do actions
store.dispatch(deleteTodo(0));
console.log('State after deleting first todo', store.getState());

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();