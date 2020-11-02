
// --------------------------------------------
// Sample code: Play your Cards Right
// --------------------------------------------



const express = require('express');   // requires in express module lib
const app = express();               // creates instance of application / instantiates app 
const morgan = require('morgan');   // requires in morgan module - handles request-response cycle logging 
const bodyParser = require('body-parser'); 

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
app.use(bodyParser.json());               // note that bodyParser automatically attaches the parsed body object to req.body

// Get all Cards
app.get('/cards/', (req, res, next) => {      
  res.send(cards);
});

// Verifies that a given Id exists - in GET (byId), PUT (update) & DELETE routes
const verifyId = (req, res, next) => {
  const cardId = Number(req.params.cardId);         // makes a number of the cardId
  const cardIndex = cards.findIndex(card => card.id === cardId); // findIndex is an array iterator, checks array for matches with requested cardId
  if (cardIndex === -1) {                            // we can use a middleware function to check for routes on path '/cards/:cardId' if the Id exists
    const newError = new Error('Card not found');
    newError.status = 404; 
    return next(newError);   
  } else {
    req.cardIndex = cardIndex;      // Q: do variables declared in a middleware function exist as global variables within the middleware stack? 
    req.cardId = cardId;            // A: NO! Pass on variable by attaching them to the req. body, these are passed along the middleware stack 
  }                                 // remember to refactor your following middleware function & routes to be use these variables
  next() 
}

// Validates parsed Object - checks for properties: Suit & Rank
const validateObj = (req, res, next) => { 
  const newCard = req.body;              // note this takes req.body from the parsing middleware function 
  const validSuits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
  const validRanks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
  if (validSuits.indexOf(newCard.suit) === -1 || validRanks.indexOf(newCard.rank) === -1) { // checks for valid suit and rank 
    const newError = new Error('Invalid card!');
    newError.status = 400; 
    return next(newError);  
  } else { 
    next()
  }
}

// Create a new Card
app.post('/cards/', validateObj, (req, res, next) => {       // POST route - first bodyParser.json() called, then validateObj
  const newCard = req.body;                                  // we have to re-assign this variable OR pass it along middleware stack via the req object 
  newCard.id = nextId++;                                    // this assigns a new id no.  
  cards.push(newCard);                                     // adds newCard object to the array 
  res.status(201).send(newCard);
});

// Get a single Card
app.get('/cards/:cardId', verifyId, (req, res, next) => {      // GET route by id 
  res.send(cards[req.cardIndex]);
});

// Update a Card
app.put('/cards/:cardId', verifyId, validateObj, (req, res, next) => {    
  const newCard = req.body;                                                                                     
  if (!newCard.id || newCard.id !== cardId) {                           // checks the newCard (request object provided) doesn't HAVE an id property 
    newCard.id = req.cardId;                                                // or if it does, then it is not the same id number as id we're tryna update
  }                                                                     // and if so, assigns that id no to the object - just checks a UNIQUE id exists
  cards[req.cardIndex] = newCard;                                           // then it updates the element at that array index 
  res.send(newCard);                                                
});

// Delete a Card                                                        
app.delete('/cards/:cardId', validateId, (req, res, next) => { 
  cards.splice(req.cardIndex, 1);
  res.status(204).send();                           
});

// Error-handling middleware function 
app.use((err, req, res next) => {
  status = err.status || 500; 
  return res.status(status).send(err.message);
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
