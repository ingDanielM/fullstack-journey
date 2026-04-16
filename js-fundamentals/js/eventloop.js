// Single threaded **********************************************************************
console.clear();
// JavaScript is single-threaded, which means it can only execute one operation at a time.
// However, it can handle asynchronous operations by delegating tasks to Web APIs.
// Once those tasks are completed, their callbacks are placed in the callback queue,
// and the event loop pushes them to the call stack when it is empty.
// This is why JavaScript is considered non-blocking.

// Non-blocking **********************************************************************
// JavaScript is non-blocking, meaning it does not wait for long operations to complete.
// Instead, it delegates them to Web APIs so it can continue processing other operations on the main thread.
// Once completed, the callback is handled later via the event loop.

/**
 * Assignment
A Go developer joined the Textio team and thought setTimeout would block execution like time.Sleep() in Go. It's possible, but slightly more complicated.

Create a sleep(ms) function that pauses execution for ms milliseconds.
Return a Promise that resolves after the delay.
Use setTimeout(resolve, ms) inside the Promise to schedule the wait.
 */

// function sleep(ms) {
//   // ?
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   })
// }

// await sleep(4000);
// console.log("Sleep finished after 4 seconds!!!")

// The Call Stack *******************************************************************************************************
// is a data structure where JavaScript keeps track of function execution.
// When a function is called, it is added to the stack.
// When it finishes, it is removed from the stack.
// It works in a LIFO order (Last In, First Out).

// Task Queue **********************************************************************************************************
console.clear();
// The task queue is where asynchronous callbacks wait to be executed.
// When the call stack is empty, the event loop takes the first task from the queue
// and pushes it into the call stack.

/**
 * Assignment
There's a bug in Textio's analytics system. An engineer tried creating a deferred log using setTimeout. However, it always logs "success", even on failure!

Fix the bug so the setTimeout is used in the correct place! A helpful senior engineer seems to have whispered "scoping issue" walking by.

The finalizeJob function runs immediately, capturing the initial success value. finalizeJob should be the last function that runs!

The expected output is:

Processing messages: 42
Doing more stuff...
Processed 42 successfully!
---
Processing messages: -1
invalid data: how do we have negative messages??
Failed to process messages!
---
Processing messages: 9001
invalid data: way too many messages
Failed to process messages!
 */

function processMessages(messages) {
  let success = true;
  console.log(`Processing messages: ${messages}`);
  setTimeout(() => {
    finalizeJob(success, messages);
  }, 0);
  if (messages < 0) {
    console.log("invalid data: how do we have negative messages??");
    success = false;
    return;
  }
  if (messages > 100) {
    console.log("invalid data: way too many messages");
    success = false;
    return;
  }

  console.log("Doing more stuff...");
}

function finalizeJob(success, messages) {
  const msg = success
    ? `Processed ${messages} successfully!`
    : `Failed to process messages!`;
    console.log(msg);

}

// don't touch below this line

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

processMessages(42);
await sleep(0);
console.log("---");
processMessages(-1);
await sleep(0);
console.log("---");
processMessages(9001);


// Microtask Queue **********************************************************************************************************
setTimeout(() => {
  console.clear();
}, 0)
// The microtask queue stores high-priority async callbacks (like Promises).
// All microtasks are executed before tasks in the task queue,
// as soon as the call stack is empty.

/**
 * Assignment
Textio's analytics system isn't working. Fix the processAnalytics function by using a Promise to concatenate - Processing: ${data} to final analysis before it's finished.
 */

async function processAnalytics(data) {
  let analysis = "";

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(analysis);
    }, 100);

    setTimeout(() => {
      analysis += " - Finished!";
    }, 0);

    // don't touch above this line

    // ?

    Promise.resolve()
      .then(() => analysis += `- Processing: ${data}`);

    // don't touch below this line

    analysis += "Analyzing...";
  });
}

let analyticsResult = await processAnalytics("Excuse me can I talk to you for a minute");
console.log(analyticsResult);