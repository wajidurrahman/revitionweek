//  array destructuring

// old system
// const numbers = [54, 92];
// const x = numbers[0];
// const y = numbers[i];
// console.log(x, y);

// M system
// const numbers = [54, 92];
// const [x, y] = [54, 92];
// console.log(x, y);

// New system
const numbers = [54, 44, 19, 100, 587, 4];
const [x, y] = numbers;
// console.log(x, y);

// function boxify(num1) {

//     return [num1, num1 + 5];
// }
// const boxed = boxify(8);
// console.log(boxed);

function boxify(num1) {

    return [num1, num1 + 5];
}
const [box1, box2] = boxify(8);
// console.log(box1, box2);

// object destructuring

// const person = {name:'Rahim', age: 25}
// console.log(person.name, person.age);
// console.log(person.name, person.age);
// console.log(person.name, person.age);

// const {name, age} = {id: 2, money: 34, name: 'Rahim', age: 25};
// console.log(name, age);
// console.log(name, age);

const person = {id: 2, money: 34, name: 'Rahim', age: 25};
const {money} = person;
// console.log(money);
// console.log(money);

// create object short
const one = 25;
const two = 35;
const obj = {x: x, y: y};
const obj2 = {one, two};
console.log(obj2);


//new array using three dots
// numbers.push(5)
const nuwNumbers = [...numbers, 56];



