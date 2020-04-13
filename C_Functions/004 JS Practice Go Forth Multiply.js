/* The below code is to practice Functions, including:
- Defining a Function
  1) Function Declaration: function functionName (parameter) {function body}
  2) Function Expression (as a variable): const variableName = function () {}
  3) Arrow Function:  const variableName = () => {}
  4) Concise Body Arrow Function: const variableName = singleParameter => 
  'single-line code with implict return '
- Calling a Function 
- Parameters and Return 
- Default Parameters, to account for when no argument is passed into a Function
- Helper Functions */

// Go Forth and Multiply

let reaction; 
let whoWalksIn = "Becca"|| "Mammi"
// Declares string variables. Default whoWalksIn is "Mammi"

const determineReaction = person => {
  if (person === "Becca") {
    reaction = "excited"
  } else if (person === "Yoopi") {
    reaction = "delirious"
  } else if (person === "Mammi") {
    reaction = "needy"
  } else reaction = 0
} 

const wordLength = word => word.length 
// Declares a function to return the character count, using concise body arrow function
// that returns character no. Default count is 0.

determineReaction (whoWalksIn)
// Calls the function, passing in the argument from variable whoWalksIn

reaction ? console.log (`when ${whoWalksIn} walks into the room I feel ${reaction} 
and say ${(whoWalksIn.repeat([wordLength(reaction)]))}!`) : console.log ("Nothing of note happened.")

// syntax for the repeat() method: string.repeat([count]);