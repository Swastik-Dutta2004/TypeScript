function abcd(name: string, age:number, cd:(argr: string) => void){
    cd("hey")
}
abcd("Swastik", 20, (argr: string) => {
    console.log("abcd");
    
})