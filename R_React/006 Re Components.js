// CodeAcademy tutorial - REACT.JS : PART I

// --------------

// React Components >>

// Below code shows how to: 

//  * Use Multiline JSX in a Component  >>  (brackets!)
//  *  Use a Variable Attribute in a Component  >> 
//      How to render a React component and get a picture with redPanda's properties? 
//  * Put Logic (simple calcs) in a Render Function >>

import React from 'react';
import ReactDOM from 'react-dom';

const redPanda = {
  src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
  alt: 'Red Panda',
  width:  '200px'
};

class RedPanda extends React.Component {
  render() {
    return (
      <div>
        <h1>Cute Red Panda</h1>
        <img 
          src={redPanda.src}
          alt={redPanda.alt}
          width={redPanda.width} />
      </div>
    );
  }
}

ReactDOM.render(
  <RedPanda />,
  document.getElementById('app')
);

// --------------

//  * Use Conditional in a Render Function >> if statement 
//    Note 'if' statement located in render function but before 'return'

import React from 'react';
import ReactDOM from 'react-dom';

class TodaysPlan extends React.Component {
  render() {
    let task;
    if (!apocalypse) {
      task = 'learn React.js'
    } else {
      task = 'run around'
    }

    return <h1>Today I am going to {task}!</h1>;
  }
}

ReactDOM.render(
	<TodaysPlan />,
	document.getElementById('app')
);

// --------------

//  * Use 'this' in a Component >>

class IceCreamGuy extends React.Component {
  get food() {
    return 'ice cream';
  }

  render() {
    return <h1>I like {this.food}.</h1>;
  } // 'this' refers to the calling object
}

// --------------

//  * Use an Event Listener in a Component >> (often in render functions)
//    An event handler is a function called in response to an event
//    In React, define event handlers as methods on a component class

class MyClass extends React.Component {
  myFunc() {
    alert('Stop it.  Stop hovering.');
  }

  render() {
    return (
      <div onHover={this.myFunc}>
      </div>
    );
  }
}

// --------------
