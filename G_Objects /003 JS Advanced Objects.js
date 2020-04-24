// << ADVANCED OBJECTS >>
// Reminder: JS objects are containers that store collections of related data and functionality
/* We will cover
      - how to use the 'this' keyword
      - conveying privacy in JS methods
      - defining 'getters' and 'setters' in objects
      - creating factory function (eep!)
      - using destructuring techniques
    
// 1. 'THIS' KEYWORD

Allows us to access properties outside of a .diet() method's scope: 
'this' references the calling object (which is goat)
ie the object that the method belongs to  */

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
Eg. Can cause unwanted side-effects, such as type-coercion (eg if certain datatype required)
JS does not have privacy built-in, so...naming conventions! 
    - prepend a property with underscore Eg: _amount: 1000
    

// --------------


4. GETTER METHODS
Get and return the internal properties of an object...and MORE! 
  - Uses 'get' keyword
  - Uses if...else conditional and return a diff value depending 
  - Uses this. to access the calling object's internal properties 
  - Note that getter methods do not need to called with () 
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
