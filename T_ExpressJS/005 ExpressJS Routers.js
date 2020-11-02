// << ExpressJS CA Routers >>

// ------------------------------
// This file is too big!
// ------------------------------

// As we add functionality, our code gets long and cumbersome
// In this lesson, we will use Routers to clean up code
// and separate our application into a file to handle different route types
// eg one to handle /expressions routes and one to handle /animals routes


// ------------------------------
// Express.Router
// ------------------------------

// An Express router provides a subset of Express methods
// To create an instance of one, invoke the .Router() method on the top-level Express import

// To use a router, mount it at a certain path using app.use()
// and pass in the router as the second argument
// The router will now be used for all paths that begin with that path segment

// Eg: To create a router for use with all requests beginning with /monsters:

const express = require('express');   // import lib ( import Express node module)
const app = express();                // instantiate app (create server / creates instance of an Express application )

const monsters = {                    
  '1': {
    name: 'godzilla',
    age: 250000000
  },
  '2': {
    Name: 'manticore',
    age: 21
  }
}

const monstersRouter = express.Router();  // invokes .Router() method to create instance of router

app.use('/monsters', monstersRouter);     // 'mounts' the router at the specified path given as 1st argument 

monstersRouter.get('/:id', (req, res, next) => {
  const monster = monsters[req.params.id]; // square brackets NOT dot operator 
  If (monster) {
    res.send(monster);
  } else {
    res.status(404).send();
  }
});

// Inside the monstersRoute, all matching routes are assumed to have /monsters prepended as its mounted at that path
// monstersRouter.get('/:id') matches the full path /monsters/:id
// (instead of app.get('/monsters/:id'))

// When a GET /monsters/1 request arrives,Express matches /monsters in app.use() 
// because the beginning of the path ('/monsters') matches
// Since monstersRouter.get('/:id') is mounted at '/monsters', the two paths together match the entire request path
// so the route matches and the callback is invoked


// --------------------------------------
// Exercise: Using Multiple Router Files
// --------------------------------------

// Generally, we keep each router in its own file and 'require' them into the main application
// This allows us to keep files short and clean

// To do this with monstersRouter, we create a new file 'monsters.js' 
// and move all code related to /monsters requests into it
// To use the router in another file, we use module.exports to export:

module.exports = monstersRouter;

// Our main.js file would be refactored to import the monstersRouter:

// main.js
const express = require('express');
const app = express();
const monstersRouter = require('./monsters.js'); // note that file path has a '.' 

app.use('/monsters', monstersRouter); // mount in the main file - I assume not in the module(?) 


// ---------------------------
// Matching in Nesting Routers
// ---------------------------

// As seen in previous exercise, remember that the full path of the request can be segmented


// ---------------------------
// Exercise: Refactoring Expressions Routes
// ---------------------------
// We moved all the /expressions routes to our router expression.js
// Refactor request paths for each route 
// as they should already mounted at /expressions inside inside main.js.
// Require in any necessary helper functions 
// Change all the 'app.get()' etc to namedRouter.get()'


// ---------------------------
// Code Challenge 1: Sausages sausages, barely even human
// ---------------------------

// 1. Require 'express' package and save to variable named express
// 2. Start your server listening on the port defined by PORT variable 
//    (listener should go after request method handlers)
// 3. Write a GET /sausages route that sends back the whole sausageTypes array

//STEP 1
const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const sausageTypes = ['bratwurst', 'andouille', 'chorizo', 'boudin', 'kielbasa'];

//STEP 3
app.get('/sausages', (req, res, next) => {
  res.send(sausageTypes);
})

// STEP 2
app.listen(PORT, () => {})


// ---------------------------
// Code Challenge 2: Metals
// ---------------------------

// dot operator '.' vs. square brackets []
// for accessing keys & properties in an {object}

// The difference is:
// a dot operator should be followed by a valid variable name (ie it directly names the property)
// square brackets may contain an expression evaluated to get the property name


// ---------------------------
// Code Challenge 4: PudPud
// ---------------------------
//  Write a route to handle DELETE requests to /puddings/:flavor. 
// It should delete the correct pudding and send a 204 response if the pudding name exists
// and send a 404 response if it does not.

// Use helper functions findPuddingIndex to find the index of the pudding by flavor 
// and deletePuddingAtIndex to delete a pudding from the puddingFlavors array by index.

const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;
const puddingFlavors = ['chocolate', 'banana', 'butterscotch', 'pistachio'];

const findPuddingIndex = (name) => {
  return puddingFlavors.indexOf(name);
}

const deletePuddingAtIndex = (index) => {
  puddingFlavors.splice(index, 1);
}

// Note that the arrayName does not have to be the same as the path!
app.delete('/pudding/:flavor', (req, res, next) => {
  const puddingName = req.params.flavor   
  const puddingIndex = findPuddingIndex(puddingName);
  if (puddingIndex !== -1) {      // indexOf returns -1 if element not found 
      deletePuddingAtIndex(puddingIndex);
      res.status(204).send('deletion successful');
  } else {
      res.status(400).send('invalid id');
  };
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


// ---------------------------
// Code Challenge 6: Climb Every Mountain
// ---------------------------

// 1. Create two routers - mountainsRouter and mountainRangesRouter. 
// 2. Mount them at /mountains and /mountain-ranges, respectively.

// 3. Create a route handler with mountainsRouter to send back the mountains array 
// in response to a GET /mountains request. 

// 4. Create a route handler with mountainRangesHandler to send back the mountainRanges array
// in response to a GET /mountain-ranges request.

const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const mountains = ['denali', 'olympus', 'kilimanjaro', 'matterhorn'];
const mountainRanges = ['alps', 'andes', 'himalayas', 'rockies'];

// STEP 1 & 2
const mountainsRouter = express.Router();
const mountainRangesRouter = express.Router();

app.use('/mountains', mountainsRouter);
app.use('/mountain-ranges', mountainRangesRouter);

// STEP 3
mountainsRouter.get('/', (req, res, next) => {
  res.send(mountains);
})

// STEP 4
mountainRangesRouter.get('/', (req, res, next) => {
  res.send(mountainRanges);
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});



