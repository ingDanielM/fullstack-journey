// Loops **************************************************************
console.clear();
// repeats a block of code until an specified condition is met

//this iterates the number from 1 to 10
console.log("Numbers from 1 to 10");
for (let i = 1; i < 11; i++) {
  console.log(i);
}
// this iterates the name printing one letter a at time
let name = "Daniel Morales";

for (let i = 0; i < name.length; i++) {
  console.log(name[i] + " - " + i);
}

/**Assignment
Complete the bulkSendCost function. It takes as input a number and returns a number.

Calculate the combined cost for all messages. Each message costs 1.0 base fee plus a dynamic fee which increases by 0.01 for each additional message.
For example, for four messages:

Message 1: 1.0 + 0.00
Message 2: 1.0 + 0.01
Message 3: 1.0 + 0.02
Message 4: 1.0 + 0.03
Total: 4.06 */

function bulkSendCost(numMessages) {
  let combinedCost = 0;
  for (let i = 0; i < numMessages; i++) {
    const dynamicFee = i / 100;
    combinedCost += 1 + dynamicFee;
  }
  return combinedCost;
}

console.log(bulkSendCost(2));

// Break *******************************************************
console.clear();
// You can use the keyword break to exit the loop early
//eg.

for (let i = 10; ; i--) {
  console.log(i);
  if (i === 5) break;
}

/**Assignment
Textio can send as many messages as the budget allows. We want to find out how many messages we can send before the total cost of those messages would exceed the given budget.

Complete the maxMessagesWithinBudget function. It should use an infinite loop to keep track of the totalCost and a count of the messages sent.

Use a few variables to keep track of the totalCost, and a count of all the messages sent.
Each message sent costs 1.0 + i * 0.01 where i starts at 0 for the first message, and increases by 1 for each message sent.
Use break to exit the loop when the totalCost + the cost of the current message exceeds the budget
Return the count of messages that can be sent within the budget */

function maxMessagesWithinBudget(budget) {
  // ?
  let totalCost = 0;
  let count = 0;

  for (let i = 0; ; i++) {
    let costMessage = 1 + i * 0.01;

    if (costMessage + totalCost > budget) break;

    totalCost += costMessage;
    count++;
  }
  return count;
}

console.log(maxMessagesWithinBudget(100));

// Continue *******************************************************************************
console.clear();
// The 'continue' keyboard stops the current iteration and continues with the next one

for (let i = 1; i < 11; i++) {
  if (i === 5) continue; // this skips the number 5 and never is printed
  console.log(i);
}

/**
 * Assignment
...I'm gonna break the 4th wall and not even pretend this assignment has anything to do with "Textio". This algorithm just makes use of break and continue, so it's great practice.

Complete the printPrimes function. It should print all of the prime numbers up to and including max. It should skip any numbers that are not prime.

Here's the pseudocode:

for i from 2 to max (inclusive):
  if i is 2:
    i is prime, print it
  if i is even:
    i is not prime, skip to next i
  for j from 3 to the square root of i (inclusive) in steps of 2:
    if i can be evenly divided by j:
      i is not prime, skip to next i
  i is prime, print it
 */

function printPrimes(max) {
  for (let i = 2; i <= max; i++) {
    let isPrime = true;
    if (i === 2) {
      console.log(`${i} is prime`);
      continue;
    }
    if (i % 2 === 0) {
      console.log(`${i} is not prime`);
      continue;
    }
    for (let j = 3; j <= Math.sqrt(i); j += 2) {
      if (i % j === 0) {
        console.log(`${i} is not prime`);
        isPrime = false;
      }
    }
    if (isPrime) console.log(`${i} is prime`);
  }
}

printPrimes(30);

// While ******************************************************
console.clear();
// This loop keeps iterating over a block of code until an specified condition is met

const saiyanStages = {
  name: "base",
  nextStage: {
    name: "ssj1",
    nextStage: {
      name: "ssj2",
      nextStage: {
        name: "ssj3",
      },
    },
  },
};

let currentStage = saiyanStages;
while (currentStage) {
  console.log(currentStage.name);
  currentStage = currentStage.nextStage;
}
console.log("No more stages");

/**
 * Assignment
We charge exponentially more money for each consecutive text sent... because we're a greedy SAAS. Don't judge.

The getMaxMessagesToSend calculates how many messages can be sent by a user based on a multiplier and the total amount they have to spend. The first message costs a penny, and each message after that costs the same as the previous message multiplied by the costMultiplier.

There is a bug in the code! The while loop responsible for accumulating the total cost should keep running until the balance runs out, fix it.
 */

function getMaxMessagesToSend(costMultiplier, maxCostInPennies) {
  let actualCostInPennies = 1.0;
  let maxMessagesToSend = 1;
  let balance = maxCostInPennies - actualCostInPennies;
  while (balance > 0) {
    actualCostInPennies *= costMultiplier;
    balance -= actualCostInPennies;
    maxMessagesToSend++;
  }
  if (balance < 0) {
    maxMessagesToSend--;
  }
  return maxMessagesToSend;
}

// For...in *********************************************************************
console.clear();
// it can be used to loop over all the keys of an object

const user = {
  firstName: "daniel",
  lastName: "morales",
  age: 21,
  1: 0,
  0: 1,
};

// ordered by ; first numeric order, ascending. for non numeric keys chronological order of creation inside the object

for (const key in user) {
  console.log(`key: ${key} : ${user[key]}`);
}

/**
 * Assignment
Tom has been storing Textio's server logs as structured objects. Of course, the properties have changed over time, causing each log entry to have a different set. Thanks, Tom.

Complete the printMatchingProperties function. If a key in the object starts with the given searchTerm, it should print the key/value pair in this format:

Found: <key> -> <value>

Where <key> is the property name and <value> is its corresponding value. For example, this:

printMatchingProperties(
  {
    messageId: "abc123",
    messageText: "Your order has shipped",
    timestamp: "2025-02-06T12:34:56Z",
    sender: "TextioBot",
  },
  "message",
);

should print:

Found: messageId -> abc123
Found: messageText -> Your order has shipped

You can use String.prototype.startsWith() to check if a string starts with a given substring.
 */

const printMatchingProperties = (messageLog, searchTerm) => {
  // ?
  for (const key in messageLog) {
    if (key.startsWith(searchTerm)) {
      console.log(`Found: ${key} -> ${messageLog[key]}`);
    }
  }
};

const messageLogs = [
  {
    messageId: "abc123",
    messageText: "Your order has shipped",
    timestamp: "2025-02-06T12:34:56Z",
    sender: "TextioBot",
  },
  {
    messageId: "def456",
    messageSender: "Textio",
  },
  {
    tomsBrilliantIdea: "Messages now have unique tracking codes",
    trackingCode: "trk-555888",
    loggedAt: "2025-02-07T09:30:00Z",
  },
];

for (const log of messageLogs) {
  printMatchingProperties(log, "message");
  printMatchingProperties(log, "log");
}
