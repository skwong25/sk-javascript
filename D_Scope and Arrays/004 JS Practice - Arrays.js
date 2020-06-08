/* The below code is to practice Arrays including:
- creating arrays 
- accessing an element via index
- redefining an element via index  
- using methods
    - .length property
    - .indexOf() to find index of an element
- that mutating an array within an function maintains the change outside the function 
- creating nested arrays and how to access elements */

let array = [1, 2, 3, 4]
let nestedArray = [[5, 6], [7, 8], [9, 10]]
let evenNumbers = `Even numbers are ${array[1]}, ${array[3]}, ${nestedArray [0][1]}, ${nestedArray [1][1]}, ${nestedArray [2][1]}.`
console.log (evenNumbers); 

// Methods to access properties via dot notation
console.log(array.length) // prints 4
console.log (array.indexOf(1)) // prints 0  
console.log (array.includes(2) // prints true

// Redefine values to elements via index 
const oddToEven = (arr) => {arr[1] = 1; arr[3] = 3;} // or: function oddToEven () {} 
oddToEven(array);
console.log(array);

console.log (nestedArray.indexOf(10))
/* prints -1 (Note that .indexOf returns -1 if an element is not present.)
NOTE: We cannot use array.indexOf('element') on complicated arrays (e.g. nested or 2d arrays)


// --------------


QUESTION A : How can we check the position of a value within a nested array? 
SOLUTION: A nested 'for' loop checks whether a nested array contains a given value */
function checkTen (array, value) {
    for (let a = 0; a < array.length; a++) {
        for (let b = 0; b < 2; b++) {
        if (array[a][b] === value) {
            console.log (`Index position of ${value} is [${a}][${b}]`); 
            return true;
        }  
    } 
    } console.log ("Not present"); return false;  
} 

checkTen (nestedArray, 10)
// output: Index position of 10 is [2][1] 

// QUESTION [A,A] : How can we check the position of given coordinates within an array?

/* EXAMPLE of unsuccessful code to check whether coordinates are present in a 2D array: 
if (arr.indexOf([x, y]) == -1) {
    arr.push([x, y]);
} */

// SOLUTION: A nested 'for' loop (LESSON: rem to 'return' statements at end of a code block!)  
var arr = [[2,3],[5,8],[1,1],[0,9],[5,7]];
var coor1 = [0, 9];
var coor2 = [1, 2];

function isItemInArray(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i][0] == item[0] && array[i][1] == item[1]) {
            return true;   // Found it
        }
    }
    return false;   // Not found
}

// Test coor1
console.log("Is it in there? [0, 9]", isItemInArray(arr, coor1));   // True

// Test coor2
console.log("Is it in there? [1, 2]", isItemInArray(arr, coor2));   // False

/* Then
if (!isItemInArray(arr, [x, y])) {
   arr.push([x, y]);
} */

// --------------


// ARRAY METHODS >>>
// (for iterators see 004 JS Iterators Summary)

// .pop() - Remove from End of Array M
let removedElement = testArray.pop() // returns removed element [4] 
console.log(testArray) // prints: 1,2,3 

// .push() - Add to End of Array M 
let newLength = testArray.push(10) // returns new length 4 (testArray.length after mutation)
console.log(testArray) // prints: [ 1, 2, 3, 10 ]

// .shift() - Remove from Front of Array M
let removedElement = testArray.shift() // returns removed element [1]
console.log(testArray) // output: [ 2, 3, 4]

//.unshift() - Adds to Front of Array M 
let newLength = testArray.unshift(0) // returns new length 5 (testArray.length after mutation)
console.log(testArray) // output: [ 0, 1, 2, 3, 4 ]

// .reverse() - Reverse order of elements in place M
let alphabet = ['a', 'b', 'c']
console.log(alphabet.reverse()) // [ 'c', 'b', 'a' ]
console.log(alphabet) // [ 'c', 'b', 'a' ]

// .join(" ") - Concatenates values of an array, array > string -  NM
let question = ["who", "am", "I", "?"]
console.log(question.join(" ")) // Returns a string: Who am I? 

// --------------

// .concat() - Concatenates Arrays NM 
let joinedArrays = arr2.concat(arr3); ['a', 'b', 'c', 'd', 'e', 'f','z', 'a', 'b', 'c', 'd', 'e' ]

// Spread operator '...' - Adds values to existing array, returns new array ) NM
const arr1 = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['z', ...arr1, 'f']; // ['z','a', 'b', 'c', 'd', 'e', 'f'] 

// NOTE! Use .concat() with defined array variables. Use SO with individual values. 
// When argument is not an array - concat treats values as a whole, SO tries to iterate through
// Examples:  

x = 99;

console.log(a.concat(x));   // [1, 2, 3, 99]
console.log([...a, ...x]);  // TypeError: x is not iterable

a = [1, 2, 3]
x = 'hello';

console.log(a.concat(x));  // [ 1, 2, 3, 'hello' ]
console.log([...a, ...x]); // [ 1, 2, 3, 'h', 'e', 'l', 'l', 'o' ]


// --------------


// .splice() - Add/Remove/Replace Item by Index M
// syntax: .splice(startIndex, howmanytoremove, addElement1, addElement2)
let arrayOfRemoved = testArray.splice(0, 4, 'A','B','C') // Returns array of removed elements: [ 1, 2, 3, 4 ]
console.log (testArray) // Output: [ 'A','B','C' ]
// 1st parameter is starting point of the splice
// 2nd parameter is how many elements to remove
// Third parameter onwards allows input of values into that same position 

// .slice(start,end+1) - Copy Part/All of Array NM
let slicedArrayInHalf = testArray.slice(0,2)) // Returns array copy of 'sliced' elements [ 1, 2 ]
// 1st parameter is start point of the slice
// 2nd parameter is end point of the slice, non-inclusive. 
// If none, method copies to the end of array. 

// .sort(compareFunction) - Sorts Array as strings in ascending, alphabetical order NM
// If we want values sorted numerically, the compareFunction is required to define sort order. 
// arr.sort(function(a, b){return a-b}) - ascending
// arr.sort(function(a, b){return a-b}) - descending


// --------------


// STRING METHODS:

//  .replace() returns a new string with some or all matches of a pattern replaced
//  by a 'replacement'.

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

const regex = /dog/gi;
console.log(p.replace(regex, 'monkey'));
// "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"

console.log(p.replace('dog', 'monkey'));
// Output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

// Split a String into an Array of strings - returns a new string NM
// str.split( separator , limit)
// the 'seperator' determines where to make split (removing that character)
// the 'limit' determines the number of elements it returns
let story = "blah blah blah"
console.log(story.split(" ", 2)) // Output: ["blah", "blah"]

let alphabet = 'xoxoxoxox';
let newAlphabet = alphabet.split('o').join('x');
console.log(newAlphabet); // xxxxxxxxx

// Extract characters from a string (.substring(start, end)) - NM 
let story = "blah blah blah"
console.log(story.substring(10)) // Output: blah
console.log(story)