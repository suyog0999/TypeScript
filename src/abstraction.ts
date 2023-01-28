// abstraction
// we dont create an object for abstract class

abstract class Human {
    public abstract displayName():string;
    public displayCountryName():string {
        return "India"
    }
}

class PersonL extends Human {
    public  displayName():string {
        return "Suyog Rahane"
    }
    public  displayCity():string {
        return "Sangamner"
    }
}

let ab = new PersonL()
console.log(ab.displayCity())        //o/p--> Sangamner
console.log(ab.displayCountryName()) //o/p--> India
console.log(ab.displayName())        //o/p--> Suyog Rahane