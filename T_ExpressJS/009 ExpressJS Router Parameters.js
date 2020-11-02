// << ExpressJS CA - Router Parameters >>


// ----------------------------

// Recap:
// A try...catch statement marks a block of statements, to specify a response should exception be thrown 
// (assume this includes errors)
// does NOT have to be used with asynchronous functions
// but it IS used in async...await functions for error handling

// find() executes the callback function once for each element present in the array
// if it find an array element that does not return 'true' value, it returns the value of that array element and stops. 
// (so it is 'finding' the element that returns 'true')
// (if it doesn't not find that, then it returns 'undefined')

// ----------------------------


// When building Express app, we will run into a pattern of expecting certain info
// in a requested URL and using that info to identify the data being requested

// Eg: Below, we extract the reqest paramater :sorcererName from URL in both instances
// note we duplicate the code so it appears in both routes,
// as multiple diff routes require the same parameter:

app.get('/sorcerers/:sorcererName', (req, res, next) => {  // GET middleware router 
  const sorcerer = Sorcerers[req.params.sorcererName];    // extracts the sorcererName parameter 
  res.send(sorcerer.info);                               
});

app.get('/sorcerers/:sorcererName/spellhistory', (req, res, next) => { // GET middleware router 
  const sorcerer = Sorcerers[req.params.sorcererName];  
  const spellHistory = Spells[sorcerer.id].history; // sends from the Spells array 
  res.send(spellHistory);
});

// Express has a specific method to avoid to the 'pain-point' of repliacted parameter-matching code! : 

// --------------
// router.param() 
// --------------

// When we specific param is present in a route, we can write a function 
// to perform the necessary lookup and attach it to the 'req' object in subsequent middleware run:

// Eg:

app.param('spellId', (req, res, next, id) => {      // .param() takes as arg1, a parameter name  
  let spellId = Number(id);                        // the callback has a arg4: 'id' 
    try {                                         // spellId extracts the id as a number 
      const found = SpellBook.find((spell) => {  // 
        return spellId === spell.id;            // if find() finds the element which matches the id no.
      })                                       // it returns 'the value of that array element' = the object 'spell'
      if (found) {                            // otherwise it returns 'undefined'  
        req.spell = found;                   // and 'if' statement doesn't run 
        next();                             // it attaches the found object as a property to the req object, and passes it on via next() 
      } else {                             // if spell by id not found, it generates a new Error and passes it on 
        next(new Error('Your magic spell was not found in any of our tomes'));
      };
    } catch (err) {    // if try...catch statement receives an error
      next(err)       // it passes it on via next() 
    }                // both next(new Error) & next(err) call error-handling middleware
});


// The code above intercepts any request to a router handler with the :spellId parameter 
// Note that the app.param function signature 'spellId' does not have leading ':'
// as the actual ID is passed as arg4 in the callback when a callback arrives
// Inside app.param's callback, use arg4 as the param's value, NOT a key from the req.params object 

// router.param() is a powerful tool to prevent repetition of core funtionality through routes 
// Pattern:
//  - identify multiple pieces of code that accomplish the same goal
//  - put it into a single component
//  - let that component do that thing (locate & update in a single place)
//  - take care which what you are attaching to the req object - an object or a variable

// Exercise 1: 
// ----------------------------
// Typical prob of data-lookup happening based on URL parameter, multiple times in diff places
// Try combining that logic in a single place using route.param 

const express = require('express');  // requires in express module / lib
const app = express();              // instantiates app (creates instance of app)
const bodyParser = require('body-parser'); // imports bodyParser helper node module to parse JSON objects

app.use(express.static('public')); // serves static files from a folder 

const PORT = process.env.PORT || 4001;

const spiceRack = [ // array of objects 
  {
    id: 1,
    name: 'cardamom',
    grams: 45,
  },
  {
    id: 2,
    name: 'pimento',
    grams: 20,
  },
  {
    id: 3,
    name: 'cumin',
    grams: 450,
  },
  {
    id: 4,
    name: 'sichuan peppercorns',
    grams: 107,
  }
];

let nextSpiceId = 5; 

app.use(bodyParser.json()); // mounts the function to be called every time a req received 
                          // it attaches the parsed body object to req.body

 app.param('spiceId', (req, res, next, id) => { // uses app.param for all /spices/:spiceId routes 
  let spiceId = Number(id)                     // as index-checking logic
  const foundIndex = spiceRack.findIndex(spice => spice.id === spiceId);
  if (foundIndex !== -1) {
      req.spiceIndex = foundIndex;          // saves the index to the req object  
      next();
  } else {
      res.status(404).send('index not found');
  }
})                    

app.get('/spices/', (req, res, next) => { // GET route - returns all objects 
  res.send(spiceRack);
});

app.post('/spices/', (req, res, next) => { // POST route - add new spice
  const newSpice = req.body.spice;        // note that new data is not necessarily passed as query strings via req.query
  if (newSpice.name  && newSpice.grams) { // if these props exist on the object
    newSpice.id = nextSpiceId++;         // it creates a new id no. as property of the object 
    spiceRack.push(newSpice);           // adds the object to the array
    res.send(newSpice);
  } else {
    res.status(400).send();
  }
});

app.get('/spices/:spiceId', (req, res, next) => {  // GET route - by id 
    res.send(spiceRack[req.spiceIndex]);      
});

app.put('/spices/:spiceId', (req, res, next) => { // PUT route - update by id 
    spiceRack[req.spiceIndex] = req.body.spice;
    res.send(spiceRack[req.spiceIndex]);
});

app.delete('/spices/:spiceId', (req, res, next) => { // DEL route - delete by id 
    spiceRack.splice(req.spiceIndex, 1);
    res.status(204).send();
});

app.listen(PORT, () => {                          // app.listen starts the server - always at the end 
  console.log(`Server is listening on port ${PORT}`);
});


// Exercise 2: 
// -----------

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));

const PORT = process.env.PORT || 4001;

const vendingMachine = [
  {
    id: 1,
    name: 'Gum',
    price: 1.25,
  },
  {
    id: 7,
    name: 'Bag of chips',
    price: 3.50,
  },
  {
    id: 23,
    name: 'cumin',
    price: .75,
  }
];

let nextSnackId = 24;

app.use(bodyParser.json());

app.param('snackId', (req, res, next, id) => {
    let snackId = Number(id);
    const snackIndex = vendingMachine.findIndex(snack => snack.id === snackId);
    if (snackIndex === -1) {
      res.status(404).send('Snack not found!');
    } else {
      req.snackIndex = snackIndex; 
      next();
    }
});

app.get('/snacks/', (req, res, next) => {
  res.send(vendingMachine);
});

app.post('/snacks/', (req, res, next) => {
  const newSnack = req.body;
  if (!newSnack.name || !newSnack.price) {
    res.status(400).send('Snack not found!');
  } else {
    newSnack.id = nextSnackId++;
    vendingMachine.push(newSnack);
    res.send(newSnack);
  }
});

app.get('/snacks/:snackId', (req, res, next) => {
    res.send(vendingMachine[req.snackIndex]);
});

app.put('/snacks/:snackId', (req, res, next) => {
    vendingMachine[req.snackIndex] = req.body;
    res.send(vendingMachine[req.snackIndex]);
});

app.delete('/snacks/:snackId', (req, res, next) => {
    vendingMachine.splice(req.snackIndex, 1);
    res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


// ----------------
// Merge Parameters 
// ----------------

// When creating complexity in software, 
// first model out BASE COMPONENTS & use COMPOSITION to create relationships 

// When we build web endpoints, we might want to access some property of a complex object 
// In Express, we do this using a nested router - a router invoked within another router
// In order to pass parameters the parent router has access to, 
// we pass a special config object with defining the router 

// Eg:

const sorcererRouter = express.Router();                      //.Router() creates an instance of a router
const familiarRouter = express.Router({mergeParams: true});   // a router is a family of routes

sorcererRouter.use('/:sorcererId/familiars', familiarRouter); // mounts 'familiarRouter' at specified endpoint
                                                              // as child of parent router 'sorcererRouter' 
sorcererRouter.get('/', (req, res, next) => {
  res.status(200).send(Sorcerers);                            // get route on sorcererRouter 
  next();
});

sorcererRouter.param('sorcererId', (req, res, next, id) => {
  const sorcerer = getSorcererById(id);   
  req.sorcerer = sorcerer;
  next();
});

familiarRouter.get('/', (req, res, next) => {
  res.status(200).send(`Sorcerer ${req.sorcerer} has familiars ${getFamiliars(sorcerer)}`);
});

app.use('/sorcerer', sorcererRouter);                       // mounts 'familiarRouter' at specified endpoint

// Above, we define two endpoints: /sorcerer  &  /sorcerer/:sorcererId/familiars 
// The familiars are nested into the sorcerer endpoint 
// indicating that a sorcerer has multiple familiars
// Note the {mergeParameters: true} argument that gets passed when creating 'familiarRouter'
// This arg tells Express that 'familiarRouter' should have access 
// to parameters passed into its parent router 'sorcererRouter'. (It says 'pass the params!')
// We then tell express that the path for 'familiarRouter' is the same as the path for 'sorcererRouter'
// with the additional path /:sorcererId/familiars
// We then create a family of routes (a router) built by appending routes to 'familiarRouter's base:
// /sorcerer/:sorcererId/familiars

// Exercise: We can now make our spices API more flexible 
// allowing spices to be associated with diff spice racks
// When new spices are created/updated, we can associate them to the correct spice rack. 

// Code Challenge Exercise: 
// Use Express middleware resources to find an appropriate middleware package to handle CORS requests.
// cors = cross-origin resource sharing
// https://en.wikipedia.org/wiki/Cross-origin_resource_sharing

const express = require('express'); // require 'express' module
const cors = require('cors');       // require in 'cors' module
const app = express();              // instantiate app
app.use(cors());                    // use cors for all requests

// Example of using middleware functions for authorisation and privacy of info:

const express = require('express');
const app = express();

const secretData = { adminUsers: ['1', '2', '51'] }

const publicData = { colors: ['green', 'orange'], numbers: [1, 2, 3, 4, 5] }

const isAdmin = (req, res, next) => {
  const id = req.params.userId;
  if (!secretData.adminUsers.includes(id)) {
    res.status(401).send(); // Unauthorized
  } else {
    next();
  }
}

app.get('/:userId/colors', (req, res, next) => { res.send(publicData.colors); });

app.get('/:userId/numbers', (req, res, next) => { res.send(publicData.numbers); });

app.get('/:userId/phone-numbers', isAdmin,  (req, res, next) => { res.send(secretData.coolPhoneNumbers);});

app.get('/:userId/fav-sites', isAdmin, (req, res, next) => { res.send(secretData.favSites);});

