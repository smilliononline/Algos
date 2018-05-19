
/*Biggie Size
function biggieSize(arr){
    for(i=0; i<arr.length; i++){
        if(arr[i] > 0){
            arr[i] = "big";
        }
    }
    return arr;
}
console.log(biggieSize([-1,2,-3,4,-5]));
answer = [ -1, 'big', -3, 'big', -5 ]*/


/*print Low, Return High
function lowHigh(arr){
    var max = min = arr[0];
    for(i=0; i<arr.length; i++){
        if(arr[i] > max){
        max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
    }
    console.log(min);
return max;
}
console.log(lowHigh([1,2,3,4,5]));
lowHigh([1,2,3,4,5]);
answer = 1,5 */


/* Print One, Return Another
function rtrnprnt(arr){
   var one = arr.length-1;
   var two = arr[0];
    for(i=0; i < arr.length; i++){
        if(arr[i] % 2 != 0){
            arr[i] = two;
        }
        
    }
    console.log(one);
    return two;
}
console.log(rtrnprnt([1,2,3,4,5]));
answer = 4, 1 */


/*Double vision
function doubleVision(arr){
    var newArr = [];
    for(i = 0; i < arr.length; i++){
        newArr.push(arr[i]*arr[i]);
    }
    return newArr;
}
console.log(doubleVision([2,3,4,5]));
answer = [ 4, 9, 16, 25 ] */


/* Count Positives
function countPositives(arr){
    var counter = [];
    for(i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            counter.push(arr[i]);
        }
    }
    return counter.length;
}
console.log(countPositives([-2, -1, 1, 3,4,5]));
answer = 4 */


/*Even Odd
function evenOdd(arr){
    var newArr = [];
    for(i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            newArr.push(2);
        }
        if(arr[i] % 2 != 0){
            newArr.push(1);
        }
    }
    if(newArr = [2,2,2]){
        console.log("Even More So")
    }
    if(newArr = [1,1,1]){
        console.log("That's Odd!")
    }
    return arr;
}
console.log(evenOdd([1,2,1,3,4,4,4,3,3,3]));*/


/*increments and seconds
function incrSec (arr){
    for(i = 0; i < arr.length; i=i+2){
        if(arr[i] % 2 != 0){
            console.log(arr[i] + 1);
        }
                
    }
    return arr;
}

console.log(incrSec([2,3,5,4,7,8,9,4,5]));
answer = 6,8,10,6; [ 2, 3, 5, 4, 7, 8, 9, 4, 5 ] */

/*Previous Lengths
function stringLength(arr){
    for(i=0; i < arr.length; i++){
         arr[i] = arr[i].length;
        }
        return arr;
    }
    
console.log(stringLength(['corn', 'peas', 'carrots', 'wheat']));
answer = [ 4, 4, 7, 5 ] */


/* Add Seven to Most
function seven(arr){
    newArr = [];
    for(i=0; i < arr.length; i++){
        newArr.push(arr[i]+7)
    }
    return newArr;
}
console.log(seven([1,2,3,4,5,6]));
answer = [ 8, 9, 10, 11, 12, 13 ] */


/*Reverse Array
function reverse(arr){
    for(i=0; i < arr.length; i++){
        arr[i] = arr[arr.length-1] - arr[i];
        arr[i]++
    }
    return arr;
}
console.log(reverse([1,2,3,4,5,6]));
answer = [ 6, 5, 4, 3, 2, 1 ] */



