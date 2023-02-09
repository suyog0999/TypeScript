interface BusinessPartner {
    name: string;
    role: string;
    equity: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    mobileno: number;
}

// create object using  &  operaator(union)


type Employeee = Identity & Contact

let suyogEmp: Employeee = {
    id: 1,
    name: "SuyogRahane",
    email: "sb123@gmail.com",
    mobileno: 1234567890

}


type Customer = BusinessPartner & Contact

let abc: Customer = {
    name: "abc",
    role: "CA",
    equity: 20,
    email: "abc122@gmail.com",
    mobileno: 2345614522


}

type EmployeeeT = BusinessPartner & Contact & Identity

let SagerE: EmployeeeT = {
    name: "SagarK",              // here name property comes only ones
    role: "HR",
    equity: 20,
    email: "sagar22@gmail.com",
    mobileno: 2345614435,
    id: 123
}



//==========================================================================




type StringNumber = string | number

function Add(p1: StringNumber, p2: StringNumber): string | number {
    if (typeof p1 === "string" && typeof p2 === "string") {
        return p1.concat(p2)
    }

    if (typeof p1 === "number" && typeof p2 === "number") {
        return p1 + p2
    }
    throw new Error("Invalid Input")
}


console.log(Add(2, 3))  // 5

console.log(Add("AB", "11"))  // AB11

// console.log(Add("AB",11))    // Invalid Input


//======================================================================



class CustomerA {
    isCreditAllow(): boolean {
        return true
    }
}

class SuppierA {
    isShortList(): boolean {
        return true
    }
}

// create object

let MK = new CustomerA()
//MK.isCreditAllow()


let BT = new SuppierA()
//BT.isShortList()



type businessA = CustomerA | SuppierA

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


function signContract(partner: businessA) {
    let message: string = " "
    if ("isCreditAllow" in partner) {
        partner.isCreditAllow()
        message = "Signature Contract With Customer"

    }
    if ("isShortList" in partner) {
        partner.isShortList()
        message = "Signature Contract With Suppier"

    }
    return message
}

console.log(signContract(MK))   //  Signature Contract With Customer

console.log(signContract(BT))   //  Signature Contract With Suppier




