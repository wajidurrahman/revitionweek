/* commit this line..........
3! = 1*2*3
4! = 1*2*3*4
5! = 1*2*3*4*5
10! = 1*2*3*4*5*6*7*8*9*10
*/
// for loop & while loop dia factorial vahir kora ke iterative method bole.
// let factorial = 1;
// for (let i = 1; i <= 50; i++) {
//     factorial = factorial * i;
//     console.log(i, factorial);    
// }

function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}
var result = factorial(6);
console.log(result);