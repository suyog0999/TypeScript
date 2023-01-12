//1.Number enum
//2.String enum

//=======================================================================

// 1.Number enum

enum days {
    day1 = 5,
    day2,
    day3
}

console.log(days.day1) // o/p--> 5
console.log(days.day3) // o/p--> 7


//==================================================================================

// 2.String enum

enum weekDay {
    day1 = "DAY1",
    day2 = "DAY2",
    day3 = "DAY3"
}

console.log(weekDay.day1)  // o/p--> "DAY1"


//===================================================================================


let info1: { firstName: string, lastName: string } = {
    firstName: "Suyog",
    lastName: "Rahane"
}
console.log (info1)
// o/p-->
// firstName: "Suyog",
// lastName: "Rahane"




//================================================================================




// type

type person = {
    firstName: string,
    lastName: string
}

let sham: person = {
    firstName: "sham",
    lastName: "sharma"

}

let ram: person = {
    firstName: "ram",
    lastName: "sharma"
}

let sita: person = {
    firstName: "sita",
    lastName: "rao"
}


//===============================================================================



// interface

interface person1 {
    firstName: string,
    lastName: String
}

let Suyog: person1 = {
    firstName: "Suyog",
    lastName:"Rahane"
}


//=======================================================================

//union --> print different datatype at a type

let c: number | string | boolean   // here we can declare  c variable in number or in string or in boolean
c = "mansi"
c = 12000
c = true

function add1(code: string | number) {
    console.log(`my address is ${code}`)
}

add1("ramnagri")  // my address is ramnagari
add1(20)          // my address is 20

//============================================

// function sub(x: string | number, y: string | number) {
//     console.log(x + y)
// }


//function

// 1.without return type


function addition(): void {
    console.log('i am addition')
}
addition()


//============================================================  


//2.return type


function add2(): string {
    return "Sagar"
}
console.log(add2())

function addd(): number {
    return 12234
}
console.log(addd())

function add4(): boolean {
    return true
}
console.log(add4())