// // let user: [number, string] = [1, "swastik"]

// const enum Size {Small = 1, Medium, Large};
// let mySize :Size = Size.Medium
// console.log(mySize );


function calculateTax(income: number, taxYear = 2022):number{
    if (taxYear < 2022) 
        return income * 1.2
    return income * 1.3
    
}

calculateTax(10_999, 2022)