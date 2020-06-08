// CodeAcademy tutorial - REACT.JS : PART 1

const h1 = <h1>Hello world</h1>;

// JSX looks like HTML, but because it's in a JS file, we know its actually JSX.
// JSX is a syntax extension for JS, written to be used with React. 

// syntax extension means that JSX is not valid JS - web browsers can't read it!
// A JS file containing JSX needs to be COMPILED. 
// a JSX compiler translates JSX into JS before the file reaches any browser. 

// ReactDom.render() is the most common way to render JSX
// It takes a JSX expression, creates a corresponding tree of DOM nodes + adds that tree to the DOM
// That is the way to make a JSX expression appear onscreen

// --------------

// JSX Elements >> 

// A basic unit of JSX is a JSX ELEMENT. eg: 
// Not the same as a HTML element - a JSX element is a descrip of what we want to see on our page 

<h1>Hello world</h1>

// JSX elements are treated as JS expressions. 
// Can be saved in a variable, passed to a function, stored in objects and arrays etc eg:

const navBar = <nav>I am a nav bar</nav>;

const myTeam = {
    center: <li>Benzo Walli</li>,
    powerForward: <li>Rasha Loa</li>,
    smallForward: <li>Tayshaun Dasmoto</li>,
    shootingGuard: <li>Colmar Cumberbatch</li>,
    pointGuard: <li>Femi Billon</li>
  };

// --------------

// JSX Elements Attributes >> 

// Follows HTML element syntax: name = "value" 
// Examples:

<a href="http://www.example.com">Welcome to the Web</a>;

const title = <h1 id="title">Introduction to React.js: Part I</h1>; 

const panda = <img src="images/panda.jpg" alt="panda" width="500px" height="500px" />

// --------------

// Nesting JSX Elements  >> 

// a JSX <h1> element nested inside a JSX <a> element:
<a href="https://www.example.com"><h1>Click me!</h1></a>

// Make readable by using HTML-style line breaks and indentation:
// But must be wrapped in brackets if multi-line:

const theExample = (
    <a href="https://www.example.com">
      <h1>
        Click me!
      </h1>
    </a>
  );

// --------------

// JSX Outer Elements  >> 

// A JSX expression must have exactly ONE outermost element. 
// The first opening and final closing tag of a JSX expression must belong to the same JSX element. 
// The first code block works: 

const paragraphs = (
    <div id="i-am-the-outermost-element">
      <p>I am a paragraph.</p>
      <p>I, too, am a paragraph.</p>
    </div>
  );

// But not the second: 

const paragraphs = (
    <p>I am a paragraph.</p> 
    <p>I, too, am a paragraph.</p>
  );

// --------------

// Rendering JSX >> 

// 'to render' means to make it appear onscreen

// LESSON! 
// DOM is the Document Object Model 
// React is a JavaScript library for building User Interfaces
// ReactDOM is the JavaScript library that allows React to interact with the DOM.
https://medium.com/coffee-and-codes/hey-react-what-is-the-virtual-dom-466ec333bf9a

// Breakdown of this code: 
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));
//<h1></h1> JSX expression is the 1st argument passed to ReactDOM.render() to be rendered onscreen
// The first argument is APPENDED TO the element selected by the second argument 
// There is a CONTAINER in the document: <main id="app"></main>

// --------------

// Passing a Variable to ReactDOM.render() >>
// 
// ReactDOM.render() first argument should EVALUATE to a JSX expression,it doesn't have to BE one. 
// It can be a variable. Eg:

const toDoList = (
    <ol>
      <li>Learn React</li>
      <li>Become a Developer</li>
    </ol>
  );
  
  ReactDOM.render(
    toDoList, 
    document.getElementById('app')
  );

// --------------

// The Virtual DOM >>

// ReactDOM.render() only updates DOM elements that have changed. 
// SO if you render the same thing twice, the second render does nothing.
// React's main benefit: only updates the neccessary DOM elements, thanks to the VIRTUAL DOM

const hello = <h1>Hello world</h1>;

// This will add "Hello world" to the screen:
ReactDOM.render(hello, document.getElementById('app'));

// This won't do anything at all:
ReactDOM.render(hello, document.getElementById('app'));

// --------------

https://www.codecademy.com/articles/react-virtual-dom

// Problem: DOM manipulation is slow. JS frameworks update the DOM more than they have to. 
// Solution: In React, for every DOM object there is a corresponding virtual DOM object

// A virtual DOM is a representation of a DOM object, like a lightweight copy
// It has the same properties as a real DOM object, but lacks the power to change what's onscreen
// Manipulating virtual DOM is quicker than DOM as nothing is drawn onscreen
// Analogy: moving rooms in Revit as opposed to moving rooms in a house

// Solution cont...
// When you render a JSX element, every single virtual DOM is re-rendered
// Inefficiency is insignificant as virutal DOM updates so quickly
// Once updated, React compares to pre-update version to pinpoint which objects changed 'diffing'
// React then ONLY updates those objects in the real DOM

/*

In summary, here’s what happens when you try to update the DOM in React:

    The entire virtual DOM gets updated.
    The virtual DOM gets compared to what it looked like before you updated it. React figures out which objects have changed.
    The changed objects, and the changed objects only, get updated on the real DOM.
    Changes on the real DOM cause the screen to change.

*/





