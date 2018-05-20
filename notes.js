function reverse(arr){
  
   for(i=0; i < arr.length/2; i++){
    var temp = arr[i]
    arr[i] = arr[arr.length-1-i]
    arr[arr.length-1-i] = temp;
   }
return arr;

}
   
console.log(reverse([2,5,3,4,6,1]));