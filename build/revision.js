"use strict";
// program1
// function add(x,y){
//     console.log(x+y)
// }
// add('2','1')
// =================================================================
// program 2
// function addB(x,y){
//     if(typeof x === "number" && typeof y == "number"){
//         console.log(x+y)
//     }
//     else {
//         console.log('incorrect input')
//     }
// }
// addB(1,30)
//==============================================================
// program 3
function addn(x, y) {
    console.log(x + y);
}
//addn('12',14)  // error coz x type is number
addn(10, 5);
//==========================================================================
// Program 4
let nums = [1, 2, 3, 4, 5];
let names = ["suyog", "sanika", "pournima"];
console.log(nums);
console.log(names);
//==========================================================================
// program 5
// tuple --> array of fixed length
let roles = [2, "user"];
roles.push('names');
//============================================================================
// program6
// let infornation:object ={
//     firstName:"suyog",
//     lastName:"rahane"
// }
//information.firstName = 1  // error firstname type is string not a number
let information = {
    firstName: "Suyog",
    lastName: "Rahane"
};
console.log(information.firstName); // Suyog
//=======================================================================
// program 7
let infoormationA;
infoormationA = {
    fn: "sham",
    ln: 'rahul'
};
console.log(infoormationA);
let k = {
    firstName: "Suyog",
    lastName: "Rahane",
    age: 13,
    skills: ["TypeScript", "css", "javascript", "coreJava"]
};
let m = {
    firstName: "Sagar",
    lastName: "kharde",
    age: 13,
    skills: ["php", "c", "cpp", "coreJava"]
};
//==================================================================
//  program 10 
//  union types
let bb;
bb = true;
bb = 12;
bb = "Shamal";
function cb(x, y) {
    if (typeof x == "number" && typeof y == "number") {
        console.log(x + y);
    }
    else {
        Number(x) + Number(y);
    }
}
cb('22', '22'); //44
cb(22, 22); //44
let q = {
    firstName: "Suyog",
    lastName: "Rahane",
    age: 34,
    skills: ["python", "javScript", "css"],
    country: "india"
};
console.log(q);
//===============================================================
//  program 12 
//  enum
var BankEmployee;
(function (BankEmployee) {
    BankEmployee[BankEmployee["admin"] = 4] = "admin";
    BankEmployee[BankEmployee["customer"] = 5] = "customer";
    BankEmployee[BankEmployee["Branch_manager"] = 6] = "Branch_manager";
    BankEmployee[BankEmployee["Loan_Officer"] = 7] = "Loan_Officer";
})(BankEmployee || (BankEmployee = {}));
if (BankEmployee.admin) {
    console.log('I Am Admin');
}
//======================================================================
// program 13
// Function Expression
let sub = function (x, y) {
    return x + y;
};
sub(2, 3);
let i;
