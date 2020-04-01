/* 1 A Variable is a container for a Value 
Variables label and store data in memory - storing info such as username, account no. etc
// You can only do 3 things: Create a variable,  store/update info and reference/'get' info

2 A Variable is Born VAR
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
