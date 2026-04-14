// Synchronous vs Asynchronous *********************************************************************************
console.clear();
// Synchronous code is sequential, meaning it runs line by line in order. Each task must finish before the next one starts.

// In Asynchronous code, the main thread executes instructions one by one but delegates long-running functions to be handled in the background. This allows the main thread to keep moving without waiting, achieving concurrency.
//eg

// Synchronous code
console.log("first line");
console.log("second line");
console.log("third line");
// this lines are printed in order: first line, second line, third line

// Asynchronous code

// console.log("first line");
// setTimeout(() => {
//   console.log("second line");
// }, 100);
// console.log("third line");
// setTimeout() is an asynchronous function, this prints first line, then delegates the function and continues with the main thread, so then prints third line, and after this it should be ready to print second line

console.clear();
/**
 * Assignment
To help us visualize how asynchronous code executes, let's practice with an example from Textio. Keep in mind that you probably wouldn't normally use setTimeout to change the order in which text is printed to the console, but it's a good way for us to practice async code.

Update the waiting durations so that text is printed in the following order:

Starting Textio service initialization...
Connecting to SMS providers...
Configuring message routing...
Setting up error handling and retries...
Textio setup complete!
The time to set up a project is 2 seconds, so make sure none of the wait times are greater than 2000 ms.
 */

const textioSetupCompleteWait = 300;
const errorHandlingWait = 200;
const messageRoutingWait = 100;
const smsProvidersWait = 0;

// don't touch below this line

// setTimeout(
//   () => console.log("Textio setup complete!"),
//   textioSetupCompleteWait,
// );
// setTimeout(
//   () => console.log("Setting up error handling and retries..."),
//   errorHandlingWait,
// );
// setTimeout(
//   () => console.log("Configuring message routing..."),
//   messageRoutingWait,
// );
// setTimeout(
//   () => console.log("Connecting to SMS providers..."),
//   smsProvidersWait,
// );

// console.log("Starting Textio service initialization...");

// Promises **************************************************************************************************
console.clear();
// A promise in JavaScript represents the eventual completion (or rejection) of an asynchronous task

// function toJSON(data) {
//   return data.json();
// }

// async function getUsers() {
//   let data = await fetch("https://fake-json-api.mock.beeceptor.com/users");
//   return toJSON(data);
// }

// let users = await getUsers();
// console.log(users);
// users.forEach((user) => {
//   console.log(user.name);
// });

/**
 * Assignment
In Textio, sending messages is an asynchronous process that sometimes takes time to update its status. We'll simulate this by creating a function that returns a Promise which resolves or rejects after a half-second delay.

If you run the starting code as is, it will never exit because the promise doesn't resolve or reject. Just click cancel if that happens.

Complete the updateMessageStatus function that takes three parameters:

messageId — a string representing the message ID.
currentStatus — a string representing the current status of the message (e.g., "Sending").
isDelivered — a boolean indicating whether the message has been delivered.
It should return a Promise immediately that, after a half-second delay, does the following:

If currentStatus is "Sending" and isDelivered is true, resolve with:
Textio Message MESSAGEID has been delivered successfully.

If currentStatus is "Sending" and isDelivered is false, reject with:
Textio Message MESSAGEID is still sending and cannot be marked as delivered.

If currentStatus is anything other than "Sending", resolve with:
Textio Message MESSAGEID status updated to CURRENTSTATUS.

Where:

MESSAGEID is replaced with the value of the messageId parameter.
CURRENTSTATUS is replaced with the value of the currentStatus parameter.
 */

// function updateMessageStatus(messageId, currentStatus, isDelivered) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (currentStatus === "Sending" && isDelivered) {
//         resolve(`Textio Message ${messageId} has been delivered successfully.`);
//       } else if (currentStatus === "Sending" && !isDelivered) {
//         reject(
//           `Textio Message ${messageId} is still sending and cannot be marked as delivered.`,
//         );
//       } else if (currentStatus !== "Sending") {
//         resolve(
//           `Textio Message ${messageId} status updated to ${currentStatus}.`,
//         );
//       }
//     }, 500);
//   });
// }

// // We can use the old .then .catch to receive the response of a promise
// updateMessageStatus("12345", "Sending", false)
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

// // We can also use the new async - await to receive the response of a promise
// console.log(await updateMessageStatus("12345", "Sending", true));

// Await keyword **************************************************************************************************************************************************
console.clear();
// The await keyword is used to wait for a promise to resolve

async function dataLoad() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Datos cargados correctamente");
    }, 1000);
  });
}
async function dataStatus() {
  console.log("Cargando datos...");
  return await dataLoad();
}

try {
  let message = await dataStatus();
  console.log(message);
} catch (err) {
  console.error(err);
}

/**
 * Assignment
Similar to before, the updateMessageStatus function takes a message id, current status and delivered state and returns a Promise.

On line 1, call updateMessageStatus with inputs:

messageId = "M123"
currentStatus = "Sending"
isDelivered = true
Then on line 2, await the returned promise and save the resolved value in a variable called message which will be logged to the console (which is already written on line 5).

For extra difficulty, try combining lines 1 and 2 into one line by awaiting the output of updateMessageStatus.
 */
let message = await updateMessageStatus("M123", "Sending", true);

// don't touch below this line

console.log(message);

function updateMessageStatus(messageId, currentStatus, isDelivered) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (currentStatus === "Sending") {
        if (isDelivered) {
          resolve(
            `Textio Message ${messageId} has been delivered successfully.`,
          );
        } else {
          reject(
            `Textio Message ${messageId} is still sending and cannot be marked as delivered.`,
          );
        }
      } else {
        resolve(
          `Textio Message ${messageId} status updated to ${currentStatus}.`,
        );
      }
    }, 1000);
  });
}

// Async keyword **************************************************************************************************************************************************
console.clear();
// when the function is prefixed with the 'async' keyword it will automatically return a promise

/**
 * Assignment
Go ahead and try to run the code! You'll get an error.

Update the getMessageHash() function so that it can properly await the promise.

Remember: The sha256Hex is an async function, meaning it returns a Promise and we should await it.
 */

async function getMessageHash(sender, content) {
  const hash = await sha256Hex(content);
  return `Sender (${sender}): ${hash}`;
}

// don't touch below this line

async function sha256Hex(str) {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  return hex;
}

const sender = "Ballan";
const content = "So what are we having for lunch?";
console.log(await getMessageHash(sender, content));
