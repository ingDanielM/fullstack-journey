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
// async - await

function toJSON(data) {
  return data.json();
}

async function getUsers() {
  let data = await fetch("https://fake-json-api.mock.beeceptor.com/users");
  return toJSON(data);
}

let users = await getUsers();
console.log(users);
users.forEach((user) => {
  console.log(user.name);
});
