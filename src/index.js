//Enum :-
// // let user: [number, string] = [1, "swastik"]
// const enum Size {Small = 1, Medium, Large};
// let mySize :Size = Size.Medium
// console.log(mySize );
//functions :-
// function calculateTax(income: number, taxYear = 2022):number{
//     if (taxYear < 2022) 
//         return income * 1.2
//     return income * 1.3
// }
// calculateTax(10_999, 2022)
//Objects :-
// let employee: {
//     readonly id: number,
//     name: string,
//     retire: (Date: Date) => void
// } = {
//     id:1,
//     name: "Swastik",
//     retire: (Date: Date) => {
//         console.log(Date);
//      }
// }
// Type ALLiases
// type Employee = {
//     readonly id: number,
//     name: string,
//     retire: (Date: Date) => void
// }
// let employee: Employee =  {
//     id: 1,
//     name: "Swastik",
//     retire: (Date: Date) => {
//         console.log(Date);
//     }
// }
//Union Types
