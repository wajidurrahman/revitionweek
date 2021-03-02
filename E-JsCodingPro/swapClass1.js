var a = 5;
var b = 7;
// console.log("before swap: a =", a, ",b =", b);
var contain = a;
a = b;
b = contain;
// console.log("after before swap: a =", a, ",b =", b);

var x = 5;
var y = 7;
x = x + y;
y = x - y; 
x = x - y;
// console.log("after before swap: x =", x, ",y =", y);

var p = 5;
var q = 7;

[p, q] = [q, p];
console.log("after before swap: p =", p, ",q =", q);
