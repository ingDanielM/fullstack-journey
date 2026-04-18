// Modules *************************************************************************
console.clear();
// We can define functions in separate JavaScript files,
// export them, and import them wherever they are needed.

/**
 * Assignment
Let's modularize our heifer project! Instead of defining everything in a single file, we'll split functionality into modules.

Create a new file called moo.js.
Define and export a function named moo in moo.js using CommonJS syntax. It should take a name string and return the interpolated "moo". Don't console.log it!
Modify main.js to import and use moo before logging its output.
Run your script with node main.js and confirm it prints:
 */

const { moo } = require("./../heifer/moo.js");
console.log(moo("daniel"));

// CommonJS *************************************************************************
// is an older module system mainly used in Node.js.
// It uses module.exports to export code and require() to import it.

// // Exporting
// // math.js
// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;

// module.exports = {
//   add,
//   subtract,
// };

// // Importing
// // main.js
// const { add, subtract } = require("./math.js");

// console.log(add(1, 2)); // 3
// console.log(subtract(1, 2)); // -1
