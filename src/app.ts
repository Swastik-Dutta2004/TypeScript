class customer{
    constructor (public name: string, public age: number,){
    }

    getName(){
        return this.name;
    }
    setName(value: string){
        this.name = value
    }
}

let c1 = new customer("Subhraneel", 25)