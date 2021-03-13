let pakhi;
console.log(pakhi);
// output:- undefined

function add (num1, num2){
      console.log(num1 + num2);
}
const result = add(13, 82);
console.log(result);
// output :- undefined

function add (num1, num2){
      console.log(num1 + num2);
      return
}
const result = add(13, 82);
console.log(result);
// output :-undefined

function add (num1, num2){
      console.log(num1, num2);
      return
}
const result = add(13);
console.log(result);
// output:- undefined

const premik = {name:"smart dude", phone:458421};
console.log(premik.gf);
//output:- undefined

let fun = undefined;
console.log(fun);
//output:- undefined

let ages = [2, 5, 9]
console.log(ages[11]);
//  output:- undefined
