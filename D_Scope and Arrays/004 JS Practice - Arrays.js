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

// Loop over an Array (.forEach)
testArray = [1,2,3,4]
testArray.forEach(function(item){
    item += 1; 
    console.log(item); 
})
console.log(testArray) // output: [1,2,3,4]
// .forEach does not mutate the array (NM)

// Remove from End of Array (.pop())
console.log(testArray.pop()) // returns removed element
console.log(testArray) // output: [ 1, 2, 3]

// Add to End of Array (.push()) - mutates the array via pass-by-referencing
console.log (testArray.push(4)) // output: 4 - returns new LENGTH of the array formed
console.log(testArray) // output: [ 1, 2, 3, 4 ]

console.log("lINE IN THE SAND")

// Remove from Front of Array (.shift())
console.log(testArray.shift()) // Returns removed element: [1]
console.log(testArray) // output: [ 2, 3, 4]

// Adds to Front of Array (.unshift())
console.log(testArray.unshift(1)) // adds element
console.log(testArray) // output: [ 1, 2, 3, 4 ]

console.log("lINE IN THE SAND")

// Add/Remove an Item by Index (.splice(index, howmany, item1, ..., itemX))  
console.log (testArray.splice(0, 3, 7, 6, 5 )) // Returns removed elements: [ 1, 2, 3 ]
console.log (testArray) // Output: [ 7, 6, 5, 4 ]

// Copy An Array (.slice(start,end+1)) - NM! 
console.log(testArray.slice(0,3)) // Returns removed elements [ 7, 6, 5 ]
console.log (testArray) // Output: [ 7, 6, 5, 4 ] because array is not mutated  










