// STEP 1
// Create variable 'input' to contain text to be translated into 'whale talk'.

let input = "turpentine and turtles";

// STEP 2
// create a constant array called 'vowels' 

const vowels = ["a","e","i","o","u"];

// STEP 3
// create an empty array called 'resultArray' to store vowels from the 'input' string.  

let resultArray = [" "]

// STEP 4
// create loop to iterate through each letter of the 'input' variable text. 
// Log the iterator numbered position inside the loop to check.
// console.log(i); 

// STEP 5
// create an inner nested 'for' loop, to iterate through the 'vowels' array 
// each time the outer loops runs. Log the iterator numbered position inside the loop to check. 
// console.log(j);

// STEP 8
// inside the inner loop, write a code block that pushes present vowels to resultArray.

// STEP 9
// write an 'if' statement that checks if each letter in the 'input' string === 'e'. 
// If so, .push() input[i] to resultArray. This statement belongs after the inner 'for' loop, 
// inside the outer 'for' loop because we only want to perform this check once for every letter in input. 

// STEP 10
// To double the letter 'u', mimic code from last step. 
// Recreate the 'if' statement bu modify so it pushes 'u' a second time.

// STEP 11
// At the bottom of the program, log 'resultArray'. 
// To produce whale language, capitalise array elements and put them together as one string. 

for ( let i = 0; i < input.length; i++ ) {
  for (let j = 0; j < vowels.length; j++ ) {
  if (input[i] === vowels[j]) {
    resultArray.push(input[i]);
  }
  }
  if (input[i] === "e") {
     resultArray.push(input[i]);
  } else if (input[i] === "u") {
   resultArray.push(input[i]) 
  } 
  }

let whaleTalk = resultArray.join(" ")

console.log(whaleTalk.toUpperCase())
