
// TASK 1: write code that returns only the odd entries in an array until the end
// even numbers are those that i % 2 !== 0 

// using 'for' loop & .push() method:

let arr = [1,2,3,4,5,6]
let arr1 = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        arr1.push(arr[i]);
    }
}

// using .filter() iteration:

let arr2 = arr.filter((item) => {
   return item % 2 !== 0;
})

console.log(arr1); // [ 1, 3, 5 ]
console.log(arr2); // [ 1, 3, 5 ]

// To return only the odd-NUMBERED indexes of an array (ie eg 1st,3rd,5th ) :

// Skipping index numbers in the iteration statement 

let oddArr1 = [];
for (let k = 1; k < arr.length; k+=2 ) {
  oddArr1.push(arr[k])
}

 // or 'for' loop and .push()

let oddArr2 = [];
for ( let i = 0; i < arr.length; i++ ) {
    if (i % 2 !== 0) {
    oddArr2.push(arr[i])
    } 
}

// or .filter() 

let oddArr3 = arr.filter((item, index) => {
    return index % 2 !== 0;
 })

console.log(oddArr1); // [ 2, 4, 6 ]
console.log(oddArr2); // [ 2, 4, 6 ]
console.log(oddArr3); // [ 2, 4, 6 ]


// ----------------


// TASK 2: Implement a method named max() which finds the max value in an array of integers

// using sort()
arr.sort((a,b)=>{return b-a})
let biggest = arr[0]; 
console.log(biggest); // 6

// using 'for' loop to manually compare one value to another 

let highestNumber = 0;

function max (array) {
for ( let m = 0; m < array.length; m++ ) {
  if (array[m] > highestNumber) {
    highestNumber = array[m]
  }
} console.log(highestNumber)
}

max(arr) // 6

// ----------------


// WHY CAN'T I USE THE .REDUCE() METHOD!?

/* LESSON! 
arr[m] = variable // will reassign the element in the array 
variable = arr [m] // will reassign the value of 'arr[m]' to the variable */

// ----------------


// TASK 3: Implement a mehod named min() which finds the min value in an array of integers

let lowestNumber = 50;

function min (array) {
for (let p = 0; p < array.length; p++) {
  if (array [p] < lowestNumber) {
    lowestNumber = array[p];
  }
} console.log(lowestNumber)
}

min(arr) // 1