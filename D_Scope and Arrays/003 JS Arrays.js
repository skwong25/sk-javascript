/*  1 INTRO: Arrays are lists that store data in JS
- One form is an array literal by wrapping items in []
- Arrays can store 'elements' of all data types, Eg: [1, 2, 3, "hello world", 4.12, true]
- Arrays declared with const are mutable (elements can be changed) - but array cannot be reassigned
- We can access or redefine elements via their 'index' (element's position) like myArray [0] 
- JS arrays are Zero-Indexed (position count starts from 0)*/

let cities = ['NY','HK','LA']
console.log (cities [0]) // Prints 'NY' 

let NY = 'New York'
console.log (NY[6]) // Prints 'r'

cities [2] = 'DE'
console.log(cities) // Prints [ 'NY', 'HK', 'DE' ]

// 2 .length property - numbers of elements in an array accessed using dot notation

const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];

console.log(newYearsResolutions.length);
// Output: 2

// 3 .push() method is a 'destructive array method', 'mutates' the original array
// adds elements to the end of an array

// 4 .pop() method, 'mutates' the original array.
// removes the last element in an array and returns it. Example: 

const newItemTracker = ['item 0', 'item 1', 'item 2'];
const removed = newItemTracker.pop();
//here the removed element is stored in a variable

console.log(newItemTracker); // Output: [ 'item 0', 'item 1' ]
console.log(removed); // Output: item 2

// 5. Other array methods, including non-mutating (NM) array methods 
// Common array methods: .join(), .slice(), .splice(), .shift(), .unshift(), and .concat()

// .shift() - Removes from the front of array
// .unshift('string') - Add element to the front of array
// .slice(start,end+1) - NM! Extracts part of array (index '-1' extracts last element) Eg:

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta'];
console.log(groceryList.slice (1,4)) // Output: [ 'bananas', 'coffee beans', 'brown rice' ]

// .indexOf() - Finds index of an element in array. 

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");

// Revew other array methods here
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// 6. Will mutating an Array within a Function keep the change outside the Function?

let flowers = ["peony", "daffodil", "marigold"]; // 3 elements

function addFlower(arr) {
  arr.push('lily');
} // The function addFlower() has a parameter of arr uses .push() to add a 'lily' element into arr.

addFlower(flowers);
// We call addFlower() with an argument of flowers which will execute the code inside addFlower.

console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']
// We check the value of 'flowers' and it now includes the 'lily' element = the array is mutated! 
// Arrays mutated inside of a function will keep that change even outside the function.
// Called 'pass-by-reference' - passing a function a ref of stored memory and changing it

// 7. Nested Arrays - when an array contains another array. Example:

const nestedArr = [[1], [2, 3]];

// To access elements within a nested array, 'chain' (/add on) bracket notation with index values 
console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2


// -------------- 

// Additional Section! ARRAY DESTRUCTURING 
// Basic variable assignment: 

let basicArray = [1,2,3]; // defined an array

// instead of writing:
let A = basicArray [0];
let B = basicArray [1];
let C = basicArray [2]; 

let [A,B,C] = basicArray; // created 3 x variables with values extracted from the array 
console.log(A); // Output: 1
console.log(B); // Output: 2 
console.log(C); // Output: 3

// This assignment can be SEPERATE from the variable declaration: 

let D,E,F,G;
[D,E] = [4,5]
console.log(D); // Output: 4
console.log(E); // Output: 5

// Variables can be SWAPPED
[D,E] = [E,D]
console.log(D); // Output: 4
console.log(E); // Output: 4

// Variables can be assigned a DEFAULT (as per destructuring objects)
// in the case that a value 'unpacked' from an array is 'undefined'

let F,G,H,J;
[F=5, G=5, H=5, J=5] = basicArray;
console.log(`F = ${F}, G = ${G}, H = ${H}, J = ${J}`);
// Output: F = 1, G = 2, H = 3, J = 5
// J defaulted to the 'fallback' value because no corresponding value existed within basicArray 


// Additional Techniques for Destructuring Arrays here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

// -------------- 


