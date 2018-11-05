/* This */
console.log(this);

console.log(this === window);// this is equal to window

this.a =6;
console.log(window.a);

// this in stict mode
//not equals to window
function foo(){
  "use strict";
  return this;
}
console.log(foo()===window);

//this in arrow and normal function
var obj ={
  normalFunc:function(){
    console.log(this===obj);
  },
  arrowFunc:()=>{
    console.log(this===obj);
  }
};
obj.normalFunc();
obj.arrowFunc();//in Arrow function this ===window

//here this is bind to the object
var fun={
  prop:45,
  foo:function(){
    console.log(this.prop);
  }
};
fun.foo();

function independent(){
  return this.prop;
};
fun.bar = independent;
console.log(fun.bar());
