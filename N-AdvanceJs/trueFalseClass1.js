const age = 4;
if (age > 0) {
    console.log("condition is true");
}
else{
    console.log("condition is false");
}
// ...
const age = 4;
if (age) {
    console.log("condition is true");
}
else{
    console.log("condition is false");
}
// ...
const name = "Solaiman khan";
if (name.length > 0) {
    console.log("condition is true");
}
else{
    console.log("condition is false");
}
// ...
const name = "Solaiman khan";
if (name.length) {
    console.log("condition is true");
}
else{
    console.log("condition is false");
}
// ...
const name = "Solaiman khan";
if (name) {
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

//Truthy value:-
const name = " ";
if (name) {
    console.log("condition is true");
}
else{
    console.log("condition is false");
}
// // " "...
const name = "0";
if (name) {
    console.log("condition is true");
}
else{
    console.log("condition is false");
}
// // "0"...
let name = [];
if (name) {
    console.log("condition is true");
}
else{
    console.log("condition is false");
}
// // []...
let name = {};
if (name) {
    console.log("condition is true");
}
else{
    console.log("condition is false");
}
// // {}...
let name = 0;
if (name || name === 0) {
    console.log("condition is true");
}
else{
    console.log("condition is false");
}
// 
let name = 12;
if (name || name === 0) {
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

//  Falsy value
// null
const age = 0;
if (age) {
    console.log("condition is true");
}
else{
    console.log("condition is false");
}
// ...0
const name = "";
if (name) {
    console.log("condition is true");
}
else{
    console.log("condition is false");
}
//.... "" 
let name;
console.log (name);
if (name) {
    console.log("condition is true");
}
else{
    console.log("condition is false");
}
// ...undefined
let name = NaN;
if (name) {
    console.log("condition is true");
}
else{
    console.log("condition is false");
}
// NaN