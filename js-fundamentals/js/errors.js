// Errors *****************************************************************
console.clear();
// We can create and throw errors in JavaScript
// eg.

const err = new Error("Invalid payment method!");
console.log(err.message);

/**
 * Assignment
Error messages at Textio have Error: in front of them. Convenient, right? Wrong. The devs keep forgetting to add it, so upper management has come up with a brilliant plan. A factory function that takes a string and returns a new Error object with 'Error: ' prepended to the message.

For example:

const err = createError("Boots is hungry");
console.log(err.message);
// Error: Boots is hungry

Surely this will solve all of their problems.

Implement the createError function.
 */

function createError(message) {
  // ?
  return new Error("Error: " + message);
}

const err2 = createError("Boots is hungry");
console.log(err2.message);

// Handling Errors (try/catch) ***************************************************************************************************
console.clear();
// We need to throw errors when thigs doesn't go as expected, like receiving the wrong user and password or trying to use a property of an undefined variable
// eg.

const saiyan = {};
//console.log(saiyan.stage.hairColor); // this is going to throw Uncaught TypeError: Cannot read properties of undefined
console.log("finished"); // this is not going to be printed

// instead we have to use the try/catch block and provide an alternative path when things go wrong.
// eg.

try {
  const saiyan2 = {};
  console.log(saiyan2.stage.hairColor);
} catch (err) {
  console.log(err.message); // If an error occurs in the try section, this line will print the error message
}
console.log("finishes"); // this is going to be printed at the end of the block wether there's an error or not

/**Assignment
One of the calls to getMessageRecord is throwing a text id not found error. Change the code to safely make the function calls within a try-catch block. If an error is raised, print the error message to the console as a string. */

function main() {
  try {
    logObject(getMessageRecord(1));
    logObject(getMessageRecord(2));
    logObject(getMessageRecord(3));
    logObject(getMessageRecord(4));
  } catch (err) {
    console.log(err.message);
  }
}

// don't touch below this line

function getMessageRecord(messageId) {
  if (messageId === 1) {
    return { content: "Welcome to Textio!", timestamp: "2025-01-01T12:00:00Z" };
  }
  if (messageId === 2) {
    return {
      content: "Your order has shipped",
      timestamp: "2025-01-02T12:00:00Z",
    };
  }
  if (messageId === 3) {
    return {
      content: "Reminder: Payment due soon",
      timestamp: "2025-01-03T12:00:00Z",
    };
  }
  throw new Error("text id not found");
}

function logObject(obj) {
  for (const key in obj) {
    console.log(` - ${key}: ${obj[key]}`);
  }
  console.log("---");
}

main();

// Finally ***************************************************************************************************
console.clear();
// We can add the finally block at the end of a try/catch block, this is going to be always executed at the end of the try/catch
//eg.

try {
  const saiyan2 = {};
  console.log(saiyan2.stage.hairColor);
} catch (err) {
  console.log(err.message); // If an error occurs in the try section, this line will print the error message
} finally {
  console.log("This is printed regardless of whether an error is found or not");
}
console.log("finishes"); // this is going to be printed at the end of the block wether there's an error or not

/**
 * Assignment
Try running the code in its current state. Notice how Cleanup complete does not get logged. Fix the code so that Cleanup complete is logged regardless of any errors that may occur.
 */

function cleanup() {
  try {
    throw new Error("Textio processing failed");
  } catch (err) {
    throw new Error("Error in catch block");
  } finally {
    console.log("Cleanup complete");
  }
}

// don't touch below this line

try {
  cleanup();
} catch (err) {
  console.log(err.message);
}

// Throwing Errors ***************************************************************************************
console.clear();
// We can throw errors using the 'throw' statement
// eg. throw new Error("Throwing this new error");

/**
 * Assignment
Textio is integrating with an external nano-messaging service, Xirpy, that strictly enforces a 70-character limit on incoming messages. Complete the sendMessage function, which takes a msg string:

If the message is longer than 70 characters, throw a new Error object with the message: Message is too long
Otherwise, the function should simply return the message.
 */

const sendMessage = (msg) => {
  // ?
  if (msg.length > 70) throw new Error("Message is too long");
  return msg;
};

console.log(
  sendMessage(
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commo"
  )
);
