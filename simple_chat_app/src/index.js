import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();

function createStore(reducer,initialState){
  let state= initialState;
  const listeners = [];
  const subscribe = (listener) => (
    listeners.push(listener)
  );
  const getState = () => (state);
  const dispatch = (action) => {
     state = reducer(state,action);
     listeners.forEach(l => l());

  };
  return {
    subscribe,
    getState,
    dispatch,
  };
};



function reducer(state,action){
  if(action.type === 'ADD MESSAGE'){
    return {
      messages:state.messages.concat(action.message),
    };
  } else if(action.type==='DELETE MESSAGE') {
    return {
      messages:[
        ...state.messages.slice(0,action.index),
        ...state.messages.slice(action.index+1 ,state.messages.length)
      ]
    };
  } else {
    return state;
  }
};

const initialState = { messages:[] };

const store = createStore(reducer,initialState);

const listener = () => {
console.log('Current state: ');
console.log(store.getState());
};

store.subscribe(listener);

const addMessageAction1 = {
  type:'ADD MESSAGE',
  message:'How does it look,Neil?',
};

store.dispatch(addMessageAction1);
//const stateV1 = store.getState();

const addMessageAction2 = {
  type:'ADD MESSAGE',
  message:'Looking good',
};

store.dispatch(addMessageAction2);
//const stateV2 = store.getState();


const deleteMessageAction = {
  type:'DELETE MESSAGE',
  index:0,
};

store.dispatch(deleteMessageAction);
//const stateV3 = store.getState();

//console.log(stateV1);
//console.log(stateV2);
//console.log(stateV3);
