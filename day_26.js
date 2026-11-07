/*Program 1: for loop से 1 से 10 तक numbers print करें।

Program 2: 10 से 1 तक countdown करें।

Program 3: 1 से 20 तक केवल even numbers print करें। (Hint: i += 2 का उपयोग कर सकते हैं।)

Program 4: "hellow world" को 5 बार print करें।

Program 5: 1 से 5 तक numbers का total निकालें। इसके लिए एक total variable बनाइए और loop के अंदर उसमें i जोड़िए।*/

for(let i=1;i<=10;i++){
    console.log(i);
}

for(let i=10;i>0;i--){
    console.log(i);
}

for(let i=1;i<=20;i++){
    if(i%2==0){
        console.log(i);
    }
}

for(let i=0;i<5;i++){
    console.log("hellow world");
}

let total=0;
for(let i=1;i<=5;i++){
    total+=i;
}