//1.Arithmatic opperators

let a = 10;
let b = 5;
console.log("arithmatic operators:");
console.log("a=",a,",b=",b);

let sum = a+b;
let difference = a-b;
let product = a*b;
let quotient = a/b;
let remainder = a%b;
let exponent = a**b;

console.log("Arithmatic Operators:");
console.log("Sum:",sum);
console.log("Difference:",difference);
console.log("Product:",product);
console.log("Quotient:",quotient);
console.log("Remainder:",remainder);
console.log("Exponent:",exponent);
console.log("\n");// adds a line

//2.Assignment operators
let x=10;
x +=5;
x -=3;
x *=2;
x /=4;
x %=3;
console.log("Assignment operators:");
console.log("x after assignmemts:",x);
console.log("\n");

//3.comparision operators
let isEqual = (a==b);
let isStrictEqual = (a===b);
let isNotEqual = (a != b);
let isStrictNotEqual = (a !== b);
let isGreaterThan = (a>b)
let isLessThan = (a<b)
let isGreaterThanOrEqual = (a>=b);
let isLessThanOrEqual = (a<=b);
console.log("comparision Operators:");
console.log("Is Equal:",isEqual);
console.log("Is Strict Equal:",isStrictEqual);
console.log("Is Not Equal:",isNotEqual);
console.log("Is Strict Not Equal:",isStrictNotEqual);
console.log("Is Greater Than:",isGreaterThan);
console.log("Is Less Than:",isLessThan);
console.log("Is Greater Than Or Equal:",isGreaterThanOrEqual);
console.log("Is Less Than Or Equal:",isLessThanOrEqual);
console.log("\n");

//4.Logical Operator
let andOperator = (a>0 && b>0);
let orOperator = (a>0 || b<0);
let notOperator = !(a<b);
console.log("Logical Operators:");
console.log("And Operators:",andOperator);
console.log("Or Operators:",orOperator);
console.log("Not Operators:",notOperator);
console.log("\n");

//5.BitWise Operator
let bitwiseAnd = a & b;
let bitwiseOr = a | b;
let bitwiseXor = a ^ b;
let bitwiseNot = ~ a;
let leftShift = a<<1
let RightShift = a>>1
console.log("Bitwise Operators:");
console.log("Bitwise And:",bitwiseAnd);
console.log("Bitwise Or:",bitwiseOr);
console.log("Bitwise Xor:",bitwiseXor);
console.log("Bitwise Not:",bitwiseNot);
console.log("Left Shift:",leftShift);
console.log("Right Shift:",RightShift);
console.log("\n")

//6.Ternary
// The ternary operator is a shortand for the `if...else` statement. It takes three operands: a condition, a value if true, and a value if false
let age=18;
let eligibility=(age>=18)?"Eligible to vote" : "Not elgible to vote";
console.log("Ternary Operator:");
console.log("Eligibility:",eligibility);
console.log("\n");

//TypeOf Operator
let variableType = typeof a;
console.log("Typeof Operator:");
console.log("Type of a variable 'a':",variableType);
