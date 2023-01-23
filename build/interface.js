"use strict";
// Interface
// An interface is a keyword which is used to declare a TypeScript Interface.
// An interface_name is the name of the interface.
// An interface body contains variables and methods declarations.
let OperatingSystem = function (t) {
    console.log('Android ' + t.name + ' has ' + t.language + ' language.');
};
let Oreo = { name: 'O', language: 'Java' };
OperatingSystem(Oreo);
class SBI {
    loan() {
        return 10;
    }
    save() {
        return 10;
    }
    cityName() {
        return "SANGAMNER";
    }
}
class CANARA {
    loan() {
        return 11;
    }
    save() {
        return 12;
    }
    cityName() {
        return "SANGAMNER";
    }
}
let SBISangamner = new SBI();
console.log(SBISangamner.loan()); // o/p--> 10
console.log(SBISangamner.save()); // o/p--< 10
console.log(SBISangamner.cityName()); // o/p--> SANGAMNER
let CANARASangamner = new CANARA();
console.log(CANARASangamner.loan()); // o/p--> 11
console.log(CANARASangamner.save()); // o/p--> 12
console.log(CANARASangamner.cityName()); // o/p--> SANGAMNER
