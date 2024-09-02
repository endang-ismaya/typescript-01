console.log("Typescript Tutorial");

let awesome: string = "ShakeAndBake";
awesome = "something new";
let new_awesome: string = awesome.toUpperCase();
console.log(new_awesome);

// Union Types
let tax: number | string = 19;
tax = 100;
tax = "$50";

let requestStatus: "Pending" | "Success" | "Error" = "Pending";
requestStatus = "Error";
console.log(requestStatus);

// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
