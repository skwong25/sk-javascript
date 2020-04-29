// << LITERAL OBJECTS >>
// Objects can be assigned to variables (just like arrays, values, functions)
// To designate an 'object literal', we use {} (previously only encountered these to denote function body)


// 1. KEY-VALUE PAIRS (properties)
// identifier (property name / key ) : value 
// seperated by , in an object literal
// keys are actually strings, but if no special characters (inc. spaces), can omit the quotation marks 

let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
}

// --------------


// 2. ACCESSING PROPERTIES - two ways: 
// 2.1  - property dot notation = objectName.key

spaceship.homePlanet; // Returns 'Earth'
spaceship.color; // Returns 'silver'
spaceship.nonexistantProperty //  Returns undefined

// 2.2  - bracket notation [] = objectName['key as string']
// MUST use bracket notation when accessing keys that have numbers/spaces/special characters 

spaceship['homePlanet'] // Returns 'Earth'

// can use a variable inside the brackets to select the keys of an object

let returnAnyProp = (objectName, propName) => objectName[propName];

returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'

// --------------


// 3. PROPERTY ASSIGNMENT 
// objects are 'mutable'! (can update after creation) 
// use dot/bracket notation and = (assignment operator) 
// to add new key-value pairs or change existing property

// Either

// Property already exists on the object, its value is replaced with newly assigned value 
// OR if no property with that name, a new property is added:

const spaceship = {type: 'shuttle'};
spaceship = {type: 'alien'}; // TypeError: Assignment to constant variable.
spaceship.type = 'alien'; // Changes the value of the type property
spaceship.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'
// NOTE THAT THIS WAY OF ADDING KEY METHODS TO AN OBJECT DOESNAE WORK.

// 'Delete' operator to delete property:

delete spaceship.type;  // Removes the type property

// --------------


// 4. METHODS 
// When the data stored on an {object} is a function, it's called a METHOD.
// A property is what an object HAS, a method is what an object DOES.

// Examples: 
      // console is a global JS {object} and .log() is the method on that object
      // Math is a global JS {object} and .floor() is a method on it. 

// We include methods in our {object literals} as key-value pairs. 
// The key serves as our method's name, while the value is an anonymous function expression. 

const alienShip = {
  invade: function () { 
    console.log('Hello! We have come to dominate your planet.')
  }
};

// ^ In ES6, we can commit the colon and 'function' keyword. Refactored:

const alienShip = {
  invade () { 
    console.log('Hello! We have come to dominate your planet.')
  }
};

// Object methods are invoked(called): 
alienShip.invade() 

// --------------


// 5. NESTED OBJECTS example

// The spaceship {object} contains a crew {object} that contains all the crew members.
// Each crew member is an {object} themselves with properties like 'name','degree' and unique methods based on their roles.
// Other {object}s nested in the spaceship include a 'telescope' or the 'nanoelectronics' 

const spaceship = {
  telescope: {
     yearBuilt: 2018,
     model: '91031-XLT',
     focalLength: 2032 
  },
 crew: {
     captain: { 
         name: 'Sandra', 
         degree: 'Computer Engineering', 
         encourageTeam() { console.log('We got this!') } 
      }
 },
 engine: {
     model: 'Nimbus2000'
  },
  nanoelectronics: {
      computer: {
         terabytes: 100,
         monitors: 'HD'
      },
     'back-up': {
        battery: 'Lithium',
        terabytes: 50
      }
 }
}; 

// Chain operators to access these nested properties:
let powerSource = spaceship.nanoelectronics['back-up'].battery; // Returns 'Lithium'

// --------------


// 6. Objects are PASSED BY REFERENCE

// we pass a variable assigned to an object into a function as an argument
// the computer interprets the parameter name as pointing to the space in memory holding that object (via ref)
// as result, functions that change object properties actually mutate the object permanently (even when assigned to a const variable)

const spaceship = {
  homePlanet : 'Earth',
  color : 'silver'
};

let paintIt = obj => {
  obj.color = 'glorious gold'
};

paintIt(spaceship);

spaceship.color // Returns 'glorious gold'

// Note the difference!
// Object method (a function stored within an object) is invoked by object.method()
// and a function to mutate an object (object as parameter) is invoked by function(object). Eg:


let alienShip = {
  hi () {
    console.log("hello")
  },
  bye () {
    console.log("bye")
  }
};

console.log(alienShip.hi); // Output: [Function:hi] (this syntax accesses the value to the key 'hi'')
console.log(alienShip.hi()); // hello (this syntax invokes the method)
console.log(alienShip); // { hi: [Function], bye: [Function: bye] } (retrieves the key value pair)

// --------------


// 7. LOOPING THROUGH OBJECTS
// Recap: Loops are programming tools that repeat a block of code until a condition is met
// Can iterate through arrays via index (iterable), but key-value pairs are not ordered! (enumerable)
// 'for...in' syntax executes a block of code for each property in an object. EG:

let spaceship = {
  crew: {
  captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
      },
  'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
      },
  medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
  translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
      }
  }
}; 
// for...in
for (let crewMember in spaceship.crew) {
console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
};

/* Output: 
captain: Lily
chief officer: Dan
medic: Clementine
translator: Shauna */

// This 'for...in' iterates through each element of the spaceship.crew object.
// In each iteration, the variable 'crewMember' is set to one of the spaceship.crew's keys
// Enabling the logging of crew member's role and name.

// --------------



// << LITERAL OBJECTS REVIEW >>

/* We know that:
      - objects store collections of KEY-VALUE pairs
      - each key-value pair is a property ( when a property is a function, it's called a method )
      - an object literal is {key:value}
      - access, add or edit a property via '.' notation or ['bracket'] notation.
      - add methods to object literals using key-value syntax with anonymous function expressions as values
        (also works when function expressions assigned to variables (pre-defined functions)
      - navigate nested objects via chained operators
      - objects are mutable, they can change their properties (even when declared with const)
      - objects are passed by reference, meaning changes are permanent
      - iterate through objects with for...in syntax

// --------------

