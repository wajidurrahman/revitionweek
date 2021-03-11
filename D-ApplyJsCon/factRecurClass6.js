// for (let i = 10; i <= 1; i--) {
  
    
// }
// var i = 0;
// while (i >= 10){
//     i--;
// }

// 10! = 1*2*3*4*5*6*7*8*9*1
// 3! = 1*2*3
// 4! = 1*2*3*4
// 5! = 1*2*3*4*5
// 6! = (6-1)!*6
// 7! = (7-1)!*7
// 8! = (8-1)!*8
// n! = (n-1)!*n

function factorial(n) {
    if (n == 0) {
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}
var result = factorial(10);
console.log(result);
