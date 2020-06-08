//1 Console is a panel that displays messages
console.log('Location of Codecademy headquarters: 575 Broadway, New York City');
//This prints a string
console.log(40); 
//This prints a value. Note numbers do not require quotations. 

console.log('JavaScript');
//prints the text 'Javascript'
console.log(2011);
//prints the number '2011' 
console.log('Woohoo! I love to code! #codecademy');
//prints the string
console.log(20.49)
//prints the number with decimals

// There are two kinds of comments - single-line // , multi-line /* ... */
// Note that multi-line comments can be mid-code: 
console.log(/*IGNORED!*/ 5);  // Still just prints 5 

/* 2 There are 7 x Primitive Data Types
Number - any number, including decimals
String - Any grouping of characters wrapped in single quotes ‘ … ‘ or double quotes “ … “
Boolean - true or false (only two possible values - on/off switch)
Null - intentional absence of a value null
Undefined - intentional absence of a value undefined
Symbol - Unique identifiers, useful in complex coding. 
Object - Collections of related data  */ 

// 3 Data can be manipulated with operators 
// The built-in arithmetic operators include +, -, *, /, and % (modulo).
console.log(3 + 4); // Prints 7
console.log(5 - 1); // Prints 4
console.log(4 * 2); // Prints 8
console.log(9 / 3); // Prints 3
console.log (10 % 3); // Prints 1

// 4 The 'Add' operator works on text too! This is called String Concatenation.
console.log('hi' + 'ya'); // Prints 'hiya'
console.log('wo' + 'ah'); // Prints 'woah'
console.log('I love to ' + 'code.')
// Prints 'I love to code.' 

// 5 Objects and instances of Data types have Properties, retrieved using the dot operator.
console.log('Hello'.length); // Prints 5

/* 6  Objects and instances of Data types have Methods, via dot operator and following syntax: 
'example string'.methodName() 
Built-in string Methods are listed in Javascript documentation:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
E.g. in syntax of console.log(), console is the object and .log() is the method. */
console.log('hello'.toUpperCase()); // Prints 'HELLO'
console.log('Hey'.startsWith('H')); // Prints true
console.log('    Remove whitespace   '.trim()); // Prints 'Remove whitespace' 

/* 7 Built-in Objects, such as console, are collections of methods and properties that JS provides
These offer useful functionality. e.g. Math is for complex mathematical operations: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math */
console.log(Math.random()); // Prints a random number between 0 and 1
console.log(Math.floor(Math.random()*100)); 
console.log(Math.ceil(43.8)); 
console.log(Number.isInteger(2017)) // Determines whether the passed value is an Integer