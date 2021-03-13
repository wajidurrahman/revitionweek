const first = 2;
const second = 3;
if (first == second) {
    console.log("condition is true");
} else {
    console.log("condition is false");
}
// output:-condition is false

const first = 2;
const second = 2;
if (first == second) {
    console.log("condition is true");
} else {
    console.log("condition is false");
}
// output:-condition is true

const first = 2;
const second = "2";
if (first == second) {
    console.log("condition is true");
} else {
    console.log("condition is false");
}
// output:- condition is true

const first = 2;
const second = "2";
if (first === second) {
    console.log("condition is true");
} else {
    console.log("condition is false");
}
// output:- condition is false

const first = 2;
const second = true;
if (first == second) {
    console.log("condition is true");
} else {
    console.log("condition is false");
}
// output:-condition is false

const first = 1;
const second = true;
if (first == second) {
    console.log("condition is true");
} else {
    console.log("condition is false");
}
// output:-condition is true

const first = 1;
const second = false;
if (first == second) {
    console.log("condition is true");
} else {
    console.log("condition is false");
}
// output:- condition is false

const first = 0;
const second = false;
if (first == second) {
    console.log("condition is true");
} else {
    console.log("condition is false");
}
//output:- condition is true

const first = 0;
const second = false;
if (first === second) {
    console.log("condition is true");
} else {
    console.log("condition is false");
}
// output:-condition is false

if ('2'===2){
    console.log('Inside if');
    }
    else{
    console.log('Inside else');
    }
    // output:-Inside else