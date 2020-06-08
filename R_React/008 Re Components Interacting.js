// CodeAcademy tutorial - REACT.JS : PART I

// --------------

// Components Interacting >>
// A Component can Render another Component >>

// We have seen render() methods return JSX elements (<div></div>s, <p></p>s and <h1></h1>s also):

class Example extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

// But render() can also return COMPONENT INSTANCES 
// We have seen a component rendered by ReactDOM.render() but not by another component 

// If you want to use a variable that's declared in a diff file, such as 'NavBar' in the exercise
// You need to import the variable you want
// Use 'import' statement (as learnt in Modules) which we've used to import React lib:

import { NavBar } from './NavBar.js';
import React from 'react'; 

// The differences:
//    - note curly braces
//      default export (only export of its kind) vs. named export 
//    - note that if string begins with './' import treats the string as a filepath
//      if no file extension, .js assumed

// NavBar.js: 

import React from 'react';

export class NavBar extends React.Component {
  render() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
          {page}
        </a>
      )
    });
  };

    return <nav>{navLinks}</nav>;
  }

// ProfilePage.js: 

import React from 'react';
import ReactDOM from 'react-dom';
import {NavBar} from './NavBar'

class ProfilePage extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
}

// --------------

// this.props >>
// A Component can Pass Information to Another Component
// that info is known as 'props'

// Every component has something called 'props'
// A component's props is an object. It holds info about that component. 
// To see a component's props object, use expression: this.props
const stringProps = JSON.stringify(this.props); // output: {}
// This is stringified version of this.props, although JSON.stringify can't detect some properties 


render() {
  console.log("Props object comin' up!");

  console.log(this.props);

  console.log("That was my props object!");

  return <h1>Hello world</h1>;
}

// --------------

// How to Pass a prop to a Component? By giving the instance an attribute.  Egs: 

<MyComponent foo="bar" /> 
<Greeting myInfo={["top", "secret", "lol"]} />
<Greeting name="Frarthur" town="Flundon" age={2} haunted={false} />

// --------------

// How to Render a Component's props (making a component display passed-in info)

// We see information 'firstName' being passed to <Greeting/>
// To have it display onscreen, include 'firstName' in Greeting's render() (like an argument)

import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
}

ReactDOM.render(
  <Greeting firstName='Gruffalo' />, 
  document.getElementById('app')
);

// --------------

// How to Pass props from Component to Component

class Greeting extends React.Component { 
render() { return h1<this.props.name>h1 }
}; 

// the above accesses the prop passed via
< Greeting name="Suzanna" /> 

// The most common use of props is to pass info to a component, from a different component. 
// 'props' is the name of the object that stores passed-in informtion
// this.props refers to that storage object
// at the same time, each piece of passed-in information is called a prop (property)
// This means that props could refer to piece of pass-in info OR the object that stores that info :( )

// --------------

// How to Render Different UI Based on 'props'
// You can do more with props than just display them, can use them to make decisions

// Greeting.js:

import React from 'react';
import ReactDOM from 'react-dom';

export class Greeting extends React.Component {
  render() {
  	if (this.props.signedIn == false) {
  	  return <h1>GO AWAY</h1>;
  	} else {
  	  return <h1>Hi there, {this.props.name}!</h1>;
  	}
  }
}

// App.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Greeting } from './Greeting';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting signedIn={true} name="Alison" />
        <article>
          Latest:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);

// --------------

// How to Define and Receive an Event Handler in a Component Class

// You often will pass functions as 'props'
// It is especially common to pass EVENT HANDLER functions. Eg:

import React from 'react';

class Example extends React.Component {
  handleEvent() {
    alert(`I am an event handler.
      If you see this message,
      then I have been called.`);
  }

  render() {
    return (
      <h1 onClick={this.handleEvent}>
        Hello world
      </h1>
    );
  }
}

// --------------

// Button.js >>

import React from 'react';

export class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.talk}>
        Click me!
      </button>
    );
  }
}

// Talker.js >> 

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button talk={this.talk}/>;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

// --------------

// Naming depends on Event we are listening for: handleEvent, onEvent, this.props.onEvent 
// 
// Event handler function: 'handle'+'event' 
// Eg handleClick

// Attribute 'Prop' name: 'on' + 'Event' 
// Eg: onClick

// Note that onClick only has special meaning when used on HTML-like JSX elements
// Eg below, the special onClick attribute creates an EVENT LISTENER 
// Whereas in Talker.js render()'onClick' is an ordinary prop name /does not create an event listener
// because <Button/> is not a HTML-like JSX element, it's a COMPONENT INSTANCE 

// Button.js >> 

import React from 'react';

export class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        Click me!
      </button>
    );
  }
}

// Talker.js >> 

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  handleClick() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button onClick={this.handleClick}/>;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

// --------------

// this.props.children
// 
// Every component's props object has a property named 'children'
// 
// this.props.children returns everything in-between a component's opening & closing JSX tags
// 
// So far all the component we've seen have been self-closing tags
// but <MyComponentClass/> works the same as <MyComponentClass> </MyComponentClass>
// If a component has more than one child, this.props.children returns an array

// Example 1 this.props.children is text 
<BigButton>
  I am a child of BigButton.
</BigButton>


// Example 2 this.props.children is a component instance
<BigButton>
  <LilButton />
</BigButton>


// Example 3  this.props.children is undefined
<BigButton />

// App.js >> 

import React from 'react';
import ReactDOM from 'react-dom';
import { List } from './List';

class App extends React.Component {
  render() {
    return (
      <div>
        <List type='Living Musician'>
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
        </List>
        <List type='Living Cat Musician'>
          <li>Nora the Piano Cat</li>
          <li>Dora the Piano Cat</li>
        </List>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);

// List.js >>

import React from 'react';

export class List extends React.Component {
  render() {
    let titleText = `Favorite ${this.props.type}`;
    if (this.props.children instanceof Array) {
    	titleText += 's';
    }
    return (
      <div>
        <h1>{titleText}</h1>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}

// --------------

// defaultProps 

import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

// defaultProps goes here:
Button.defaultProps = {text: "I am a button"}

ReactDOM.render(
  <Button text=""/>, 
  document.getElementById('app')
);

// --------------

/**  'props' Review / Skills learnt: 
 * 
 * Passing a prop by giving an attribute to a component instance
 * Accesing a passed-in prop via this.props.prop-name
 * Displaying a prop (including it in render() function)
 * Using a prop in logic
 * 
 * Defining an event handler in a component class
 * Passing an event handler as a prop
 * Receiving a prop event handler and attaching it to an event listener
 * Conventional Naming of event handlers and event handler (on+Event and handle+Event)
 * 
 * this.props.chidren
 * getDefaultProps
 * 
 * --------------
*/
