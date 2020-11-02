// << INTRO TO CLASSES >>

// JS is an object-oriented programming (OOP) language used to model real-world items. 
// Classes are tools to quickly produce similar objects (like factory functions) 
// We will also learn about 'inheritance' and 'static' methods 

// QUESTION: Constructor Function (Classes) vs. Factory Function? (both create Objects)
// Factory Functions offer better 'encapsulation' and 'data hiding'
// Classes makes sense when working with lots of objects with same general makeup.
// Factory makes sense when we want a special function with a conditional output.
// Discussion here: https://stackoverflow.com/questions/8698726/constructor-function-vs-factory-functions
// CA forum here: https://discuss.codecademy.com/t/is-there-still-a-purpose-to-factory-functions-or-should-we-always-use-classes/438244

// --------------


//  01 CLASS CREATION >> Codecademy Exercise 1:

// Object literal: 

let halley = {
  _name: 'Halley',
  _behavior: 0,

  get name() {
    return this._name;
  },

  get behavior() {
    return this._behavior;
  },

  incrementBehavior() {
    this._behavior++;
  }
}

//  Class called 'Dog' can serve as a template for creating new Dog objects:
//  Creating an instance of an object via a class is called 'class instantiation' 

// 02 CONSTRUCTOR METHOD >>

// The main diff between class and object syntax is the constructor() method.
// Also no commas between methods.
//  Example: 

class Dog { // Dog is the name of the class. Convention: capitalise and CamelCase class names
  constructor(name) { // JS will invoke the constructor() method every time 
    this.name = name; // In the context of 'class', 'this' refers to an instance of that class
    this.behavior = 0;
  }
  get getName() { // take care not to name methods the same as other properties
    return this._name;
  }
  get getBehavior() {
    return this._behavior;
  }   

  incrementBehavior() {
    this._behavior ++;
  }
}

// QUESTION: Compare the Object literal and the class - what are the differences? 
// OBSERVATIONS: 
// In the class, typical function syntax not required: let variableName = () => {} 
// It is simply: class variableName {} 
// The class has a 'constructor' method using the 'constructor' keyword 
// Within this constructor method, the 
// _name & _behaviour are assigned within the constructor method, but not declared as variables
// However the other methods reference them as if they were keys
// The class is not strictly an object, as the properties are not seperated by commas


// --------------

// Note that an instance of a class can be created (class instantiation) without specifying a constructor method:

class Dog { // no constructor()
  pat() {
    console.log("good dog!")
  }
}

let newDog = new Dog()
newDog.pat() // Output: good dog!

// If you do not specify a constructor method a default constructor is used. 
// For base classes the default constructor is:
constructor() {}

// For subclasses, the default constructor is:
constructor() {
  super.call()
}

// --------------


// 03 INSTANCE >>

//  What is an instance?
//  An instance is an object that contains the property names and methods of a class... 
//  but with unique property values! 

const balley = new Dog('Balley'); // Creates new Dog instance saved to variable, with 'new' keyword 
console.log(balley.name); // 'new' calls constructor(), runs the code inside of it, and returns new instance 


// --------------


// 04 METHODS >>
// Classes also have getters and setters, same syntax as in an Object
// EXCEPT do not include commas between methods

// Codecademy Exercise 1: NHS Warriors 

// The Surgeon class creates an object for each surgeon
// and includes a method for tracking the remaining Vacation days of a Surgeon  

class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }

  get name () {
    return this._name;
  }

  get department () {
    return this._department;
  }

  get remainingVacationDays () {
    return this._remainingVacationDays;
  }

  takeVacationDays (daysOff) {
    let x = this.remainingVacationDays - daysOff;
    this._remainingVacationDays = x;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

// --------------

// 05 METHOD CALLS >>

// The syntax for calling methods on instances is the same as calling them on an object
// .method() 
// (getters and setters do not need ())

console.log(surgeonCurry.name); // Output: Curry
surgeonCurry.takeVacationDays(3);
console.log(surgeonCurry.remainingVacationDays); // Output: 17

// --------------

// 06 INHERITANCE I >>

// Inheritance improves readability, efficiency and saves time
// As the number and size of the subclassess increases, the benefits grow.
// Codecademy Example 1: Batty daycare 


class Bat {
  constructor(name, usesLitter) {
    this._name = name;
    this._usesLitter = usesLitter;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get usesLitter() {
    return this._usesLitter;
  }

  get behavior() {
    return this._behavior;
  }  

  incrementBehavior() {
    this._behavior++;
  }
}

// The Bat class shares properties and method with the Dog class
// However it has one additional property (_usesLitter) holding a boolean value 
// When multiple classes share properties or methods, they are candidates for INHERITANCE
// Inheritance is a tool developers use to decrease the amount of code they need to write

// In inheritance, you can create a 'parent' class (or 'superclass')
// with properties and methods that multiple 'child' classes (or 'subclasses') share
// Child classes inherit the properties and methods from their parent class

// In this case, we could create a Parent class called Animal 
// Cat class and Dog class could be Child classes

// QUESTION: How do you designate Parent class (superclass) and Child class (subclass)
// ANSWER: Once we have shared properties & methods in a parent class 'Animal' 
// we can EXTEND them to the subclass 'Cat'

// Parent class 'Animal': 

class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get behavior() {
    return this._behavior;
  }   

  incrementBehavior() {
    this._behavior++;
  }
} 

// Child class 'Cat':

class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
  get usesLitter() { // Note child classes can have their own properties added 
    return this._usesLitter;
  }
}

const bryceCat = new Cat('Bryce', false); 
console.log(bryceCat._name); // output: Bryce

// 'extend' keyword makes ALL parent methods of the Animal class available to the Cat class
// 'super' keyword calls the constructor of the PARENT class (superclass)
// (passes the 'name' argument of the Cat class to the constructor of the Animal class )
// (when the Animal constructor runs, it sets this._name = name; for new Cat instances )
// _usesLitter is a new property unique to Cat class so it is set as usual
// Call 'super' method before this. keyword (ideally first line of subclass constructors) 


// --------------

// 07 INHERITANCE II - V >>

// Codecademy Example 2: NHS Heroes 
// Creating a parent class for the child classes of Doctor & Nurse: 

class HospitalEmployee {
  constructor (name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name () {
    return this._name;
  }

  get remainingVacationDays () {
    return this._remainingVacationDays;
  }

  takeVacationDays (daysOff) {
    this._remainingVacationDays -= daysOff;
  }
    
  static generatePassword() { // static method 
    return Math.floor(Math.random()*10000); 
  }
}

// Creates Nurse class as a Child class (subclass) 
// Create a new instance of Nurse 

class Nurse extends HospitalEmployee {
  constructor (name, certifications) { 
    super (name); // 'super' calls the parent's constructor method for the (name) argument
    this._certifications = certifications;
  }
    get certifications () { // Nurse class has it's own getter and 'addCertification' method
    return this._certifications;
  }
    addCertification (certificate) { 
      this._certifications.push(certificate);
    }
}

const nurseOlynyk = new Nurse ('Olynyk', ['Trauma', 'Pediatrics'])
nurseOlynyk.addCertification('Blood letting');
console.log(nurseOlynyk.certifications); // Output: [ 'Trauma', 'Pediatrics', 'Blood letting' ]

// LESSON! 
// A subclass automatically inherits all of the parent class getters, setters and methods
// The 'super' keyword is used to 'set' which parent property it inherits 

// --------------

// 08 STATIC METHODS >>
 
// You cannot call static methods on an instance, only directly from the class
// Create using the 'static' keyword. Example:

class Mammal {  
  constructor(name) { 
    this._name = name;
    this._behavior = 0;
  }

  static generateName() { // static method .generateName() returns a random name
    const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
    const randomNumber = Math.floor(Math.random()*5);
    return names[randomNumber];
  }
} 

console.log(Mammal.generateName()); // returns a name Eg 'Spike'
const dolphin  = new Mammal ('Dolphin'); // But if we create a new object instance...
dolphin.generateName(); // Output: TypeError (it's not accesible)

// Added a static method to the HospitalEmployee class. Called here: 
console.log(HospitalEmployee.generatePassword())

// --------------

/* 09 REVIEWS: CLASSES >>
 
 - Classes are TEMPLATES for objects
 - JS calls a 'constructor' method when we create a new instance of a class
 - Inheritance: 
      - create a parent class with properties and methods that can be extended to child classes
      - use 'extends' keyword to create a subclass
      - 'super' keyword calls the constructor() of a parent class 
- Static methods are called on the class, but not object instances. 
  
// --------------
*/
