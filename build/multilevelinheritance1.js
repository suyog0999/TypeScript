"use strict";
// Multilevel Inheritance
//  without costructor
// class Principle {
//     pName: string = "Sadashiv"
//     CollegeName: string = " CVC College"
//     displayPInfo(): void {
//         console.log(this.pName, this.CollegeName)
//     }
// }
// class Teachers extends Principle {
//     tName: string = "Sunil"
//     displayTInfo(): void {
//         console.log(this.tName, this.CollegeName)
//     }
// }
// class Studentq extends Teachers {
//     sName: string = "Suyog"
//     displaySInfo(): void {
//         console.log(this.sName, this.CollegeName)
//     }
// }
// let stud=new Studentq()
// console.log(stud)
// // properties we call
// stud.CollegeName // o/p--> CVC College
// stud.pName       // o/p--> Sadashiv
// stud.sName       // o/p--> Suyog
// stud.tName       // o/p--> Sunil
// // methods we call
// stud.displayPInfo() // o/p--> Sadashiv  CVC College
// stud.displayTInfo() // o/p--> Sunil  CVC College 
// stud.displaySInfo() // o/p--> Suyog  CVC College 
//=================================================================================
// with constructor
class Principle {
    constructor(pName, CName) {
        this.CollegeName = " CVC College";
        this.pName = pName;
        this.CollegeName = CName;
    }
    displayPInfo() {
        console.log(this.pName, this.CollegeName);
    }
}
class Teachers extends Principle {
    constructor(pName, CName, tName) {
        super(pName, CName);
        this.tName = tName;
    }
    displayTInfo() {
        super.displayPInfo();
        console.log(this.tName, this.CollegeName);
    }
}
class Studentq extends Teachers {
    constructor(pName, CName, tName, sName) {
        super(pName, CName, tName);
        this.sName = sName;
    }
    displaySInfo() {
        super.displayTInfo();
        console.log(this.sName, this.CollegeName);
    }
}
let stud = new Studentq("Sadashiv", "CVC College", "Sunil", "Suyog");
console.log(stud);
// o/p--> Studentq {CollegeName: 'CVC College', pName: 'Sadashiv', tName: 'Sunil', sName: 'Suyog'}  
stud.displaySInfo();
// o/p-->
// Sadashiv CVC College
// multilevelinheritance1.js:53 Sunil CVC College
// multilevelinheritance1.js:63 Suyog CVC College
