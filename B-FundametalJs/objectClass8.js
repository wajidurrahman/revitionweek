var student = {id:121, phone:1745, name:"Abir"};
var student2 ={id:131, phone:457, name:"Mahia"};

// 3ti way object read kora jay....
var phoneNo1 = student.phone;
var phoneNo2 = student["phone"];
var phoneProName ="phone";
var phoneNo3 = student[phoneProName];

// Update phone...
student2.phone =547854;
student2["phone"] = 6668888;
student2[phoneProName] =99991111;

student2.ciema ="Ogni22";
student2["cinema"] = "Smart Girl";

console.log(phoneNo1);
console.log(student2);