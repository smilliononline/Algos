function lengthValue(num1, num2){
    if(num1.length === num2.length){
        console.log("JINX SUCKA!")
    }
    return [num1.length, num2.length]
}
console.log(lengthValue([1,2,3,4], [3,4,5,6,7,8,9]));
console.log(lengthValue([1,2,3,4], [3,4,5,6]));