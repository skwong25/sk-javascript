// << LITERAL OBJECTS REVIEW >>

/* The below code is to practice:
      - creating an object literal (a list of key-value pairs in syntax: {key:value} seperates by COMMAS ) 
            - each key-value pair is a property
            - when a property is a function, it's called a method
      - accessing, adding or editing a property via '.' notation or ['bracket'] notation.
            - objects are mutable, they can change their properties (even when declared with const)
      - adding methods to object literals using key-value syntax with anonymous function expressions as values
            - the key serves as the method's name, the value is an anonymous function expression
   
        // alert: function () {} // can be refactored as:
        // alert () {} 

      - navigating nested objects via chained operators
      - iterate through objects with for...in syntax
      - remember that objects are 'passed-by-reference', meaning changes are permanent 

// -------------- */


const house =  {
  bedrooms: 4, // each key-value pair is a property
  bathrooms: 3, // the number of bathrooms is a property of 'house'
  'heating system': 'boiler',
  springAlert () {console.log("it's time for a spring clean!")
  }, // remember to include a comma after the last key-value pair! 
}

// accessing a property:
console.log(`This house has ${house.bedrooms} bedrooms and ${house.bathrooms} bathrooms.`)
// Output: This house has 4 bedrooms and 3 bathrooms.

// adding a property:
house['occupants'] = null ; 

// editing the value of a property:

house['occupants'] = {
  1: {
    name: 'father',
    age: 70,
  },
  2: {
    name: 'mother',
    age: 60,
  },
  3: {
    name: 'brother',
    age: 40,
  },
  4: {
    name: 'sister',
    age: 30,
  },
  5: {
    name: 'boyfriend',
    age: 28,
  },
}

// -------------- 


// adding a method with anonymous function expression

house.mealtimes = {
  lunch () {
    console.log("who's turn is it to cook?"); 
 },
};

// editting a method (re-assigning different functions to house.mealtimes )

house.mealtimes = {
  lunch () {
    console.log("what's cooking?"); 
  },
  dinner () {
    console.log("sik faan la!");
  },
};

// invoking a (nested - accessed via chained operator) object method (a function stored within an object) via syntax: object.method()

console.log(house.springAlert); // Output: [Function: springAlert]
house.springAlert() // Output: it's time for a spring clean!
house.mealtimes.lunch() // Output: what's cooking?
house.mealtimes.dinner()  // Output: sik faan la!


// -------------- 


// we can write a function to access properties using a key: 
// Remember that the value has to be written as a string if the function accepts it in brackets

const what = (object, nameProp) => { 
  return object[nameProp]; 
}

console.log (what(house,'bedrooms'));

// The function 'whodat' accepts an occupant 'number' and returns their name

console.log(house.occupants['1']);

const whodat = (number) => {
  return house.occupants[number].name;
}

console.log (whodat('1'));


// -------------- 


// iterating through objects using for...in syntax 
// remember that key-value pairs are not ordered, so we cannot iterate through them via index! 

  for (let one in house.occupants) {
    console.log(`Occupant ${one}: ${house.occupants[one].name} is ${house.occupants[one].age} years old.`);
  }

// The preceding code cycles through the names and ages of occupants
// 'one' refers to each key in the 'occupants' object (1,2,3,4 etc)  

const time = (number, year) => {
  house.occupants[number].age += (year - 2020); 
  console.log(`It is now ${year}, ${house.occupants[number].name} will be ${house.occupants[number].age}.`) 
} 

// time ('1', 2027); 
// The preceding code declares a function 'time' which accepts two parameters to access nested properties 

/* Output: 
Occupant 1: father is 70 years old.
Occupant 2: mother is 60 years old.
Occupant 3: brother is 40 years old.
Occupant 4: sister is 30 years old.
Occupant 5: boyfriend is 28 years old. */


const allTime = (year) => {
  for (let one in house.occupants) {
  house.occupants[one].age += (year - 2020); 
  console.log(`It is ${year}, ${house.occupants[one].name} is ${house.occupants[one].age}.`) 
  } 
}

allTime (2021);
// The preceding Function 'alltime' uses a for...in loop to iterate through the 'occupants' object
// If you input the current year, it displays how old each household member is. 

/* Output:
It is 2021, father is 71.
It is 2021, mother is 61.
It is 2021, brother is 41.
It is 2021, sister is 31.
It is 2021, boyfriend is 29. */

console.log(house.occupants['1'].age); // Output: 71
// Objects are passed-by-reference, the object is mutated permanently. The age of occupant '1' has now changed to 71.  

// -------------- 