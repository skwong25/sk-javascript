/* 1 A Variable is a container for a Value 
Variables label and store data in memory - storing info such as username, account no. etc
// You can only do 3 things: Create a variable,  store/update info and reference/'get' info

2 A Variable is Born VAR - used in pre-ES6 versions of JS.
The keyword 'var' declares a new variable 'myName', using standard convention 'camel casing'
The variable 'myName' is 'initialised' with the value of 'Arya. 

var myName = 'Arya';
console.log(myName);
// Output: Arya

/* BUT Variables:
- cannot start with numbers
- are case sensitive 
- cannot be the same as keywords a la:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords 
- the mysteries of 'var' explained:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var */

// 3  A Variable is Reassignable LET
// The let keyword signals that the variable can be reassigned a different value. 
let meal = 'Enchiladas';
console.log(meal); // Output: Enchiladas
meal = 'Burrito';
console.log(meal); // Output: Burrito

// Note that a variable declared without a value, automatically initialises with the value 'undefined'  
let price;
console.log(price); // Output: undefined
price = 350;
console.log(price); // Output: 350

// 4  A Variable is nonReassignable CONST
const myName = 'Gilberto';
console.log(myName); // Output: Gilberto

/* 5 Mathematical Assignment Operators (-+, -=, *=, and /= )
Use operators to calculate new values and assign them to variables */

let w = 4;
w += 1; // Can be written as w = w + 1
console.log(w); // Output: 5

let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Output: 15

let y = 50;
y *= 2; // Can be written as y = y * 2
console.log(y); // Output: 100

let z = 8;
z /= 2; // Can be written as z = z / 2
console.log(z); // Output: 4

// 6 Increment (++) & Decrement (--) Operator 

a++; // Can be written as a = a + 1
b--; // Can be written as b = b - 1

// 7 String Concatenation with Variables

let myPet = 'armadillo';
console.log('I own a pet ' + myPet + '.'); 
// Output: 'I own a pet armadillo.'

// 8 String Interpolation biggest benefit is readability of the code
// In ES6, template literals use backticks ` and ${} to interpolate values into a string.

let myName = 'Suzanna'
let myCity = 'Dresden'

console.log(`My name is ${myName}. My favorite city is ${myCity}.`)
// Output: My name is Suzanna. My favorite city is Dresden.

// / Typeof Operator returns the data type (as a string) of a value.

const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string

const unknown2 = 10;
console.log(typeof unknown2); // Output: number

const unknown3 = true; 
console.log(typeof unknown3); // Output: boolean


