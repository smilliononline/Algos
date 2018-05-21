var x = [10, 20, 30, 40, 50, 60];

function removeVals(arr, start, end) {
    for (var i = start; i < end; i++) {
        for (var j = start; j + 1 < arr.length; j++) {
            var temp = arr[j+1];
            arr[j+1] = arr[j];
            arr[j] = temp;
        }
        arr.pop();
    }
    return arr;
}
console.log(removeVals(x, 2,4));