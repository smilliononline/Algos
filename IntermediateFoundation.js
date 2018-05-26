/*1. Sigma - Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5). 

function sigma(num){
    var sum = 0;
    for(i=1; i <= num; i++){
        sum = sum + i;
    }
    return sum;
}
console.log(sigma(10));
answer = 55 */

/* 2. Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).

function factorial(num){
    var mult = 1;
    for(i=1; i <= num; i++){
        mult = mult * i;
    }
    return mult;
}
console.log(factorial(10));
answer = 3628800 */


/* 3. Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment. 

function fibonacci(num){
    var a = 0;
    var b = 1;
    var c = 0;
    for(i=0; i <=num; i++){
       
        c = b + a;
        a = b;
        b = c;

    }
    return c;
}
    
console.log(fibonacci(5));
returns = 13 */

/*Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.

function secondToLast(arr){
    var a = arr[arr.length -2]
    for(i=0; i < arr.length; i++){
        if(arr.length < 2){
            return "NULL"
        }
        else return a;
    }
}
console.log(secondToLast([42, true, 4, "Liam", 7]));
console.log(secondToLast([1]));
answer = Laim, NULL */








