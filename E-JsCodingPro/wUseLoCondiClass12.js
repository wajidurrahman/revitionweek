function add (firstNum, secondNum, thirdNum) {
    var sum = firstNum + secondNum + thirdNum;
    return sum;
}

function add2(numbers) {
    var sum = numbers[0] + numbers[1] + numbers[3];
}

function add3(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            sum = sum + numbers[i];
        } 
    }
    return sum;
}