// << ExpressJS CA - MiddleWare >>

// -------------------------------

// Recap: Node is a JS runtime. 
// A runtime is something that converts high-level code and compiles it into code a computer can understand
// It allows JS code to be run outside of a browser

// Recap: ExpressJS can be combined wth Node to create Web servers and web application back-ends 

// In the sample CA code, we are seeing req.on()
// Throw back to Event-driven programming in the Node CA Intro  : 
// The EventEmitter class in Node's 'events' core module also has a .on() method
// which assigns a listener callback function to a named event. Eg: 
myEmitter.on('new user', newUserListener)
// first argument > name of the event as string
// second argument > the listener callback function

// This goes hand-in-hand with the .emit() method which announces that a named event has occurred
myEmitter.emit('new user', 'Lily Pad')

// -------------------------------

// Rem that: An Express application is essentially a series of middleware function calls. 
// It is precisely this service that we leverage Express for
// In addition to performing the routing that allows us to communicate data for each endpoint 
// we can perform application logic by inplmementing the necessary middleware

// DRY-ing Code with Functions
// Beyond labelling, good code leverages the strength of its programming language to avoid performing the same tasks 

// Code eg:
// the below is a series of functions 
// each accepts a number as an argument, adds an amount to it and logs to console the result. 
const addFive = number => {
    const fiveAdded = number + 5;
    console.log(`Your number plus 5 is ${fiveAdded}`);
  }
  
  const addTen = number => {
    const tenAdded = number + 10;
    console.log(`Your number plus 10 is ${tenAdded}`);
  }
  
  const addTwenty = number => {
    const twentyAdded = number + 20;
    console.log(`Your number plus 20 is ${twentyAdded}`);
  }

//  The similarity in functionalty can be joined into one element:

const addNumber = (number, addend) => {
    const numAdded = number + addend;
    console.log(`Your number plus ${addend} is ${numAdded}`);
  }

// Adding an argument simplifies the code and saves time should we require an addFifty etc function in future
// If you perform similar tasks without refactoring, you violate DRY - 'Don't Repeat Yourself' 

// -------------------------------
// DRY-ing Routes with app.use()
// -------------------------------

// In the previous exercise we replaced console.log('GET request received') in each Express route with a function logRequest('HTTP Verb')
// How do we get the code to run every time one of the Express routes is called without repeating itself?
// We write middleware. Middleware is code that executes between receiving request and returning response. 
// It operates on the boundary of these two HTTP actions.  

// In Express, middleware is a function. Middleware can perform logic on request and response objects such as:
// - inspecting a request
// - performing logic based on the request 
// - attaching info or a status to the response
// - sending the response back to the user
// - passing the request & response onto another middleware
// Middleware can do all of the above and anything a JS function can do. Eg of middleware in action:

// app.use() takes a callback function called for every received request
// Every time the server receives a request, it finds the first registered middleware function and calls it: 

const logRequest = (verb) => {
    console.log(`${verb} Request Received`);
  }

// is replaced by 

app.use((req, res, next) => {
    console.log(`${req.method} Request Received`)
});

// -------
// next()
// -------

// The middleware stack is processed in the order they appear in the application file - regardless of method
// whether its app.use() or app.get() 
// Eg The below code is called in order they appear, provided next() is called

  app.use((req, res, next) => {                         // assigns a callback function to be called whenever a request is received 
    console.log("A sorcerer approaches!");
    next();
  });
  
  app.get('/magic/:spellname', (req, res, next) => {    // following code registers a series of GET routes on the same path to retrieve spell by id   
    console.log("The sorcerer is casting a spell!");    
    next();
  });
  
  app.get('/magic/:spellname', (req, res, next) => {    
    console.log(`The sorcerer has cast ${req.params.spellname}`);
    res.status(200).send(); // note that this route does not have next()
  });
  
  app.get('/magic/:spellname', (req, res, next) => {
    console.log("The sorcerer is leaving!");
  });
  
  // Accessing http://localhost:4001/magic/fireball 
  // Console Output:
  // "A sorcerer approaches!"
  // "The sorcerer is casting a spell!"
  // "The sorcerer has cast fireball"

// An Express middleware is a function with 3 x parameters (req, res, next)
// The sequence is expressed by a series of callbacks invoked progressively after each middleware performs its purpose
// The third argument 'next' should get called as the last part of the middleware's body
// This hands off the processing of the request, and construction of the response to the next middleware in the stack 
 

// -------------------------------
// Request and Response Parameters
// -------------------------------

// Recall the function signature of Express middleware: (req, res, next)
// This is same as used for Express routes, becuse Express routes ARE middleware! 
// Express routes also have option of sending a response body & status code and closing a connection. 
// These two features are byproduct of Express routes being middleware
// as all Express middleware functions have access to the request, response and the next middleware in the stack

// -------------------------------
// Route-Level app.use() Single Path
// -------------------------------

// Using middleware functions we can refactor our code to contain less repetition
// Since for duplicate code that isn't shared by ALL the routes, app.use() won't work
// The documentation for app.use() is 
app.use([path,] callback [, callback...]) // [] means its an optional argument, here the path and function are optional
// This means we can write middleware for every request at a specific path. Eg: 

app.use('/sorcerer', (req, res, next) => {
    console.log('User has hit endpoint /sorcerer');
    next();
  });

// As method app.use() was used, it doesn't matter which HTTP request is being used. 
// As path '/sorcerer' was given, the middleware function does not execute if user hits a diff path such as '/sorcerer/:sorcerer_id'
// Although the CA exercise had function app.use('/beans', ()=>{}) which seemed to cover route paths '/beans/:beanName' ...??? 

// -------------------------
// Control Flow with next()
// -------------------------

// We've written middleware that performs its function, and then hands off the request and response to the next in the stack
// Why is it useful to have next() as a seperate function call? (isn't it repetition to have it at the end of each middleare)
// The biggest reason: we don't always want to pass control to the next middleware in the stack
// Eg authorizing access & controlling permissions to confidential info

// --------------------------------------
// Route-Level app.use() - Multiple Paths
// --------------------------------------

app.use([path,] callback [, callback...]) //  app.use() takes an optional path parameter: 
// The path can be any of:
//      - A string representing a path.
//      - A path pattern.
//      - A regular expression pattern to match paths.
//      - An array of combinations of any of the above.

// Meaning app.use() can take an array of paths! 
 
// -------------------------------------------
// Middleware Stacks - Functions as Variables 
// -------------------------------------------

// Middleware is just a function with a specific signature: (req, res, next)
// We have been using anonymous function definitions but we can define middleware functions. 
// Eg: Reasonable way to introduce logging on all paths:

const logging = (req, res, next) => {
    console.log(req);
    next();
  };
  
app.use(logging); // modifiable too - can replace app.use() with specific path to prevent it being universal

// Up to this point, we have only given each middleware-accepting method a single callback
// With modular pieces, note that app.use(), app.get(), app.post() can take multiple callbacks as additional parameters 
// which ends up wih code looking like this, where we created reusable middleware for authentication & data validation:
// We use the authenticate() middleware to verify a user is logged in, before proceeding with the request 
// And we use a validateData() middleware before performing the appropriate create/update function

const authenticate = (req, res, next) => {...};
const validateData = (req, res, next) => {...};
  
const getSpell = (req, res, next) => {
    res.status(200).send(getSpellById(req.params.id));
  };
  
const createSpell = (req, res, next) => {
    createSpellFromRequest(req);
    res.status(201).send();
  };
  
const updateSpell = (req, res, next) => {
    updateSpellFromRequest(req);
    res.status(204).send();
  }
  
  app.get('/spells/:id', authenticate, getSpell);
  app.post('/spells', authenticate, validateData, createSpell);
  app.put('/spells/:id', authenticate, validateData, updateSpell);

// ---------------------------------------
// Open-Source Middleware - Logging Morgan
// ---------------------------------------

// In the CA exercise, the code contains a lot of unecessary custom console.log() calls. eg:
console.log('Response Sent');
console.log(`${req.method} Request Received`);
console.log(`Server is listening on port ${PORT}`);
// 'morgan' is an open-source lib for logging info about the HTTP request-response cycle in a server application
// morgan() returns a middleware function with function signature (req, res, next)
// that can be inserted into app.use()
// that function will be called BEFORE all following middleware functions (well, duh?)
// morgan takes an arg to describe the formatting of the logging output
// morgan('tiny') returns a middleware function that does 'tiny'' amount of logging 
// morgan allows us to remove the above logging code, to prevent replicating functionality. 

// Require with:
const morgan = require('morgan');

// and we can replace...
app.use((req, res, next) => {
    console.log(`${req.method} Request Received`);
    next();
  });

// ...with...

app.use(morgan('tiny'));

// Morgan logs response codes after the response is sent (in addition to when Request received, I assume)
// so we can get rid of all 'console.log('Response Sent');' statements

// -------------
// Documentation 
// -------------

// Documentation is a resource presented by the package's author
// includes info about what the software is, does and how to use it. 

// express documentation
https://expressjs.com/en/5x/api.html

// morgan documentation
https://github.com/expressjs/morgan#api

// morgan('tiny') logs minimal output: GET /beans 200 116 - 0.164 ms
// :method :url :status :res[content-length] - :response-time ms
// morgan('dev')  // Output: GET /beans 200 1.858 ms - 116

// -------------------------------------
// Open-Source Middleware - Body Parsing
// -------------------------------------

// When we implement middleware, we take in the 'req' object so we can see info about the request
// However for some requests, this object misses some fundamental info...
// A HTTP request can include a 'body' , a set of info to be transmitted to the server for processing
// Useful when the server needs to send info to the server (eg uploading posts to social media or filled out reg form, likely a HTTP request with a body)
// Open-source middleware can parse the body of an HTTP request, if we import lib to do it for us

// Currently our code contains:

const bodyParser = (req, res, next) => { // a simplified way of performing request body parsing but a lib could offer an easier way?
    let queryData = '';                 // there may be edge cases and all sorts of request bodies it can't handle well
    req.on('data', (data) => {         // an open-source package is well-maintained 
      data = data.toString();
      queryData += data;
    });
    req.on('end', () => {
      if (queryData) {
        req.body = JSON.parse(queryData);
      }
      next();
    });
  };

//  'body-parser' is Node body-parsing middleware 
https://github.com/expressjs/body-parser#body-parser
// We can use this dependancy instead of managing our own body-parsing library 
const bodyParser = require('body-parser'); 
// Once required in, we can remove our previous bodyParser callback arg from all the middleware stacks for POST & PUT routes. 
// bodyParser automatically attaches the parsed body object to req.body

// After our app.use(morgan()) logging middleware, we add:
app.use(bodyParser.json())
// Doc: bodyParser.json([options])
// app.use() mounts a function which is called every time a request is received - 
// this includes built-in middleware function such as: app.use(express.static('public')) and app.use(morgan('tiny'))
// this can made specific if we pass a path as an argument 



// --------------------------
// Error-Handling Middleware 
// --------------------------

// If error thrown, we want to ensure it's passed to an error handler to communicate thrown errors to the user
// Error-handling middleware should be the last app.use() in the file so all the other code has run. 


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!'); // 500 (INTERNAL SERVER ERROR) - generic answer for unexpected failure if no specific info available.
  });

// Error-handling middleware is sim. to other middleware
// except additional parameter in the callback function 'err' representing the error object
// This object can be used to investigate the error & perform diff tasks depending on what error was thrown 

// Note that Express has its own error-handler, to catch errors we haven't handled
// but if we anticipate an operation might fail , we can invoke error-handling middleware
// we do this by passing an error object as arg to next() : next(err)
// usually next() is called without arg and proceeds through the middleware stack as expected
// however when called with err as arg1, it calls any applicable error-handling middleware. 

app.use((req, res, next) => {                           // mounts an anonym callback which calls each time a req received 
    const newValue = possiblyProblematicOperation();   // if the function returns nothing ( an 'undefined' falsey)
    if (newValue === undefined) {       
      let undefinedError = new Error('newValue was not defined!'); // this creates/throws an Error (arg = err.message)
      return next(undefinedError);                     // which is passed as arg1 to next(), prompting error handler to send user response
    }                                                  // don't forget the 'return' so the callback breaks out and error handler takes over 
    next();                                            // note that next() is called to cover the other eventuality 
});
  
app.use((err, req, res, next) => {                     // this mounts an error-handler middleware function - giveaway is the 'err' arg
    const status = err.status || 500;                  // this passes an error object 
    res.status(status).send(err.message);              // from which err.status and err.message are accessed
});                                                    

// error-handling middleware can also perform other techniques: logging, re-attempting failed operation, emailing the developer etc

// Summary - error handler:
// - 3 arguments
// - last middleware called, before app.listen()

// this means we can refactor our code within each specific route to replace:
return res.status(404).send('<error message>');
// with generating an Error and passing it to the error-handling middleware: 
const newError = new Error('<error message>');
newError.status = 404 (or 400)
return next(newError); 


// -----------------------------------
// Discovering OpenSource  Middleware 
// -----------------------------------

// List of Express middleware:
https://expressjs.com/en/resources/middleware.html

// the middleware module 'errorhandler' could help us handle errors
// require in, as per express module: 
const errorhandler = require('errorhandler');
// doc: 
errorhandler(options)

// this means we can replace
app.use((err, req, res, next) => {
    res.status(500).send(err);
  });
// with
app.use(errorhandler());



// ------// ------// ------// ------// ------// ------// ------// ------// ------// ------// ------// ------// ------// ------// ------// ------// ------


// ------
// REVIEW
// ------

// We learned:
// - what middleware is
//      a series of functions that happen between a request received and a response returned
//      these can process a request and formulate a response 
//      middleware function's signature is parameters: (req, res, next) 
//      this allows code to be cleaner, adaptable, readable, maintainable
// - how to write functions that are context aware 
//      the context is the 'middleware stack'
//      each middleware function is called in order it appears in the file
//      next() allows us to control the flow of the stack
//      remember to use functions as a callback or mount using app.use()
// - how to overlap functionality without duplicating code
//      mount via app.use() - callback called after every request is received
//      mount via app.use('/path1', callback ) - for requests on a specific path 
//      mount via app.use(['/path1', '/path2', '/path3'], callback) - for requests on multiple paths
//      assign middleware functions to a variable, then pass variables as callbacks in route requests (app.get, app.post etc)
//      writing error-handling middleware with 4 args: (err, req, res, next) , called at the end 
//      each route generates a new Error, defining message & status and passes via return next(newError) to the error-handling middleware to process
// - how to serve data by route 
//      app.use('/path', callback)
// - how to reduce complexity in codebase by using external open-source middleware
//      logging: app.use(morgan('tiny');
//      parsing JSON body: app.use(bodyParser.json());
//      error-handling: app.use(errorhandler()) 
//      

// We should be able to refactor to improve on the following issues:
//  - custom middleware to accomplish tasks where we could be importing a module for
//  - duplicated code through diff routes
//  - improperly managed middleware stack missing next()


// ------// ------// ------// ------// ------// ------// ------// ------// ------// ------// ------// ------// ------// ------// ------// ------// ------



// --------------------------------------------
// Sample code: Beans Beans The Wonderful Fruit
// --------------------------------------------

const express = require('express');  // imports express lib (express is a node module)
const app = express();              //  instantiates the app (creates a server by invoking express())

const PORT = process.env.PORT || 4001; // will be passed into app.listen() 

app.use(express.static('public'));   // app.use() typically mounts a router. arg1 = specified path. arg2 = instance of a router by variable name 
                                    // Here, app.use(express.static('public')) serves images, CSS files, and JavaScript files in a directory named public:
                                   // express.static(root directory, [options]) is a buit-in middleware function
                                  // to serve static files such as images, CSS files, JS files   
                                 // Meaning we can then load files in the public directory: http://localhost:3000/images/kitten.jpg
                                // https://expressjs.com/en/starter/static-files.html
const jellybeanBag = {
  mystery: {
    number: 4
  },
  lemon: {
    number: 5
  },
  rootBeer: {
    number: 25
  },
  cherry: {
    number: 3
  },
  licorice: {
    number: 1
  }
}; // Object containing nested objects, each with a number property

const logRequest = (verb) => { 
  console.log(`${verb} Request Received`);
}

app.use((req, res, next) => { // if app.use() middleware function has no mount path, the function is executed each time a request is received
    console.log(`${req.method} Request Received`);
   next() // calling next() means the middleware is executed before moving onto the routes
  });

app.use('/beans/:beanName', (req, res, next) => { // if we write a middleware function for this specific path, we reduce repetitive code in the routes below
    const beanName = req.params.beanName;         // we don't have to check for the existence of a bean in every route   
    if (!jellybeanBag[beanName]) { 
      console.log('Response Sent');
      return res.status(404).send('Bean with that name does not exist'); // the returns breaks out of the middleware, meaning the next() is not called. 
    }                                                                   // otherwise we can put all the code that follows in an else... statement 
    req.bean = jellybeanBag[beanName]; // to ensure routes work when we remove 'const beanName = req.params.beanName' from them...
    req.beanName = beanName;
    next()
  })
})


app.use(['/beans/', '/beans/:beanName'], (req, res, next) => { // now we know app.use() accepts an array of paths
    let queryData = '';                   // we took this code out of each route to remove duplicate code 
    req.on('data', (data) => {           // assigns event listener callback function to 'data'  
    queryData += data;                  // once 'data' event occurs, the empty string concatenates with the data passed  
  });                                  // in essence, it combines the HTTP request body into a single string 

  req.on('end', () => {                    // assigns event listener to event 'end' called once the whole request has been received 
    if (bodyData) {
        req.body = JSON.parse(bodyData); // this parses the request body, returns a JS object (with a name and number prop)
        }                               // and attaches it to the request object
    next();
  }) 
})

/* we can also capture the above in a variable, to be passed as the first callback argument in all POST requests
as per 'app.use([path,] callback [, callback...])'  

const bodyParse = (req, res, next) => {
    let queryData = '';                   
    req.on('data', (data) => {           
    queryData += data;                   
  });                                  

  req.on('end', () => {                    
    if (bodyData) {
        req.body = JSON.parse(bodyData); 
        }                               
    next();
  }) 
})
}

correspondingly the POST requests would read: 
app.post('/beans/', bodyParse, (req, res, next) => { ... } 

This eliminates the requirement for the app.use() to have an array of paths. Instead we just insert the variable function as a callback. 
*/

app.get('/beans/', (req, res, next) => { // returns all jellybean flavours 
  res.send(jellybeanBag);
  console.log('Response Sent');
});

app.post('/beans/', (req, res, next) => { // allows user to add a number of beans to an existing bean flavour                  
    const beanName = req.body.name;                   // Saves 'name' property value of this JS object to a variable
    if (jellybeanBag[beanName] || jellybeanBag[beanName] === 0) {  // If this name exists in the current Object OR the name has no value (no number property) 
      return res.status(400).send('Bean with that name does not exist'); // Bad request (as in, it can't overwrite an existing bean???)
    }
    const numberOfBeans = Number(req.body.number) || 0; // Number() converts string to a number. Converts falsey ("" or null) to 0. Returns NaN if cannot. 
    jellybeanBag[beanName] = {                     // assigns that number within the jellybeanBag object. 
      number: numberOfBeans
    };
    res.send(jellybeanBag[beanName]);   
    console.log('Response Sent');
  });
});

app.get('/beans/:beanName', (req, res, next) => { // retrieves bean by id 
  res.send(req.beanName); // otherwise, send the bean. 
  console.log('Response Sent');
});

app.post('/beans/:beanName/add', (req, res, next) => {  // allows user to add a quantity of beans to an existing Bean  (should this be a PUT request)
    const numberOfBeans = Number(req.body.number) || 0;  // .number prop is retrieved and converted to a number. 
    jellybeanBag[beanName].number += numberOfBeans; // Adds the new number to existing property value 
    res.send(jellybeanBag[beanName]); // 
    console.log('Response Sent');
});

app.post('/beans/:beanName/remove', (req, res, next) => {  // allows user to remove a number of beans?? Should this be a PUT request?  
    const numberOfBeans = Number(req.body).number) || 0; // converts queryData into JS object and converts value to number 
    if (jellybeanBag[beanName].number < numberOfBeans) {            // check if the number of beans to be removed exceeds existing count 
      return res.status(400).send('Not enough beans in the jar to remove!');
    }
    jellybeanBag[beanName].number -= numberOfBeans; // 
    res.send(jellybeanBag[beanName]);
    console.log('Response Sent');
});

app.delete('/beans/:beanName', (req, res, next) => {  // allows user to delete a bean object 
  req.bean = null; // the jellybean flavour is cleared of all properties (no number of beans)
  res.status(204).send();
  console.log('Response Sent');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// ------// ------// ------// ------// ------// ------// ------// ------// ------// ------// ------// ------// ------// ------// ------// ------// ------



// --------------------------------------------
// Sample code: Play your Cards Right
// --------------------------------------------



const express = require('express');   // requires in express module lib
const app = express();               // creates instance of application / instantiates app 
const morgan = require('morgan');   // requires in morgan module - handles request-response cycle logging 

app.use(express.static('public')); // serves static files  from specified folder

const PORT = process.env.PORT || 4001; 

const cards = [                 // array of objects 
  {
    id: 1,
    suit: 'Clubs',
    rank: '2'
  },
  {
    id: 2,
    suit: 'Diamonds',
    rank: 'Jack'
  },
  {
    id: 3,
    suit: 'Hearts',
    rank: '10'
  }
];
let nextId = 4;

// Logging
if (!process.env.IS_TEST_ENV) {             // if in development, mounts morgan()
  app.use(morgan('short'));                // app.use() calls the callback each time a request is received
}

// Parsing
app.use((req, res, next) => {               // app.use() means its called each time a request received
  let bodyData = '';                        // we can use a body-parsing open-source module to replace this middleware function  
  req.on('data', (data) => {                // note that body-parsing is not required for EVERY request 
    bodyData += data;
  });
  req.on('end', () => {
    if (bodyData) {
      req.body = JSON.parse(bodyData);
    }
    
  });
});

// Get all Cards
app.get('/cards/', (req, res, next) => {      
  res.send(cards);
});

// Create a new Card
app.post('/cards/', (req, res, next) => {       // POST route 
  const newCard = req.body;                     // note this takes req.body from the parsing middleware function 
  const validSuits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
  const validRanks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
  if (validSuits.indexOf(newCard.suit) === -1 || validRanks.indexOf(newCard.rank) === -1) { // checks for valid suit and rank 
    return res.status(400).send('Invalid card!'); // if we generate a new error here, we can use an error handler middleware function 
  }
  newCard.id = nextId++;  // this would make the next id 4+1 = 5 (??!)
  cards.push(newCard);   // adds newCard object to the array 
  res.status(201).send(newCard);
});

// Get a single Card
app.get('/cards/:cardId', (req, res, next) => {      // GET route by id 
  const cardId = Number(req.params.cardId);         // makes a number of the cardId
  const cardIndex = cards.findIndex(card => card.id === cardId); // findIndex is an array iterator, checks array for matches with requested cardId
  if (cardIndex === -1) {                            // we can use a middleware function to check for routes on path '/cards/:cardId' if the Id exists 
    return res.status(404).send('Card not found');  // if we generate a new error here, we can use an error handler middleware function 
  }
  res.send(cards[cardIndex]);
});

// Update a Card
app.put('/cards/:cardId', (req, res, next) => {
  const cardId = Number(req.params.cardId);                             //
  const cardIndex = cards.findIndex(card => card.id === cardId);        //
  if (cardIndex === -1) {                                               //
    return res.status(404).send('Card not found');                      // duplicate code 
  }
  const newCard = req.body;         
  const validSuits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];         // we can use middleware function that checks if req.body is valid  
  const validRanks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']; //
  if (validSuits.indexOf(newCard.suit) === -1 || validRanks.indexOf(newCard.rank) === -1) {          // duplicate code
    return res.status(400).send('Invalid card!');                                                    // we can use an error handler middleware function 
  }                                                                                                  
  if (!newCard.id || newCard.id !== cardId) {                           // check that the newCard (request object provided) doesn't HAVE an id property 
    newCard.id = cardId;                                                // or if it does, then it is not the same id number as id we're tryna update
  }                                                                     // and if so, assigns that id no to the object 
  cards[cardIndex] = newCard;                                           // then it updates the element at that array index 
  res.send(newCard);                                                
});

// Delete a Card                                                        
app.delete('/cards/:cardId', (req, res, next) => {                      // 
  const cardId = Number(req.params.cardId);                             //
  const cardIndex = cards.findIndex(card => card.id === cardId);        //
  if (cardIndex === -1) {                                               // duplicate code
    return res.status(404).send('Card not found');                      // duplicate code 
  }
  cards.splice(cardIndex, 1);
  res.status(204).send();                           
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
