var student = new Object();
student.name = "Prerna";
student.branch = "CSE";
student.age;
student["hobby"] ="playing";

console.log(student);
console.log(student.name);
console.log(student["age"]);

// Creation :Object initializer
var fruits = {apple:"red",orange:"orange",banana:"yellow"};

// Creation :Object constructor

function stu(name,branch,age){
  this.name = name;
  this.branch =branch;
  this.age = age;
};
var stu1 = new stu("Prerna","CSE",20);
console.log(stu1);

//Creation:Object.create
var student ={
  name:"Prerna",
  info : function(){
    console.log(this.name);
  }
};
var stu = Object.create(student);
stu.info();
console.log(stu);

//Remove Object Properties
var obj = {"name":"Prerna","class":"CSE","age":20};
delete obj.age;
console.log(obj);

// testingg Objects for Properties
console.log(obj.hasOwnProperty("age"));
//Generate an Array of all Object keys
console.log(Object.keys(obj));
