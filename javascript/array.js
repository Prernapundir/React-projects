// Array basics
var arr = ["a","b","c","d"];
console.log(arr);

//array methods
//push
arr.push("e");
console.log(arr);

//pop
console.log(arr.pop());
console.log(arr);

//concatanation two arrays
var arr2=["e","f"];
console.log(arr.concat(arr2));

//join()---join the array and return the string
console.log(arr.join("!!"));

//shift()-----remove first element of array
console.log(arr.shift());
console.log(arr);

// unshift()----add new element and returns the number of element
console.log(arr.unshift("p"));
console.log(arr);

//slice
console.log(arr.slice(1,3));

//splice----two arguments
//starting index and no of elements to delete
console.log(arr.splice(2,2));

/* Array iteration Methods */
// For loop
for(var i=0; i<arr.length; i++){
  console.log(arr[i]);
}

// forEach(function(value,index,array))
arr.push("c");
arr.push("y");
arr.push("u");
console.log(arr);
arr.forEach(function(item,index,arr){
  console.log(item,index,arr);
});

//  map-----it can transform the arrays
//returns new arry in place of original
var arr= [1,2,3,4,5,6]
arr.map((value)=>{
  console.log(value*3);
});

//filter---creates anew array
//that satisfies the given condition
var arry = [2,4,5,6,7,8];
var res = arry.filter((num)=>{
  return num<6;
});
console.log(res);
