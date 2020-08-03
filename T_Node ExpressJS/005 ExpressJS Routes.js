// << ExpressJS CA Routers >>

// ------------------------------
// This file is too big!
// ------------------------------

// As we add functionality, our code gets long and cumbersome
// In this lesson, we will use Routers to clean up code
// and separate our application into a file to handle different rotue types
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
  const monster = monsters[req.params.id];
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
// Refactor by modifying the request paths for each route as they should already mounted at /expressions 
// inside expression.js (I assume this is wrong, and that it means to say 'inside main.js')
// Ensure you still require any necessary helper functions 
// Ensure that you change all the 'app.get()' etc to namedRouter.get()'


// ---------------------------
// Exercise: Refactoring Animals Routes
// ---------------------------
// 




