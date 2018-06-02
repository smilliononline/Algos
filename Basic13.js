/*
//Print 1 - 255
for(i=1; i < 256; i++){
    console.log(i);
}
*/

/*
//Print Ints and Sum 0-255
var sum = 0;
for(i=0; i<256; i++){
    sum= sum + i;
    console.log(i, sum);
}
*/


/*
//Print Max of Array
function maxOfArray(arr){
    max = null;
    
    for(i=0; i < arr.length; i++){
        if(arr[i] > max){
            max=i;
        }
        
    }
    console.log(max)
}
maxOfArray([1,4,8,5])
*/


/*
//Return Odds Array 1-255
function oddArray255(){
    newArr=[];
    for(i=1; i<256; i+=2){
        newArr.push(i);
    }
    console.log(newArr);
}
oddArray255();
*/


/*
//Return Array Count Greater than Y
function greaterThanY(arr, y){
    counter = null;
    for(i=0; i < arr.length; i++){
        if(arr[i] > y){
            counter += 1;
        }
    }
    console.log(counter);
    }
    greaterThanY([1,5,9,7,3,4,2], 3)
    */


    /*
    //Print Max, Min, Average Array Values
    function maxMinAve(arr){
        var max = 0;
        var min = 0;
        var sum = 0;
        
        for(i=0; i < arr.length; i++){
            if(arr[i] > max){
                max = arr[i];
            }
            if(arr[i] < min){
                min = arr[i];
            }
            sum = sum + arr[i];
        }
        var ave = sum/arr.length;
        console.log(max, min, ave);
    }
    maxMinAve([2,4,6,8,10]);
    */

    /*
    //Swap STring for ARray Negative Values
    function negativeArr(arr){
        for(i=0; i<arr.length; i++){
            if(arr[i] < 0){
                arr[i] = "dojo"
            }
        }
        console.log(arr);
    }
    negativeArr([-3,9,4,-2,1]);
    */

/*
//print Odds 1-255;
function odds(){
    for(i=1; i < 256; i+=2){
        console.log(i);
    }
}
odds();
*/

/*
//Print Array Values
function arrVals(arr){
    for(i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
arrVals([3,2,8,7,6]);
*/

/*
//Print Average of Array
function aveArr(arr){
    var sum = 0;
    for(i=0; i<arr.length; i++){
        sum=sum + arr[i];
    }
    var ave = sum/arr.length;
    console.log(ave);
}
aveArr([2,4,6,8,10])
*/

/*
//Square Array Values
function sqArrVal(arr){
    for(i=0; i < arr.length; i++){
        arr[i] = arr[i]*arr[i];
    }
    console.log(arr);
}
sqArrVal([2,4,6,8,10])
*/

/*
//Zero Out Array Negative Numbers
function negZero(arr){
    for(i=0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
        
    }
    console.log(arr);
}
negZero([-2,4,6,-8,10])
*/

/*
function shiftArrVal(arr){
    var temp = arr[0];
    for(i=0; i <arr.length; i++){
      arr[i] = arr[i + 1];      
        
    }
    arr[arr.length-1] = 0;
    console.log(arr);
}
shiftArrVal([2,4,6,8,10])
*/


