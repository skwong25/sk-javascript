
// << BUILT-IN OBJECT METHODS REVIEW >>


let newObject = {}; 

let testObject = {
  game1: { opponent: 'string', teamPoints: 10, opponentPoints: 5 },
  game2: { opponent: 'sofa', teamPoints: 20, opponentPoints: 5 },
  game3: { opponent: 'catnip', teamPoints: 10, opponentPoints: 30 }
} 


// -------------- 


let new1 = Object.values(testObject);
console.log(new1);
// Object.keys returns an array of values (no keys)
// Output: In this case, it's an array of Objects:
/* [ 
{ opponent: 'string', teamPoints: 10, opponentPoints: 5 },
{ opponent: 'sofa', teamPoints: 20, opponentPoints: 5 },
{ opponent: 'catnip', teamPoints: 10, opponentPoints: 30 }
] */


// -------------- 


let new2 = Object.keys(testObject);
console.log(new2);
// Object.keys returns an array of keys
// Prediction: [ 'game1', 'game2', 'game3']


// -------------- 


let new3 = Object.entries(testObject);
console.log(new3);
// Object.entries returns each key-value pair as an array, all within a larger array.
// (Removes the : and each key-value pair is surrounded by [])
// Output: 

/* [ 
[ game1, {opponent: 'string', teamPoints: 10, opponentPoints: 5}],
[ game2, {opponent: 'sofa', teamPoints: 20, opponentPoints: 5}],
[ game3, {opponent: 'catnip', teamPoints: 10, opponentPoints: 30}]
] */


// -------------- 


let new4 = Object.assign(newObject, testObject);
console.log(new4);
// Object.assign copies the properties from the 'source' object to the 'target' object 
// It will copy OVER (replace) values to existing key names 
// NOTE that the Object passed in the 'target' parameter needs to be declared an Object ( = {})
// Output: 

/* newObject = {
  game1: { opponent: 'string', teamPoints: 10, opponentPoints: 5 },
  game2: { opponent: 'sofa', teamPoints: 20, opponentPoints: 5 },
  game3: { opponent: 'catnip', teamPoints: 10, opponentPoints: 30 }
} */


// -------------- 


