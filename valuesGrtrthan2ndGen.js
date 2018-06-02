max = [];
min = [];

function greaterSecond(x){
    for(i=0; i < x.length; i++){
        if(x[i] > x[1]){
            max.push(x[i]);
        }
        else if(x[i] < x[1]){
            min.push(x[i]);
        }
    }
    console.log(max.length)
}
greaterSecond([100,10,2,3,4,5,6,7,8]);