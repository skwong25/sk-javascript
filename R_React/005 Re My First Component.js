// CodeAcademy tutorial - REACT.JS : PART I

// --------------

// My Very First React Component >>

// A component is a small, resuable chunk of code that is responsible for one job
// typically, to render HTML. Eg the code below creates + renders a new React component.
// Every component comes from a component class, which is like a 'class' factory.


import React from 'react';            // 1
import ReactDOM from 'react-dom';    //  2

class MyComponentClass extends React.Component { //  3 React.Component is base class from React lib
  render() {
    return <h1>Hello world</h1>;
  }
};

ReactDOM.render(               // 4
  <MyComponentClass />,
  document.getElementById('app')
);

// LINE 1 
// imports React library with methods in order to use React 
// React.createElement() is one such critical method, otherwise JSX wouldn't work
// when a JSX element is compiled, it transforms into a React.createElement() call
// These methods do not engage with the DOM, only React

// LINE 2
// imports methods to interact with the DOM
// Eg: ReactDOM.render()

// LINE 3
// Create a new component class (NOT a component)
// Component class variable names begin with capital letters
// class declaration body contains {instructions on how to build component} 
// The one property you MUST include: render method
// which includes a return statement, typically returns a JSX expression

// LINE 4
// To create a React component instance, write a JSX element.
// Name the element the same as your component class. 

// JSX are either HTML tags or 'component instances'
// JSX uses capitalisation to distinguish the two. 
// That is why component classes must begin with capital letter. 

// The last thing to do is render the component. 
// To call a component's render method, pass it to ReactDOM.render()
// ReactDOM.render() will tell <MyComponentClass/> to call ITS render method
// which will reurn the JSX element <h1>Hello world</h1>
// ReactDOM.render() takes that and adds it to the virtual DOM 
// which make's 'Hello world' appears onscreen. 

// --------------









