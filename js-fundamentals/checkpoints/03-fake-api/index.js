// 3. Fake API with Promises

/**
 * Create a function:

function fetchTicketById(id) {}

It must simulate an API request using setTimeout.

Use this data:

const tickets = [
  { id: 1, user: "John", issue: "VPN not connecting" },
  { id: 2, user: "Maria", issue: "Outlook not opening" },
  { id: 3, user: "Carlos", issue: "Password reset required" },
];

Requirements:

// 1. The function must return a Promise.
// 2. If the ticket exists, resolve the ticket.
// 3. If the ticket does not exist, reject with an Error.
// 4. Consume the function using .then() and .catch().
// 5. Consume the same function using async/await and try/catch.
// 6. Test it with an existing ID and with a non-existing ID.
 */