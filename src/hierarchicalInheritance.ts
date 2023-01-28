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


class Fatherm{
   fName:string
   fLname:string
   constructor(fName:string, fLname:string){
    this.fName=fName
    this.fLname=fLname
   }
   displayFInfo():void{
    console.log(this.fName,this.fLname)
   }
}

class Son extends Fatherm{
    sName:string
    constructor(fName:string, fLname:string, sName:string){
        super(fName,fLname)
        this.sName=sName
    }
    displaySInfo():void{
        super.displayFInfo()
        console.log(this.sName,this.fName,this.fLname)
       }
}

class Daughter extends Fatherm{
    dName:string
    constructor(fName:string, fLname:string, dName:string){
        super(fName,fLname)
        this.dName=dName
    }
    displayDInfo():void{
        super.displayFInfo()
        console.log(this.dName,this.fName,this.fLname)
       }
}


let son=new Son("Bhausaheb","Rahane","Suyog")
son.displaySInfo()

let daugther=new Daughter("Bhausaheb","Rahane","Priyanka")
daugther.displayDInfo()