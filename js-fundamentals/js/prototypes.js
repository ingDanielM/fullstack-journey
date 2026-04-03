// Prototypes *****************************************************************
console.clear();
// classes are just syntactic sugar for prototypes, or an abstracted way to see prototypes inheritance

/**
 * Assignment
Textio needs a new notification system that uses a new subclass of notification that can both:

send to a single user (regular notifications already do this)
broadcast messages to all users (specific to this new subclass)
Use Object.create to create a new systemNotification object that inherits its prototype from notification.
Write a new method for systemNotification called broadcast that takes a single message string as input and returns:
Broadcast to all users: MESSAGE_GOES_HERE

Where "MESSAGE_GOES_HERE" is the given message string.
 */

const notification = {
  notify(recipient, message) {
    return `Notification for ${recipient}: ${message}`;
  },
};

const systemNotification = Object.create(notification);
systemNotification.broadcast = function (message) {
  return `Broadcast to all users: ${message}`;
};

console.log(systemNotification.broadcast("Hello World!!"));

// Prototype chains *************************************************
console.clear();
// Every Object has a prototype and that prototype can also have another prototype, creating a chain that goes back to the Object.prototype whose prototype is always null

/**
 * Assignment
In Textio, certain features are inherited based on the type of user (e.g., admins, moderators, regular users). They need a quick way to determine if a user has admin privileges or not.

Write a function isAdmin that takes an object and returns whether that object's prototype references the adminUser object.
 */

const pUser = {
  name: "Default User",
  type: "user",
};

const adminUser = Object.create(pUser);
adminUser.type = "admin";

const adminUser2 = Object.create(adminUser);
adminUser2.type = "admin";

function isAdmin(user) {
  return Object.getPrototypeOf(user) === adminUser;
}

console.log(isAdmin(pUser));
console.log(isAdmin(adminUser));
console.log(isAdmin(adminUser2));
