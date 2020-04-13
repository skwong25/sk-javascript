// defines function 'getRandEvent' to return an Event based on a random number.
// moving the 'random' function inside the getRandEvent's function body 
// means that new random numbers (and different events) are generated for each athlete.

const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// defines function 'getTrainingDays' returns a number of training days to whichever event it is.
// The scope of `days` was too tight - previously each 'if' statement defined 'let days = x'
const getTrainingDays = event => {
  let days;
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }

  return days;
};

let name = 'Nala'

// Prints name and event
// The scope of `name` is too tight - leading to duplication of code in each log function. 
// Remedy: defining as a global variable and entering it as a parameter in each log function. 

const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

// Prints name and training days
const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

// runs code, captures event in variable
const event = getRandEvent();
// runs code, captures days in variable
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 


logEvent(name, event);
logTime(name, days);

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

logEvent(name2, event2);
logTime(name2, days2);

