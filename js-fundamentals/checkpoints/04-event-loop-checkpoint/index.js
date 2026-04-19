// 4. Event Loop Checkpoint

/**
 * Create 5 different code blocks mixing:

console.log();
setTimeout();
Promise.resolve().then();
async function;
await;

For each block, write the expected output before running the code.

Example:

// Expected output:
// A
// D
// F
// C
// E
// B

console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

async function test() {
  console.log("D");
  await Promise.resolve();
  console.log("E");
}

test();

console.log("F");

Requirements:

// 1. Create 5 examples.
// 2. Add the expected output as comments.
// 3. Run each example.
// 4. Compare your prediction with the real output.
// 5. If you get one wrong, write a short explanation of why.
 */