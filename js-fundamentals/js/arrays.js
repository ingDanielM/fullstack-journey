// Arrays *******************************************************************************************
console.clear();
// they are a collection of multiple items inside one variable
// eg. [2, 3, "a", "hello", true];

const names = [];
names.push("daniel"); // ["daniel"]
console.log(names);

/**Assignment
Textio keeps a record of messages that have been successfully sent. Your task is to manage this message history using an array.

Create an empty array called sentMessages.
Push the string Welcome to Textio! into the array.
Use logArray(sentMessages) to print the array.
Push the string Reminder: Your payment is due soon. into the array.
Use logArray(sentMessages) to print the array. */

const sentMessages = [];
sentMessages.push("Welcome to Textio!");
logArray(sentMessages);
sentMessages.push("Reminder: Your payment is due soon.");
logArray(sentMessages);

function logArray(arr) {
  console.log("Array contents:");
  for (const el of arr) {
    console.log(` - ${el}`);
  }
  console.log("=======================================");
}

// Array length **************************************************************************************+
console.clear();
// we can know the current length of an array using .length
const foods = ["burger", "fries", "pizza"];
console.log(foods.length); // Prints: 3

/**Assignment
Textio tracks users who have recently sent messages. Complete the getMostRecentUser function.

If the usernames array is empty, return null.
Otherwise, return the last username in the array. */

console.log("Assignment");
const getMostRecentUser = (usernames) => {
  // ?
  let length = usernames.length;
  return !length ? null : usernames[length - 1];
};

const runCases = [
  { inputArr: ["Frodo", "Gandalf", "Legolas"] },
  { inputArr: ["DoomGuy", "MasterChief", "Geralt"] },
  { inputArr: ["Sephiroth"] },
];

for (const el of runCases) {
  console.log(getMostRecentUser(el.inputArr));
}

// Array spread *****************************************************************************************
console.clear();
// we can use the spread operator as well as objects to merge arrays

const numbers = [1, 2, 3, 4, 5];
const newNumbers = [6, 7, 8, 9, 0];
const numbersUpdated = [...numbers, ...newNumbers];

console.log(numbersUpdated);

/**Assignment
Complete the uploadNewMessages function. It accepts the oldMessages array, which is the database of messages already in the Textio system, and a newMessages array, which are the new messages we need to add to the system.

It should return a new array containing all the messages from both arrays, with the old messages first, followed by the new messages. */

const uploadNewMessages = (oldMessages, newMessages) => {
  // ?
  return [...oldMessages, ...newMessages];
};

// Includes ***********************************************************************************************
console.clear();
// we can use the .includes() method to find if a value exists in the array

const colors = ["red", "green", "black"];
console.log(colors.includes("red")); // true
console.log(colors.includes("orange")); // false

console.log("Assignment");
/**
Let's update Textio's profanity detection to make it a little more robust. Rather than just marking a review as "clean" or "not clean" we need to give it a ranking, which we'll represent as one of 3 strings:

clean: No bad words
dirty: 1 bad word
filthy: 2 or more different bad words
The bad words are:

"dang"
"shoot"
"heck"
Complete the getCleanRank function. It takes an array of words, reviewWords. Check if reviewWords includes the bad words, then return the appropriate ranking. If a word contains special characters (like "d@ng"), it should fool our naive algorithm for now. */

function getCleanRank(reviewWords) {
  // ?
  const badWords = ["dang", "shoot", "heck"];
  let countBadWords = 0;

  for (const word of badWords) {
    if (reviewWords.includes(word)) countBadWords++;
  }

  if (countBadWords === 1) return "dirty";
  else if (countBadWords >= 2) return "filthy";

  return "clean";
}

getCleanRank(["dang", "hello", "nice", "shoot", "heck", "heck"]);

// For...of loops ************************************************************************************
console.clear();
// we can loop over arrays using the for...of loop without having to use index manually

let woods = ["oak", "pine", "maple"];
for (let wood of woods) {
  console.log(wood);
}
// prints:
// oak
// pine
// maple

/**Assignment
Textio still has a profanity problem... who knew people on the internet could be so crass???

Complete the getCleanMessages function. It should return a new array containing only the "clean" messages - messages that don't contain the bad word. It accepts:

messages: an array of strings, where each string is a user message.
badWord: a word that should be filtered out.
Be sure to make the matching case insensitive. */

const getCleanMessages = (messages, badWord) => {
  // ?
  const cleanMessages = [];
  for (const message of messages) {
    if (!message.toLowerCase().includes(badWord)) cleanMessages.push(message);
  }
  return cleanMessages;
};

const inputMessages = [
  "I am a man of constant sorrow",
  "I've seen trouble all my days",
  "Parched and dusty",
  "nuthin' a hot bath won't cure",
];

// expected: ([
//   "I am a man of constant sorrow",
//   "Parched and dusty",
//   "nuthin' a hot bath won't cure",
// ]

// (3)[ result
//   ("I am a man of constant sorrow",
//   "Parched and dusty",
//   "nuthin' a hot bath won't cure")
// ];

console.log(getCleanMessages(inputMessages, "trouble"));

// Slicing arrays ************************************************************************************
console.clear();
// We can use the .slice() method to slice and dice arrays
const fruits = ["apple", "orange", "banana", "pear", "strawberry"];
console.log(fruits.slice(1, 4)); // this includes from the index 0 to the index 4 - 1
// prints an array that contains the items from orange to pear of the original fruits array

/**
 * Assignment
Sometimes we need to search through Textio's server logs for a specific word. Complete the splitLogs function.
It searches the logs input for a message containing the slug.

When it finds one, it returns an object with 3 properties:

before: All the logs before the first log containing the slug (non-inclusive)
after: All the logs after the first log containing the slug (also non-inclusive)
i: The index of the first log containing the slug
If not found, just return -1 for the index and empty arrays for before and after.

The .includes() method will be useful.
 */

function splitLogs(logs, slug) {
  // ?
  for (let i = 0; i < logs.length; i++) {
    if (logs[i].includes(slug))
      return { before: logs.slice(0, i), after: logs.slice(i + 1), i };
  }
  return { before: [], after: [], i: -1 };
}

const logs = [
  "error at line 10",
  "warning at line 15",
  "the dev who wrote line 21 should be fired",
  "debug info",
  "error at line 20",
  "user login",
];

const slug = "debug";

console.log(splitLogs(logs, slug));

// Destructure ************************************************************************************
console.clear();
// We can unpack values from arrays in locations that receive data
//eg.

function validateSum([a, b, c]) {
  return a + b === c;
}
const sumTest = [5, 3, 8];
console.log(validateSum(sumTest));

function powerOf2([a, b, c]) {
  return [Math.pow(a, 2), Math.pow(b, 2), Math.pow(c, 2)];
}
const [num1, num2, num3] = powerOf2([4, 5, 6]);
console.log(`num1: ${num1} ; num2: ${num2} ; num3: ${num3}`);

/**
 * Assignment
Textio maintains a list of messages to send to users. Complete the getPrimaryAndBackupMessages function by using array destructuring.

The function takes an array of messages as input, and returns an object with two properties:

primary: the first message in the array.
backups: an array containing all the remaining messages (if any).
If the array is empty, return an object with primary set to undefined and backups set to an empty array.
 */

function getPrimaryAndBackupMessages(messages) {
  const [primary, ...backups] = messages;

  return messages.length > 0
    ? { primary, backups }
    : { primary: undefined, backups: [] };
}

const messages = [
  "Welcome to Textio!",
  "Your order has shipped",
  "Reminder: Payment due soon",
];

const messages2 = [];

console.log(getPrimaryAndBackupMessages(messages2));
