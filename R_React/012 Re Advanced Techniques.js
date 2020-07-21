// CodeAcademy tutorial - REACT.JS : PART II

// ADVANCED REACT TECHNIQUES >> 

// We will learn how to:
//    - make a stateless functional component
//    - make a propType
//    - write a form 
//    - how to use styles

// You will be introduced to your Second Programming Pattern:
// Dividing components into Presentational Components and Container Components

// --------------

// INLINE STYLE OBJECTS>>
// one way to use styles in React

// An inline style is a style written as an attribute:

<h1 style={{ background: 'lightblue', color: 'darkred' }}>Hello world</h1>

// Note the double curly braces. 
// The outer inject JS into JSX. The inner create a JS object literal: { color: 'red'}

// NAMES: 
// Whereas JS style names are written in hypenated-lowercase...
// eg:  'margin-top':       "20px"
// ...React style names are in camelCase:

const styles = { // store as a variable

  marginTop:       "20px",
  color: 'darkcyan',
  background: 'mintcream'
};

<h1 style={styles}>Hello world</h1>

// VALUES: 
// Whereas JS style value are almost always 'strings' even if numeric: "450px" "20%"
// React style values written as numbers are assumed with unit 'px' (more convenient!)

{ fontSize: 30 }
{ fontSize: "2em" } // units other than px 
// List of styles that don't assume px:
https://reactjs.org/docs/dom-elements.html


// --------------

// SHARED STYLES ACROSS MULTIPLE COMPONENTS: >> 

// To styles REUSEABLE, store in a separate JS file
// export / import the styles you want to reuse

// --------------

// SEPARATE CONTAINER COMPONENTS FROM PRESENTATIONAL COMPONENTS: Apply >> 
// This is a popular React programming pattern

// If a component has to have 'state'
// make calculation based on 'props' or manage other complex logic
// then that component shouldn't ALSO have to render HTML-like JSX
// Instead, that component should render another component  
// whose job it is to render HTML-like JSX

// Separating business logic from presentational logic is good practice, allows:
//    - reuseability

// --------------

// CA Exercise 1 - Guinea Pigs
// Task: Separate this component class into two components:
// one for rendering, one for logic 

// Components/GuineaPigs.js > this will be our presentational component class 
//                          > it's only job will be to render HTML-like JSX
// THUS the only method within the component class is the render() function... 
// (its instructions object only has one property 'render()')
// and deleted the import ReactDOM from 'react-dom' statement / renderDOM.render() call
// BECAUSE a presentational component will always get rendered by a container component

import React from 'react';
// Presentational Class

export class GuineaPigs extends React.Component {
  render() {
    const src = this.props.src;
    return <img src={src}/>;
  }
}

// Containers/GuineaPigContainer.js > container figures out what to display 

import React from 'react';
import ReactDOM from 'react-dom';
import {GuineaPigs} from '../components/GuineaPigs.js';
// Container Component

const GUINEAPATHS = [
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-1.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-2.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-3.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-4.jpg'
]; // 4 x URL link 

class GuineaPigsContainer extends React.Component {
  constructor(props) { // component class 
    super(props); 

    this.state = { currentGP: 0 }; // set state 

    this.interval = null; 

    this.nextGP = this.nextGP.bind(this);
  }

  nextGP() { 
    let current = this.state.currentGP;
    let next = ++current % GUINEAPATHS.length;
    this.setState({ currentGP: next });
  } // method sets state according to incrementing state / 4 (number of URL links) - so the state will cycle numbers 0-3 

  componentDidMount() {
    this.interval = setInterval(this.nextGP, 5000); // calls setInterval() every 5 seconds - the photos cycle every 5 secs
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  } // ID value from this.interval is passed as parameter to clearIntervall to stop the cycle  

  render() {
    const src = 
    GUINEAPATHS[this.state.currentGP];
    return <GuineaPigs src={src}/>;
  }
}

ReactDOM.render(
  <GuineaPigsContainer />,
  document.getElementById('app')
);

// SUMMARY OF CONTAINER COMPONENT:
// Article: https://medium.com/@learnreact/container-components-c0e67432e005#.gacsoomn1
// 'A container does data fetching and then renders its corresponding sub-component. That's it!'
// Corresponding means, of the same name:
StockWidgetContainer => StockWidget
TagCloudContainer => TagCloud
PartyPooperListContainer => PartyPooperList

// LESSON: setInterval(function, ms) method 
// calls a function or evaluates an expression at specified intervals
// until clearInterval() is called (or the window is closed)
// the ID value returned by setInterval is used as parameter for clearInterval()
setInterval(function(){ alert("Hello"); }, 3000);

// --------------

// STATELESS FUNCTIONAL COMPONENTS >>

// GuineaPigs.js presentational component only had a render() function and no other properties. 
// In this case, instead of a React.Component, can rewrite the component class as a JS function - 
// Called a 'stateless functional component' with advantages over typical component classes:
//    - more concise 
//    - takes two optional inputs: 'props' and 'state' and outputs HTML and/or other components

// Usually have 'props' passed to them, to access these, give your stateless function a parameter
// The parameter will be auto equal to the component's 'props' object. 
// Eg: GuineaPigs class rewritten as statless functional component: 

export class GuineaPigs extends React.Component {
  render() {
    const src = this.props.src;
    return <img src={src}/>;
  }
}

export const GuineaPigs = (props) => { // Note methods to be declared as typical JS functions 
    const src = props.src;
    return <img src={src}/>;
}



// QUESTION: Is a stateless functional component the same as a stateless component?:
// ANSWER: A stateless functional component can be seen as a function that returns JSX 
// No state, not a class, does not extend React.Component

// A stateless component is a class, though no state. 
// Typically used by a parent component for rendering something like text/info 

// Note that functional components can have internal state in React v16.8.0.
// using built-in React hooks: 

// useState:

const [state, setState] = useState(initialState);
const [count, setCounter] = useState(0);
// (0) is the first state of the count, and setCounter is the method by which to update state
<button onClick={() => setCounter({ count: 1 })}></button>

Eg:
const [isLoading, setLoading] = useState(true);

https://enmascript.com/articles/2018/10/26/react-conf-2018-understanding-react-hooks-proposal-with-simple-examples

// useEffect:

// Data fetching, setting up a subscription, and manually changing the DOM in React components 
// are all examples of side effects.
// Think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.
// Typically side effects are put into the above class lifecycle methods 
// Two kinds of side effects in React components: those that do and don't require cleanup
// Eg of effect not requiring clean-up: 
// First parameter: function to be performed after render. Note effect is different each time. 
// Second parameter: React compares this array of values with the array of the previous render. 
// React will only call the effect when any value of the array has changed since the previous render.

import React, { useState, useEffect } from 'react';
function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {    document.title = `You clicked ${count} times`;  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

// Read more here: https://reactjs.org/docs/hooks-effect.html


// --------------

// propTYPES >> 

// An imp. React feature for two reasons:
//    - prop validation: validation ensures props acting as they should
//                       if missing or unexpected value then warning prints to console
//    - documentation: documenting 'props' makes it easier to quickly understand the component class 
//                     within a file. (Huge benefit when lots of files)
//                     Allows your markup components to state expectations of the data they require
//                     and if it fails, it fails LOUDLY

// Applying PropTypes: 
// Eg:

import React from 'react';

export class MessageDisplayer extends React.Component {
  render() {
    return <h1>{this.props.message}</h1>;
  }
}

// This propTypes object should have one property for each expected prop:
MessageDisplayer.propTypes = {
  message: React.PropTypes.string // Note the value is an object
};

// The component class above expects: <MessageDisplayer message="something" />
// If a component class expects a prop, then you can give that component class a propType
// 1st, search for a property named propTypes on the instructions object. If not one, make one. 
// Declare it after the close of component declaration, as it will be a STATIC PROPERTY. 
// * A property that applies to the component class but not to any one instance of the class
//   We only set propTypes once to the class, every instance created can refer back to that. 
// 2nd, add a property to the propTypes object - one for each prop your component class expects to receive
// Each property on a propTypes object is called a propType.

// QUESTION: What are the propTypes supposed to be exactly?
// The 'name' of each property in propTypes should be the name of the expect prop
// The value of each property should fit this pattern: (eg string)
React.PropTypes.expected-data-type-goes-here // note capitalisation:

Runner.propTypes = {
  message:   React.PropTypes.string.isRequired,
  style:     React.PropTypes.object.isRequired,
  isMetric:  React.PropTypes.bool.isRequired,
  miles:     React.PropTypes.number.isRequired,
  milesToKM: React.PropTypes.func.isRequired,
  races:     React.PropTypes.array.isRequired
};

// adding .isRequired means we will get a console warning if the prop ISN'T sent 

// --------------

// PropTypes in Stateless Functional Components >>

// So how can we write propTypes for a stateless functional component? 
// Process is fairly similar:
//    - define a propTypes object as a property of the stateless functional component itself 

const Example = (props) => {
  return <h1>{props.message}</h1>;
}

Example.propTypes = {
  message: React.PropTypes.string.isRequired
};

// --------------

// REACT FORMS >>

// How forms work in non-React environmt: 
//  - data input
//  - user submits
//  - form's data sent to server simultaneously 
//  - however, diff parts of the website may need that input at diff times. 

// In complex JS apps with moving, interdependant parts, this kind of conflict leads to probs
// In a React form, you want the server to know about every new character or deletion, as soon as it happens
// That way, your screen will always be in sync with the rest of your application

// --------------

// Input onChange >> 

// A traditional form doesn't update the server until use hit's submit
// But you want to update the server ANYTIME USER ENTERS OR DELETES ANY CHARACTER

// We do this by setting an onChange event listener attribute in the <input/>
// This calls a handleUserInput() that changes the state to the input text
// This input text is rendered onscreen

import React from 'react';
import ReactDOM from 'react-dom';

export class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userInput:"" };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(e) {
    this.setState({userInput:e.target.value})
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleUserInput} value={this.state.userInput}/>
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
}

ReactDOM.render(
	<Input />,
	document.getElementById('app')
);


// We just wrote our first React form using just <input/>
// In future, a <form> element and a submit button is useful for diffrentiating 
// between a finished form and an in-progress form

// --------------

// Controlled vs Uncontrolled Components

// An uncontrolled component is a component that maintains its own internal state
// A controlled component is a component that does not maintain any internal state
//    (as in, its controlled by someone else) (has no memory of its own)

// Most React components are controlled. Eg <input />  is uncontrolled
// until you give it a 'value' attribute then it stops using its internal storage. 

// --------------

// ACCUMULATED LESSONS:
//    - a class is not a function. Syntax: class Class extends SuperClass {}
//    - Don't be putting ; in objects
//    - You always miss 'this' off this.eventHandler
//    - Rem that event listeners have to go into an element's opening tag like <button> or <select>
//    - Default Arguments - Ensure the correct argument is passed
// In the instance that an event listener triggers a method that requires sepcific argument...
// By default, an event listener within an element, when fired will pass an event object 
// The solution is to define another FUNCTION Eg: handleChange(e) 
// which should take an EVENT OBJECT as an argument, extract the name we need
// and then call the EVENT HANDLER, passing in the extract name. 
//    - Spelling errors!! Eg:
//      * 'handleEvent' instead of 'handleChange' 
//      * 'prop' instead of 'props'