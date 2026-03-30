// This function prints text in the console
console.log("Testing the console.log('Hello World! :p') function");

// This are the basic data types in JavaScript *************************************************************************************
console.clear();
// boolean
// string
// number (Integer - Float)
// undefined (means it hasn't been given a value)

// eg

let lighterIsON = true;
let enoughBalance = false;

let name = "Daniel Morales";

let age = 21;
let heightM = 1.75;

let password = undefined;

console.log("lighterIsON: " + lighterIsON + " type: " + typeof lighterIsON);
console.log(
  "enoughBalance: " + enoughBalance + " type: " + typeof enoughBalance,
);
console.log("age: " + age + " type: " + typeof age);
console.log("heightM: " + heightM + " type: " + typeof heightM);
console.log("password: " + password + " type: " + typeof password);

// Let and const - variables and constants, block scope - recommended **************************
console.clear();
// var - function scope - not recommended

const message = "Hello World!!!";
let isNewUser = true;

if (isNewUser) {
  const message = "Welcome new user!!!";
  console.log(message);
}

console.log(message);

// Comments *************************************************************************************
console.clear();
// this is a single line comment
/*
This is a 
multiline
comment
*/

// Numbers in JS *************************************************************************************
console.clear();
// All numbers regarding its type is a number.
// There is no distinction between Integer or Float. All are just numbers

// from 0 - 100
let scoreMath = 100;
let scoreScience = 55.5;
let scoreEnglish = 89.2;
let scoreTechnology = 67;

// sum of scores
const sum = scoreMath + scoreScience + scoreEnglish + scoreTechnology;

// average of scores
const average = sum / 4;

console.clear();
console.log("sum of scores: " + sum);
console.log("average of scores: " + average);

// Arithmetic operations
console.clear();

let num1 = 5;
let num2 = 7;

// addition
const addition = num1 + num2;
console.log(num1 + " + " + num2 + " = " + addition);

// subtraction
const subtraction = num1 - num2;
console.log(num1 + " - " + num2 + " = " + subtraction);

// multiplication
const multiplication = num1 * num2;
console.log(num1 + " * " + num2 + " = " + multiplication);

// division
const division = num1 / num2;
console.log(num1 + " / " + num2 + " = " + division);

// Increment and Decrement *************************************************************************************
console.clear();

let num = 1;

console.log("Number before increment: " + num);
num++;
console.log("Number after increment: " + num);

// We can increment te value not only by one number but many more using +=

num += 5;
console.log("New number after incrementing 5: " + num);

// We can also decrement by one
num--;
console.log("Decrement by one: " + num);

// And decrement many numbers at a time
num -= 5;
console.log("Decrement by 5: " + num);

// we can use other arithmetric operators like * and / eg: *= or /=

// Undefined vs Undeclared *************************************************************************************
console.clear();
// we can create an undefined variable by just declaring a variable with a name and don't assigning a value
// An undeclared variable is one that was not declared in the first time. It doesn't exist

// undefined variable
let undefined1;

console.log(typeof undefined1);

// undeclared variable
// console.log(undeclared); // Throw the next error: variables.js:129 Uncaught ReferenceError: undeclared is not defined

// Null vs Undefined *************************************************************************************
console.clear();

/* while undefined is like very nothing , we can see it when we create a variable and we don't assign a value
 null is like kinda nothing, the only way we can see it is if we explicitly assign it to a variable
*/

let nullVariable = null;
let undefinedVariable;

console.log(nullVariable); // This prints 'null'
console.log(typeof nullVariable); // This prints 'object' ¿?

if (undefinedVariable === null) {
  console.log("undefinedVariable was here"); // This line is never read
}
if (nullVariable === null) {
  console.log("nullVariable was here");
}

// Dynamic and Weak *************************************************************************************
console.clear();
// Dynamic: The variable types are only known at runtime
// Weak: the variable type can change depending on the operation you perform like sum a number and a string
// eg. 2 + "2" = '22' (string)

num1 = 5;
num2 = "10";

let sum1 = num1 + num2; // sum = 510

console.log(num1 + " + " + num2 + " = " + sum1 + "; type: " + typeof sum1);

// Same Line Declarations *************************************************************************************
console.clear();

// You can declare multiple variables on the same line

let name1 = "daniel",
  name2 = "morales",
  year = 2026;
console.log(name1 + "\n" + name2 + "\n" + year);

// Strings *************************************************************************************
console.clear();

// We can define a string by using single or double quotes eg. 'Hello' , "Hello"

let email = "daniel@gmail.com";

// print the first letter
console.log("First character: " + email[0]);

// print the last letter
console.log("Last character: " + email[email.length - 1]);

// Template literals - template strings *************************************************************************************
console.clear();

// We can use a variable inside a string with template strings. String is surrounded in backticks
// eg.

let serie = "Breaking Bad";
let serieRating = 10;

console.log(
  `I would like to watch ${serie} because of its high rating of ${serieRating}`,
);
<<<<<<< HEAD
console.clear();
=======
>>>>>>> 408e704be6d3008ead2abfd8a909ce544d1dc9a4
