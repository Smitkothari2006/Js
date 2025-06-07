//Operations on the data
"use strict"; 

// Addition, Subtraction, Multiplication, Division, Modulus, Exponentiation
console.log("Addition, Subtraction, Multiplication, Division, Modulus, Exponentiation");
let a = 10;
let b = 5;
let addition = a + b; // Addition
let subtraction = a - b; // Subtraction
let multiplication = a * b; // Multiplication
let division = a / b; // Division
let modulus = a % b; // Modulus (Remainder)
let exponentiation = a ** b; // Exponentiation (Power)

console.table({
    a,
    b,
    addition,
    subtraction,
    multiplication,
    division,
    modulus,
    exponentiation
});

// Increment, Decrement, Assignment Operators
console.log("Increment, Decrement, Assignment Operators");
let x = 10;
let y = 5;
console.table({
    x,
    y
});

let incrementX = x++; // Increment (Postfix)
let decrementY = y--; // Decrement (Postfix)
let assignX = x += 2; // Assignment with addition
let assignY = y -= 2; // Assignment with subtraction
console.table({
    x,
    y,
    incrementX,
    decrementY,
    assignX,
    assignY
});

// Comparison Operators, Logical Operators
console.log("Comparison Operators, Logical Operators");
let num1 = 10;
let num2 = 20;

let isEqual = num1 == num2; // Equality
let isStrictEqual = num1 === num2; // Strict Equality
let isNotEqual = num1 != num2; // Inequality
let isStrictNotEqual = num1 !== num2; // Strict Inequality
let isGreaterThan = num1 > num2;
let isLessThan = num1 < num2; // Less than
let isGreaterThanOrEqual = num1 >= num2; // Greater than or equal to
let isLessThanOrEqual = num1 <= num2; // Less than or equal to
let andOperator = (num1 > 5) && (num2 < 30); // Logical AND
let orOperator = (num1 < 5) || (num2 > 15); // Logical OR
let notOperator = !(num1 === num2); // Logical NOT

console.table({
    num1,
    num2,
    isEqual,
    isStrictEqual,
    isNotEqual,
    isStrictNotEqual,
    isGreaterThan,
    isLessThan,
    isGreaterThanOrEqual,
    isLessThanOrEqual,
    andOperator,
    orOperator,
    notOperator
});

// Ternary Operator, Typeof Operator, Instanceof Operator
console.log("Ternary Operator, Typeof Operator, Instanceof Operator");
let age = 18; // Example age
let canVote = (age >= 18) ? "Yes" : "No"; // Ternary Operator
let typeOfAge = typeof age; // Typeof Operator
let isStringInstance = age instanceof String; // Instanceof Operator
console.table({
    age,
    canVote,
    typeOfAge,
    isStringInstance
});