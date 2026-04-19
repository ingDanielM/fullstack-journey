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

// const { moo } = require("./../heifer/moo.js");
// console.log(moo("daniel"));

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

// Strict Mode *************************************************************************
console.clear();
// This mode enables safer JavaScript rules that help catch errors early.

/**
 * Assignment
JavaScript normally lets you get away with all kinds of nonsense, so let's do some JavaScript shenanigans:

Create a new file called strict.js
Assign "moo!" to an undeclared variable and console.log that variable
message = "moo!";
console.log(message);

Run the script
node strict.js

This works just fine, and you should see "moo!" printed to the console! However, if we enable strict mode, this will throw an error instead of silently creating a global variable.

Enable strict mode by adding "use strict"; at the top of the file and run the script again. This time, you should see an error.
With strict.js still throwing an error, run and submit the CLI tests.
 */

/**
 * File is located in js-fundamentals/heifer/strict.js
 * When I assigned a value to an undeclared variable and ran it with the Node.js runtime,
 * it printed the assigned value.
 *
 * I tried again using strict mode, and I received:
 * ReferenceError: message is not defined
 */

// ES6 Modules *************************************************************************
// are the modern JavaScript module system.
// They use export to share code and import to use it in other files.

import { moo } from "./../heifer/mooES6.js";
console.log(moo("daniel")); // 'moo, daniel'

// Node.js Modules *************************************************************************
console.clear();
// Node.js uses CommonJS by default, but it also supports ES6 modules.

/**
 * Assignment
Let's do what the JavaScript system should have done years ago and migrate our code from CommonJS to ES6 modules.

Update your package.json to allow for ES6 modules.
Update moo.js. Replace module.exports = { moo }; with an ES6 export.
Update main.js. Replace const { moo } = require("./moo.js"); with an ES6 import.
Remove 'use strict' from strict.js. With ES6 imports it should still throw an error!
 */

// Done. File located in js-fundamentals/heifer/mooES6.js
// I also modified package.json and added 'type': 'module'

// Browser Modules *************************************************************************
// Modern browsers support ES6 modules using <script type="module">.
// They allow import/export directly in the browser.
// Module scripts are deferred by default, so they run after the HTML has been parsed.

// Default Exports *************************************************************************
// A default export is used to export one main value from a module.
// It is imported without curly braces.

/**
 * This exports two functions. Sometimes, a developer will want to just export one thing, so they can do this:

// math.js

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

export default add;

Then when it's imported, you don't need to use the curly braces:

// main.js

import add from "./math.js"; // no curly braces
 */

// Bundlers *************************************************************************
// Bundlers are tools that take modular source code and transform it into optimized files for production.
// They can combine many files into fewer files, reduce file size, remove unused code,
// split code into smaller parts for faster loading, optimize assets like images and fonts,
// and generate source maps for easier debugging.
// In short, bundlers let developers write organized code while serving fast and efficient files to users.

import { say } from "cowsay";
console.log(say({text: moo("daniel")}));