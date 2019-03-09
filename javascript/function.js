/* functions */

function sqr(number){
  return number*number;
};
console.log(sqr(6));

//local variable take precedence over global variable
var foo = "Hello"; //global variable
function fun(){
  var foo ="world";  // local variable
  console.log(foo);
  return "world";
};
fun();

// Nested functions
function sum(a,b){
  function sqr(n){
    return n*n;
  }
  return sqr(a)+sqr(b);
};
console.log(sum(4,5));
