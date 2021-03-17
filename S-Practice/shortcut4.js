const money = 150;
const active = true;
let food;
if(money > 100){
    food = 'birani';
}else{
    food = 'alur vorta';
}
// ternary:
// condition ? true value : false value
let food2 = money > 100 ? 'birani' : 'alur vorta';
let cssClass;
if (active === true) {
    cssClass = 'active';
}else{
    cssClass = 'inactive';
}
const cssClass2 = active ? 'active' : 'inactive';
// function call shortcut alternative
// active ? displayUser() : hideUser()

// 
const x = active && 5;
const y = active || 5;
console.log(y);

// string to number
const number = +'45';
console.log(number);

// number to string
const numTex = 45 + '';
console.log(numTex);

// default parameter
function add(num1, num2 = 5) {
    return num1 + num2;
}
add(45);

