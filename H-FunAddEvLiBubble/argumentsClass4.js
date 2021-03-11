// function addNumbers(num1, num2) {
//    return num1 + num2;   
// }

// var result = addNumbers(3, 5);
// console.log(result);


function addNumbers(num1, num2) {
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;
    }
    return sum;  
 }
 
 var result = addNumbers(3, 5, 8, 15, 29, 13);
 console.log(result);