interface Shape {
    getArea:()=>number;
    // OR getArea():number;
}

class Rectangle implements Shape {
    public constructor(protected readonly width:number, protected readonly height:number){}
    public getArea(){
        return this.width * this.height
    }
}

class Square extends Rectangle {
    public constructor(public width:number){
        super(width,width)
    }
    public getExtendedValues(){
        console.log(this.height)
    }
}

