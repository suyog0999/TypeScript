"use strict";
// class modifiers
// 1.public
// class Studenta{
//     name:string                 // by default public
//     constructor(nm:string){
//         this.name=nm
//     }
// }
// let suyog=new Studenta("Suyog Rahane")
// console.log(suyog)
class Studenta {
    constructor(nm) {
        this.name = nm;
    }
    displayName() {
        console.log(this.name);
    }
}
let suyog = new Studenta("Suyog Rahane");
console.log(suyog.name); //o/p--> Suyog Rahane
suyog.displayName(); //o/p--> Suyog Rahane
//=================================================================================
// 2.private
class Studentb {
    constructor(nm) {
        this.name = nm;
    }
    displayName() {
        console.log(this.name);
    }
    displayGreet() {
        console.log("I am HAPPY");
    }
}
let sagar = new Studentb("Sagar Kharde");
//console.log(sagar.name)  // error  
// Property 'name' is private and only accessible within class 'Studentb 
// private method and property cannot be access outside class
//sagar.displayGreet() // error
//Property 'displayGreet' is private and only accessible within class 'Studentb'
sagar.displayName();
// o/p --> Sagar Kharde
//=========OR===========//
// class Studentb{
//     //private name:string       
//     constructor(private name:string ){
//     }
//     public displayName(){
//         console.log(this.name)
//     }
//     private displayGreet(){
//         console.log("I am HAPPY")
//     }
// }
//======================================================================================
// 3.readonly  --> here we set value but do not modified it outside the class
class Studentc {
    constructor(nm) {
        this.name = nm;
    }
    getName() {
        return this.name;
    }
}
let sanika = new Studentc("Sanika Rahane");
console.log(sanika.name); // o/p--> Sanika Rahane
// sanika.name="Sarika" // error
// Cannot assign to 'name' because it is a read-only property
