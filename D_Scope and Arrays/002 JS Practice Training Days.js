// define function 'getRandEvent' to return an Event based on a random number.
// moving the 'random' function inside the getRandEvent's function body 
// means that new random numbers (and different events) are generated for each athlete.
// ie. the code will run (generating a random no.) every time the getRandEvent function is called.  

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

// define function 'getTrainingDays' returns a number of training days to whichever event it is.
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

let name1 = 'Nala'

// Print name and event
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 
// The scope of `name` is too tight - leading to duplication of code in each log function. 
// Remedy: defining as a global variable and entering it as a parameter in each log function. 

const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

// Print name and training days
const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

// runs code, captures event in variable
const event = getRandEvent();
// runs code, captures days in variable
const days = getTrainingDays(event);

logEvent(name1, event); // Nala's event is: Pentathlon
logTime(name1, days); // Nala's time to train is: 200 days

// This code allows us to generate a new athlete's info
// by running the functions again - to generate a new random number (and event etc)

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

logEvent(name2, event2); // Warren's event is: Pentathlon
logTime(name2, days2);  // Warren's time to train is: 200 days


// --------------


// ALTERNATIVE (refactored so code is more focused and concise) 

// Event and training-day info is stored as properties in an [Array] of {Objects}
// We generate a random number to access an object via index
// We use 'destructured assignment' to extract values and save them as variables. 
// We log statements to console containing name, event & training days
// This code also allows us to generate a second athlete's information but in less steps:


let array = [ 
    {event: 'Marathon', days: 50}, 
    {event: 'Triathlon', days: 100},
    {event: 'Pentathlon', days: 200} ]


const generateEvent = () => {
  let random = Math.floor(Math.random() * 3);
  return array[random];
}    

const logEventInfo = (name, eventA) => {
    let {days} = eventA; 
    let {event} = eventA;  // objects destructured assignment  - same as 'let event = choice.event'
    console.log(`${name}'s event is: ${event}.`);
    console.log(`${name}'s time to train is: ${days} days.`);
  }; 
  
let nameA = 'Nala'
let eventA = generateEvent() // eventA is an object 
logEventInfo(nameA, eventA); // Nala's event is: Marathon. Nala's time to train is: 50 days

let nameB = 'Simba'
let eventB = generateEvent() 
logEventInfo(nameB, eventB); // Simba's event is: Pentathlon. Simba's time to train is: 200 days.
 
