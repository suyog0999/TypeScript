// program1

// function add(x,y){
//     console.log(x+y)
// }
// add('2','1')


// =================================================================

// program 2

// function addB(x,y){
//     if(typeof x === "number" && typeof y == "number"){
//         console.log(x+y)
//     }
//     else {
//         console.log('incorrect input')
//     }
// }
// addB(1,30)

//==============================================================




// program 3

function addn(x: number, y: number): void {
    console.log(x + y)
}
//addn('12',14)  // error coz x type is number
addn(10, 5)


//==========================================================================

// Program 4

let nums: number[] = [1, 2, 3, 4, 5]
let names: string[] = ["suyog", "sanika", "pournima"]
console.log(nums)
console.log(names)



//==========================================================================

// program 5
// tuple --> array of fixed length

let roles: [number, string] = [2, "user"]
roles.push('names')


//============================================================================


// program6

// let infornation:object ={
//     firstName:"suyog",
//     lastName:"rahane"
// }
//information.firstName = 1  // error firstname type is string not a number

let information = {
    firstName: "Suyog",
    lastName: "Rahane"
}
console.log(information.firstName)  // Suyog




//=======================================================================

// program 7


let infoormationA: {
    fn: string,
    ln: string
}
infoormationA = {
    fn: "sham",
    ln: 'rahul'
}
console.log(infoormationA)

// o/p-->
// {
//     fn:"sham",
//     ln:'rahul'
// }



//==================================================================================


//  program 8
//  type

type studentA = {
    firstName: string,
    lastName: string,
    age: number,
    skills: string[]
}

let k: studentA = {
    firstName: "Suyog",
    lastName: "Rahane",
    age: 13,
    skills: ["TypeScript", "css", "javascript", "coreJava"]
}
let m: studentA = {
    firstName: "Sagar",
    lastName: "kharde",
    age: 13,
    skills: ["php", "c", "cpp", "coreJava"]
}


//==================================================================



//  program 10 
//  union types

let bb: number | string | boolean;
bb = true
bb = 12
bb = "Shamal"






function cb(x: number | string, y: number | string) {
    if (typeof x == "number" && typeof y == "number") {
        console.log(x + y)
    }
    else {
        Number(x) + Number(y)
    }
}
cb('22', '22')  //44
cb(22, 22)      //44



//=====================================================================



// program 11
// literals 


type country = "india" | "usa" | "mexico"
type studentB = {
    firstName: string,
    lastName: string,
    age: number,
    skills: string[]
    country: country
}

let q: studentB = {
    firstName: "Suyog",
    lastName: "Rahane",
    age: 34,
    skills: ["python", "javScript", "css"],
    country: "india"
}
console.log(q)



//===============================================================



//  program 12 
//  enum
enum BankEmployee {
    admin = 4,
    customer,
    Branch_manager,
    Loan_Officer

}

if (BankEmployee.admin) {
    console.log('I Am Admin')
}



//======================================================================

// program 13
// Function Expression

let sub:Function = function(x:number,y:number):number{
    return  x+y
}
sub(2,3)

//===========================================================

// program 14


type sum = (x:number,y:number) => number
let i:sum

type student{
    sname:string
}
let obj:student={
    sname:"suyog"
}