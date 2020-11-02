// << ExpressJS CA - Quote API Challenge >>

const express = require('express');     // imports express lib 
const app = express();                  //instantiates app

// quotes = [ {person: , quote: }]
const { quotes } = require('./data'); 
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes/random', (req, res, next) => {
  const randomQuote = getRandomElement(quotes)
  res.send({quote: randomQuote});
})

app.get('/api/quotes', (req, res, next) => {
    const person = req.query.person 
    if (person) { 
        let quotesByPerson = [];
        quotesByPerson = quotes.filter(quote =>  // implicit return
            quote.person === personQuery // single line function body
        );
        res.send({
            quotes: quotesByPerson});
    } else {
        res.send({quotes: quotes});
    };
 })

app.post('/api/quotes', (req, res, next) => {
    const quote = req.query.quote // string
    const person = req.query.person // string
    if (quote && person) { // checks for presence of both here
        quotes.push({quote, person});
        res.status(201).send({quote: {quote, person}});
    } else {
        res.status(400).send('bad request'); 
    }
  })

/*

// LESSONS:
// object creation short hand:
// {quote, person} is the same as {quote: quote, person: person}

app.post('/api/quotes', (req, res, next) => {
	const quote = req.query.quote
	const person = req.query.person
	if(quote && person) {
		quotes.push({quote, person})
		res.send({quote:{quote, person}})
	} else {
		res.sendStatus(400)
	}
})


*/

app.put('/api/quotes/:id', (req, res, next) => {
    const updateQuote = req.query // object
    const expressionId = req.params.id // Eg: 1
    let index; 
  
    for ( let i = 0; i < quotes.length; i++) {
        if (quotes[i].id === expressionId) {
            index = i;
        } else {
        res.status(404).send('id not found');
        }
    }
    
    if (updateQuote.id && updateQuote.quote && updateQuote.person) {
        quotes[index] = updateQuote; 
        res.send({quote: quotes[index]});
    } else {
    res.status(400).send('invalid query string');
    }
})

app.delete('/quotes/:id', (req, res, next) => {
  const expressionId = req.params.id;
  let isIdPresent = false; 

  for (let i = 0; i< quotes.length; i++) {
      if (quotes[i].id === expressionId) {
          const removedObject = quotes.splice(i, 1);
          isIdPresent = true;
          res.status(204).send(`deletion of ${removedObject} completed`);
      }
  }
  if (isIdPresent === false) {
      res.status(400).send('id not found');
  }
})

app.listen(PORT, () => {});

// LESSONS:
// As an alternative -
// const index = getIndexById(id, array)
// however I'm not sure if this is a provided bit of code in CA ...?
