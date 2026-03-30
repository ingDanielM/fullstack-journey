// functions **********************************************
function concat(str1, str2) {
  return str1 + str2;
}

console.log(concat("daniel", " happy birthday!"));

// function hoisting **********************************************
console.clear();
// As long as the function is defined somewhere in the file, it can be called even before the definition

console.log(getLabel(3));

function getLabel(score) {
  if (score >= 4) {
    return "great";
  } else if (score >= 3) {
    return "regular";
  } else {
    return "awful";
  }
}

// Unit tests **********************************************
console.clear();
// A unit test is an automated program that tests a small "unit" of code.

// Multiple return values **********************************************
console.clear();
// Many languages allow multiple values to be returned from a function
// however this does not work in JavaScript
// If we want to return multiple values we have to return an object

function values(a, b) {
  return (a, b);
}
console.log(values(2, 3));
// Wrong: this is only going to return the last value

// Functions as values **********************************************
console.clear();
// functions can be treated like any other data type

function sumNumber(a, b) {
  return a + b;
}

function sumNumbers(a, b, c, sumNumber) {
  const firstResult = sumNumber(a, b);
  const lastResult = sumNumber(firstResult, c);
  return lastResult;
}

console.log(sumNumbers(5, 10, 10, sumNumber));

// Scope **********************************************
console.clear();
// Global scope window.myGlobalVar = 2;
// Module scope <script type="module"></script>
// function scope var
// block scope let or const

function hello() {
  var helloVar = "hello";
  return helloVar;
}

// console.log(helloVar); // helloVar is not defined

// Anonymous functions **********************************************
console.clear();
// They are functions without name. They are functions used once or used for closures

function conversions(converter, a, b, c) {
  const firstConverted = converter(a);
  const secondConverted = converter(b);
  const ThirdConverted = converter(c);
  console.log(firstConverted, secondConverted, ThirdConverted);
}

conversions(
  function (a) {
    return a + a;
  },
  5,
  10,
  50,
);

//exercise
function printReports(intro, body, outro) {
  // ?
  printCostReport(function (message) {
    return message.length * 2;
  }, intro);
  printCostReport(function (message) {
    return message.length * 3;
  }, body);
  printCostReport(function (message) {
    return message.length * 4;
  }, outro);
}

// don't touch below this line

function printCostReport(costCalculator, message) {
  const cost = costCalculator(message);
  console.log(`Message: "${message}" Cost: ${cost} cents`);
}

printReports(
  "Welcome to the Hotel California",
  "Such a lovely place",
  "Plenty of room at the Hotel California",
);

// Default parameters **********************************************
console.clear();
function createContact(
  phoneNumber,
  name = "Anonymous",
  avatar = "default.jpg",
) {
  // ?
  if (!phoneNumber) {
    return "Invalid phone number";
  } else {
    let avatar_filepath = "/public/pictures/" + avatar;
    return `Contact saved! Name: ${name}, Phone number: ${phoneNumber}, Avatar: ${avatar_filepath}`;
  }
}

console.log(createContact("333", "daniel"));

// Pass by value **********************************************
console.clear();
// Pass by value means that when a variable es passed into a function
// that funcion receives a copy of the variable

let x = 5;
increment(x);
console.log(x);
// 5

function increment(x) {
  x++;
  console.log(x);
  // 6
}

// Immediate invocation **********************************************
console.clear();
// The function is defined and then immediately called.
(function greet() {
  console.log("Hello There!");
})();
