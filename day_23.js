/*
1. const destination = "Manali"; बनाओ।
2. switch से destination की value check करो।
3. "Goa" के लिए "Beach trip selected" print करो।
4. "Manali" के लिए "Mountain trip selected" print करो।
5. "Jaipur" के लिए "Historical trip selected" print करो।
6. हर case के बाद उचित break लगाओ।
7. default में "Destination not available" print करो।
8. पहले "Manali" चलाकर देखो, फिर destination को "Jaipur" और "Mumbai" करके output verify करो।
*/

const destination = "manali";
switch (destination) {
    case "goa":
        console.log("Beach trip selected");
        break;
    case "manali":
        console.log("Mountain trip selected");
        break;
    case "jaipur":
        console.log("Historical trip selected")
        break;
    default: console.log("Destination not available");
}