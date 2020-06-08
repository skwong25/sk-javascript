// 5  .reduce() METHOD >> 
// Returns a single value after iterating through an array  ('reduces' the array to one value)
// Accumulator is a running count - for numeric computation and concatenation on all elements of array. 


// * codecademy forum example 1 (showing diff accumulative functions):

const myArray = [2, 2, 2, 2];
console.log(myArray.reduce((a,b) => a + b)); // 8 
console.log(myArray.reduce((a,b) => a - b)); //-4 
console.log(myArray.reduce((a,b) => a * b)); // 16
console.log(myArray.reduce((a,b) => a / b)); // 0.25 

// ----------------

// * codecademy example 2 (showing the running count kept by accumulator):

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {

  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue
  
}, 10);

console.log(newSum); 

/* Output: 
The value of accumulator:  10
The value of currentValue:  1
The value of accumulator:  11
The value of currentValue:  3
The value of accumulator:  14
The value of currentValue:  5
The value of accumulator:  19
The value of currentValue:  7
26 */

// ----------------

// Good article on reduce:
https://www.freecodecamp.org/news/reduce-f47a7da511a9/

// The Four Arguments of .Reduce() :
// and a secondary parameter of initialValue of accumulator (if no initialValue provided, the accumulator is [0] and currentValue is [1]) 

array. reduce(callback(accumulator, currentValue, currentIndex, sourceArray), initialValue)

// Example using Index and Array arguments: 
// The use of index and array allows us to transform the final accumulated total before returning. 

const euros = [29.76, 41.85, 46.5];

const average = euros.reduce((total, amount, index, array) => {
  total += amount;
  if( index === array.length-1) { 
    return total/array.length;
  }else { 
    return total;
  }
});

average // 39.37

// ----------------

// .REDUCE() IS SO USEFUL! Examples: 

// Using .reduce() to keep a tally, to return an OBJECT of key-value pairs:
// set initial value to an empty {object}

const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];

fruitBasket.reduce((tally, fruit) => {
  if (!tally[fruit]) {  // if the {object}['banana'] property does not exist  
    tally[fruit] = 1; // then give it a value of one (thus creating it)
  } else {
    tally[fruit] = tally[fruit] + 1; // otherwise, plus one to that value 
  }
  return tally;
}, {});

// refactored as:

const count = fruitBasket.reduce( (tally, fruit) => {
  tally[fruit] = (tally[fruit] || 0) + 1 ; // either exists with a value or is 0, in either case +1
  return tally;
} , {})

count // { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }


// ----------------


// Using .reduce() to return an ARRAY
// set initial value to an empty [array]
// In the instance of the .filter() iterator (returns an array of values meeting a set condition) 
// chained by .map() iterator (performs function on each value and saves to array) 
// reduce() allows you to do both in one step  

const euros = [29.76, 41.85, 46.5];

const doubled = euros.reduce((total, amount) => {
  total.push(amount * 2); //
  return total;
}, []);


// ----------------


// Using .reduce() to iterate through an array of functions - a 'pipeline'
// Set the initial value to be passed through all functions 

let pipeline = [increment, double, decrement];

const result = pipeline.reduce(function(total, func) {
  return func(total);
}, 1);

result // 3


// ----------------


// Using .reduce() to return a string from an array:
// same functionality as array.join(" ")

[1,2,3,4,5,6,7].reduce((a, b) => a * b)    // 5040

array = ['A', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];
array.reduce((a, b) => a + ' ' + b)
// "A quick brown fox jumps over the lazy dog"


// ----------------