/*function a(x,y){
    return 5;
  }
  console.log(a(5,5))
  answer is 5 */


  /*function a(x,y){
    z = []
    z.push(x);
    z.push(y);
    z.push(5);
    console.log(z);
    return z;
}
b = a(2,2)
console.log(b);
console.log(a(6,8));

answer = [ 2, 2, 5 ]
[ 2, 2, 5 ]
[ 6, 8, 5 ]
[ 6, 8, 5 ]*/


/*function a(x){
  z = [];
  z.push(x);
  z.pop();
  z.push(x);
  z.push(x);
  return z;
}
y = a(2);
y.push(5);
console.log(y);

answer = [ 2, 2, 5 ] */


/*function a(x){
  if(x[0] <x [1]) {
     return true;
  }
  else {
     return false;
  }
}
b = a([2,3,4,5])
console.log(b);

answer = true */


/*function a(x){
  for(var i=0; i<x.length; i++){
    if(x[i] > 0){
         x[i] = "Coding"
    }
}
}
console.log(a([1,2,3,4]))
answer = undefined */


/*function a (x){
  for(var i=0; i<x.length; i++){
    if(x[i] > 5){
      x[i] = "Coding"
    }
    else if (x[i] < 0){
      x[i] = "Dojo"
    }
  }
}
console.log(a([5,7,-1,4]))
answer = undefined */


/*function a(x){
  if(x[0] > x[1]) {
   return x[1];
  }
  return 10;
}
b = a([5,10])
console.log(b);

answer = 10 */


/* function sum(x){
  sum = 0;
  for(var i=0; i<x.length; i++){
     sum = sum + x[i];
     console.log(sum);
  }
  return sum;
}
*/

/*function printAverage (x) {
  var sum = 0;
  for(var i = 0; i < x.length; i++){

  sum = sum + x[i];
  var avg = sum / x.length;
 
 }
  return avg;
  console.log(avg);
}


console.log(printAverage([1,2,3]))*/


/*function returnOddArray () {
  for(var i = 1; i < 256; i+=2) {
    console.log(i);
  }
  
}
returnOddArray(); */


function squareValue (x){
  for(var i = 0; i < x.length; i++){
   return x*x[i]
  
  }
 
}
squareValue([2,4,6]);
