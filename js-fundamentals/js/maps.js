// Maps ************************************************************************************************
console.clear();
// Maps are collections of key - value pairs when the keys are unique, if we try to create a new entry with the same key, the new key will override the old one

const ssjMaxStages = new Map();
ssjMaxStages.set("goku", "ssj");
ssjMaxStages.set("vegeta", "ssj2");
ssjMaxStages.set("ghojan", "ssj2");
ssjMaxStages.set("goku", "ssj3");

console.log(ssjMaxStages); // Map(3) {'goku' => 'ssj3', 'vegeta' => 'ssj2', 'ghojan' => 'ssj2'}

ssjMaxStages.delete("ghojan");

console.log(ssjMaxStages); // Map(2) {'goku' => 'ssj3', 'vegeta' => 'ssj2'}

/**
 * Assignment
Textio is building a phone directory for its support team. Complete the addToPhonebook function. It takes a phoneNumber and name strings, and phoneBook map as inputs and returns a new map.

Create a copy of the input phoneBook.
Add the input phoneNumber as the key to the map, with the value name.
Return the resulting Map.
 */

function addToPhonebook(phoneNumber, name, phoneBook) {
  const copyPhoneBook = new Map(phoneBook);
  copyPhoneBook.set(phoneNumber, name);
  return copyPhoneBook;
}

const phoneBook = new Map([["555-2222", "Ciri"]]);
const phoneNumber = "555-3333";
const name = "Yennefer";

console.log(addToPhonebook(phoneNumber, name, phoneBook));

// Map Keys ************************************************************************************************
console.clear();
// in JS keys of a Map can be of any type, but is recommended only use strings or numbers.

/**
 * Assignment
Complete the createUserMap function. It takes an array of user objects (each having fname and lname properties) and returns a Map.

Create a new map.
For each user object in the array, add a key-value pair to the map.
Set the key to be the full name: a string concatenating the user object's fname and lname (separated by a space).
Set the value to be the whole user object.
Return the resulting map.
 */

function createUserMap(users) {
  const usersMap = new Map();
  for (let user of users) {
    let fullName = `${user.fname} ${user.lname}`;
    usersMap.set(fullName, user);
  }
  return usersMap;
}

const users = [
  { fname: "Peter", lname: "Parker", promotions: ["promoA"] },
  { fname: "Peter", lname: "Parker", promotions: ["promoB"] },
  { fname: "Daniel", lname: "Morales", promotions: ["promoB"] },
];

console.log(createUserMap(users));

// Map vs. Object ************************************************************************************************
console.clear();
// in JavaScript we can use Objects or Maps for the same purpose
// Some of the benefits of using Maps:
// Ordered: Map keys are ordered in an easy-to-understand way. Objects are not.
// Iterable: Maps are iterable, so you can use for (const [key, value] of myMap) to loop over them. Objects are not (without some extra work).
// Performance: Maps are typically faster when you need to do a lot of insertions and deletions.
// No extra properties: Maps don't have any extra built-in properties like __proto__ or constructor that you might not want.

/**
 * Assignment
Textio discovered a nasty bug: the intern creating the user map set objects (with fname and lname properties) as keys in our user map instead of string keys. Now we can't look up users... big problem!

Complete the fixUserMap function. It takes a Map with object keys mapping to user objects and returns a new fixed Map with string keys.

Create a new Map.
Iterate over the entries in the input Map.
For each entry, create a new key by concatenating the fname and lname properties of the object key (separated by a space).
Set the corresponding user object as the value for this new key in the new Map.
Return the new Map.
For example
 */

function fixUserMap(brokenMap) {
  // ?
  const fixedMap = new Map();
  for (let [key, value] of brokenMap) {
    const newKey = `${key.fname} ${key.lname}`;
    fixedMap.set(newKey, value);
  }
  return fixedMap;
}

const brokenMap = new Map([
  [
    { fname: "Mikasa", lname: "Ackerman" },
    { fname: "Mikasa", lname: "Ackerman", tags: ["Titan Slayer"] },
  ],
  [
    { fname: "Eren", lname: "Jaeger" },
    { fname: "Eren", lname: "Jaeger", tags: ["Attack Titan"] },
  ],
]);
console.log(brokenMap); // Map(2) {{…} => {…}, {…} => {…}}
console.log(fixUserMap(brokenMap)); // Map(2) {'Eren Jaeger' => {…}, 'Mikasa Ackerman' => {…}}
