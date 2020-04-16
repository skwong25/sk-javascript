
// TASK 1: write code that returns only the odd entries in an array until the end
// even numbers are those that i % 2 !== 0 

let allNumbers = [1,2,3,4,5,6,7,8,9,10]
let oddNumbers = []
// Creates an empty array ready to store the odd numbers 

for ( let j = 0; j < allNumbers.length; j++ ) {
  if (allNumbers [j] % 2 !== 0) {
    oddNumbers.push(allNumbers[j])
  }
}
console.log(oddNumbers)
// Output: [ 1, 3, 5, 7, 9 ] 

/* The below is solution for returning every odd-numbered (index position) value - eg 1st,3rd,5th 
for (let k = 0; k < allNumbers.length; k+=2 ) {
  oddNumbers.push(allNumbers[k])
}
console.log(oddNumbers)
//Output: [ 1, 3, 5, 7, 9 ]
*/

// TASK 2: Implement a method named max() which finds the max value in an array of integers
// to find the biggest integer in an array, you need to compare them each to one another

let numbersList = [6,3,21,7,5,44,1]
let highestNumber = 0;

function max (array) {
for ( let m = 0; m < array.length; m++ ) {
  if (array[m] > highestNumber) {
    highestNumber = array[m]
  }
} console.log(highestNumber)
}

max(numbersList)
/* LESSON! 
arr[m] = variable // will reassign the element in the array 
variable = arr [m] // will reassign the value of 'arr[m]' to the variable */

// TASK 3: Implement a mehod named min() which finds the min value in an array of integers

let lowestNumber = 50;

function min (array) {
for (let p = 0; p < array.length; p++) {
  if (array [p] < lowestNumber) {
    lowestNumber = array[p];
  }
} console.log(lowestNumber)
}

min(numbersList)