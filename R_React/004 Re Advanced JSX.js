// CodeAcademy tutorial - REACT.JS : PART I

// --------------

// Advanced JSX >>

// Subtle differences in grammar between HTML and JSX: 
// Most frequent of these involves the word 'class'

// In HTML, common to use 'class' as an attribute name
// In JSX, 'class' is a reserved keyword, use 'className'.
//          these will be auto rendered as 'class' attributes. 

<h1 className="big">Hey</h1>

// --------------

// Self-Closing Tags >>

<img/> <input/> <br/>
// In HTML, slash optional. In JSX, must include //SLASH//. 

// --------------

// Inject JS in your JSX in your JS >>

// JSX expressions is like writing HTML inside a JS file
// We will now write JS inside a JSX expression inside a JS file 

// Code between tags is read as JSX, not JS eg 2+3 read as text
// JS injection: For it to read as code, wrap in {} markers 

// When you inject JS, that JS is part of the same environmt as rest of JS 
// Ie you can access variables within a JSX expression. 

// When writing JSX, its common to use variable to set attributes. Eg: 
// Using variable to set `height` and `width` attributes:

const sideLength = "200px";

const panda = (
  <img 
    src="images/panda.jpg" 
    alt="panda" 
    height={sideLength} 
    width={sideLength} />
);

// Object properties also used to set attributes: 

const pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi"
}; 

const panda = (
  <img 
    src={pics.panda} 
    alt="Lazy Panda" />
);

const owl = (
  <img 
    src={pics.owl} 
    alt="Unimpressed Owl" />
);

const owlCat = (
  <img 
    src={pics.owlCat} 
    alt="Ghastly Abomination" />
); 

// --------------

// JSX Event Listeners >>

// Create an event listeniner by giving a JSX Element a special attribute.

// attribute's name = 'on' + 'event' Eg onClick, onMouseOver: (camelCase in JS, lower case in HTML)
// attribute's value = function () {} (function, not function CALL )

<img onClick={myFunc} />
// https://reactjs.org/docs/events.html#supported-events

// --------------

// JSX Conditional I: If Statements Don't Work >>

// Forbidden: You cannot inject 'if' statements into JSX expressions
// Alternative: Write 'if' statements outwith JSX expressions (outside of tags):

import React from 'react';
import ReactDOM from 'react-dom';

let message;

if (user.age >= drinkingAge) {
  message = ( // JSX expression 
    <h1>
      Hey, check out this alcoholic beverage!
    </h1>
  );
} else {
  message = ( // JSX expression 
    <h1>
      Hey, check out these earrings I got at Claire's!
    </h1>
  );
}

ReactDOM.render(
  message, 
  document.getElementById('app')
);

// --------------

// JSX Conditional II: The Ternary Operator >>

// More compact way to write conditionals: x ? y : z
// Can be used within <JSX expressions> because it evaluates to a value 
//                    whereas 'if' is statement that executes a statement but !evaluates to value 

const headline = (
  <h1>
    { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
  </h1>
);

// or

const img = <img src={pics[coinToss() === 'heads'? 'kitty' : 'doggy']} />;

// --------------

// JSX Conditional III: && Operator>>

// returns TRUE if conditions either side are true

// && for conditions which sometimes action, but other times do nothing
// Eg: either some code runs, or no code runs 
// If listed items only show if it meets the condition preceding && (???)

const tasty = (
  <ul>
    <li>Applesauce</li>
    { !baby && <li>Pizza</li> }
    { age > 15 && <li>Brussels Sprouts</li> }
    { age > 20 && <li>Oysters</li> }
    { age > 25 && <li>Grappa</li> }
  </ul>
);

// --------------

// .map() in JSX >>

// To create a list of JSX elements, .map() is common

const strings = ['Home', 'Shop', 'About Me']; 

const listItems = strings.map(string => <li>{string}</li>);

<ul>{listItems}</ul>

// .map() is called on 'strings' to provide a new array of each item in JSX format 
// JSX list items can be in an array 

// Note that .map() evaluates TO A VALUE
// whereas .forEach() does not evaluate to a value so can only use outside JSX expressions

// --------------

// Keys in JSX >>

// When you make a list in JSX, sometimes your list needs to include 'key' attributes: 
//      - if list-items have 'memory' from one render to next
//        when a to-do list renders, each item must 'remember' if it was checked off
//      - a list's order might be shuffled eg list of search results from one search to another

// React uses keys internally to keep track of lists, risk scrambling list-items otherwise 

<ul>
  <li key="li-01">Example1</li>
  <li key="li-02">Example2</li>
  <li key="li-03">Example3</li>
</ul>

// --------------

// Non-React code  >>

const h1 = <h1>Hello world</h1>;

//can be rewritten as: 

const h1 = React.createElement(
  "h1",
  null,
  "Hello, world"
);

// When a JSX element is compiled, the compiler 'transforms' it into the method you see above 
// Every JSX element is actually a call to React.createElement()

// --------------







