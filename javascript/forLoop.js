/* for loops */

var array = []; //empty array
for(var i=0; i<10 ;i++)
{
  if(i>6) break;
  array.push(i);
}
console.log(array);

var arr = [2,4,5,3,];
for(var i=0; i<arr.length; i++)
{
  console.log(arr[i]);
}

//nested array

var arr=[[1,3],[4,6],[5,7]];
for(var i=0;i<arr.length; i++)
{
  for(var j=0;j<arr[i].length;j++)
  {
    console.log(arr[i][j]);
  }
}
