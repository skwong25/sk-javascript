// << ADVANCED OBJECTS REVIEW >>

/* The below code is to practice:
      - referencing the 'calling object' within a method using the 'this' keyword
            - this allows us to access properties 
            - otherwise methods do not have auto access to other internal properties of the object
            - if we want to access other int. properties however, don't use arrow functions 
      - JS conventions to notify other developers of privacy in code (none built-in):
            - underscore before _propertyName - that property is intended not to change 
            - getter / setters allow more detailed ways of accessing and assigning properties 
      - Factory Functions allow us to create Object instances quickly and repeatedly
      - Object destructuring:
            - property value shorthand
            - destructured assignment 
      - Documentation & In-Built Methods
            - Object.keys()
            - Object.entries()
            - Object.assign(target,source) */

// -------------- 


// Using the 'this' function inside a method to reference the calling object:

let smoothie = {
  _berryBlend: 'ready-mix', //same name as method
  _pomegranates: 1,
  _carrots: 3,
  blueberries: 10,
  apples: 2,
  blend () {
    let total = this.blueberries + this._pomegranates + this.apples + this._carrots;
    console.log(`This smoothie contains ${total} fruits!`)
  },
  get berryBlend () {
    if (this.blueberries >= 10) {
        console.log(`${this.blueberries}-blueberry blend coming up!`)
        } else {
      console.log(`I can't make a smoothie with ${this.blueberries} blueberries!`)
    }
  },
  set moreApples (addApples) {
    if (typeof addApples === 'number') {
      this.apples += addApples;
    } else {
      console.log('How many more apples you wan?');
    }
  },
}

smoothie.blend();
// Calling the 'blend' method within the 'smoothie' object
// Output: This smoothie contains 16  fruits!

// Use a property that has the exact same name as a setter/getter method
smoothie.berryBlend;
// Output: 10-blueberry blend coming up!
// The method call defaults to the method, not accessing the property of the same name. 

smoothie.moreApples = 5;
console.log(smoothie.apples);
// Output: 7


// -------------- 


// Creating a Factory Function that creates new object instances 
// We will create different smoothies: 

const smoothieFactory = function (name, fruits, calories, description) {
  return {
  name, // Destructuring techniques - Property Value Shorthand
  fruits,
  calories,
  description () {
    console.log(description);
      },
  addFruit (fruit) {
      this.fruits.push(fruit); // note that 'push' only adds an element to an array
      }, 
  nutrition: {
    sugar: { '100g':'1g'},
    fibre: { '100g':'20g'},
      },                 
  }                                     
}

// Note it did not work when we tried to 'push' a key-value pair into an object
// to add new keyvalue pairs into an object, use assignment operator

const basic = smoothieFactory('waldorf whirlwind', ['apple', 'pear', 'grapes'], 200, 'refreshing and light');
const special = smoothieFactory('melon madness', ['gaia', 'cantaloupe', 'honeydew'], 150, 'cool and hydrating');

console.log(basic.name); // Output: waldorf whirlwind

special.addFruit('watermelon') // this 'added' a new fruit to the smoothie 
console.log(special.fruits); // fruits: [ 'gaia', 'cantaloupe', 'honeydew', 'watermelon' ]

basic.nutrition['citric acid'] = {'100g':'14g'} // To add a keyvalue pair, use an assignment operator 
console.log(basic.nutrition); 
/* Output: 
  sugar: { '100g': '1g' },
  fibre: { '100g': '20g' },
  'citric acid': { '100g': '14g' } */


// -------------- 


// Basic Object DESTRUCTURING technique is 'Destructured Assignment'
// This is if we want to extract a property and save it as a variable of the same name: 

const {fruits} = basic;
console.log(fruits); // Output: [ 'apple', 'pear', 'grapes' ]
// Here we extracted the property 'fruits' and saved it in a variable called 'fruits'.

// This 'destructuring' works on multiple and nested properties at the same time:
const {sugar,fibre} = basic.nutrition; 

/* The alternative:
let sugar = basic.nutrition.sugar;
let fibre = basic.nutrition.fibre; */

console.log(sugar); // Output: { '100g': '1g' }
console.log(fibre); // Output: { '100g': '20g' }

// a property can be unpacked from an object and ASSIGNED TO A NEW VARIABLE NAME: 
// (maybe the variable is already taken in the scope)
const {sugar: howSweet, fibre: howFibrous} =  basic.nutrition; 
console.log(howSweet); // Output: { '100g': '1g' }
console.log(howFibrous); // Output: { '100g': '20g' }

// If you destructure an object for a non-existant property 
// the variable will be created but will return 'undefined'. 
// We can set 'FALLBACK VALUES' to default to if the item is not in the object: 

let {fat = 0} = basic.nutrition; // As basic.nutrition.fat is 'undefined', it takes default of 0 
console.log(fat) // Output: 0

// Note this destructuring default value only applies when value is 'undefined'
// null, false and 0 would all count as legitimate values. 

// It is not the same as:
const howFatty = basic.nutrition.fat || {'100g':'100g'}
console.log(howFatty); // Output: '100g':'100g'; 

// READ-ONLY! Take note that destructuring DOES NOT change the properties within the object: 
const {size = 'grande'} = basic; 
// This ONLY creates a variable 'size' with a default value 'grande' if basic.size === 0 
// It does NOT create a new key-value pair within the Object 'basic'...

// Handy Destructuring articles:
https://wesbos.com/destructuring-objects


// -------------- 


/* Practising  Built-in Methods: 
    - Object.keys(object): returns array of keys
    - Object.entries(object): returns an arrays for each key-value pair, all within an array
    - Object.assign (target,source) */

console.log(Object.keys(basic));
// ['name','fruits', 'calories', 'description', 'addFruit', 'nutrition']

console.log(Object.entries(basic));
// [ [ 'name', 'waldorf whirlwind' ], [ 'fruits', [ 'apple', 'pear', 'grapes' ] ], 
// [ 'calories', 200 ], [ 'description', [Function: description] ], [ 'addFruit', [Function: addFruit] ],
// ['nutrition', { sugar: [Object], fibre: [Object], 'citric acid': [Object] }]]

let tangerineDream = {}; // the source object can have existing properties to be added-to or copied over
Object.assign(tangerineDream, basic);
tangerineDream.addFruit('tangerine');
console.log(tangerineDream.fruits); // Output: [ 'apple', 'pear', 'grapes', 'tangerine' ]


// -------------- 


// EXTRA RESEARCH: 

// PASSING OBJECTS AS A FUNCTIONS PARAMETER >> 

const user = {
  id: 42,
  displayName: 'jdoe',
  fullName: {
    firstName: 'John',
    lastName: 'Doe'
  }
};


function whois({displayName, fullName: {firstName: name}}) {
  return `${displayName} is ${name}`;
}
// remember that default 'fallback values' can also be set for parameters in functions!  

console.log(whois(user));  // "jdoe is John"

// -------------- 

// DESTRUCTURING COMBINED WITH FOR...OF FUNCTIONS  >> 

const people = [
  {
    name: 'Mike Smith',
    family: {
      mother: 'Jane Smith',
      father: 'Harry Smith',
      sister: 'Samantha Smith'
    },
    age: 35
  },
  {
    name: 'Tom Jones',
    family: {
      mother: 'Norah Jones',
      father: 'Richard Jones',
      brother: 'Howard Jones'
    },
    age: 25
  }
];

for (const {name: n, family: {father: f}} of people) {
  console.log('Name: ' + n + ', Father: ' + f);
}

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"

// The preceding code uses the 'for...of' function which is looping function for ITERABLES

// -------------- 

/* THE DIFFERENCE BETWEEN FOR...OF AND FOR...IN

For...in is for enumerables
For...of is for iterables

Think of enumerables as a rectangle and iterables as a square
Consequently all iterables are enumerables but not all enumerables are iterables

verb - Enumerate: counting items one at a time
noun - Enumerable: an entity where its parts can be distinctly identified and referenced

verb - Iterate: to perform a repetition 
noun - Iterable: an entity where the same set of actions are performed on each item 

Enumerables have distinct parts but are not ordered 
(eg. key-value pairs in objects where a for...in loop counts over the identifiers)
(however for...in will also accept an interable, and counts over the indexes 'position identifiers')

Iterables are ordered 
(eg. arrays, use a for...of loop) */

// -------------- 
