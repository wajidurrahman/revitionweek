// function add(num1, num2) {
//     var result = num1 + num2;
//     return result;
// }
// var sum = add(13, 21);
// console.log(sum);


// var name = 'Kuddus';
// function add(num1, num2) {
//     var result = num1 + num2;
//     console.log('result inside', name);
//     return result;
// }
// console.log('result outside', name);
// var sum = add(13, 21);
// console.log(sum);


var name = 'Kuddus';
function add(num1, num2) {
     result = num1 + num2;
    console.log('result inside', name);
    function double(num) {
        return num * 2;
    }
    var total = double(result);
    return total;
}
// console.log('result outside', name);
// console.log('result outside',result);
var sum = add(13, 21);
console.log(sum);
console.log('result outside',result);