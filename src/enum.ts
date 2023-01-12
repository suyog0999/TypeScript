//string
//number
//array
//boolean
//function
//touple




//string

let firstName:string="Suyog"
console.log(firstName)

// firstName=12  // --> genrate error coz firstName is always string


console.log("***********************************************************************")


//number

let rollNumber: number
rollNumber = 12

//rollNumber="one" // --> genrate error coz rollNumber is always number


console.log("***********************************************************************")

// boolean

let isStudent: boolean
isStudent = true

// isStudent = "false" // --> genrate error coz isStudent is always contain boolean value

let isDoingJob: boolean = false


console.log("***********************************************************************")

// Function with parameter and with return type

function add(x:number,y:number):number{
    return x+y
}
let sum=add(12,13)
console.log(sum)


// Function with parameter and without  return type

function add3(x:number,y:number):void{
    console.log(x+y)
}
add3(12,13)




console.log("*************************************************************************")

// array

//let student=["Suyog","Ajit","Mahesh"]

//let student:string[]

let student: string[] = ["Suyog", "Ajit", "Mahesh"]

student.push('rohit')
console.log(student)

// student.push(100) // --> generate error coz student array is only contain string values


// print length using forEach method

let student1: Array<string> = ['ram', 'sham', "mayur"]

student.forEach((el: string) => {
    console.log(el.length)
})

console.log("*************************************************************************")



//touple => array of fixed length

let info:[string,string,number]
info=['Suyog','Rahane',23]

console.log(info)



console.log("*************************************************************************")



//Enum


enum Bank {
    Manager=1,
    Cashier,
    Clerk,
    jr_Clerk,
    Loan_Officer
    
}
if(Bank.Manager){
    console.log('Give Sign')
}