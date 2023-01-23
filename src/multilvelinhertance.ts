interface Citizen {
    adharCard:number
}

class GrandFather implements Citizen{
    firstName:string
    lastName:string
    adharCard:number
    constructor(fn:string , ln:string ,adharCard:number){
        this.firstName = fn
        this.lastName = ln
        this.adharCard = adharCard  
    }
}

class Father extends GrandFather {
    constructor(fn:string ,ln:string,adharCard:number){
        super(fn,ln,adharCard)
        
    }
}