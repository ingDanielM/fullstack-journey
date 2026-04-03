// classes *********************************************************************
console.clear();
// classes are templates for objects.
// eg.

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const user1 = new User("daniel", 21);
console.log(user1);

/* 
Assignment
Textio messages include three properties:

recipient: The person receiving the message.
sender: The person sending the message.
body: The content of the message.
Complete the Message class by adding a constructor that initializes these three properties.
*/

class Message {
  constructor(recipient, sender, body) {
    this.recipient = recipient;
    this.sender = sender;
    this.body = body;
  }
}

const message1 = new Message("Walter", "Daniel", "Hello walter, what's up?");
console.log(message1);

// Private properties *********************************************************************
console.clear();
// all properties of a class are public by default, we can make them private
// by prefixing and declaring the properties at the top of the class

class UserPrivate {
  #name;
  #age;
  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }
  getName() {
    return this.#name;
  }
  getAge() {
    return this.#age;
  }
  setName(name) {
    this.#name = name;
  }
  setAge(age) {
    this.#age = age;
  }
}

const userPrivate1 = new UserPrivate("daniel", 21);
console.log(userPrivate1.name + " " + userPrivate1.age); // undefined
console.log(userPrivate1.getName() + " " + userPrivate1.getAge()); // daniel 21

/* 
Assignment
Textio messages have a createdAt field that stores the date the message was created. In order to avoid accidentally altering the creation date, change the createdAt field from a public field to a private field.
*/

class Message2 {
  #createdAt;
  constructor(recipient, sender, body) {
    this.recipient = recipient;
    this.sender = sender;
    this.body = body;
    this.#createdAt = new Date();
  }
}

const message2 = new Message2("555-1234", "555-5678", "Hi there!");

console.log("Attempting to access the property createdAt...");
console.log("createdAt: " + message2.createdAt);

const messageClass = Message2.toString();
console.log("has private createdAt: " + messageClass.includes("#createdAt"));

// Static methods *********************************************************************
console.clear();
// a static method or property is bound to the class and not the object.
//eg.

class StaticUser {
  #name;
  #age;
  static numUsers = 0;
  constructor(name, age) {
    this.#name = name;
    this.#age = age;
    StaticUser.numUsers++;
  }
  static getUsers() {
    return StaticUser.numUsers;
  }
}

const staticUser1 = new StaticUser("daniel", 21);

console.log(StaticUser.getUsers());

/**
 * Assignment
Add static properties to the Message class:
* Total number of messages
* Total length of all message bodies
Update the Message constructor to:
* Increment the total number of messages.
* Add the length of its body to the total length of all message bodies.
Write a new static getAverageMessageLength method. It should:
* Calculate the average message length using: TOTAL_MESSAGE_LENGTH / TOTAL_MESSAGES
* Use Math.round to round the average message length to two decimal places: Math.round(average * 100) / 100
* Return the rounded average.
 */

class Message3 {
  static totalMessages = 0;
  static totalMessageLength = 0;

  constructor(recipient, sender, body) {
    this.recipient = recipient;
    this.sender = sender;
    this.body = body;
    Message3.totalMessages++;
    Message3.totalMessageLength += body.length;
  }
  static getAverageMessageLength() {
    return (
      Math.round((Message3.totalMessageLength / Message3.totalMessages) * 100) /
      100
    );
  }
}

const message3 = new Message3("david", "daniel", "Hey there!");
const message33 = new Message3("david", "daniel", "12345");
console.log(Message3.getAverageMessageLength());

// Getters and setters *************************************************
console.clear();
// they are special methods for getting and setting property values
//eg.

class GSUser {
  #_name;
  #_age;
  constructor(name, age) {
    this._name = name;
    // this._age = age;
    this.age = age; // call the set function and validate if the age is a positive number
  }

  get name() {
    return this._name;
  }
  get age() {
    return this._age;
  }
  set name(name) {
    this._name = name;
  }
  set age(age) {
    if (age < 0) {
      throw new Error("Age can't be negative");
    }
    if (typeof age !== "number") {
      throw new Error("Age has to be a number");
    }
    this._age = age;
  }
}

const gsuser1 = new GSUser("daniel", 4);
console.log(gsuser1.age);

/**
 * Assignment
Textio's Contact class currently accepts invalid phoneNumbers and doesn't format them well when displayed. Fix this by implementing getters and setters.

Add a setter for phoneNumber that:
Checks if the number is exactly 10 digits long, e.g. 5551234567.
If it's valid, sets the internal _phoneNumber property.
If not, throw an error with the message "Invalid phone number."
Add a getter for phoneNumber that returns the number in this formatted style: "(555) 123-4567"
 */

class Contact {
  constructor(name, phoneNumber) {
    this._name = name;
    this.phoneNumber = phoneNumber;
  }

  get phoneNumber() {
    return `(${this._phoneNumber.substring(0, 3)}) ${this._phoneNumber.substring(3, 6)}-${this._phoneNumber.substring(6, 10)}`;
  }

  set phoneNumber(number) {
    if (number.length !== 10) {
      throw new Error("Invalid phone number.");
    }
    this._phoneNumber = number;
  }

  // ?
}

const contact1 = new Contact("daniel", "5551234567");
contact1.phoneNumber = "5551234562";
console.log(contact1.phoneNumber);

// Inheritance ***********************************************************
console.clear();
// A class can inherit methods and properties from a parent using the 'extends' keyboard
// eg.

class Saiyan {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log("I am a Saiyan");
  }
}

class SuperSaiyan extends Saiyan {
  speak() {
    //this overrides the speak() method of the class Saiyan
    console.log("I am a Super Saiyan");
  }
}

const goku = new SuperSaiyan("goku", 40); // Using the constructor of the class Saiyan
goku.speak(); // I am a Super Saiyan

/* 
Assignment
Create two new classes, SMSSender and EmailSender, that extend the base Sender class. They should both override the sendMessage method.

SMSSender's sendMessage method should log "Sending SMS to RECIPIENT: MESSAGE" to the console.
EmailSender's sendMessage method should log "Sending email to RECIPIENT: MESSAGE" to the console.
RECIPIENT and MESSAGE should be replaced with the recipient field and the given message parameter.*/

class Sender {
  constructor(recipient) {
    this.recipient = recipient;
  }

  sendMessage(message) {
    throw new Error("sendMessage method must be implemented by subclasses");
  }
}

class SMSSender extends Sender {
  sendMessage(message) {
    console.log(`Sending SMS to ${this.recipient}: ${message}`);
  }
}

class EmailSender extends Sender {
  sendMessage(message) {
    console.log(`Sending email to ${this.recipient}: ${message}`);
  }
}

const smssender1 = new SMSSender("daniel");
const emailsender1 = new EmailSender("daniel");

smssender1.sendMessage("Hello There from the SMSSender");
emailsender1.sendMessage("Hello There from the EmailSender");

// Super *****************************************************************
console.clear();
// with this keyword we can call methods from the object's parent

class _Saiyan {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log("I am a Saiyan");
  }

  toString() {
    return `My name is ${this.name}`;
  }
}

class _SuperSaiyan extends _Saiyan {
  constructor(name, age, stage) {
    super(name, age); // super calls the _Saiyan's constructor
    this.stage = stage;
  }
  speak() {
    //this overrides the speak() method of the class Saiyan
    console.log("I am a Super Saiyan");
  }

  toString() {
    return `${super.toString()} and I unlocked the Super Saiyan stage ${this.stage}`;
  }
}

const gokussj = new _SuperSaiyan("goku", 40, 3); // Using the constructor of the class Saiyan
console.log(gokussj.toString()); // My name is goku and I unlocked the Super Saiyan stage 3

/**
 * Assignment
They've decided that Sender subclasses should only be responsible for formatting the message. Both SMSSender and EmailSender should have a formatMessage method that calls the base Sender's formatMessage method, but appends either " [SMS]" or " [Email]" to the end of the message, depending on the subclass. For example:

To: dany@example.com, Message: You up? [SMS]
 */

class _Sender {
  constructor(recipient) {
    this.recipient = recipient;
  }

  formatMessage(message) {
    return `To: ${this.recipient}, Message: ${message}`;
  }
}

class _SMSSender extends _Sender {
  // ?
  constructor(recipient) {
    super(recipient);
  }
  formatMessage(message) {
    return `${super.formatMessage(message)} [SMS]`;
  }
}

class _EmailSender extends _Sender {
  // ?
  constructor(recipient) {
    super(recipient);
  }
  formatMessage(message) {
    return `${super.formatMessage(message)} [Email]`;
  }
}

const smsSender2 = new _SMSSender("daniel");
const emailSender2 = new _EmailSender("daniel");

console.log(smsSender2.formatMessage("hello there!"));
console.log(emailSender2.formatMessage("hello there!"));
