// Sets ************************************************************************
console.clear();
// sets are just a collections of unique values
//eg.

const numbersSet = new Set([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]);
console.log(numbersSet); // Set(5) {1, 2, 3, 4, 5}

numbersSet.add(8);
console.log(numbersSet); // Set(5) {1, 2, 3, 4, 5, 8}

numbersSet.delete(8);
console.log(numbersSet); // Set(5) {1, 2, 3, 4, 5}

/**
 * Assignment
Network conditions and retries are causing Textio to deliver duplicate email messages to our users. Complete the deduplicateEmails function. It takes an array of strings emails and returns a new array containing only unique messages.
 */

function deduplicateEmails(emails) {
  // ?
  return [...new Set(emails)];
}

const emails = [
  "wayne.lagner@dev.boot",
  "heckmann@what.de",
  "heckmann@what.de",
  "a.liar@pants.fire",
];

console.log(deduplicateEmails(emails));

// Set Composition *********************************************************************
console.clear();
// this are most of the useful methods for Sets

const heroes = new Set(["goku", "vegeta", "gohan", "piccolo"]);
const villains = new Set(["vegeta", "freeza", "cell", "piccolo"]);

// Intersection *****************************************************
// prints items that are in common on the two sets
const inters = heroes.intersection(villains);
console.log(inters); // Set(2) {'vegeta', 'piccolo'}

// Difference *****************************************************
// prints items that are in the first set that are not in the second one
const differ = heroes.difference(villains);
console.log(differ); // Set(2) {'goku', 'gohan'}

// Union *****************************************************
// merge sets and return ell elements from both Sets
const uni = heroes.union(villains);
console.log(uni);
