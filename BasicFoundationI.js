/*GEt 1 to 255:

function a(){
    var arr = [];
    for(i=0; i< 256; i++){
        arr.push(i);
       
    }
    return arr;
}
console.log(a()); */


/*Get even 1,000

function even(){
    var sum = 0;
    for(i = 0; i < 1001; i+=2){
        sum = sum + i;
    }
    return sum;
}
console.log(even());
answer = 250,200 */


/* Sum odd 5,000

function odd (){
    var sum = 0;
    for(i = 1; i <5001; i+=2){
        sum = sum + i;
    }
    return sum;
}
console.log(odd());
answer = 6250000 */


/*Iterate an array

function total(arr){
  sum = 0;
  for(i=0; i<arr.length; i++){
    sum = sum + arr[i]
  }
  return sum;
}
console.log(total([2,2,2]));
answer = 6 */


/*Find Max

function max(arr){
    var max = 0;
    for(i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(max([1,3,2,6,5,8]))
answer = 8 */


/*Find average

function average(arr){
    var sum = 0;
    for(i=0; i<arr.length; i++){
        sum = sum + arr[i];
        
    }
    var avg = sum / arr.length;
    return avg;
}
console.log(average([10,20,20,20,50,70]));
   answer = 31.666666666 */


/*Array odd

   function odd(){
    var arr = [];
    for(i=1; i < 51; i+=2){
    arr.push(i);
    }
    return arr;
}   
console.log(odd());
    */

/*Greater than Y

function greater(arr, y){
    var max = [];
    for(i = 0; i < arr.length; i++){
        if ( arr[i] > y ){
            max.push(arr[i]);
        }
    }
    return max.length;
}
console.log(greater([1,3,4,6,5,9,10,20], 6));
answer = 3 */


/*Squares

function square (arr){
    squaredArr = [];
    for(i=0; i<arr.length; i++){
    squaredArr.push(arr[i]*arr[i]);
    }
    return squaredArr;
}
console.log(square([2,4,6,8]))
answer = 4,16,36,64 */


/*negatives

function negatives (arr){
    for(i=0; i<arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}
console.log(negatives([-1,-2,3,4,5,-9]));
answer = 0,0,3,4,5,0 */


/*Max/Min/Avg

function multicalc (arr){
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    for(i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
        sum = sum + arr[i];
        avg = sum / arr.length;
    }
    return [max, min, avg];
}
console.log(multicalc([1,2,3,4,5]));

answer = 5,1,3: side note - i realized that you shoudl not just set your values for open variables to zero, but actually the first index of the array if you really want to be accurate.  Min = 0 is literally 0*/


/*Swap Values

function swap(arr){
    var temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length-1] = temp;
    for(i=0; i < arr.length; i++){
        return arr;
    }
}
console.log(swap([1,2,3,4,5]));
answer = 5,2,3,4,1 */


function positive(arr){
    for(i=0; i<arr.length; i++){
        if(arr[i] < 0){
            arr[i] = "Dojo";
        }
    }
    return arr;
}
console.log(positive([-2, 1, -5, 5, 6, -9]));

/* answer = Dojo, 1, Dojo, 5, 6, Dojo*/