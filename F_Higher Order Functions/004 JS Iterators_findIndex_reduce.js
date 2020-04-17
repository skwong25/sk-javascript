// 4  .findIndex() METHOD (ITERATION METHODS)>>

// REMINDER
// Not to be confused with .indexOf which is an array method that finds the index of a value:
console.log (array.indexOf(1)) // prints 0

// Calling .findIndex() on an array will find the index of the FIRST element 
// that EVALUATES TO TRUE in the callback function

// ----------------

// * codecademy example 1:

const jumbledNums = [123, 25, 78, 5, 9]; 

const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});

console.log(lessThanTen); // Output: 3 
console.log(jumbledNums[3]); // Output: 5

// ----------------

// If there isn't an element in the array that satisifies the callback condition, it returns -1 : 

const greaterThan1000 = jumbledNums.findIndex(num => {
  return num > 1000;
});

console.log(greaterThan1000); // Output: -1

// ----------------

// * codecademy exercise ANIMALS:

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === "elephant";
})


console.log(animals[foundAnimal]);
// output: elephant

const startsWithS = animals.findIndex (animal => {
  return animal[0] === "s";
})

console.log(startsWithS)
// output: 3 (index)

// ----------------

// 5  .reduce() Method