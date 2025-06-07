//Code to learn Variables constants in JavaScript
const myName = "John"; // This is a constant variable and caanot be changed 

let Email = "john@example.com";// This is a variable and can be changed later

var age ="330"; // This is a variable and can be changed later

/*var and let are 2 ways to declare a variable in JS
use let instead of var to avoid the issue of the block and function scope in the future {}*/ 

/*Variales declared with no keyword is also a variable but it is not recommended to use ( let keyword to declrare variable) it as it can lead to unexpected behavior*/

console.table([myName,Email,age]);
// To change the value of a variable, you can simply reassign it

// myName = "Jane";// This will throw an error because myName is a constant

Email = "john.doe@example.com";
age = 31;

//if variable is not assigned a value then it will be undefined
let myAge;
console.table([myName, Email, age, myAge]);
// Note: myName cannot be changed as it is a constant

/*
console.table([]) 
    --> used to display data in a table format in the console.
    -->Displays arrays or objects as a formatted table in the console.
    -->Makes it easier to read structured data.

console.log
    -->Prints messages, variables, or objects as plain text.
    -->Useful for general debugging and output.
*/