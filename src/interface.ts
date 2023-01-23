// Interface
// An interface is a keyword which is used to declare a TypeScript Interface.
// An interface_name is the name of the interface.
// An interface body contains variables and methods declarations.

interface OS {  
    name: String;  
    language: String;  
}  


let OperatingSystem = function(t: OS): void  {  
  console.log('Android ' + t.name + ' has ' + t.language + ' language.');  
};  
let Oreo = {name: 'O', language: 'Java'}  
OperatingSystem(Oreo);  

// o/p--> Android O has Java language.



//=============================================================================


interface Worldbank {
    loan(): number
    save(): number
}

class SBI implements Worldbank {
    public loan(): number {
        return 10
    }
    public save(): number {
        return 10
    }
    public cityName():string{
        return "SANGAMNER"
    }
}

class CANARA implements Worldbank {
    public loan(): number {
        return 11
    }
    public save(): number {
        return 12
    }
    public cityName():string{
        return "SANGAMNER"
    }
}
let SBISangamner = new SBI()

console.log(SBISangamner.loan())  // o/p--> 10

console.log(SBISangamner.save())   // o/p--< 10

console.log(SBISangamner.cityName())  // o/p--> SANGAMNER



let CANARASangamner = new CANARA()

console.log(CANARASangamner.loan())  // o/p--> 11

console.log(CANARASangamner.save())  // o/p--> 12

console.log(CANARASangamner.cityName())  // o/p--> SANGAMNER
