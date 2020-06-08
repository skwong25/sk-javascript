/* The below code is to practice Functions, including:
- Defining a Function
  1) Function Declaration: function functionName (parameter) {function body}
  2) Anonymous Function Expression: const variableName = function () {}
  3) Arrow Function:  const variableName = () => {}
  4) Concise Body Arrow Function: const variableName = singleParameter => 
  'single-line code with implict return '
- Calling a Function 
- Parameters and Return 
- Default Parameters, to account for when no argument is passed into a Function
- Helper Functions */

// Go Forth and Multiply

let who;
let whoWalksIn = who || "Mammi"
// Declares string variables. Default whoWalksIn is "Mammi" if variable 'who' has no value
// We can also set a default parameter in the below function in case no argument passed: 
// (person = 'Mammi')

const determineReaction = (person)  => { 
  if (person === "Becca") {
    return "excited"
  } else if (person === "Yoopi") {
    return "delirious"
  } else if (person === "Mammi") {
    return "needy"
  } else {return 0;}
} 

// const wordLength = word => word.length 
// Declares a function to return the character count, using concise body arrow function
// that returns the number of characters. Default count is 0.
// Note! Later deemed unnecessary. 

let reaction = determineReaction (whoWalksIn)
// Calls the function, passing in the argument from variable whoWalksIn

reaction ? console.log (`when ${whoWalksIn} walks into the room I feel ${reaction} 
and say ${(whoWalksIn.repeat(reaction.length))}!`) : console.log ("Nothing of note happened.")

// syntax for the .repeat() method: string.repeat(count);