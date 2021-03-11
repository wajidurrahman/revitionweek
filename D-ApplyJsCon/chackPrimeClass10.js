// var n = 79;

// for (i = 2; i < n; i++) {
//     // console.log(i, n % i);
//     if (n % i ==0) {
//         console.log('Not a prime number');
//         break;
//     }
// }
// console.log('Your Number is a prime Number');

function isPrime(n) {
    for (i = 2; i < n; i++) {
        if (n % i ==0) {
            return 'Not a prime number';
        }  
    }
    return 'Your Number is a prime Number';
}
var result = isPrime(128);
console.log(result);