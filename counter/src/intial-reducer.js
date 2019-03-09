const reducer = (state,action)=>{
  if(action.type==='INCREMENT'){
    return state+action.amount;
  } else if(action.type==='DECREMENT'){
    return state-action.amount;
  } else {
    return state;
  }
};

const incrementAction = {
  type: 'INCREMENT',
  amount:3
};

console.log(reducer(7,incrementAction)); //->8
console.log(reducer(4,incrementAction)); //->5
console.log(reducer(1,incrementAction)); //->2

const unknownAction = {
  type: 'UNKNOWN'
};

console.log(reducer(7,unknownAction)); //->7
console.log(reducer(4,unknownAction)); //->4
console.log(reducer(1,unknownAction)); //->1

const decrementAction = {
  type:'DECREMENT',
  amount:3
};

console.log(reducer(7,decrementAction)); //->6
console.log(reducer(4,decrementAction)); //->3
console.log(reducer(1,decrementAction)); //->0
