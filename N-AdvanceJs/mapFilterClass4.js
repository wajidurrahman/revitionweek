const numbers = [3, 4, 5, 6, 7, 8];
const output = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);   
}
console.log(output);


const numbers1 = [3, 4, 5, 6, 7, 8];
function square (element){
    return element * element;
}
numbers.map(function(element, index, array){
    console.log(element, index, array);
})


const numbers2 = [3, 4, 5, 6, 7, 8];
function square (element){
    return element * element;
}

// const square = element => element * element;
// const square = x => x * x;

const result = numbers.map(function(element){
    return element * element;
})
console.log(result);


const numbers3 = [3, 4, 5, 6, 7, 8];
const result1 = numbers3.map(x => x * x);
console.log(result1);

const numbers4 = [3, 4, 5, 6, 7, 8];
const bigger = numbers4.filter(x => x < 5);
console.log(bigger);


const numbers5 = [3, 4, 5, 6, 7, 8];
const bigger1 = numbers5.filter(x => x > 3);
console.log(bigger1);

const numbers6 = [3, 4, 5, 6, 7, 8];
const bigger2 = numbers6.find(x => x > 5);
console.log(bigger2);