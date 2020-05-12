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

// The below code uses methods to access properties via dot notation
console.log(array.length) // prints 4
console.log (array.indexOf(1)) // prints 0  
console.log (array.includes(2) // prints true

// The below code redefines values to elements via index 
const oddToEven = (arr) => {arr[1] = 1; arr[3] = 3;} // or: function oddToEven () {} 
oddToEven(array);
console.log(array);

console.log (nestedArray.indexOf(10))
/* prints -1 (Note that .indexOf returns -1 if an element is not present.)
NOTE: We cannot use array.indexOf('element') on complicated arrays (e.g. nested or 2d arrays)
The below code is to check whether a nested array aleady contains a set of coordinates.
How can we check the position of a value within a nested array? */

// SOLUTION: 
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

/* EXAMPLE of unsuccessful code to check whether coordinates are present in a 2D array: 
if (arr.indexOf([x, y]) == -1) {
    arr.push([x, y]);
} */

// EXAMPLE of successful solution using a 'for' loop:
// LESSON: 'return' statements end the code block  
var arr = [[2,3],[5,8],[1,1],[0,9],[5,7]];
var coor1 = [0, 9];
var coor2 = [1, 2];

function isItemInArray(array, item) {
    for (var i = 0; i < array.length; i++) {
        // This if statement depends on the format of your array
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

// ARRAY METHODS

// Loop over an Array (.forEach) - NM
testArray = [1,2,3,4]
testArray.forEach(function(item){
    item += 1; 
    console.log(item); 
})
console.log(testArray) // output: [1,2,3,4]

// Remove from End of Array (.pop()) - M
console.log(testArray.pop()) // returns removed element [4] meaning you can 'catch' it in a variable
console.log(testArray) // output: [ 1, 2, 3]

// Add to End of Array (.push()) - mutates the array via pass-by-r      eferencing - M 
console.log (testArray.push(4)) // output: 4 - returns new LENGTH of the array formed
console.log(testArray) // output: [ 1, 2, 3, 4 ]

console.log("lINE IN THE SAND")

// Remove from Front of Array (.shift()) - M
console.log(testArray.shift()) // returns removed element [1] meaning you can 'catch' it in a variable
console.log(testArray) // output: [ 2, 3, 4]

// Adds to Front of Array (.unshift()) - M 
console.log(testArray.unshift(1)) // adds element
console.log(testArray) // output: [ 1, 2, 3, 4 ]

console.log("lINE IN THE SAND")

// Add/Remove/Replace an Item by Index (.splice(index, howmany, item1, ..., itemX)) - M 
console.log (testArray.splice(0, 3, 7, 6, 5 )) // Returns removed elements: [ 1, 2, 3 ]
console.log (testArray) // Output: [ 7, 6, 5, 4 ]
// 1st parameter is starting point of the splice
// 2nd parameter is how many elements to remove
// Third parameter onwards allows input of values into that same position 

// Copy An Array (.slice(start,end+1)) - NM
console.log(testArray.slice(0,3)) // Returns removed elements [ 7, 6, 5 ]
console.log (testArray) // Output: [ 7, 6, 5, 4 ] because array is not mutated  
// 1st parameter is start point of the slice
// 2nd parameter is end point of the slice, non-inclusive. 
// If none, method copies to the end of array. 

// Split a String into an Array of strings - returns a new string NM
// str.split( separator , limit)
// the 'seperator' determines where to make split (removing that character)
// the 'limit' determines the number of elements it returns
let story = "blah blah blah"
console.log(story.split(" ", 2)) // Output: ["blah", "blah"]

let alphabet = 'xoxoxoxox';
let newAlphabet = alphabet.split('o').join('x');
console.log(newAlphabet); // xxxxxxxxx

// Concatenates multiple Arrays (.concat()) - NM

// Add to an array (spread operator copies original array and adds to new array)... - NM
const arr1 = ['a', 'b', 'c', 'd', 'e'];
const arr2 = [...arr1, 'f']; // ['a', 'b', 'c', 'd', 'e', 'f']
const arr3 = ['z', ...arr1]; // ['z', 'a', 'b', 'c', 'd', 'e']

// Sorts an Array (.sort([compareFunction])) - NM
// The compareFunction specifies a function that defines the sort order. Otherwise, all values converted to strings and alphbetically. 
// Can be used to sort a 2d array!? Need to understand the compare function! 

// Extract characters from a string (.substring(start, end)) - NM 
let story = "blah blah blah"
console.log(story.substring(10)) // Output: blah
console.log(story)

// Concatenates the values in an array (.join(" ")) - NM
// returns a new string 
let story = ["blah", "blah", "blah"]
console.log(story.join(" ")) // Output: blah blah blah

// Reverse the order of elements in place (.reverse()) - M
let alphabet = ['a', 'b', 'c']
console.log(alphabet.reverse()) // [ 'c', 'b', 'a' ]
console.log(alphabet) // [ 'c', 'b', 'a' ]

// STRING METHODS:

//  .replace() returns a new string with some or all matches of a pattern replaced
//  by a 'replacement'.

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

const regex = /dog/gi;
console.log(p.replace(regex, 'monkey'));
// "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"

console.log(p.replace('dog', 'monkey'));
// Output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"



