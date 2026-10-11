
// 1. Create meaningful variables
const libraryName = "City Central Library";
const bookId = 2045;
const bookPriority = "high";
const bookStatus = "resolved";
const openBookRequests = 5;

console.log("Library Name:", libraryName);
console.log("Book ID:", bookId);
console.log("Priority:", bookPriority);
console.log("Status:", bookStatus);
console.log("Open Book Requests:", openBookRequests);

// 2. Check if open requests are greater than zero
if (openBookRequests > 0) {
    console.log("There are open book requests.");
}

// 3. Check resolved and unresolved status
if (bookStatus === "resolved") {
    console.log("The book request has been resolved.");
} else {
    console.log("The book request is unresolved.");
}

// 4. Handle high, medium, low, and unknown priority
if (bookPriority === "high") {
    console.log("Priority: High. Handle this request first.");
} else if (bookPriority === "medium") {
    console.log("Priority: Medium. Handle this request soon.");
} else if (bookPriority === "low") {
    console.log("Priority: Low. Handle this request when possible.");
} else {
    console.log("Unknown priority. Please check the input.");
}

// 5. Compare status using strict equality
const expectedStatus = "resolved";

if (bookStatus === expectedStatus) {
    console.log("Status matches the expected status.");
} else {
    console.log("Status does not match the expected status.");
}
