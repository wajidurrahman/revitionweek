// function doubleIt(num) {
//     return num * 2;
// }
// const result = doubleIt(5);
// console.log(result);

// const doubleIt = function myFun(num) {
//     return num * 2;
// }
// const result = doubleIt(5);
// console.log(result);

// single parameter
const doubleIt = num => num * 2 ;
const result = doubleIt(5);
console.log(result) 

// more parameters take
const add = (x, y) => x + y;
const result1 = add(50, 70);
console.log(result1)

//no parameter 
const give5 = () => 5;
const result2 = give5();
console.log(result2);

// second {} dile return korte hobe.
const bishal = (x, y) => {
  const sum = x + y;
  const diff = x - y;
  const result3 = sum * diff;
  return result3;
}
const result5 = bishal(7, 5);
console.log(result5); 