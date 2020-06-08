// CodeAcademy tutorial - REACT.JS : PART I

// --------------

// Stateless Components Inherit From Stateful Components
// A Parent Component passes state to Child Component

// We look at a simple version of a programming pattern and then increase complexity

// Our programming pattern uses two React components:
//  - stateful component
//    (any component that has a state property)
//  - stateless component
//    (any component that does not)

// In our pattern, a stateful component passes its state down to a stateless component

// STEP 1 - Build a Stateful Component Class
// If it needs a state, it needs a constructor() method
// STEP 3 - A <Parent /> is going to pass a prop to a <Child />
//          This means <Parent /> will render a <Child /> 
//          Rendering is the only way for a component to pass props to another component
// STEP 4 - We render an instance of <Parent />
//          which has a state of {name: "Frarthur"}
//          and in turn, renders an instance of <Child /> 
//          while passing it a property from <Parent />'s state as props
//          <Child /> calls its own render() which accesses it's own props
//          where the passed property is 

import React from 'react';
import ReactDOM from 'react-dom';
import {Child} from './Child';

class Parent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: 'Frarthur'
    };
  } 
  
  render() {
    return <Child name={this.state.name}/>;
  }

}

ReactDOM.render(
  <Parent />,
  document.getElementById('app')
)

// STEP 2 - Build a Stateless Component Class
// Child.js will receive and display onscreen a prop called 'name' 

// ./Child.js >>

import React from 'react';
import ReactDOM from 'react-dom';


export class Child extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>Hey, my name is {this.props.name}!</h1>;
  }
}

// REVIEW:
// 
// - We learned that a component can change state by calling this.setState()
// - Note that you should never Update props 
//   A React component should use:
//    - 'props' to store info that can be changed by a different component
//    - 'state' to store info that the component ITSELF can change


// --------------

// Stateless Child Components Update Their Parent's State 

// Common React pattern - Learn to recognise this 
// 
// Last lesson, we passed info from a stateful parent component to a stateless child component
// This lesson, the stateless child component will update the state of the parent component

// How it works: 

// 1. The parent component class defines a method setState()

// 2. The parent component binds the newly-defined method to the current component instance
//    within the constructor. This ensures when we pass the method to the child component, 
//    it still updates the parent component. 
this.handleClick = this.handleClick.bind(this);

// 3. Once the parent has defined a method that updates its state and bound to it, 
//    the parent passes that method down to a child (via its render() method)
<ChildClass onClick={this.handleClick} />

// 4. The child receives the passed-down function and uses it as an event handler
//    (The child component render()s a <Button/> with an onClick event listener 
//    The onClick event listener fires the parent's handleClick() which updates the parent's state:
<button onClick={this.props.onClick}></button>

// --------------

// ParentClass.js >> 

import React from 'react';
import ReactDOM from 'react-dom';
import { ChildClass } from './ChildClass';

class ParentClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = { totalClicks: 0 };

    
  }

  handleClick() {
    const total = this.state.totalClicks;

    // calling handleClick will 
    // result in a state change:
    this.setState(
      { totalClicks: total + 1 }
    );
  }

  // The stateful component class passes down
  // handleClick to a stateless component class:
  render() {
    return (
      <ChildClass onClick={this.handleClick} />
    );
  }
}

// ChildClass.js >>

import React from 'react';
import ReactDOM from 'react-dom';

export class ChildClass extends React.Component {
  render() {
    return (
      // The stateless component class uses
      // the passed-down handleClick function,
      // accessed here as this.props.onClick,
      // as an event handler:
      <button onClick={this.props.onClick}>
        Click Me!
      </button>
    );
  }
}

// --------------

// Codeacademy Exercise: Passing Props Back and Forth
// (Stateless child components updating their parent's state) 


// The <Parent /> renders a <Child /> 
// The child renders a dropdown list of names and a display message reflecting the chosen name
// The dropdown has an onChange event listener that fires a function to isolate the chosen name: 
// The 'target' value from the event {} 
// Note that onChange is a special attribute that listens for a change
// This triggers a Parent function via <Child />'s props, passing it that argument
// The function calls setState() and changed the state using the argument passed
// Once the state has changed, the <Child/>'s props changes to reflect, and the name displays. 


 the dropdown choice  and passes the parent the chosen name
// The parent  

// Child.js >> 

import React from 'react';

export class Child extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
      <div>
        <h1>
          Hey my name is {this.props.name}!
        </h1>
        <select 
          id="great-names"
          onChange={this.handleChange}>
          <option value="Frarthur">
            Frarthur
          </option>

          <option value="Gromulus">
            Gromulus
          </option>

          <option value="Thinkpiece">
            Thinkpiece
          </option>
        </select>
        
      </div>
    );
  }
}

// Parent.js >>

import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };

    this.changeName = this.changeName.bind(this);
  }

  changeName (newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return <Child 
      name={this.state.name} 
      onChange={this.changeName} 
      />;
  }
}

ReactDOM.render(
	<Parent />,
	document.getElementById('app')
);


// --------------

// In the previous exercise, the Child component had two jobs:
//    - displayed a name
//    - offered a way to change that name
// 
// A Component should only have one job. Best practice is to divide.
// In which case, a Child Components would Update their Sibling's Props  

// --------------

// Stateless Components Inherit From Stateful Components Review:

// 1. A stateful component class defines a function that calls this.setState: 
changeName(newName) {
  this.setState({
    name: newName
  });
}

// 2. The stateful component passes that function down to a stateless component:
<Child onChange={this.changeName} />

// 3.  That stateless component defines a function that calls the passed down function 
// and that can take an event object as argument: 

handleChange(e) {
  const name = e.target.value;
  this.props.onChange(name);
}

// 4. The stateless component class uses this new function as an event handler: 
  onChange={this.handleChange}>

// 5. When an event is detected, the parent's state updates. (User selects from dropdown)

// 6.  The stateful component class passes down its state, 
//      distinct from the ability to changes its state, to a different stateless component: 
<Sibling name={this.state.name} />

//  7. That stateless component class receives the state and displays it: 
const name = this.props.name;
    return (
      <div>
        <h1>Hey, my name is {name}!</h1>
        <h2>Don't you think {name} is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked {name}!</h2>
      </div>

//  8. An instance of the component class is render. 
//     One stateless child component displays the state...
//     and a different stateless child component displays a way to change the state...

// There is elegance in this pattern! 

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