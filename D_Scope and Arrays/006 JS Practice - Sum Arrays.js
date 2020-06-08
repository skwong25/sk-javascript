// ARRAYS - CODE CHALLENGES

// Write a function that, given multiple arrays of integers 
// will produce the sum of all the elements in the arrays. 

// SOLUTION using .reduce() method

let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr3 = [7,8,9]

let arr4 = arr1.concat(arr2,arr3);

function sumItUp (array) {
let sumOfAll = array.reduce((accumulator, currentValue) => {
    return accumulator += currentValue
})
return sumOfAll
}

console.log(sumItUp(arr4));
// Output: 45


// ----------------


// SOLUTION using 'for' loop

function sumOfAll (array) { 
let count = 0;
for (let i = 0; i<array.length; i++) {
    count += array[i]
} return count; 
}

console.log(sumOfAll(arr4))
// Output: 45
