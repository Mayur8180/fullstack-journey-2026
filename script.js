javascript
const siteName = "IT Support Portal";
console.log(siteName);

let isPortalActive = true;

let openTickets = 8;
let resolvedTickets = 2;
let inProgressTickets = 2;
const totalTickets = 12;

// Total tickets by status
let calculatedTotal =
    openTickets + resolvedTickets + inProgressTickets;

console.log("Total tickets: " + totalTickets);
console.log("Calculated total: " + calculatedTotal);

// Check data types
console.log("Data types:");
console.log(typeof isPortalActive);
console.log(typeof totalTickets);
console.log(typeof siteName);

// Ticket calculations
console.log("Unresolved tickets: " +
    (totalTickets - resolvedTickets));

console.log("In-progress tickets: " + inProgressTickets);

console.log("Half of total tickets: " + (totalTickets / 2));

console.log("Multiplication of ticket counts: " +
    (openTickets * resolvedTickets * totalTickets * inProgressTickets));

console.log("Remainder: " + (totalTickets % calculatedTotal));

// Comparison operators
console.log(
    "In-progress tickets greater than resolved tickets: " +
    (inProgressTickets > resolvedTickets)
);

console.log(
    "In-progress tickets equal to resolved tickets: " +
    (inProgressTickets === resolvedTickets)
);

console.log(
    "Open tickets not equal to total tickets: " +
    (openTickets !== totalTickets)
);

// Validate ticket counts
console.log("Ticket count is valid: " +
    (calculatedTotal === totalTickets));
