// << ADVANCED OBJECTS >>
// Reminder: JS objects are containers that store collections of related data and functionality
/* We will cover
      - how to use the 'this' keyword
      - conveying privacy in JS methods
      - defining 'getters' and 'setters' in objects
      - creating factory function (eep!)
      - using destructuring techniques
    
// 1. 'THIS' KEYWORD

Allows us to access properties outside of a method's scope: 
'this' references the 'calling object' (which is goat)
ie the 'calling object' is the object that the method (Eg.diet()) belongs to  */

const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(this.dietType);
  }
};

goat.diet(); // Output: herbivore

// --------------

const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo () {
    return  `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
};

console.log(robot.provideInfo());

// --------------

// 2. ARROW functions and THIS
// Look! Issues! Avoid arrow functions with 'this' in a method. 

const goat = {
  diet: () => {
    console.log(this.dietType);
  }
};

goat.diet(); // Prints undefined

// --------------


/* 3. PRIVACY
The idea that only certain properties should be mutable or able to change in value
There are cases in which we don't want other code accessing/updating an object's properties. 
Eg. Can cause unwanted side-effects, such as type-coercion (eg if a certain datatype is required)
JS does not have privacy built-in, so...naming conventions! 
    - prepend a property with underscore Eg: _amount: 1000
    (this indicates that properties should not be accessed directly)
    

// --------------


4. GETTER METHODS
Get and return the internal properties of an object...and MORE! 
  - Uses 'get' keyword
  - Uses if...else conditional and return a diff value depending 
  - Uses this. to access the calling object's internal properties 
  - Note that getter methods do not need to called with () 
      (whereas a function would need to be called with ())
      (syntactically, it's like accessing a property)
  - Note also that properties cannot share the same name as getter/setter functions 
  
Getter advantages:
  - can perform an action on data when getting a property
  - can return diff values using conditionals
  - can access the properties of a calling object using 'this' 
  */

const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}

// To call the getter method: 
person.fullName; // 'John Doe'


// --------------

// Codecademy Exercise 1:

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === 'number') { // scuppered - enter number as a 'string'!
    return "My current energy level is " + this._energyLevel;
    }  else {
    return "System malfunction: cannot retrieve energy level"
    }
  },
};

console.log(robot.energyLevel)


// --------------


/* 5. SETTER METHODS
Reassign values of existing properties within an object. Eg: 
    - Allows us to check input (E.g so numbers will reassign this._age)
    - Allows us to perform actions on properties
    - There are diff outputs depending on what values are used to reassign this._age 
    - Note that setter methods do not need to used with () 
      (syntactically, it's like reassigning the value of a property) */
 
const person = {
  _age: 37,
  set age(newAge){
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
};

person.age = 40; 
console.log(person._age); // Logs: 40 
person.age = '40'; // Logs: You must assign a number to age

person._age = 'forty-five' // However we can still directly reassign properties :/
console.log(person._age); // Prints forty-five


// --------------

// Codecademy Exercise 2:

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors (num) {
    if ( typeof num === 'number' && num >= 0) {
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0');
    }
  },
}

robot.numOfSensors = 100; // the setter method to reassign a value
console.log(robot.numOfSensors); // calling the getter method, just like accessing a property

// Note that both Setter & Getter have the same name but are used in diff ways
// Belt & braces: both Setter & Getter provide checks on input and output of _numOfSensors
// Setter & Getter methods display a clear intention for how the object is to be used 


// --------------


/* 6. FACTORY FUNCTIONS

// What does a REAL factory do? 
// Manufacture multiple copies of an item quickly on a massive scale

// A factory function returns objects and can be reused to make MULTIPLE ALIKE object instances
// Their parameters allow us to CUSTOMIZE the returned object

// Say... we want to create an object to represent MONSTERS in JS*/ 

const monsterFactory = (name, age, energySource, catchPhrase) => {
  // the function is being declared with 'const' 
  // it has 4 x parameters
  // it returns an OBJECT of key-value pairs 
  // comprising of formatted text and a METHOD  
  // the method prints the 'catchPhrase' given
  return { 
    name: name,
    age: age, 
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    } 
  }
};

// To make an object that represents a specific monster like a ghost,
// Call the monsterFactory function and assign the return value to variable 'ghost'
// No need to create an object literal every time we need a new monster 
const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'


// --------------


// Codecademy Exercise 1 - Robot Factory

// Make a factory function with 2 parameters than returns an object.
const robotFactory = (model, mobile) => { // If using 'this': const robotFactory = function () {}
  return {
    model: model, // The key name does not take the argument given in the parameter,
    mobile: mobile, // the value takes it, therefore no need to put " " around the key name! 
    beep () { // Or beep: function ()) {}
      console.log("Beep Boop")
    }
  }
}

// Use your factory function by declaring a const variable named tinCan. 
const tinCan = robotFactory ('P-500', true);

// Check what tinCan can do - call .beep() 
tinCan.beep() 
// Beep Boop


// --------------

// Codecademy Forum Eg 1 - When would you use Factory Functions?

// A social media profile, replicating the ability within each profile to use addFriend function

let retreatMconst = (id, name, image) => {
  return({
    id, // This uses a 'destructuring' technique: Property value shorthand
    name, // This avoids assigning each property a key and value 'name: name,' 
    image, // even though the key name is the same as the parameter name assigned to it
    friends: [],
    posts: [],
    addFriend (friend) {
       this.friends.push(friend);
    },
    createPost (post) {
      this.posts.push(post);
    }
  })
}

let RB = retreatMconst (1,'RB','picpic'); 

RB.addFriend('Sophie');

console.log(RB);

// --------------


// Property Value Shorthand 
// ES6 intro'ed shortcuts for assigning properties to variables called 'destructuring' 
// See CA Forum Example 1 above 

// --------------


// Destructured Assignment
// For if we want to extract values from object properties and save them as variables

// Codecademy Example 3 - i vant to eat VURMS

const vampire = { // note this is an object, not a function because no  = () => {} 
  name: 'Dracula', 
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};

// If we wanted to extract the 'residence' property as a variable:
const residence = vampire.residence; 
console.log(residence); // Prints 'Transylvania'

// destructuring technique: 'destructured assignment' can save us some keystrokes
// Destructured assignment creates a variable named {object's key} and assign to an object: 
const { residence } = vampire; 
console.log(residence); // Prints 'Transylvania'

const { day } = vampire.preferences;  // Using it to grab nested properties of an object 
console.log(day); // Prints 'stay inside'


// --------------


// Built-in Object Methods
// Above, we have created instances of objects that have their own methods
// But we have access to built-in methods for Objects (as a JS data type) such as

.hasOwnProperty(), 
.valueOf() 

// and more, recorded in
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods
// Below we run through a few built-in methods

// Codecademy Exercise 4 - Built-in Methods

const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);
// Argument: 'robot'

console.log(robotKeys);
// Output: [ 'model', 'mobile', 'sentient', 'armor', 'energyLevel' ]
// Object.keys returns an array of keys 

// Declare a variable named robotEntries below this line and assign it to the entries of robot:
const robotEntries = Object.entries(robot);

console.log(robotEntries);
/* Output:
[ [ 'model', 'SAL-1000' ],
  [ 'mobile', true ],
  [ 'sentient', false ],
  [ 'armor', 'Steel-plated' ],
  [ 'energyLevel', 75 ] ] */
// Object.entries returns each key-value pair as an array, all within a larger array.

// Use Object.assign to create another object 'newRobot' like robot 
// but with additional properties {laserBlaster: true, voiceRecognition: true}:

const newRobot = {
  laserBlaster:true, 
  voiceRecognition: true,
}
Object.assign(newRobot, robot);

console.log(newRobot); 
// Syntax: Object.assign (target, source)
// Object.assign copies the properties from the 'source' object to the 'target' object 
// Remember it will copy OVER (replace) values to existing key names 

// --------------



