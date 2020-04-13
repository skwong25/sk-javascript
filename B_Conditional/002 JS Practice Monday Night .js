
/* The below code block is practicing Conditional Statments including:
- if ... else statements, 
- else if statements
- comparison operators and logical operators (with boolean values)
- truthy and falsy evaluations with short-circuit evaluation
- ternary operators */

let noOfGuests = 4;
let facebookStatus; 
let guests = noOfGuests || 'zero';

noOfGuests ? console.log ("Open the door!") : console.log ("No-one is at the door.");

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

// The below code block is practicing 7 Switch Keyboard 

let dish = 'red braised pork';

console.log('Yoopi is cooking ' + dish + '.');

switch (dish) {
  case 'red braised pork':
    console.log ('I hope the pork is not too dry.');
    break;
  case 'herby rice and soy salmon':
    console.log ('Our most onerous friend, Becca, can eat this.');
    break;
  case 'preserved lemon and olive chicken stew':
    console.log ('Sabrina Ghayour classic.');
    break;
  default:
    console.log ('Ooh. Is that a new recipe?');
    break;
    
  }

  if (guests > 0 && dish) {
    console.log (' Dinner has been a success! ')
  }

