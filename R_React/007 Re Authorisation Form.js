// CodeAcademy tutorial - REACT.JS : PART I

// --------------

// Authorisation Form >>
// 
// We have been ask to hide website's contact page behind a password form 
// ie. certain information should only be displayed after a password has been inputted
// We will accomplish this by using a React component to set up an authorisation layer
// 
// What do we know about forms, input fields, password input and form validation?
// This is the skeleton for a form, with an input element:
// The label identifies on the display, linked via for...id 
// type="password" obscures the text entered into this field
// The <input> element with type="submit" attribute generates a submit button that 'sends' the form

<form action="URL" method="POST">
  <label for="password">Please enter a Password</label>
  <br/>
  <input id="password" type="password" name="password"/>
  <br/>
  <input type="submit" value="Submit"/>
</form>

// --------------

import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {
    let login = (
      <form action="#" onSubmit={this.authorize}>
        <input 
          type="password" 
          id="password" 
          placeholder="password" 
          name="password"/>
       <input 
          type="submit" 
          value="Submit"/>
      </form>
    );
    let contactInfo = (
       <ul>
          <li>
            client@example.com
          </li>
          <li>
            555.555.5555
          </li>
        </ul>
    );
    return (
      <div id="authorization">
        <h1>{this.state.authorized? "Contact":"Enter the Password"}</h1>
        { this.state.authorized? contactInfo :  login } 
      </div>
    );
  }
}

ReactDOM.render(
  <Contact />, 
  document.getElementById('app')
);
// --------------
  
// You can check if the user entered the correct password by running the expression:
// this.state.authorised (the property's value is a Boolean)
// We saved the contact info and the Submit Password form as variables to toggle between them 