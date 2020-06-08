
let userName = "Suzanna";

if (userName) {
  console.log (`Hello, ${userName} !`);
} else {
  console.log('Hello!');
} 

let userQuestion = "will lunch be tasty?";

console.log(`So, ${userName}, you want to know ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 9); 

let eightBall = "";

switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
  case 8:
    eightBall = "Don't even think about committing a crime in this area!";
    break;
  default:
    eightBall = "Error.";
    break;
}

console.log(randomNumber + ": " + eightBall)


// Age distribution of the UK 2008-2018 
// 18% 0-17
// 62% 18-64
// 20% 65+ 
// The function generates the age category of the runner reflecting UK age distribution:

const ageDistribution = () => {
  let num = Math.random();
  if (num <= .17 ){
    return 'junior' ;
  } else if (num > .17 && num < 62) {
    return 'adult' ; 
  } else {
    return 'veteran'
 };
}

let category = ageDistribution();
let earlyRegistration = true;
let raceTime = '0am'
let raceNumber = Math.floor(Math.random() * 100)  

/*
if (category === 'adult' && earlyRegistration) {
  raceTime = '9.30am'
  raceNumber = (raceNumber + 1000);
} else if (category === 'adult' && !earlyRegistration) {
  raceTime = '11.00am';
} else if (category === 'junior') {
  raceTime = '12.30pm';
}; */

// The above code is neater in a switch statement : 

switch (category) {
  case 'adult':
    earlyRegistration ? raceTime = '9.30am' : raceTime = '11.00am';
    break; 
  case 'junior' :
    raceTime = '12.30pm';
  default:
    break;
};

if (category === 'veteran') {
  console.log(`You are a ${category} and you are too old to run. Go sit down.`);
} else { 
  console.log(`You are ${category } runner no. ${raceNumber}. Your run will begin at ${raceTime}.`);
}
