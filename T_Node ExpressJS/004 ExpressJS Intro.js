// << ExpressJS CA intro >>

// Express is a JS framework for creatign web servers and APIs

// Allows us to build APIs in JS and inplement CRUD (ceate, retrieve, update, delete) functionality
// We will learn how to build HTTP servers in Node.js using Express framework 
// Express allows us to start and configure a server with little overhead, allowing focus on defining server behaviour
// We will learn how to create routes to inplement server behaviour for diff HTTP paths and methods
// We will learn how to use Express' features like routers & middleware, to write server-side code. 

// ------------------------------
// Setting up a Server
// ------------------------------
// We will learn skills to implement an API to allow users to Create, Retrieve, Update, Delete Expressions
// CRUD forms the backbone of many real-life APIs

// Express is a node module - to use we need to import it
// To create a server, invoke the imported express() function 

const express = require('express');  // import express lib
const app = express();              // instantiate the app 

// (note that in Node.js we can also create web servers by requiring in Node core module: 'http' and invoking function: http.createServer() )
// (I wonder what the difference is? When would you use that vs. express?)

// express() returns an instance of an Express application 
// This application can then be used to start a server and specify server behaviour. 
// Purpose of a server: listen for requests, perform action to satisfy request, return response
// Tell server to 'listen' for requests by specifying port number as first argument in method:
app.listen()
// Second argument is a callback function, called once server is running & ready to receive requests. 
const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
}); 
// In the above eg, app.listen() call will start a server listening on post 4001
// Once the server is started it will log 'Server is listening on port 4001'   
// Then run the program in Terminal to start the server listening (node app.js) 

// ------------------------------------
// Writing A Route 
// ------------------------------------

// To tell our server to deal with any given request, we register a series of 'routes'. 
// Routes define the control flow for requests based on the request's path and HTTP verb

// For eg, if server receives a GET request at '/monsters' 
// we will use a route to define the appropriate functionality for that pairing

// The path is the part of a request URL after the hostname and port number 
// In a request to localhost:4001/monsters, the path is /monsters

// Express uses app.get() to register routes to match GET requests
// Express routes take 2 args: a path (string) & callback function to handle request & response 

const moods = [{ mood: 'excited about express!'}, { mood: 'route-tastic!' }];
app.get('/moods', (req, res, next) => {
  // Here we would send back the moods array in response
  console.log(req);
});

// The route above will match any GET request to '/moods' and call the callback function
// passing in two objects as the first two argments
// these objects represent the request sent to the server 
// and the response the Express server should eventually send to the client 

// If no routes are matched, the Express server will handle sending a 404 Not Found response. 

// ------------------------------------
// Sending A Response
// ------------------------------------

// HTTP follows one request-one response cycle (like China's one child policy)
// 
// Express servers send responses using the .send() method on the {response} object
// .send() takes any input and includes it in the response body

const monsters = [{ type: 'werewolf' }, { type: 'hydra' }, { type: 'chupacabra' }];
app.get('/monsters', (req, res, next) => {
  res.send(monsters);
});

// In this eg, a GET /monsters request will match the route 
// Express calls the callback function
// res.send() method will send back an array of spooky monsters 

// In addition to .send(), .json() can be used to explicitly send JSON-formatted responses 
// .json() sends any JS object passed into it 

// ------------------------------------
// Matching Route Paths
// ------------------------------------

// Express tries to match requests by route, 
// so if we send a request to <server address>:<port number>/api-endpoint
// the Express server will search through any registered routes to match /api-endpoint

// Express searches through routes in the order that they are registered in your code 
// The first one that is matched will be used, and its callback will be called

// ------------------------------------
// Getting a Single Expression
// ------------------------------------ 

// Routes are powerful when they can be used dynamically
// Express servers provide this functionality with named 'route parameters'
// Parameters are route path segments that begin with : in their Express route definitions
// They act as 'wildcards' matching any text at that path segment
// For eg, /monsters/:id matches both /monster/1 and /monsters/45

// Express parses any parameters, extracts their actual values
// and attaches them as an object to the request object: req.params
// This object's keys are any parameter names in the route
// And each key's value is the actual value of that field per request

const monsters = { 
    hydra: { height: 3, age: 4 }, 
    dragon: { height: 200, age: 350 } 
};
// GET /monsters/hydra
app.get('/monsters/:name', (req, res, next) => {
  console.log(req.params) // { name: 'hydra' };
  res.send(monsters[req.params.name]);
});

// In the above code snippet, a .get() route is define to match /monster/:name path
// When a GET request arrives for /monster/hydra, the callback is called
// Inside the callback, req.params is an object with the key 'name' and the value 'hydra'
// The appropriate monster is retrieved by name from {monsters} and sent back to the client

// ------------------------------------
// Setting Status Codes 
// ------------------------------------ 

// Express allows us to set the status code on responses before they are sent
// The res object has a .status() method to allow us to set the status code
// and other methods like .send() can be chained from it. 

const monsterStoreInventory = { 
    fenrirs: 4, 
    banshees: 1, 
    jerseyDevils: 4, 
    krakens: 3 
};
app.get('/monsters-inventory/:name', (req, res, next) => {
  const monsterInventory = monsterStoreInventory[req.params.name];
  if (monsterInventory) {
    res.send(monsterInventory);
  } else {
    res.status(404).send('Monster not found');
  }
});

// The above eg implements a route to retrieve inventory levels from a Monster Store

// Note that in order for a request to match a route path, it must match the entire path.
// Parameters are extremely helpful in making server routes dynamic & respond to diff inputs
// Route parameters will match anything in their specific part of the path
// so a route matching /monster/:name matches all the following request paths:
/monsters/hydra
/monsters/jörmungandr
/monsters/manticore
/monsters/123



// -----------------------
// Other HTTP Methods 
// -----------------------

// HTTP Protocol defines other method verbs: PUT, POST, DELETE 
// Express provides methods for each one: app.put(), app.post(), app.delete()

// --------------
// Using Queries 
// --------------

// PUT requests are used for updating existing resources 
// In a PUT request, the request typically has more information in the form of a 'query string'
// Query strings appear at the end of a path in URLs, indicated with ?
/monsters/1?name=chimera&age=1
/* The query string is */ 'name=chimera&age=1'
/* The path is */ /monsters/1/

// Query strings do not count as part of the route path
// Instead, the Express server parses them into a JS object
// and attaches it to the request body as the value of 
req.query
// The key:value relationship is indicated by '=' 
// and key-value pairs are seperated by '&'
// In the above eg, the req.query object would be 
    {
        name: chimera,
        age: 1
    }

const monsters = { '1': { name: 'cerberus', age: '4'  } };
// PUT /monsters/1?name=chimera&age=1
app.put('/monsters/:id', (req, res, next) => {
  const monsterUpdates = req.query;
  monsters[req.params.id] = monsterUpdates;
  res.send(monsters[req.params.id]);
});

// Above, we have a route for updating monsters by ID
// When updating, many servers send back the updated resource after updates are applies
// so that the client has the exact same version of the resource as the server & database

const expressionIndex = getIndexById(req.params.id, expressions)

// ---------------------
// Matching by HTTP Verb 
// ---------------------

// Express matches routes using both path & HTTP method verb

// ---------------------
// Creating An Expression 
// ---------------------

// POST is the HTTP method verb used for creating new resources
// POST routes don't end with route parameter, but with the type of resource to be created

// Eg To create a new monster, a client makes a POST request to /monsters
// The client does not the know 'id' of monster until its created and send back to the server
// so POST /monsters/:id doesn't fly

// Express uses .post() as its methods for POST requests
// POST requests can use many ways of sending data to create new resources, incl. query strings

// The HTTP status code for a newly-created resource is 201 (CREATED)

// Exercise POST Handler Example:

app.post('/expressions', ( req, res, next)=> {
  const potElement = createElement( 'expressions',   req.query)
  const oldLength = expressions.length;
  if (potElement) {
      expressions.push(potElement)
      const newOne = getElementById(oldLength+1, expressions)
      res.status(201).send(newOne)
  } else {
    res.status(400).send('object invalid')
  };
})

// ------------------------
// Deleting Old Expressions 
// ------------------------

// DELETE is the HTTP method verb used to delete resources
// DELETE route paths should end with a route parameter to indicate which resource to delete

// Express uses .delete() as its method for DELETE requests

// Servers often send 204 (NO CONTENT) status code if deletion occurs with no error

// Example DELETE handler:
app.delete('/expressions/:id', (req, res, next) => {
  console.log('id = ' + req.params.id);
  const index = getIndexById(req.params.id, expressions);
  console.log('index = ' + index);
  if (index === 0 ) {
    expressions.splice(index, 1);
    res.status(204).send('deletion successful');
  } else {
    res.status(404).send('invalid id');
  };
})



