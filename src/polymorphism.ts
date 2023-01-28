
// polymorphism (overloading and overriding)
// overloading - same class  , same method name , different signature
// overriding - differnt class , same method name , same signature




// overriding 


class PersonM {
    constructor(public firstName:string, public lastName:string){}
    public displayName():string {
        return this.firstName + this.lastName
    }
}

class PersonCa extends PersonM {
    public override displayName():string {
        return "hiiiiiiiiiiiiii"
    }
}

let ca = new PersonCa("maya","bhagat")
console.log(ca.displayName())   //o/p-->  hiiiiiiiiiiiiii  coz method is overriding
console.log(ca.firstName)       //o/p--> maya
console.log(ca.lastName)        //o/p--> bhagat