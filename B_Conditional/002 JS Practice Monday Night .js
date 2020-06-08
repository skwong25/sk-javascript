
/* The below code block is practicing Conditional Statments including:
- if ... else statements, 
- else if statements
- comparison operators and logical operators (with boolean values)
- truthy and falsy evaluations with short-circuit evaluation
- ternary operators */


let noOfGuests = Math.floor(Math.random()*5);
let facebookStatus; 
let guests = noOfGuests || 'zero';
//  short circuit evaluation: if noOfGuests exists, the 'guests' variable assumes that value. 
// If not, it assumes a default of 'zero'. 

noOfGuests ? console.log ("Open the door!") : console.log ("No-one is at the door.");
// ternary operator checks for guests 

console.log (`Guests at my house: ${guests}`);

if (noOfGuests) {
  facebookStatus = `I have friends, bitches. `; 
} else { 
  facebookStatus = 'Feeling cute. '; 
} 

if (guests === 4) { 
  instaStatus = 'It\'s Monday night dindins';
} else if (guests < 4) { 
  instaStatus = 'Craig is running late.';
} else {
  instaStatus = 'Might make a sandwich';
}

console.log (facebookStatus + instaStatus);

// Switch Statement:  

let dish;
let comment;
let randomNumber = Math.floor(Math.random()*3);

switch (randomNumber) {
  case 0:
    dish = 'red braised pork'
    comment = 'I hope the pork is not too dry.';
    break;
  case 1:
    dish = 'herby rice and soy salmon'
    comment = 'Our most onerous friend, Becca, can eat this.';
    break;
  case 2:
    dish = 'preserved lemon and olive chicken stew'
    comment = 'A Sabrina Ghayour classic.';
    break;
  default:
    dish = 'something new'
    comment = 'Is that a new recipe?';
    break; 
  }
  // The previous code supplied an array holding a 'repetoire' of dishes
  // A random number generated allowed us to access a dish via index, the dish was logged to console.
  // The switch statement then matched the selected dish to a comment, which was logged to console.
  // I rewrote the code so that dishes & comments are stored / accessed in the switch statement. 
  // There is now just one console.log statement. 

  console.log(`Yoopi is cooking ${dish}. ${comment}`);

  if (guests > 0 && dish) {
    console.log (' Dinner has been a success! ')
  }

  //  or another way to check for guests:

  if (typeof guests === 'number' && dish ) {
    console.log ('Time go home so I can sleep! ')
  }
