"use strict";
//string
//number
//array
//boolean
//function
//touple
//string
let firstName = "Suyog";
console.log(firstName);
// firstName=12  // --> genrate error coz firstName is always string
console.log("***********************************************************************");
//number
let rollNumber;
rollNumber = 12;
//rollNumber="one" // --> genrate error coz rollNumber is always number
console.log("***********************************************************************");
// boolean
let isStudent;
isStudent = true;
// isStudent = "false" // --> genrate error coz isStudent is always contain boolean value
let isDoingJob = false;
console.log("***********************************************************************");
// Function with parameter and with return type
function add(x, y) {
    return x + y;
}
let sum = add(12, 13);
console.log(sum);
// Function with parameter and without  return type
function add3(x, y) {
    console.log(x + y);
}
add3(12, 13);
console.log("*************************************************************************");
// array
//let student=["Suyog","Ajit","Mahesh"]
//let student:string[]
let student = ["Suyog", "Ajit", "Mahesh"];
student.push('rohit');
console.log(student);
// student.push(100) // --> generate error coz student array is only contain string values
// print length using forEach method
let student1 = ['ram', 'sham', "mayur"];
student.forEach((el) => {
    console.log(el.length);
});
console.log("*************************************************************************");
//touple => array of fixed length
let info;
info = ['Suyog', 'Rahane', 23];
console.log(info);
console.log("*************************************************************************");
//Enum
var Bank;
(function (Bank) {
    Bank[Bank["Manager"] = 1] = "Manager";
    Bank[Bank["Cashier"] = 2] = "Cashier";
    Bank[Bank["Clerk"] = 3] = "Clerk";
    Bank[Bank["jr_Clerk"] = 4] = "jr_Clerk";
    Bank[Bank["Loan_Officer"] = 5] = "Loan_Officer";
})(Bank || (Bank = {}));
if (Bank.Manager) {
    console.log('Give Sign');
}
