// nums = [5, 12, 89, 45, 18, 8];

// for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     // console.log(num * 2);
//     if(num % 2 == 0){
//         console.log(num,': is even number')
//     }else{
//         console.log(num,': is odd number')  
//     }   
// }

// friends_age = [13, 17, 19, 20, 18];
// for (let i = 0; i < friends_age.length; i++) {
//     const age = friends_age[i];
//     // console.log(age);
//     if (age % 2 == 0) {
//         console.log(age, ': is even number')
//     } else {
//         console.log(age, ': is odd number')
//     }
// }


function evenify(num) {
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number % 2 == 0) {
            console.log(number, ': is even number');
        }
        else {
            console.log(number, ': is odd number');
        }

    }
}
numbers = [15, 13, 14, 16, 20];
evenify(numbers);

friends_age = [13, 17, 19, 20, 18];
evenify(friends_age);
