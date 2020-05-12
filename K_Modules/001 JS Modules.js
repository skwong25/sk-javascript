/* << MODULES BACKGROUND >> 

ES6 offers built-in JS modules
ES6 modules are stored in files. There is exactly one module per file and one file per module. 
There are 2 ways of exporting from a module: 
    - Multiple > named exports (several per module)
    - Single > default exports (one per module)

Each module is a piece of code that is executed once it is loaded.
In that code, there may be declarations (variable/functions etc) that default as local to the module
Some of these can be marked as EXPORTS, then other modules can IMPORT them 

A module refers to others modules via module specifiers, strings that are either: 
    - relative paths ( '.../model/user')
      (relative to the location of the importing module) usually omits file extension .js
    - absolute paths ( '/lib/js/helpers') point directly to the file of the module to be imported
    - names ('util') what module names refer to, must be configured

Modules are singletons. Even if imported multiple times, only a single 'instance' of it exists.
  
This avoids global variables, the only things that are global are module specifiers. 

  << WHAT IS NODE >> 

Node is a JS runtime. Previously you could only run JS on a browser, 
Node allows us to execute a JS program on a machine as a standalone application
https://www.freecodecamp.org/news/what-exactly-is-node-js-ae36e97449f5/
^ includes neat video on JS event loops

--------------

  << NODE - MODULE.EXPORTS >> 

We can get started with modules by defining a module in one file 
and making the module available for use in another one with Node.js syntax 'module.exports' 

Every JS file run in Node has a local MODULE object with an EXPORTS property
to define what should be exported from the file. 

Below is an example of how to define a module 
and how to export it using the statement 'module.exports' */

  let Menu = {}; 
  Menu.specialty = "Roasted Beet Burger with Mint Sauce";
  module.exports = Menu; 

/* 'let' declares an uppercase variable initialised with an empty object. 
  'Menu.specialty' creates a property in the Menu object with value. 
  'module.exports' = Menu; exports the Menu object as a module. 
  'module' is a variable that represents the module 
  'exports' exposes the module as an object

The pattern we use to export modules is:
1. Create an object to represent the module
2. Add properties or methods to the module object
3. Export the module with module.exports  
  
--------------

 << NODE - require() >> is a JS function that loads a module
                (argument) =  file path of the module (./menu.js) 
                .js extension optional, assumed if not included

To make use of an exported module and its defined behaviour, import the module into another file. 
Eg: If we want a module to control a menu data & behaviour and another to handle placing an order
Create a file 'order.js' and import 'Menu' module from 'menu.js' to 'order.js' using require().  
require() takes a file path in ' ' pointing to the original module file: */

  const Menu = require('./menu.js'); // Imports the module, assigned to local variable
                                     // Makes entire behaviour of 'Menu' available in order.js
  function placeOrder() {
    console.log('My order is: ' + Menu.specialty); // Uses the module and properties within program
  }

  placeOrder();
  
// --------------

// Codecademy Exercise 1 - module.exports & require()

// Step 1: In 1-missionControl.js use the require() function to import the Airplane module 
// from 1-airplane.js. 

// Step 2: In 1-missionControl.js, define a function displayAirplane(). 
// In the function, log the value of the module and its property to the console. 

// Step 3: Call the displayAirplane() function.

// 1-airplane.js >> 

let Airplane = {};
Airplane.myAirplane = "StarJet"
module.exports = Airplane; // This only exports the variable 'Airplane'

// 1-missionControl.js >> 

const Airplane = require('./1-airplane.js'); // imports module and assigns it to a variable 

const displayAirplane = () => { // declares an anonymous function 
  console.log(Airplane.myAirplane); // which accesses an object property from the imported module
}

displayAirplane(); // Output: StarJet 

// QUESTION: Do I need to assign the imported module to a variable?
// ANSWER: It is easier to read and work with when assigned to a variable. 
// Otherwise every reference needs tagging onto the return value of the required() function: 

console.log(require('./1-airplane.js').Airplane.myAirplane); // Output: StarJet 
// Instead of that, just access the module's properties via an assigned variable
  
// --------------

//  << NODE - MODULE.EXPORTS II >> 

//  You can wrap any collection of data/functions in an object for module.exports. Eg:
// In the below code, module.exports the {object} containing properties

// menu.js >>

module.exports = {
  specialty: "Roasted Beet Burger with Mint Sauce",
  getSpecialty: function() {
    return this.specialty;
  } 
}; 

// order.js >>
const Menu = require('./menu.js');

console.log(Menu.getSpeciality); // accesses behaviour in the Menu module 

// --------------

//  << ES6 - EXPORT DEFAULT >> 

// Node.js supports require() / module.exports 
// but ES6 supports a new syntax for exporting modules - more readable/flexible 

// Default export 
//      - allows us to export one module per file 
//      - uses the JS 'export' statement to export JS objects, functions and primitive data types
//      - in ES6 (eg. for front end development) use 'export default' in place of 'module.exports'
//      - Node does not support 'export default' so 'module.exports' is used for Node.js development

let Menu = {};
export default Menu; // Note the diff in syntax: module.exports = {module}

// --------------

//  << ES6 - IMPORT DEFAULT >> 

// ES6 intros the 'import' keyord for importing objects:
import Menu from './menu';

//  4 Points:
// 1. Note the syntax: 'import' begins the statement
// 2. 'Menu' specifies the name of the variable to store the default export in 
// 3. 'from' specifies where to load the module from 
// 4. './menu' is the location. When dealing with local files, does not require extension.  


// Codecademy Example 2 - export default / import...from: 

//  airplane.js >> 

const Airplane = {}

Airplane.availableAirplanes = [
    { name: 'AeroJet', fuelCapacity: 800
    },
    { name: 'SkyJet', fuelCapacity: 500
    } ];

export default Airplane; // exports the Object Variable 'Airplane'

// missionControl.js >>

import Airplane from './airplane'; 

const displayFuelCapacity = () => {
Airplane.availableAirplanes.forEach((element) => { 
  console.log(`Fuel Capacity of ${element.name}: ${element.fuelCapacity}`) 
  })
};

displayFuelCapacity() 
// Output: Fuel Capacity of AeroJet: 800, Fuel Capacity of SkyJet: 500

// --------------

//  << ES6 - NAMED EXPORTS >> 

// ES6 introduced a second common approach to export modules in addition to 'export default'
// NAMED EXPORTS exports data SIMPLY using the 'export' keyword and { variable names }
// Each export is stored in its own variable. 

// Codecademy Example 3:

let specialty = ''; // string object
function isVegetarian() { // function object
}; 
function isLowSodium() {
}; 

export { specialty, isVegetarian }; // exports objects by their variable names 

// Named exports can be exported upon declaration
// by placing 'export' keyword in front of variable declarations:
// Means no seperate export statement is required. 

export let speciality = ''; 
export function isVegetarian () {}; 

// --------------

//  << ES6 - NAMED IMPORTS >> 

// NAMED IMPORTS import modules exported used NAMED EXPORTS 
// Use 'import' keyword and {Variable Names}:
import { speciality, isVegetarian }  from './menu'
// Same as import default (import...from) statement with {} instead of a single variable 

// --------------

// Codecademy Exercise 4 - named exports/imports

//  airplane.js >> 

let availableAirplanes = [
  { name: 'AeroJet',
  availableStaff: ['pilots', 'flightAttendants', 'medicalAssistance', 'sensorOperators']
  },
  { name: 'SkyJet', availableStaff: ['pilots', 'flightAttendants']
  } ];

let flightRequirements = {
requiredStaff: 4
};

function meetsStaffRequirements (availableStaff, requiredStaff) {
if (availableStaff.length >= requiredStaff) {
return true;
} else { return false }
};

export { availableAirplanes, flightRequirements, meetsStaffRequirements};

//  missionControl.js >> 

import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

function displayStaffStatus() {
availableAirplanes.forEach(function (element) {
  console.log(element.name + ' meets staff requirements: ' + 
meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) ); 
  }); 
}

displayStaffStatus() 
// Output: 
// AeroJet meets staff requirements: true
// SkyJet meets staff requirements: false

/*
STEP 1: Import into missionControl.js using NAMED IMPORTS 
STEP 2: Declare a function 'displayStaffStatus' which iterates over the availableAirplanes array
        Each element in this array is an object, containing properties for a specific airplane
        (If this was a nested object, could be done with a for...in loop)
STEP 3: Within this function, log the output: 
        (element name) + ' meets staff requirements: ' + (true/false)
        The boolean is the return value of calling the 'meetsStaffRequirements' method
        passing two parameters 'element.availableStaff' and 'flightRequirements.requiredStaff'
STEP 4: call the displayStaffStatus() function. */


// --------------

//  << ES6 - EXPORT AS (ALIASES)>> 
// Change the name of variables upon export/import with 'as' keyword:

// Codecademy Example 5:

let specialty = '';
let isVegetarian = function() {
}; 
let isLowSodium = function() {
}; 

export { specialty as chefsSpecial, isVegetarian as isVeg, isLowSodium };
import { isLowSodium as saltFree} from './Menu';

// Another way of using aliases is to import* the entire module as an alias:
// In this way, whatever name exported is available as properties of that module

import * as Carte from './menu'
Carte.chefspecial;
Carte.isVeg();
Carte.isLowSodium;

// QUESTION >> What is import* doing?
// ANSWER >> import* is importing ALL the named exports from the specified location


// --------------

//  << ES6 - COMBINING EXPORT & IMPORT STATEMENTS >>

// It is possible to use named exports and default exports together (unsure why?) Eg:
// Same goes for import statements

export let newVariable = {} // export upon declation 
export { specialty as chefsSpecial, isVegetarian as isVeg }; // named export
export default isGlutenFree; // export default 
 
// -------------- 

// << SUMMARY >> 

// NODE supports module.exports and require() function to import/export modules 
// module.exports works with two syntaxes:

module.exports = Variable
module.exports = { 'any collection of data/functions within an Object' } 

//  in conjunction with the require() function:
//  (capture in a variable for easy working)
let Module = require('./file.js')

// ES6 supports 'export default' and 'named exports'. Syntax:
export default Variable 
export { Variable1 as Variable2, Variable3 } // using EXPORT and { NAMED variables}
export let Variable = {} ; // export upon declaration 

//  in conjunction with 'import default' (import...from). Syntax:
import Variable from './file'
import { Variable1, Variable2 } from './file'
import { Variable2 as Variable3 } from './file'
import * as AllVariables from './file'