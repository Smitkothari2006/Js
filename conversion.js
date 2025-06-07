// Conversion of data types in JavaScript

//conversion of string  to number
console.log("conversion of string  to number")
let age = "07"; // String
console.log(age); // Output: 33
console.log(typeof age);

let ageNumber = Number(age); // Convert number to string
console.log(ageNumber);
console.log(typeof ageNumber); // Output: string

/* 
33 => 33
33abc => NaN
Null => 0 (null is converted to 0)
undefined => NaN 
"Smit" => NaN
*/

console.log("")

// conversion of Boolean to number
console.log("conversion of Boolean to number")
let isStudent = true; // Boolean
console.log(isStudent);
console.log(typeof isStudent); // Output: boolean
let isStudentNumber = Number(isStudent);
console.log(isStudentNumber); // Output: true
console.log(typeof isStudentNumber);
/*
here we are converting boolean to number
true => 1
false => 0
*/

console.log("")
//conversion of number to boolean
console.log("conversion of number to boolean")
let bol=0;
console.log(bol);
console.log(typeof bol); // Output: number
let bolBoolean = Boolean(bol); // Convert number to boolean
console.log(bolBoolean); // Output: 1
console.log(typeof bolBoolean);
/*
here we are converting number to boolean
1 => true
0 => false
*/
