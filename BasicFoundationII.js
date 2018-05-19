
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


