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

/*.3 Given an array of numbers, create a function that returns a new array where negative values were replaced with the string 'Dojo'. For example, replaceNegatives([1,2,-3-5,5]) should return [1,2,"dojo", "dojo", 5].

function negatives(arr){
    newArr = [];
    for(i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            newArr.push("Dojo");
        }
        else{
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(negatives([1,-4,6,5,-9,2]));
answer = [ 1, 'Dojo', 6, 5, 'Dojo', 2 ] */

/*4. Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array. For example, removeVals([20,30,40,50,60,70]2,4) should return [20,30,70])*/

function removeVals(arr, x, y){
    for(i = 0; i < arr.length; i++){
        if(i > x && i <= y){
        arr.splice(x,(y-x));
        } 
    }
return arr;
}
console.log(removeVals([5,8,9,2,1,5,0,],2,4));


