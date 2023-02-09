// function getRandomElement(items:any[]):any {
//     let randomIndex = Math.floor(Math.random()*items.length)
//     return items[randomIndex]
// }
// let numbers = [33,44,55,66,77,88,899,90]
// let colors = ["green","red","black","blue"]
// console.log(getRandomElement(numbers));
// console.log(getRandomElement(colors));


// program 1
function getRandomElement<T>(items:T[]):T {
    let randomIndex = Math.floor(Math.random()*items.length)
    return items[randomIndex]
}
let numbers = [33,44,55,66,77,88,899,90]
let colors = ["green","red","black","blue"]
console.log(getRandomElement<number>(numbers));
console.log(getRandomElement<string>(colors));4



// program 2
// let a2:[number,number] = [11,22]
// function displayOne(a:number,b:number){
//     console.log(a,b)
// }
// displayOne(...a2)

// program 3
// function addObjects<U,V>(obj1:U,obj2:V){
//     return {
//         ...obj1,
//         ...obj2
//     }
// }

// let result = addObjects(
//     {firstName:"suyog"},
//     {lastName:"rahane"}
// )


// function merge<U extends object, V extends object>(obj1:U,obj2:V){
//     return {
//         ...obj1,
//         ...obj2
//     };

// }
// let x11 = merge(
//     {firstName:"suyog"},
//     {lastName:"rahane"}
// )

let q1 = {
    firstName:"suyog",
    lastName:"rahane"
}


function prop<T,K extends keyof T>(obj:T,key:K){
    return obj[key];
}

prop(q1,"firstName")
