// Objects *********************************************************************
// Are used to store data in key-value pairs

function createMessage(phoneNumber, message) {
  return {
    phoneNumber: phoneNumber,
    message: message,
    messageLength: message.length,
  };
}

console.log(createMessage("3331234567", "Hello world"));

// If we have an external variable we can use it as the key and the value is going
// to be the value of the variable. eg.

let brand = "apple";
const phone = {
  brand, // this uses the variable brand as de key and its value for the value
  size: 10,
  weighG: 100,
};
console.log(phone.brand); // apple

// we can create or update properties inside an object

phone.size = 11; // Updated from 10 to 11
phone.color = "white"; // created this new property

console.log(phone);

// Assignment
console.clear();
/*In Textio, users create text campaigns to send messages to their contacts. Each campaign needs a unique ID for tracking and management.

Complete the addID function. It takes a campaignRecord object as input and returns it with a newly generated string id property. The id should be created by joining campaignName and senderName with a hyphen (-). For example:

summerSales-adam

Where campaignName and senderName are already properties of the campaignRecord object.*/

function addID(campaignRecord) {
  const id = campaignRecord.campaignName + "-" + campaignRecord.senderName;
  campaignRecord.id = id;
  return campaignRecord;
}

const campaignRecord1 = {
  campaignName: "summerSales",
  senderName: "Daniel M",
};

console.log(addID(campaignRecord1));

// Nesting objects *********************************************************************
console.clear();
// You can objects inside other objects

/*
Assignment
In most systems, "entities" are stored as objects. For example, "campaigns", "messages", and "users" might all be different "entities" within the Textio system.

We store text campaigns as nested JavaScript objects:

{
  name: 'Jurassic Campaign',
  messageCount: 100,
  creator: {
    firstName: 'Ian',
    lastName: 'Malcolm',
    createdAt: '2023-10-01T09:00:00+00:00'
  }
}

Finish the getCampaignCreator function, which takes a campaign object and returns the creator's first name.
*/

function getCampaignCreator(campaign) {
  return campaign.creator.firstName;
}

const campaign1 = {
  name: "Jurassic Campaign",
  messageCount: 100,
  creator: {
    firstName: "Daniel",
    lastName: "Morales",
    createdAt: "2026-03-31T09:00:00+00:00",
  },
};

console.log(getCampaignCreator(campaign1));

// Optional Chaining operator ********************************************************

console.clear();
// if we are unsure if a property exists or just to avoid errors we can use this operator (?.)
//eg.

const motorcycle = {
  brand: "Suzuki",
  model: "Gixxer",
  cc: "150",
};

// console.log(engine.power); //objects.js:106 Uncaught ReferenceError: engine is not defined
console.log(motorcycle.engine?.power); //undefined

// Assignment
/*
Our Textio database is pretty smart - it will only save a value if the value is "truthy" in JavaScript. If it's "falsy", it will just ignore it without errors.

Look at the test cases to see the shape of the campaign object and its nested properties.
Complete the getRegion function. It takes a campaign as input and returns the region string if the campaign has one. Otherwise, it returns undefined (a falsy value).
You should be able to do this in 1 line with the optional chaining operator.
*/

const campaign2 = {
  name: "Welcome Campaign",
  messageCount: 100,
  creator: {
    firstName: "Tim",
    lastName: "Murphy",
    createdAt: "2023-10-01T09:00:00+00:00",
  },
  location: {
    region: "North America",
  },
};

function getRegion(campaign) {
  return campaign.location?.region;
}

console.log(getRegion(campaign2));

// Object methods ********************************************************
console.clear();
//  Objects methods are functions defined on an object. They can access and change the
// properties of the object in question. In the context of a method, we use this to
// refer to the object itself

/* Assignment
Complete the getRemainingMessages() method in the campaign object. The method should calculate and return the number of remaining messages a user can send in the campaign. The calculation is based on the following formula:

remainingMessages = maxMessages - sentMessages
*/

const campaign = {
  getRemainingMessages() {
    return this.maxMessages - this.sentMessages;
  },
  maxMessages: 100,
  sentMessages: 30,
  name: "Welcome Campaign",
};

console.log(campaign.getRemainingMessages());

// test
const user = {
  setfirstName(name) {
    this.firsName = name;
  },
  setLastName(name) {
    this.lastName = name;
  },
  setAge(age) {
    this.age = age;
  },
  firsName: undefined,
  lastName: undefined,
  age: undefined,
};

user.setfirstName("Daniel");
user.setLastName("Morales");
user.setAge(21);

console.log(user);

// Methods Mutate ********************************************************
console.clear();
//Methods can change the properties of their objects
/**
 * Assignment
Complete the sendMessage() method on the campaign object. For now, it should simply increment the campaign's sentMessages counter by 1.
 */

const campaign3 = {
  sendMessage() {
    this.sentMessages++;
  },
  name: "Welcome Campaign",
  maxMessages: 100,
  sentMessages: 30,
};

console.log(
  "Sent messages before using sendMessage(): " + campaign3.sentMessages,
);
campaign3.sendMessage();
campaign3.sendMessage();
campaign3.sendMessage();
console.log(
  "Sent messages after using sendMessage(): " + campaign3.sentMessages,
);

// Strings As Keys ********************************************************
console.clear();
// We can use strings to look for keys on objects using the notation object["key"]
//eg.

const mouse = {
  isVertical: true,
  numberButtons: 2,
  color: "black",
};

console.log(mouse["color"]); // this prints 'black'

/**
 * Assignment
Complete the getProviderCount function. It takes two parameters:

provider (string): The name of the cellular provider (e.g., 'Verizon', 'AT&T').
counts (object): An object where each key is a provider name, and the value is the number of phone numbers associated with that provider.
The function should return the count of phone numbers for the given provider. If the provider doesn't exist in the counts object, return 0.
 */

function getProviderCount(provider, counts) {
  return counts[provider] || 0;
}

counts1 = { Verizon: 5, "AT&T": 3, "T-Mobile": 10 };

console.log(getProviderCount("Verizon", counts1));

// This ********************************************************
console.clear();
// this refers to the context where a piece of code is executed
// - Global context: 'this' refers to the window object
// - Strict mode: 'this' is undefined in the global scope
// - Method context: 'this' refers to the object the method is called on

// Arrow functions ********************************************************
/**
 * Assignment
You just got a new zoomer boss at Textio that thinks fat arrow functions are the best thing since Mr. Beast's last video. He's forcing the team to convert all the classic functions to fat arrow functions.

Convert isSpamMessage to the fat arrow function syntax, but don't change its internal behavior.
 */

// old function
function isSpamMessage(message) {
  if (message.toLowerCase().includes("offer")) {
    return true;
  }
  if (message.toLowerCase().includes("free")) {
    return true;
  }
  return false;
}

// arrow function
const isSpamMessage2 = (message) => {
  if (message.toLowerCase().includes("offer")) {
    return true;
  }
  if (message.toLowerCase().includes("free")) {
    return true;
  }
  return false;
};

// Fat Arrows and This ********************************************************
console.clear();
// Inside an arrow function 'this' refers to the same context as its parent

const author1 = {
  firstName: "Lane",
  lastName: "Wagner",
  getName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(author1.getName());
// Prints: Lane Wagner

const author2 = {
  firstName: "Lane",
  lastName: "Wagner",
  getName: () => {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(author2.getName());
// Prints: undefined undefined
// because `this` still refers to the global object
// and `firstName` and `lastName` are not defined globally

/**
 * Assignment
Now that your boss has forced the change, it's actually caused some bugs. Fix the bug in the sendMessage method by reverting it to a regular method.
 */

const campaign4 = {
  name: "Welcome Campaign",
  maxMessages: 100,
  sentMessages: 30,
  sendMessage() {
    this.sentMessages++;
  },
};

// Spread syntax ********************************************************
console.clear();
// We can use this to move groups of objects properties
// eg.

const engineering_dept = {
  daniel: "Fullstack Engineer",
  kevin: "Frontend Engineer",
  jorge: "Backend Engineer",
};

const talent_dept = {
  delia: "Head of the Talent Acquisition  Department",
  maria: "Talent Acquisition Analyst",
};

const all_employees = { ...engineering_dept, ...talent_dept };

console.log(all_employees);

// Return objects ********************************************************
console.clear();
// In JavaScript we can only return one value from a function
// When we want to return multiple values we return an object with those values

function Math2(a, b) {
  const max = a > b ? a : b;
  const min = a < b ? a : b;
  const pow = a ** b;
  const absA = a < 0 ? a * -1 : a;
  const absB = b < 0 ? b * -1 : b;

  return { max, min, pow, absA, absB };
}

console.log(Math2(-52, -3));

/**
 * Assignment
Fix the bug with the calculateCampaignMetrics so that it returns all the defined metrics correctly.
 */

function calculateCampaignMetrics(sent, opened, clicked) {
  const openRate = opened / sent;
  const clickRate = clicked / sent;
  const conversionRate = clicked / opened;
  return { openRate, clickRate, conversionRate };
}

console.log(calculateCampaignMetrics(42, 21, 12));

// Destructuring
console.clear();
// We can use this function to unpack objects in variables
//eg.

const user2 = {
  firstName: "daniel",
  lastName: "morales",
  isWorking: true,
};

const { firstName, lastName, isWorking } = user2;
console.log(`${firstName} ${lastName} - isWorking? ${isWorking}`);

function printUser2({ firstName, lastName, isWorking }) {
  console.log(
    `${firstName} ${lastName} - isWorking? ${isWorking} - from function`,
  );
}

printUser2(user2);

/**
 * Assignment
Now that you've fixed the output of calculateCampaignMetrics, use destructuring to assign openRate, clickRate and conversionRate from the given call on line 14.
 */

function calculateCampaignMetrics(sent, opened, clicked) {
  const openRate = opened / sent;
  const clickRate = clicked / sent;
  const conversionRate = clicked / opened;
  return {
    openRate,
    clickRate,
    conversionRate,
  };
}

const { openRate, clickRate, conversionRate } = calculateCampaignMetrics(
  1000,
  800,
  200,
);

// Not bound *********************************************************************
console.clear();
// Methods in JavaScript are not bound to their object by default

const tv = {
  brand: "samsung",
  inches: 50,
  model: "q7f",
  getInfo() {
    return `${this.brand} ${this.model} of ${this.inches} inches`;
  },
};

console.log(tv.getInfo());

function review(message, getInfocb) {
  return `${message} ${getInfocb()}`;
}

console.log(review("Check this brand new:", tv.getInfo.bind(tv)));
