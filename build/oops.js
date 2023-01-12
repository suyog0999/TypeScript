"use strict";
// class => access modifier
class Student {
    constructor(Fname, RollNo) {
        this.fullName = Fname;
        this.rollNumber = RollNo;
    }
    display() {
        return this.fullName;
    }
}
let Rohit = new Student("Rohit Sharma", 1234);
console.log(Rohit);
Rohit.display();
// ====================================================================
// access modifier --> private,public,protected,readOnly
//Public -    By default, members (properties and methods) , Public members are accessible everywhere without restrictions even from the multiple level sub-classes without any compile errors.
//Private -   A private member cannot be accessed outside of its containing class. Private members can be accessed only within the class and even their sub-classes won't be allowed to use their private properties and attributes.
//Protected - A protected member cannot be accessed outside of its containing class. Protected members can be accessed only within the class and by the instance of its sub/child class
//readonly-   Read-only members can be accessed outside the class, but their value cannot be changed. Since read-only members cannot be changed outside the class, they either need to be initialized at declaration or initialized inside the class constructor.
// private and public
class Employee {
    constructor(fname1, eid) {
        this.firstname1 = fname1;
        this.employeeid = eid;
    }
    getName() {
        console.log(this.firstname1);
        return this.firstname1;
    }
}
let ram1 = new Employee('Ram', 131);
console.log(ram1.employeeid);
console.log(ram1.getName());
//console.log(ram1.firstName1)  --> error coz its access modifier is private
// ===========================================================================
class Students {
    constructor(fname1, roNo1) {
        this.firstname1 = fname1;
        this.rollNumber1 = roNo1;
    }
    info2() {
        console.log(`my name is ${this.firstname1} and my rollnumber is ${this.rollNumber1}`);
    }
    getName() {
        this.info2();
        console.log(this.firstname1);
        return this.firstname1;
    }
}
let vaibhav = new Students("Vaibhav", 100);
let a123 = vaibhav.getName();
console.log(a123);
// =======================OR=======================================================
// class Student {
//     public constructor(private fname1: string, public roNo1: number) { }
//     public getName(): string {
//     this.info()
//     console.log(this.fname1)
//     return this.fname1
// }
//     private info(): void {
//     console.log(`my name is ${this.fname1} and my rollnumber is ${this.roNo1}`)
// }
// }
// let vaibhav = new Student("Vaibhav", 100)
// let a123 = vaibhav.getName()
// console.log(a123)
//=============================================================================================
class greet {
    constructor(name1) {
        this.name1 = name1;
    }
}
let greeting = new greet("suyog");
console.log(greeting);
// ====OR===================================================
// class greet {
//     constructor(private name1: string) {}
// }
// let greeting = new greet("Mayuri")
//=================================================================================
//readOnly
class Studentss {
    constructor(name1) {
        this.name1 = name1;
    }
    setName(name) {
        console.log(this.name1); //Mayur
        return this.name1 = name;
    }
}
let mayur = new Studentss('mayur');
let newname = mayur.setName('vishal');
console.log(newname);
class Studentsss {
    constructor(name1) {
        this.name1 = name1;
    }
    // public setName(name: string) {
    //     console.log(this.name1) //Mayuri
    //     return this.name1 = name
    // }
    getName1() {
        return this.name1;
    }
}
let mayuri = new Studentsss('Mayuri');
console.log(mayuri.getName1());
