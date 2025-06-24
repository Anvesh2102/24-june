//datatypes in javascript
//Data types in javascript include:

//1.primitive Types:
//  -Number: represents both integers and floating point numbers.
//  -String: represents a sequence of characters enclosed in single or double quotes
//  -Boolean: represents a logical entity and can have two values : true or false
//  -Undefined: A variable that has been declared but not assigned a value
//  -Null: Represents the intentional absense of any object value
//  -symbol: A unique immutable primitive value, often used as object property keys
//  -BigInt: Represents integer with arbitary precision useful for large integers

//2.Non-prmitive Types:
//  -Object: A collection of properties, where each property is a key value of pair
//  -Array: A special type of object used to store ordered collection of values
//  -Function: A callable object that can be invoked to perform a specific task

//Example of different data typesin javascript

//primitive data types

let number = 42;//Number
let string = "Hello world!";//String
let boolean = true;//Boolean
let undefinedVar;//Undefined (not assigned a value)
let nullVar = null;//Null
let symbolVar= Symbol("unique");//Symbol (unique identifier)    (often used as object property kes)
let bigIntVar = BigInt(123456789098765);//used for large integers

//Non-primitive data types
let objectVar = {key:"value"};
let arrayVar=[1,2,3,4,5];
let functionVar = function(){return "i am a function"};

let object2 ={
    //adding multiple key value pairs
    name:"Jhone Doe",
    age: 30,
    isEmployed: true,
    hobbies: ["reading","gaming","coding"],
}

//output the datatypes
console.log("Data types in JavaScript:");
console.log("Number:",number);
console.log("String:",string);
console.log("Boolean:",boolean);
console.log("Undefined:",undefinedVar);
console.log("Null:",nullVar);
console.log("Symbol:",symbolVar);
console.log("BigInt:",bigIntVar);
console.log("Object:",objectVar);
console.log("Array:",arrayVar);
console.log("Object2:",object2);