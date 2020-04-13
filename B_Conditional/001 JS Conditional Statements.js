/* 1 Conditional IF statements are composed of 
- the 'if' keyword followed by () followed by a {code block / block statement}
- () contains a condition that evaluates to true or false
- if the (condition) evaluates to true, the {code block} runs
- if the (condition) evaluates to false, the {code block} won't execute */

if (true) {
    console.log('This message will print!'); 
  } 
  // Prints "This message will print!"

// 2  IF ... ELSE statements allows us to automate binary decisions (yes-or-no questions)

  if (false) {
    console.log('The code in this block will not run.');
  } else {
    console.log('But the code in this block will!');
  }
  // Prints "But the code in this block will!" 

  // 2  Comparison Operators compare value on the left to value on the right: <,  >,  <=, >=, ===, !===

  let hungerLevel = 7
  if (hungerLevel < 7) {
    console.log('Time to eat!')
  } else {
    console.log('We can eat later!')
  } 

  // 3 Logical Operators work with boolean values: 'and' (&&), 'or' (||), 'not' (!)

  if (stopLight === 'green' && pedestrians === 0) {
    console.log('Go!');
  } else {
    console.log('Stop');

    /* 4 Truth and Falsy 
    - sometimes condition is just to check if a variable exists, not a specific value
    - the below code block runs because myVariable has a truthy value, though not explicitly true 
    - when used in a boolean / conditional context, it evaluates to true 
    - conversely there are values that are 'falsy' or evaluate to false when checked as a condition:
    0, empty strings "" '', null*, undefined*, NaN (Not a Number). 
    - Note we came across these in 7 x Primitive Data Types */
  
    let myVariable = 'I Exist!';
if (myVariable) {
   console.log(myVariable)
} else {
   console.log('The variable does not exist.')
}

// Exercise below: Change value of wordCount so that it is a truthy. 
// Change value of favoritePhrase so that it is a falsy. 

let wordCount = 0;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}

let favoritePhrase = 'Hello World';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}
    
// Truthy and falsy evaluations open a world of shorthand possibilities!

let defaultName;
if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}

// short-circuit evaluation - the below is short-hand for the code above 
let defaultName = username || 'Stranger';

// another example:

let tool = 'marker';

let writingUtensil = tool || 'pen'

console.log(`The ${writingUtensil} is mightier than the sword.`);

// 5 Ternary Operators are used to simplify if ... else statements

let isNightTime = true;

if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}

// ternary operator allows the below code to perform them same functionality: 
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

// condition is provided before the '?'
// two expressions follow '?' seperated by :
// examples below:

let isLocked = false;
isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;
isCorrect ? console.log('Correct!') : console.log('Incorrect!');

// 6 Else ... If statements allow us to check >2 / multiple conditions:

let season = 'summer';
  if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {console.log('It\'s winter! Everything is covered in snow.')
} else if (season === 'fall') {console.log ('It\'s fall! Leaves are falling!')
} else if (season === 'summer') {console.log('It\'s sunny and warm because it\'s summer!')
} else {
  console.log('Invalid season.');
}

// 7 Switch Keyboard - when there are a lot of values, a switch statement simplifies syntax.
// The 'switch' keyword initiates the statement
// followed by (...), containing the value that each 'case' will compare against
// inside the {} block there are multiple 'case's. The 'case' keyword checks for a match. 
// the 'break' keyword tells the computer to exit the block and check no further cases.
// at the end is always a 'default' statement. Example: 

let groceryItem = 'papaya';

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}

