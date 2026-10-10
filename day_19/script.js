
// 1. Portal name and ticket-related variables
const companyName = "indiaGO";
const openTickets = 10;
const resolvedTickets = 33;

// 2. Calculate total tickets using one expression
const totalTickets = openTickets + resolvedTickets;

console.log("Portal Name:", companyName);
console.log("Open Tickets:", openTickets);
console.log("Resolved Tickets:", resolvedTickets);
console.log("Total Tickets:", totalTickets);

// 3. Calculations without and with parentheses
const calculation1 = 5 * 2 - 5;
const calculation2 = 5 * (5 - 2);

console.log("Without parentheses:", calculation1);
console.log("With parentheses:", calculation2);
console.log("Are results equal?", calculation1 === calculation2);

// 4. Convert a string number to Number and check typeof
const convertedNumber = Number("45");

console.log("Converted number:", convertedNumber);
console.log("Type after Number():", typeof convertedNumber);

// 5. Convert a number to String and check typeof
const convertedString = String(10);

console.log("Converted string:", convertedString);
console.log("Type after String():", typeof convertedString);

// 6. Convert a number and a string to Boolean
console.log("Boolean(1):", Boolean(1));
console.log("Boolean(0):", Boolean(0));
console.log('Boolean("Rahul"):', Boolean("Rahul"));
console.log('Boolean(""):', Boolean(""));

// 7. Numeric addition vs string concatenation
console.log("Numeric addition:", 10 + 5);
console.log('String concatenation:', "10" + "5");

// 8. NaN example and typeof
const invalidNumber = Number("12a");

console.log("NaN value:", invalidNumber);
console.log("Type of NaN:", typeof invalidNumber);

// 9. Compare string ticket ID and numeric ticket ID
const stringTicketId = "1024";
const numericTicketId = 1024;

console.log("Before conversion:");
console.log("IDs equal?", stringTicketId === numericTicketId);

// Convert the string ID to a number
const convertedTicketId = Number(stringTicketId);

console.log("After conversion:");
console.log("IDs equal?", convertedTicketId === numericTicketId);
