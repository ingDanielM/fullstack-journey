// 1. Array Methods Checkpoint

/**
 * Use this array:

const tickets = [
  { id: 1, user: "John", category: "VPN", priority: "High", status: "Open" },
  { id: 2, user: "Maria", category: "Outlook", priority: "Medium", status: "Closed" },
  { id: 3, user: "Carlos", category: "VPN", priority: "Low", status: "Open" },
  { id: 4, user: "Ana", category: "Password", priority: "High", status: "Open" },
];

Tasks:

// 1. Get only the open tickets.
// 2. Get only the high priority tickets.
// 3. Create an array with only the user names.
// 4. Find Maria's ticket.
// 5. Check if there is at least one VPN ticket.
// 6. Check if all tickets have a status.
// 7. Count how many tickets exist per category using reduce.
// 8. Create a new array with this format:
//    "Ticket #1 - John - VPN - High"

Topics practiced:

filter
map
find
some
every
reduce
template literals
arrays of objects
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

// 1. Get only the open tickets. ***************************************************************************************
function getOpenTickets(ticketsArr) {
  return ticketsArr.filter(({ status }) => status.toLowerCase() === "open");
}

// console.log(getOpenTickets(tickets));

// 2. Get only the high priority tickets. *******************************************************************************
function getHighPriorityTickets(ticketsArr) {
  return ticketsArr.filter(({ priority }) => priority.toLowerCase() === "high");
}

// console.log(getHighPriorityTickets(tickets));

// 3. Create an array with only the user names. ************************************************************************
function createArrayUsernames(ticketsArr) {
  return ticketsArr.map(({ user }) => user);
}
// console.log(createArrayUsernames(tickets));

// 4. Find Maria's ticket. *********************************************************************************************
function getTicketByUser(ticketsArr, searchedUser) {
  return ticketsArr.find(
    ({ user }) => user.toLowerCase() === searchedUser.toLowerCase()
  );
}
// console.log(getTicketByUser(tickets, "maria"));

// 5. Check if there is at least one VPN ticket. ***********************************************************************

function isThereATicketCategory(ticketsArr, searchedCategory) {
  return ticketsArr.some(
    ({ category }) => category.toLowerCase() === searchedCategory.toLowerCase()
  );
}
// console.log(isThereATicketCategory(tickets, "vpn"));

// 6. Check if all tickets have a status. ******************************************************************************
function doesAllTicketsHave(ticketsArr, searchedProperty) {
  return ticketsArr.every((tkt) => tkt[searchedProperty]);
}
// console.log(doesAllTicketsHave(tickets, "status"));

// 7. Count how many tickets exist per category using reduce. **********************************************************

function countTicketsPerCategory(ticketsArr) {
  return ticketsArr.reduce((acc, curr) => {
    if (!acc.has(curr.category)) {
      return acc.set(curr.category, 1);
    } else {
      let count = acc.get(curr.category);

      return acc.set(curr.category, count + 1);
    }
  }, new Map());
}

// console.log(countTicketsPerCategory(tickets));

// 8. Create a new array with this format: ******************************************************************************
//    "Ticket #1 - John - VPN - High"

function getFormattedTickets(ticketsArr) {
  return ticketsArr.map(
    ({ id, user, category, priority }) =>
      `Ticket #${id} - ${user} - ${category} - ${priority}`
  );
}
// console.log(getFormattedTickets(tickets))
