"use strict";
//1.Number enum
//2.String enum
//=======================================================================
// 1.Number enum
var days;
(function (days) {
    days[days["day1"] = 5] = "day1";
    days[days["day2"] = 6] = "day2";
    days[days["day3"] = 7] = "day3";
})(days || (days = {}));
console.log(days.day1); // o/p--> 5
console.log(days.day3); // o/p--> 7
//==================================================================================
// 2.String enum
var weekDay;
(function (weekDay) {
    weekDay["day1"] = "DAY1";
    weekDay["day2"] = "DAY2";
    weekDay["day3"] = "DAY3";
})(weekDay || (weekDay = {}));
console.log(weekDay.day1); // o/p--> "DAY1"
//===================================================================================
let info1 = {
    firstName: "Suyog",
    lastName: "Rahane"
};
console.log(info1);
let sham = {
    firstName: "sham",
    lastName: "sharma"
};
let ram = {
    firstName: "ram",
    lastName: "sharma"
};
let sita = {
    firstName: "sita",
    lastName: "rao"
};
let Suyog = {
    firstName: "Suyog",
    lastName: "Rahane"
};
//=======================================================================
//union --> print different datatype at a type
let c; // here we can declare  c variable in number or in string or in boolean
c = "mansi";
c = 12000;
c = true;
function add1(code) {
    console.log(`my address is ${code}`);
}
add1("ramnagri"); // my address is ramnagari
add1(20); // my address is 20
//============================================
// function sub(x: string | number, y: string | number) {
//     console.log(x + y)
// }
//function
// 1.without return type
function addition() {
    console.log('i am addition');
}
addition();
//============================================================  
//2.return type
function add2() {
    return "Sagar";
}
console.log(add2());
function addd() {
    return 12234;
}
console.log(addd());
function add4() {
    return true;
}
console.log(add4());
