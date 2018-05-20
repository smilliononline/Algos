function countdown(num){
    var newArr = []
    for(i = num; i >= 0; i-- ){
        newArr.push(i);
    }
    return newArr;
}
console.log(countdown(50));