/*1.let count = 1 बनाओ।
2.do...while से 1 से 5 तक numbers print करो।
3.दूसरा program बनाओ जिसमें condition शुरुआत में ही false हो, फिर भी "Welcome to Weekend Escape Planner" एक बार print होना चाहिए।
4.तीसरे program में 5 से 1 तक countdown करो।
5.प्रत्येक loop में condition और increment/decrement सही रखो।*/

let count=1;

do{
console.log(count);
count++;
}while(count<=5);

do{
console.log("Welcome to Weekend Escape Planner");
}while(count<0);

count=5;
do{
console.log(count);
count--;
}while(count!=0);
