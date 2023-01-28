"use strict";
// polymorphism (overloading and overriding)
// overloading - same class  , same method name , different signature
// overriding - differnt class , same method name , same signature
// overriding 
class PersonM {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    displayName() {
        return this.firstName + this.lastName;
    }
}
class PersonCa extends PersonM {
    displayName() {
        return "hiiiiiiiiiiiiii";
    }
}
let ca = new PersonCa("maya", "bhagat");
console.log(ca.displayName()); //o/p-->  hiiiiiiiiiiiiii  coz method is overriding
console.log(ca.firstName); //o/p--> maya
console.log(ca.lastName); //o/p--> bhagat
