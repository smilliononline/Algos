
function fitFirst(x){
    if(x[0] > x.length){
        console.log("Too Big!");
    }
    else if(x[0] < x.length){
        console.log("Too Small");
    }
    else {
        console.log("Just Right");
    }
    
}

console.log(fitFirst([10,1,2,3,4]))
console.log(fitFirst([1,2,4,5,6,7,8]))