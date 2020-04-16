// CREDIT CARD CHECKER

// STEP 1
// 15 arrays
// Create a function 'validateCred()' that takes a parameter of an array
//  

// The function should...
// take each element (array) in the batch array 
// run through each element and compare with the serials first in 'valid' 
// if there is a match then assign it a new variable name: eg 'valid6'
// and then compare with serials in 'invalid'
// if there is a match then assign it a new variable name: eg 'invalid6'
// in both, as soon as it hits a number that it doesn't match with, it should break and check the next

// The Luhn Algorithm
// Is a series of mathematical calcs used to validate certain identification numbers.
https://codecademy-content.s3.amazonaws.com/PRO/independent-practice-projects/credit-card-checker/diagrams/cc+validator+diagram+1.svg



const findInvalidCards = (nest) => {
  let invalidCards = nest 
  for (let j = 0; j < nest.length; j++ ) {
    if (validatesCred(j) === true) {
nest.splice(j)      
    } 
  } console.log(invalidCards);
}

findInvalidCards (batch)