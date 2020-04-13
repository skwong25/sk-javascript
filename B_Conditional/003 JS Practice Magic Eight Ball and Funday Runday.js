
let userName = "Suzanna";

if (userName) {
  console.log (`Hello, ${userName} !`);
} else {
  console.log('Hello!');
} 

let userQuestion = "will lunch be tasty?";

console.log(`So, ${userName}, you want to know ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8); 

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


let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegistration = true;
let runnerAge = 16;
let raceTime = '0am'

if (runnerAge >= 18 && earlyRegistration) {
  raceTime = '9.30am'
  raceNumber = (raceNumber + 1000);
} else if (runnerAge > 18 && !earlyRegistration) {
  raceTime = '11.00am';
} else {
  raceTime = '12.30pm';
  }
  
  console.log(raceNumber);
  console.log(runnerAge);
  console.log(raceTime);

  console.log(`You are runner no. ${raceNumber}. Your run will begin at ${raceTime}.`);