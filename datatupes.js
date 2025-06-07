"use strict"; // Enables strict mode for converting the older version of JavaScript to the latest version

// alert("Welcome to the JavaScript Variables and Constants Tutorial!"); we are using node.js not browser

console.log("Welcome to the JavaScript Variables and Constants!")

// Data types in JavaScript
let myName = "John"; // String
let age = 30; // Number
let isStudent = true; // Boolean
let hobbies = ["reading", "gaming", "coding"]; // Array
let address = { // Object
    street: "123 Main St",
    city: "Anytown",
    country: "USA"
};
let mySymbol = Symbol("Smit"); // Symbol use for unique identifiers
let myBigInt = BigInt(123456789012345678901234567890); // BigInt
let myNull = null; // Null but output is undefined
let myUndefined; // Undefined

console.log([
    myName,
    age,
    isStudent,
    hobbies,
    address,
    mySymbol,
    myBigInt,
    myNull,
    myUndefined
]);