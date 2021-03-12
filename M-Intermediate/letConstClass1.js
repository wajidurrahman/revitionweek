const hubby = "Elias Kanchon";
// hubby = "Omar Sunny"; don't allow constant.
console.log(hubby);

const numbers = [12, 45];
numbers[1] = 88;
numbers.push(12);
// numbers = ["sunny", "salman", "omit Hasan"]; all arrary element change don't allow;
console.log(numbers);

const nayok = {name:"sakib khan", phone:4578};
// object same decision element change like array.

let patientName = "Rahim Chacha";
patientName = "Fatema Khala";
console.log(patientName);

let sum = 0;
for (let i = 0; i < 10; i++) {
    sum = sum + i;  
}
// let changeable don't lek var global variable.
