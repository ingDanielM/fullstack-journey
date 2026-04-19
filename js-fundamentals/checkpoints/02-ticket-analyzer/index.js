// 2. Ticket Analyzer

/**
 * Create a function:

function analyzeTickets(tickets) {}

The function must return an object like this:

{
  totalTickets: 4,
  openTickets: 3,
  closedTickets: 1,
  highPriorityTickets: 2,
  categories: ["VPN", "Outlook", "Password"]
}

Use this array:

const tickets = [
  { id: 1, user: "John", category: "VPN", priority: "High", status: "Open" },
  { id: 2, user: "Maria", category: "Outlook", priority: "Medium", status: "Closed" },
  { id: 3, user: "Carlos", category: "VPN", priority: "Low", status: "Open" },
  { id: 4, user: "Ana", category: "Password", priority: "High", status: "Open" },
];

Rules:

// 1. Do not hardcode the result.
// 2. Use array methods.
// 3. Use Set to get unique categories.
// 4. Return the final analysis object.
// 5. Print the result using console.log().
 */