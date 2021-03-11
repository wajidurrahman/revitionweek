// var i = 1;
// var factorial = 1;
// while (i <= 10) {
//     factorial = factorial * i;
//     // console.log(i, factorial);
//     i++;
// }

// loop vitor console korle joto bar gurbe toto bar result dekhabe;
// console.log(factorial);


function factorial(n){
    var i = 1;
    var keepFactorial = 1;
    while (i <= n) {
        keepFactorial = keepFactorial * i;
        i++;
    }
    return keepFactorial;
}
var result = factorial(10);
console.log(result);