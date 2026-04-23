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

const tickets = [
  { id: 1, user: "John", category: "VPN", priority: "High", status: "Open" },
  {
    id: 2,
    user: "Maria",
    category: "Outlook",
    priority: "Medium",
    status: "Closed",
  },
  { id: 3, user: "Carlos", category: "VPN", priority: "Low", status: "Open" },
  {
    id: 4,
    user: "Ana",
    category: "Password",
    priority: "High",
    status: "Open",
  },
];

function getOpenTickets(ticketsArr) {
  return ticketsArr.filter(({ status }) => status.toLowerCase() === "open");
}

function getClosedTickets(ticketsArr) {
  return ticketsArr.filter(({ status }) => status.toLowerCase() === "closed");
}

function getHighPriorityTickets(ticketsArr) {
  return ticketsArr.filter(({ priority }) => priority.toLowerCase() === "high");
}

function getCategories(ticketsArr) {
  return ticketsArr.map(({ category }) => category);
}

// function analyzeTickets(tickets) {
//   //   {
//   //   totalTickets: 4,
//   //   openTickets: 3,
//   //   closedTickets: 1,
//   //   highPriorityTickets: 2,
//   //   categories: ["VPN", "Outlook", "Password"]
//   // }
//   return {
//     totalTickets: tickets.length,
//     openTickets: getOpenTickets(tickets).length,
//     closedTickets: getClosedTickets(tickets).length,
//     highPriorityTickets: getHighPriorityTickets(tickets).length,
//     categories: [...new Set(getCategories(tickets))],
//   };
// }
// console.log(analyzeTickets(tickets));

function analyzeTickets(tickets) {
  const initialValue = {
    totalTickets: 0,
    openTickets: 0,
    closedTickets: 0,
    highPriorityTickets: 0,
    categories: new Set(),
  };
  const result = tickets.reduce((acc, ticket) => {
    acc.totalTickets++;
    if (ticket.status.toLowerCase() === "open") acc.openTickets++;
    if (ticket.status.toLowerCase() === "closed") acc.closedTickets++;
    if (ticket.priority.toLowerCase() === "high") acc.highPriorityTickets++;
    acc.categories.add(ticket.category);

    return acc;
  }, initialValue);

  return { ...result, categories: [...result.categories] };
}

console.log(analyzeTickets(tickets));
