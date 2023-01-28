"use strict";
// Hierarchical Inheritance
// without constructor
// class Fatherm{
//    fName:string="Bhausaheb"
//    fLname:string="Rahane"
//    displayFInfo():void{
//     console.log(this.fName,this.fLname)
//    }
// }
// class Son extends Fatherm{
//     sName:string="Suyog"
//     displaySInfo():void{
//         console.log(this.sName,this.fName,this.fLname)
//        }
// }
// class Daughter extends Fatherm{
//     dName:string="Priyanka"
//     displaySInfo():void{
//         console.log(this.dName,this.fName,this.fLname)
//        }
// }
// let son=new Son()
// let daugther=new Daughter()
//==================================================================================
// with constructor
class Fatherm {
    constructor(fName, fLname) {
        this.fName = fName;
        this.fLname = fLname;
    }
    displayFInfo() {
        console.log(this.fName, this.fLname);
    }
}
class Son extends Fatherm {
    constructor(fName, fLname, sName) {
        super(fName, fLname);
        this.sName = sName;
    }
    displaySInfo() {
        super.displayFInfo();
        console.log(this.sName, this.fName, this.fLname);
    }
}
class Daughter extends Fatherm {
    constructor(fName, fLname, dName) {
        super(fName, fLname);
        this.dName = dName;
    }
    displayDInfo() {
        super.displayFInfo();
        console.log(this.dName, this.fName, this.fLname);
    }
}
let son = new Son("Bhausaheb", "Rahane", "Suyog");
son.displaySInfo();
let daugther = new Daughter("Bhausaheb", "Rahane", "Priyanka");
daugther.displayDInfo();
