// Conditionals **********************************************
let ageVariables = 18;

if (ageVariables > 18) {
  console.log("You are allowed to access!");
} else if (ageVariables > 17) {
  console.log("You are old enough to access!");
} else {
  console.log("You are now allowed to access!");
}

// Comparison operators **********************************************
/* 
=== equal to
!== not equal to
> greater than
< less than
>= greater than or equal to
<= less than or equal to
*/

// equality operators
// == (normal equality) / != (normal inequality)
// === (strict equality) / !== (strict inequality)

// Logical operators **********************************************
console.clear();
// &&
// ||
// !

const hasHighOpenRate = true;
const isRecent = true;
const hasStrongReplyRate = false;
const canBeResent = true;
const isFlaggedAsSpam = false;

const isHighEngagement =
  hasHighOpenRate &&
  isRecent &&
  (hasStrongReplyRate || canBeResent) &&
  !isFlaggedAsSpam;

console.log(`is High Engagement?: ${isHighEngagement}`);

// Switch statements **********************************************
console.clear();
function billingCost(plan) {
  switch (plan) {
    case "basic":
      return 10.0;
    case "pro":
      return 20.0;
    case "enterprise":
      return 50.0;
    default:
      return 0.0;
  }
}

console.log(`The cost for the basic plan is $${billingCost("basic")}`);
console.log(`The cost for the pro plan is $${billingCost("pro")}`);
console.log(
  `The cost for the enterprise plan is $${billingCost("enterprise")}`,
);
console.log(`The cost for a free plan is $${billingCost("free")}`);

// Ternary Operator **********************************************
console.clear();
// const variable = condition ? true : false;

const retryLimit = 10;
const numRetries = 9;

let messageStatus = numRetries < retryLimit ? "Processing" : "Failed";
console.log("message status: " + messageStatus);

// Truthy and Falsy **********************************************
console.clear();
// a truthy value is a value that is considered true when encountered in a boolean context.
// eg

if ("hello") {
  console.log("'hello' is truthy");
}
if (21) {
  console.log("'21' is truthy");
}

if (!"") {
  console.log("'' is Falsy");
}
if (!0) {
  console.log("'0' is Falsy");
}
if (!null) {
  console.log("'null' is Falsy");
}

// common truthy values:
/* 
true
21 (any number that isn't 0)
"hello" (any non-empty string)
[] (an empty array)
{} (an empty object)
function() {} (an empty function)
*/

//common falsy values:
/**
 * false
 * 0
 * "" (an empty string)
 * null
 * undefined
 * NaN (Not a Number)
 */

const userCredits = -2;
if (userCredits > 0) {
  console.log("Sending message...");
} else {
  console.log("Not enough credits.");
}

// Nullish coalescing **********************************************
console.clear();
// if the value on the left of ?? is null or undefined, the value on the right is returned.
let myName = null;
console.log("Welcome back! " + (myName ?? "Anonymus"));

const nameT = "Daniel Morales";
const provider = "AT&T";
const phoneNumber = "555-123-4567";
const suscriptionType = null;

console.log(
  `Creating ${suscriptionType ?? "Guest"} profile for ${nameT} with ${provider} at ${phoneNumber}`,
);
console.clear();
