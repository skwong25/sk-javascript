// CodeAcademy tutorial - REACT.JS : PART I

// --------------

// State >>

// Dynamic Information is information that can change.

// Eg A component to display basketball scoes
// The score changes over the game, meaning the score is 'dynamic'
// 
// React components can access dynamic information in two ways: props and state  
// Beside props and state, every value used in a component should stay the same
// props and state are all we need to set up an ecosystem of interacting React components
// 
// --------------
// 
// Setting and Accessing Initial State >>
// Unlike props, a component's state is NOT passed in from the outside
// A component decides its own state: 
//    - Declare a 'state' property inside of a constructor method 
//    - React components ALWAYS have to call super() in constructors to be set up properly
//      (although this was not the case for Tic-Tac-Toe class Board, as it had no state (?) )
//    - Note that methods should never be comma seperated if inside of a class body
//      This is to emphasize that classes and object literals are different.

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'decent' }; // state = {object} representing initial 'state'
  }

  render() {
    return (
      <h1>
        I'm feeling {this.state.mood}! 
      </h1>
    );
  }
  } // access Component's state with 'this.state' like reading a property 'this.props'


// --------------

// Updating state with this.setState >>

// A component changes its state by calling function:
this.setState() 

// Takes two arguments: 
//    - a {object} that updates the component's state (merges with component's current state)
//    - a callback (never needed)

// --------------

// Call this.setState from Another Function

// Common way: call a custom function that wraps a this.setState() call. 
// Note that you cannot call setState() from inside the render function.

Eg:

class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'good' };
    this.toggleMood = this.toggleMood.bind(this);     // explained below...
  }

  toggleMood() {          // this method contains a call to this.setState()
    const newMood = this.state.mood == 'good' ? 'bad' : 'good';
    this.setState({ mood: newMood });
  }

  render() {
    return (
      <div>
        <h1>I'm feeling {this.state.mood}!</h1>
        <button onClick={this.toggleMood}>
          Click Me
        </button>
      </div>
    );
  }
}

// Because toggleMood()'s body contains the word 'this', 
// this.toggleMood loses it's 'this' so it needs to be bound to the correct 'this' 

// Whenever you define an event handler that uses 'this', 
// you need to add this.methodName = this.methodName.bind(this) to your constructor function

// --------------
// Example: 

import React from 'react';
import ReactDOM from 'react-dom';

const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor (props) {
    super(props);
    this.state = {color: green};
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    const newColor = this.state.color == green? yellow: green
    this.setState({color: newColor});
  }

  render() {
    return ( // Note double set of curly brackets around style's value (??) 
      <div 
      style={{background: this.state.color}}>
        <h1>
          Change my color
        </h1>
        <button onClick={this.changeColor}> <!-- sets up an event listener --> 
          Change color
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('app')
)

// Note that when onClick event listener is triggered by <button> click
// This calls this.changeColor which changes the colour of the state
// However nothing explicitly calls Toggle's render() to change the onscreen colour! 


// It is this line:

<div style={{background:this.state.color}}/>

// that changes virtual DOM object's colour to the new .thisstate.color, causing onscreen change.

// SO if you call .changeColor, technically you SHOULD have to call .render() again.
// Here's why: a this.setState() call automatically calls render() as soon as state is changed

//  see a this.setState() call as followed by .render()
// this is why you can't call this.setState() from inside .render() - would create infinite loop! 

// --------------

// Components Interacting Recap >> 
// 
// We learned: 
//    - How to use import and export to access one file from another (like in Modules)
//    - Passing 'props' 
//    - Setting and changing 'state' 
// 
// React app is basically just a lot of components, setting state and passing props to one another. 
// Going forward, we will learning PROGRAMMING PATTERNS
// These large-scale strategies will help combine what we've learned to really start building. 

