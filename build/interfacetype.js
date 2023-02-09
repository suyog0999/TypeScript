"use strict";
let suyogEmp = {
    id: 1,
    name: "SuyogRahane",
    email: "sb123@gmail.com",
    mobileno: 1234567890
};
let abc = {
    name: "abc",
    role: "CA",
    equity: 20,
    email: "abc122@gmail.com",
    mobileno: 2345614522
};
let SagerE = {
    name: "SagarK",
    role: "HR",
    equity: 20,
    email: "sagar22@gmail.com",
    mobileno: 2345614435,
    id: 123
};
function Add(p1, p2) {
    if (typeof p1 === "string" && typeof p2 === "string") {
        return p1.concat(p2);
    }
    if (typeof p1 === "number" && typeof p2 === "number") {
        return p1 + p2;
    }
    throw new Error("Invalid Input");
}
console.log(Add(2, 3)); // 5
console.log(Add("AB", "11")); // AB11
// console.log(Add("AB",11))    // Invalid Input
//======================================================================
class CustomerA {
    isCreditAllow() {
        return true;
    }
}
class SuppierA {
    isShortList() {
        return true;
    }
}
// create object
let MK = new CustomerA();
//MK.isCreditAllow()
let BT = new SuppierA();
// way1
// function signContract(partner:businessA){
//     let message:string=" "
//     if(partner instanceof CustomerA){
//         if(partner.isCreditAllow()){
//             message="Signature Contract With Customer"
//         }
//     }
//     if(partner instanceof SuppierA){
//         if(partner.isShortList()){
//             message="Signature Contract With Suppier"
//         }
//     }
//     return message
// }
// console.log(signContract(MK))   //  Signature Contract With Customer
// console.log(signContract(BT))   //  Signature Contract With Suppier
// way2
function signContract(partner) {
    let message = " ";
    if ("isCreditAllow" in partner) {
        partner.isCreditAllow();
        message = "Signature Contract With Customer";
    }
    if ("isShortList" in partner) {
        partner.isShortList();
        message = "Signature Contract With Suppier";
    }
    return message;
}
console.log(signContract(MK)); //  Signature Contract With Customer
console.log(signContract(BT)); //  Signature Contract With Suppier
