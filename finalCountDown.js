var params = [4, 10, 40, 16]

var mult = params[0]
var i = params[2]

while (i > params[1] && i <= params[2])
{
    i = i - params[0];
    if(i === params[3]){
        continue;
    }

    console.log(i);
}