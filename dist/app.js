"use strict";
//Arrays
Object.defineProperty(exports, "__esModule", { value: true });
// let arr:number[] = [1,2,3,4,5]
//tuples
//  let arr: [number, string] = [12, "sdwasnjdkd"]
//Enum (Enumarations)
// enum JobsRoles {
//     ADMIN = "Admin",
//     GUST = "Guest",
//     SUPER_ADMIN = "super_Admin"
// }
// enum StatusCode{
//     ABANDONED = "abansbcjbdkcbkj",
//     NOTFOUND = "bcjckclnklcnl"
// }
//Any
// let a; //Here the variable 'a' its type has not defined so by defult it will any.
// a = 12;
// a = "swastik"
//Unknown
// let a; // here also we didn't need to 
// a = 12;
// a = "swastik"
// if (typeof a == "string") {
//     a.toUpperCase();
// }
//Interfaces and type Alliases
//defining Interface
// interface user {
//     name: string,
//     email: string,
//     password: string,
//     gender? : string
// }
// interface SuperUser extends user{
//     adimin: boolean;
// }
// //using interface to define object shapes
// function getDataBase(obj: SuperUser){
//     obj.adimin
// }
// //initializing the value of the property that are going to pass to the upper functions.
// getDataBase({name:"Swastik", email: "duttaswasbdbjkd", password:"sf13235",gender:"male", adimin:true})
class bottleMaker {
    brand;
    price;
    color;
    material;
    constructor(brand, price, color, material) {
        this.brand = brand;
        this.price = price;
        this.color = color;
        this.material = material;
    }
}
let b1 = new bottleMaker("milton", 1200, "black", "steel");
//# sourceMappingURL=app.js.map