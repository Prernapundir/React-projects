const reducer = (state,action)=>{
  if(action.type==='INCREMENT'){
    return state+action.amount;
  } else if(action.type==='DECREMENT'){
    return state-action.amount;
  } else {
    return state;
  }
};

function createStore(reducer) {
  let state=0;
  const getState = () => {
    return state;
  }
  const dispatch = (action) => {
    return state= reducer(state,action);
  }
  return {
    getState,
    dispatch,
  }
};
const store = createStore(reducer);

const incrementAction = {
  type:'INCREMENT',
  amount:5
};

store.dispatch(incrementAction);
console.log(store.getState());
store.dispatch(incrementAction);
console.log(store.getState());


const decrementAction = {
  type:'DECREMENT',
  amount:3
};
store.dispatch(decrementAction);
console.log(store.getState());
