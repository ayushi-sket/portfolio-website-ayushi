// let, const, var

var city = "Delhi";
let age = 18;
const country = "India";

console.log(city);
console.log(age);
console.log(country);

// Full Name

let firstName = "Ayushi";
let lastName = "Negi";

let fullName = firstName + " " + lastName;

console.log(fullName);

// String vs Number

let str = "100";
let num = 100;

console.log(typeof str);
console.log(typeof num);

// Positive Negative Zero

let number = 5;

if(number > 0){
    console.log("Positive");
}
else if(number < 0){
    console.log("Negative");
}
else{
    console.log("Zero");
}

// Voting Eligibility

let userAge = 18;

if(userAge >= 18){
    console.log("Eligible to Vote");
}
else{
    console.log("Not Eligible");
}

// Even or Odd

let n = 7;

if(n % 2 === 0){
    console.log("Even");
}
else{
    console.log("Odd");
}

// Greater Number

let a = 10;
let b = 20;

if(a > b){
    console.log(a + " is greater");
}
else{
    console.log(b + " is greater");
}

// Function Add

function add(x, y){
    return x + y;
}

console.log(add(5, 10));

// Function Greet

function greet(name){
    return "Hello " + name;
}

console.log(greet("Ayushi"));

// Function Square

function square(num){
    return num * num;
}

console.log(square(5));

// Function Even/Odd

function checkEvenOdd(num){
    if(num % 2 === 0){
        return "Even";
    }
    return "Odd";
}

console.log(checkEvenOdd(8));