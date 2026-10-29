/*budget नाम का variable बनाओ और value 8000 रखो।
totalCost नाम का variable बनाओ और value 6500 रखो।
destination नाम का variable बनाओ और value "Goa" रखो।
isTripCancelled नाम का Boolean variable बनाओ और value false रखो।*/

const budget=8000;
const totalCost=6500;
let destination="goa";
let isTripCancelled=false;

//&& से check करो कि खर्च budget के अंदर है और zero से ज्यादा है।
if(budget>=totalCost&&totalCost>0){
    console.log("totalCost in the budget");
}else{
     console.log("totalCost not in the budget");
}

//|| से check करो कि destination "Goa" या "Manali" है।
if(destination==="goa"||destination=="manali"){
console.log("goa");
}

//! से check करो कि trip cancelled नहीं है।
if(!isTripCancelled){
    console.log("trip is not cancell");
}
else {
    console.log("Trip cannot be confirmed.");
}