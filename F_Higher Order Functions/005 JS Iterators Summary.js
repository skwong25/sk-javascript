//   06. ITERATION DOCUMENTATION >>

/* Other built-in Iteration methods are to be found here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods

1. short definition
2. block with correct syntax
3. parameters accepted and required
4. return value of the function
5. extended definition
6. example of use
7. other info
// ----------------
* codecademy exercise 1:  - EXAMPLES: */

function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true

// Or shorter syntax using arow functions:

[2, 5, 8, 1, 4].some(x => x > 10);  // false

/* ----------------


//  07. CHOOSING THE RIGHT ITERATOR METHOD >> 


.some()   
tests whether at least one element in the array passes test implemented by provided function. 
Returns BOOLEAN.

.every()  
tests whether all elements in the array pass the test implemented by the provided function. 
Returns BOOLEAN. 

.filter() 
filters through original array, every element that evaluates true is passed to the new array. 
Returns NEW ARRAY. NM.

.map() 
executes the same code for each element of array it iterates over (used to transform data)
Returns NEW ARRAY. NM. 

.forEach()
executes the same code for each element of array it iterates over
Returns UNDEFINED. NM.

.findIndex()
finds index of the first element that evaluates to true in the callback function
Returns INDEX NUMBER. Returns -1 if none found. 

.reduce ( accumulator, currentValue )
Iterates through the array with an accumulative function and running 'count' 
Returns SINGLE VALUE. */


// ----------------


//   08. FINAL EXAMPLES  >> 


// .SOME()

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some((word) => {
  return word.length < 6;
})); // Output: true
// .some() checks if any of the words in 'words' array are less than 6 characters long
// remember to include the RETURN


// .FILTER()

const interestingWords = words.filter((word)=>{
  return word.length >= 6; 
}); 

console.log (interestingWords); // Output: [ 'unique', 'uncanny', 'oxymoron' ]
// .filter() saves all the words that are longer than 5 characters into new array 'interestingWords'


// .EVERY()

console.log(interestingWords.every(word => word.length > 5 )); // Output: true
// .every() checks that ALL words in 'interestingWords' are longer than 5 characters 


// .MAP()
const doubleWord = words.map((word)=> {
  return word + word; 
}) 

console.log(doubleWord);
// output: 'uniqueunique', 'uncannyuncanny', 'piquepique', 'oxymoronoxymoron', 'guiseguise'
// .map concatenates each element with the same again, returns new array 'doubleWord'.


// .FOREACH()
doubleWord.forEach((word) => {
 console.log(word[0]);
})
// output:'u','u','p','o','g'
// .forEach() prints the first index for each word it iterates over


// .FINDINDEX() 
const startsWithP = doubleWord.findIndex((num) => {
  return num[0] === 'p';
})

console.log(startsWithP) // Output: 2 
// .findIndex() prints the index for the first word in the array that begins with P


//.REDUCE()
const theLastWord = doubleWord.reduce((accumulator, word, index) => {
  return accumulator + word[0]; 
}, 'word: ')

console.log(theLastWord); // Output: 
// .reduce() accumulates first letter of each word as it iterates over the array, returning one string 
// if no second parameter set (as initialValue), it defaults to taking the first element 
// as initial accumulator value and the first element is skipped as the currentValue. 
// what the code block returns each iteration BECOMES the accumulator (i believe)


// ----------------

//    09. REVIEW >> 

/* All iterator methods can take a:

-  callback function that can be pre-defined
- function expression (an anonymous function)
- arrow function (an anonymous function refactored) */


// 10 CHALLENGES:

// 10.1 Define a callback function before you use it in an iterator: 

let numbers = [2,4,2,4,2];

const isItOdd = (num) => { 
  if (num % 2 !== 0) {
    return true;
    }
}

console.log(numbers.some(isItOdd));
// Output: false 

// --------

// Chain two iteration methods on the same array

const twosAllowed = numbers.filter( number => {
  return number === 2;
}) 

console.log(twosAllowed.map( number => {
  return number *= 2;
})) // Output: [4,4,4]

// Because the .filter() method returns an array, we have called the .map() array method directly after it. 
// Both functions only execute on the log statement. Each 'call' is seen as a link. 

// --------

// 10.2 Use the optional arguments in an iterator to include the index or the entire array.

// The .filter() accepts 3 arguments to the callback function:
// let newArray = array.filter(callback(element[, index, [array]]))
// If we pass the index as an argument, we can include it in condition being evaluated. 
// The below code remove duplicates from an array: 

const noDuplicates = numbers.filter((number, index) => {
  return index === numbers.indexOf(number) 
})

console.log(noDuplicates) // Output: [2,4]

// The condition asks 'is the current index the same as the index of the First instance of this number? 
// ie. is this the first instance of the value, if so, add to new array.' 

// --------

// 10.3  Use .reduce() to take a multi-layered array and return a single layer array from scratch. 

let multiArray = [ [1,1], [2,2], [3,3], [4,4] ];
let newArray = []; 

singleArray = multiArray.reduce((accumulator, currentValue) => {
  newArray.push(currentValue[0])
}, [1,1] );   

console.log(newArray); // Output: [ 1, 2, 3, 4 ]

// --------

// BONUS JANE AUSTEN EDITION:

let array = ["trueLove", "ever", "a", "raging", "storm"]

const willoughby = array.reduce((accumulator, currentValue)=>{
  return accumulator + currentValue [0] 
}, "You have reduced me to " )

console.log(willoughby);
// Output: "You have reduced me to tears"