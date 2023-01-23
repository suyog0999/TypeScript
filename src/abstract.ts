abstract class Employeeq {
    abstract Fullname(): string;
    abstract salary(): number;

    country(): string {
        return "India"
    }
}


class E1 implements Employeeq{
    Fullname(): string {
       return "Suyog Rahane"
    }
    salary(): number {
        return 500000
    }
    country(): string {
        return "India"
    }
}

