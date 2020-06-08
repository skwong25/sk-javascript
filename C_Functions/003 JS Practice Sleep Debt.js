// defines function using fat arrow syntax  'getSleepHours' with single parameter 'day'

let day = ""
let hoursSlept = 1

// remember there are two distinct ways of defining a function: 
// 1) Function Declaration 2) Function Expression 2.1) Arrow Function: 

// 1) function functionName () {}
// 2) const variableName = function () {}
// 2.1) const variableName = () => {} 
// Arrow functions > Single parameters require no brackets. 
// For a single -line function body, remove curly brackets for implicit return. 

function getSleepHours (day) {
  if (day === "Monday") {return 8
} else if (day === "Tuesday") {return 8
} else if (day === "Wednesday") {return 8
} else if (day === "Thursday") {return 8
} else if (day === "Friday") {return 8
} else if (day === "Saturday") {return 8
} else if (day === "Sunday") {return 8
} else {return "invalid input"}
}

const getActualSleepHours = () =>
getSleepHours ("Monday") + getSleepHours ("Tuesday") + getSleepHours ("Wednesday") + getSleepHours ("Thursday") +  getSleepHours ("Friday") + getSleepHours ("Saturday") + getSleepHours ("Sunday")

console.log (getActualSleepHours())

//Defines function to get ideal hours 
//or const getIdealSleepHours = function () {}
//or const getIdealSleepHours = () => {}
//or const getIdealSleepHours = idealHours => idealHours * 7 

let idealHours = 7.5
function getIdealSleepHours (idealHours) {
  return idealHours * 7}

console.log (getIdealSleepHours())

//Define function to calculate sleep debt
//or const calculateSleepDebt = function () {}
//or const calculateSleepDebt = () => {} 

function calculateSleepDebt () {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours (9);
  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep!")
  } else if (actualSleepHours > idealSleepHours) { console.log(`You got more sleep than you needed! You have a sleep surplus of ${actualSleepHours - idealSleepHours}$ hours`)
} else { console.log(`You didn't get enough sleep - get some rest! You have a sleep deficiency of ${idealSleepHours - actualSleepHours}$ hours!`)}
} 

// Remember that modulus operator % returns remainder after integer division! 

calculateSleepDebt ()