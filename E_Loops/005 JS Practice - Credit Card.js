// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

//STEP 1 - 3
// Create a function 'validateCred()' with a parameter of an array. 
// This return 'true' when an array contains digits of a valid credit card number and 'false' when invalid - using the Luhn algorithm. 
// Should not mutate array. 
// https://codecademy-content.s3.amazonaws.com/PRO/independent-practice-projects/credit-card-checker/diagrams/cc+validator+diagram+1.svg

function validatesCred(array) {
  let count = 0;
  for (let i = (array.length-1); i>=0; i-=2 ) { 
    // console.log("Index " + i + ": " + array[i]);
    count += array[i];
    // console.log(count);
    if (i>=1 && (array[i-1]*2)>9) {
      count += ((array[i-1]*2)-9);
     // console.log("Index " + (i-1) + ": " + array[i-1])
      // console.log(count);
    } else if (i>=1) {count += (array[i-1]*2);
      // console.log("Index " + (i-1) + ": " + array[i-1])
      // console.log(count);
    } else {
      break;
  }
  } if (count % 10 === 0) {return true;
  } else { return false ;
  }
} 
// console.log(validatesCred (batch[14]));
// The codecademy suggests using (numArr.length - 1 - i) % 2 === 1) to specify every other digit - one condition for even, one for odd
// However this does not work if card numbers are of different length - the non-check digit could be odd or even. 
// Whereas I have just jumped 2 and treated the digits in pairs
// although this means that I have to add break statement in the case that the last digit is not a pair.  

// STEP 4
// Create findInvalidCards() function with one parameter for nested array of credit card numbers. 
// It is to checked through the nested aray for which numbers are invalid and return another nested array of invalid cards. 

let newNest = [];

const findInvalidCards = (nest) => { 
  for (let j = 0; j < nest.length; j++ ) {
    if (validatesCred(nest[j]) === true) {
    // console.log(true);     
    } else { //console.log(false);
            newNest.push(nest[j]);
    }
  } 
}

findInvalidCards (batch) 
// console.log(newNest);

// STEP 5
// It is also necessary to identify the credit card companies that issued these faulty numbers. 
// Create function, idInvalidCardCompanies() with one parameter for a nested array of invalid numbers and returns an array of companies. 
// 4 companies have unique first digits. 

// Function to check whether a company name is already in the list or not. 
let companiesList = []
const isItThere = (word) => {
  for ( let i = 0; i < companiesList.length; i++ ) {
    if (companiesList[i] === word) {
      return true;
    }
  } return false;
} 

// Checks the first index of each nested array for a matching unique digit which identifies the wrongdoing company. 
// Pushes companies identified into a new array called 'newNest'.
const idInvalidCardCompanies = (array) => {
  for (let i = 0; i < array.length; i++ ) {
    if (array[i][0] === 3 && !isItThere("Amex")) { companiesList.push("Amex")
    } else if (array[i][0] === 4 && !isItThere("Visa")) {      companiesList.push("Visa")
    } else if (array[i][0] === 5 && !isItThere("Mastercard")) {      companiesList.push("Mastercard");
    }   else if (array[i][0] === 6 && !isItThere("Discover"))     { companiesList.push("Discover")
    }  
  } 
} 

// LESSON! legibility is important - declare variables to allow code to be more legible! 
// For example array[i][0] could be captured in a variable named 'firstDigit' 

// OBSERVATION! comprehensive and succinct documenting is important for collaboration
// and as record to explain and justify previous decision-making. 

// Alternative way of checking for companies' identifying unique digits is using switch...case statement
// The 'if' statement is more appropriate than the ternary operator
// The return of 'false' is confusing, when in actuality we want it to do nothing. 

// 26/05/2020 Revision
// Alternative 

switch (array[i][0]){
    case 3:
        if (!isItThere("Amex")) {companiesList.push("Amex")};
        break;  
    case 4:
        !isItThere("Visa")? companiesList.push("Visa") : false
        break;  
    case 5:
        break;
    case 6: 
        break;
    default:
        break;
}


idInvalidCardCompanies (newNest)
console.log(companiesList)

// EXTRA CHALLENGES
// Create a function that will accepts a string and converts it into an array of numbers.

let input = "123456789";
let finalArray = []; 

const convertArray = () => {
    for ( let i = 0; i < input.length; i++ ) {
        finalArray.push(input[i]) 
    }
} 

convertArray(input)
console.log(finalArray)

/*

// 26/05/2020 Revision
// Alternative 

const validateCred = (array) => {
reversedArr = array.reverse();
totalSum = reversedArr.reduce((accumulator,currentValue,index) => {
  if (index % 2 !== 0) {
    let doubled = currentValue * 2;
    if (doubled > 9) {
      accumulator += doubled - 9; 
      } else { accumulator += doubled;
    }} else { accumulator += currentValue;
  }  
  return accumulator;
})

  if (totalSum % 10 === 0) {
    return true;
    } else { return false;
  };  
}

// REFLECTIONs: 
// .reverse() is an alternative to iterating backwards in a 'for' loop from the check digit 
// iterating each index postion  is clearer than iterating in pairs ([i] & [i-1] can be confusing)
// iterating in pairs required an extra check for when we were given an odd number of elements

// ------------------------

// REFLECTIONs: 
// Previously, I used a 'for' loop - no real difference
// Below using .forEach() & .filter() (slightly shorter as .filter() returns an array)


  let invalidArray = [];

const findInvalidCards = (nestedArray) => {
  nestedArray.forEach((array) => {
  if (validateCred(array) === false) {
    invalidArray.push(array);
   }
}) 
return invalidArray;
}

invalidArray = findInvalidCards(batch)
console.log(invalidArray)

// ------------------------

OR using .filter()

const findInvalidCards = (nestedArray) => { 
  let invalidArray = nestedArray.filter(array => {
  return validateCred(array) === false; 
});
 return invalidArray;
}

let result = findInvalidCards(batch)
console.log(result)

// ------------------------


const idInvalidCardCompanies=(nestedArray)=>{ 
let companyArr = [];
for (let i = 0; i < nestedArray.length; i++) {
let company;
switch (nestedArray[i][0]) {
  case 3:
  { company = "Amex"};
  break;
   case 4:
  { company = "Visa"};
  break;
   case 5:
  { company = "Mastercard"};
  break;
   case 6:
  { company = "Discover"};
  break;
  default:
  {console.log("Company not found")}
  break;
}
if ( !companyArr.includes(company)) {
  companyArr.push(company)
    }
  } return companyArr;
}

console.log(idInvalidCardCompanies(invalidArray))

//  REFLECTIONS: 
// Previously, I used an 'else if' statement which was clear and legible
// A case switch is much the same.

// However, helper function 'isItThere' checked if the array already contained a value
// A shorter alternative is to use array.include("value")

// I cut down on the repetitive code, by saving the value to a variable 'company' 
// code for checking / pushing into the array is only required ONCE, after the switch case. 
