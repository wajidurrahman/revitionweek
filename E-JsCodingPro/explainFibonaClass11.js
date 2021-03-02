// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55,

function fibonacciIterative(num){
    var fibo = [1, 1];
    for (let i = 2; i <= num; i++) {
        var nextFibo = fibo[i - 1] + fibo[i - 2];
        fibo.push(nextFibo);     
    }
    return fibo;
}
var result = fibonacciIterative(10);
console.log(result);

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55,
function fibonacciRecursive(num){
    // stopping condition
    if (num == 0) {
        return [1];
    }
    if (num == 1) {
        return [1, 1]
    }
    // recursive call
    var fibo = fibonacciRecursive(num - 1);
    var nextFibo = fibo[num-1] + fibo [num - 2]; 
    fibo.push(nextFibo);
    return fibo;
}
var output = fibonacciRecursive(10);
console.log(output);