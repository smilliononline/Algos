/* 1. Given an array and value of Y, count and print the number of array values greater than Y.

var newArr = [4,5,6,7,8,9];
var y = 5;

for(i = 0; i < newArr.length; i++){
    if(newArr[i] > y){
        console.log(newArr[i]);
    }
}
answer = 6,7,8,9 */

/*2. Given an array, print the max, min, and average values for that array.

var newArr = [4,7,5,9,7,2,3];
var sum = 0;
var min = newArr[0];
var max = 0;

for(i = 0; i < newArr.length; i++){
    if(newArr[i] > max){
        max = newArr[i];
    }
    if(newArr[i] < min){
        min = newArr[i];
    }
    sum = sum + newArr[i];
}
var avg = sum/newArr.length;

console.log(min, max, Math.round(avg));
answer = 2 9 5 */


