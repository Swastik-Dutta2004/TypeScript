function abcd(arg) {
    if (typeof arg === "number") {
        return ("Number");
    }
    else if (typeof arg === "string") {
        return "String";
    }
    else {
        console.log("Chala jah BSDK");
    }
}
abcd(2004);
abcd("swastik");
