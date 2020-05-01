// << CATCAFE STATS>>

// -------------- 

// STEP 1 & 2
// Create a data structure about our team. Begin by creating an empty object.
// Add two properties to the 'team' object '_players' and '_games' initialised with empty arrays

let catCafe = {
'_cats': [
        { 
          firstName: 'Catty',
          lastName: 'Blue',
          age: 3,
        },     
        {
          firstName:'Ginger',
          lastName: 'Puss',
          age: 1,
        },
        {
          firstName: 'Sleepy',
          lastName: 'Tango',
          age: 5,
        }
      ],
'_games': [
        {
          opponent: 'string',
          teamPoints: 10,
          opponentPoints: 5,
        },
        {
          opponent: 'sofa',
          teamPoints: 20,
          opponentPoints: 5,
        },
        {
          opponent: 'catnip',
          teamPoints: 10,
          opponentPoints: 30,
        }
      ],
get getGames () {
  return this._games ; 
},
get getCats () {
  return this._cats ; 
},
addCat (firstName, lastName, age) {
  let newCat = {
    firstName, // Uses Property Value Shorthand 
    lastName, 
    age,
  } 
  this._cats.push(newCat);
},
addGame (opponent, teamPoints, opponentPoints) {
  let newGame = {
    opponent, 
    teamPoints, 
    opponentPoints,
  } 
  this._games.push(newGame);
},
};

// -------------- 


// STEP 3 & 4
// Populate the empty arrays within the _cats key in the 'catCafe' object with three cats 
// Populate the empty arrays within the _games key with three games 

// LESSON! Accessing nested properties and chaining operators
// pay attention when using square brackets if you are inputting a variable or a string

/*  ARRAY OF OBJECTS VS. NESTED OBJECTS:
BEFORE _cats holds a nested Object >> _cats: { cat1: {}, cat2:{], cat3:{} } 
In nested objects, access is via chained operators: (Access by property faster than by index)

 get getCatsArray () {
  let arrNames = [];
  for (let cat in this['_cats']) {
    let fullname = this['_cats'][cat].firstName + " " + this['_cats'][cat].lastName;
    arrNames.push(fullname);
  } return arrNames;
},

console.log(catCafe.getCatsArray);
// Output: [ 'Catty Blue', 'Ginger Puss', 'Sleepy Oreo' ]

// It also means that we cannot use for...in loop to cycle through properties.
// Previous 'for...in' statement to cycle through cat first names:

for (let animal in catCafe['_cats']) {
  console.log(catGames['_cats'][animal].firstName);
  }; 
// Output: Catty Ginger Sleepy
Now we would use a chained operator to ACCESS the array, and the cycle through using ITERATORS

NOW _cats holds an array of Objects >> _cats: [ {name:cat1}, {name:cat2}, {name:cat3}]
In an array, access is ia loops, array filters and index (cumbersome?)

QUESTION: Which format is better to work with? Eg retrieving a certain property from child objects 
ANSWER: 
Consider if data needs to be sorted (array) 
Consider what you need to return - a list (array) or an object with properties? 
Discussion here: https://stackoverflow.com/questions/24882985/array-of-objects-vs-nested-object */

// -------------- 

// STEP 5
// Create getter methods for your '_cats' and '_games' keys 

console.log(catCafe.getCats);
/* Output: 
[
  { firstName: 'Catty', lastName: 'Blue', age: 3 },
  { firstName: 'Ginger', lastName: 'Puss', age: 1 },
  { firstName: 'Sleepy', lastName: 'Oreo', age: 5 }
]
*/

console.log(catCafe.getGames);
/* Output: Returns an Object with nested Objects

[
  { opponent: 'string', teamPoints: 10, opponentPoints: 5 },
  { opponent: 'sofa', teamPoints: 20, opponentPoints: 5 },
  { opponent: 'catnip', teamPoints: 10, opponentPoints: 30 }
]

This could be further formatted as per 008 JS Practice - Builtin Object Methods Review. 
QUESTION: What formatting would actually be useful? ANSWER: Depends on desired Output! 
*/

// -------------- 

// STEP 6
// We want to add cats to the cat cafe! 
// Add a method addCat to your catCafe object with parameters: (firstName, lastName, age)
// Create a factory function to create cat objects, to be added to the '_cats' array

catCafe.addCat('Dame', 'Leia', 4); 
console.log(catCafe._cats);

// -------------- 

// STEP 7
// Add extra cats by invoking the addCat method
// Print all cats to check they were properly added 

catCafe.addCat('Queen', 'Elsa', 1);  
catCafe.addCat('Fence-hugger', 'Oreo', 2);
console.log(catCafe._cats);

/* Output: 
[
  { firstName: 'Catty', lastName: 'Blue', age: 3 },
  { firstName: 'Ginger', lastName: 'Puss', age: 1 },
  { firstName: 'Sleepy', lastName: 'Tango', age: 5 },
  { firstName: 'Dame', lastName: 'Leia', age: 4 },
  { firstName: 'Queen', lastName: 'Elsa', age: 1 },
  { firstName: 'Fence-hugger', lastName: 'Oreo', age: 2 }
] */

// -------------- 

// STEP 8 & 9
// There is a new game to be played with the cats!
// Add a similar method (a factory function) for recording games called 'addGame' 
// Add extra games by invoking the addGame method, print the updated '_games' array 

catCafe.addGame('ball',1,1);  
catCafe.addGame('dust', 2,2);
console.log(catCafe._games);
/* Output
[
  { opponent: 'string', teamPoints: 10, opponentPoints: 5 },
  { opponent: 'sofa', teamPoints: 20, opponentPoints: 5 },
  { opponent: 'catnip', teamPoints: 10, opponentPoints: 30 },
  { opponent: 'ball', teamPoints: 1, opponentPoints: 1 },
  { opponent: 'dust', teamPoints: 2, opponentPoints: 2 }
] */

// SUMMARY 
// We have practised creating an object, creating getter methods to retrieve properties
// creating methods that are factory functions to create new objects and add them as nested objects 