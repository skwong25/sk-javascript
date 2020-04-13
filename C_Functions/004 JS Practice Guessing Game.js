let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {return Math.floor(Math.random()*9)}
let targetNumber = generateTarget()

//remember that Math.random requires (), syntax: Math.random() !!

let humanGuess = 10;
let computerGuess = 0;

const checkGuess = humanGuess => {
  if (humanGuess >= 0 && humanGuess <= 10) {
} else {console.log("alert!")}  
} 
checkGuess(humanGuess)
 
const compareGuesses = (humanGuess, computerGuess, targetNumber) => 
  Math.abs(humanGuess - targetNumber) <= Math.abs(computerGuess - targetNumber)

/* The model answer is:
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDifference = Math.abs(targetGuess - humanGuess)
  const computerDifference = Math.abs(targetGuess - computerGuess)
  return humanDifference <= computerDifference; */
// The first line defines a function
// The second & third line declare variables with values being the result of a calculation
// The fourth line has a statement which returns a boolean

let result;
result = compareGuesses(humanGuess, computerGuess, targetNumber) 

console.log (targetNumber)
console.log (result)

const updateScore = () => {
 result ? humanScore = humanScore += 1 : computerScore = computerScore += 1 
}
// I rephrased the above code from an if...else statement to a ternary operator.

/* The model answer uses '++' instead of '+='
Is if...else if statement the same as an if...else if...else statement?:
const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
} */ 

updateScore()
// remember to run your function after defining it!!

const advanceRound = () => currentRoundNumber +=1 
currentRoundNumber = advanceRound (currentRoundNumber)
