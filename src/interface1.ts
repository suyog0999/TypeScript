

interface WorldbankB {
    getCode():number
}

class RBI implements WorldbankB{
    getCode():number{
        return 1000
    }
}

class PNBa extends RBI{

    loan():number{
        return 10
    }

    save():number{
        return 20
    }

   // method overloading --> // same method name , same signature , differnt class

    getCode():number{
        // super.getCode()
        return 2000
    }

}


let pnb=new PNBa()
console.log(pnb.getCode()) // 2000  method ovrriding
console.log(pnb.loan())    // 10
console.log(pnb.save())    // 20

let rbi=new RBI()
console.log(rbi.getCode())  // 1000



//==================================================

interface Zstudent {
    info():string
}

interface Teacher {
    salary():number
}

class Personz implements Zstudent,Teacher {
    info(): string {
        return "Maths Science Physics"
    }
    salary(): number {
        return 10
    }

}

class Personb implements Teacher{
    salary(): number {
        return 10
    }
}

let hemant=new Personz()
console.log(hemant.info)   // "Maths Science Physics"
console.log(hemant.salary)  // 10


let sam=new Personb()  // we only call one method on sam
console.log(sam.salary)   // 10



//================================================================
