//if,else if,else
let age=8;
if(age<18){
    console.log("You are a minor.");
}
else if (age>=18 && age<65){
    console.log("You are an audilt");
}
else{
    console.log("you are a senior citizen");
}
console.log("\n");

//Switch
let day =3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Friday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day")
}
console.log("\n");

// for loop
for(let i=0;i<5;i++){
    console.log("Iteration:",i);
}
console.log("\n");


//while loop
let j=0;
while(j<5){
    console.log("While loop iteration:",j);
    j++;
}
console.log("\n");

//Do-while loop
let k=0;
do{
    console.log("Do...while loop iteration:",k);
    k++;
}while(k<5);