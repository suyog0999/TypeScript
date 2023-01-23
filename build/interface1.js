"use strict";
class RBI {
    getCode() {
        return 1000;
    }
}
class PNBa extends RBI {
    loan() {
        return 10;
    }
    save() {
        return 20;
    }
    // method overloading --> // same method name , same signature , differnt class
    getCode() {
        // super.getCode()
        return 2000;
    }
}
let pnb = new PNBa();
console.log(pnb.getCode()); // 2000  method ovrriding
console.log(pnb.loan()); // 10
console.log(pnb.save()); // 20
let rbi = new RBI();
console.log(rbi.getCode()); // 1000
class Personz {
    info() {
        return "Maths Science Physics";
    }
    salary() {
        return 10;
    }
}
class Personb {
    salary() {
        return 10;
    }
}
let hemant = new Personz();
console.log(hemant.info); // "Maths Science Physics"
console.log(hemant.salary); // 10
let sam = new Personb(); // we only call one method on sam
console.log(sam.salary); // 10
//================================================================
