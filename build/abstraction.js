"use strict";
// abstraction
// we dont create an object for abstract class
class Human {
    displayCountryName() {
        return "India";
    }
}
class PersonL extends Human {
    displayName() {
        return "Suyog Rahane";
    }
    displayCity() {
        return "Sangamner";
    }
}
let ab = new PersonL();
console.log(ab.displayCity()); //o/p--> Sangamner
console.log(ab.displayCountryName()); //o/p--> India
console.log(ab.displayName()); //o/p--> Suyog Rahane
