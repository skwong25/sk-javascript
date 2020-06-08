/** CodeAcademy tutorial - HTML Form Validation >>
 * 
 * How does a login page work? How does username & password grant access? 
 * Validation = concept of checking user-provided data against required data 
 * 
 * One type is server-side validation eg login page
 * Login page form accepts username/password input, 
 * Sends this data to a server to checks if pair matches up. 
 * 
 * Another type is client-side validation, checks data on browser (client)
 * and validation occurs before info is sent to server
 * 
 * HTML5s built-in client-side validation 
 *  - saves time waiting to send info and receive server response
 *  - protexts server from malicious code
 *  - quicker feedback to users abt specific fields if data inputted was rejected 
 * 
 * Here we will learn how to add some validation checks to <form>s!
 */


// --------------

// Requiring an Input >>
// 
// <input> has a 'required' attribute' to set mandatory fields in <form>s
// The below renders a text box, if we try to submit without input, it generates a message. 

<form action="/example.html" method="POST">
  <label for="allergies">Do you have any dietary restrictions?</label>
  <br>
  <input id="allergies" name="allergies" type="text" required>
  <br>
  <input type="submit" value="Submit">
</form>


(</input></input></br></br>)
// --------------

// Set a Minimum and Maximum >> 
// 
// Another built-in validation with <input type="number"> and <input type="range">
// In the below, if user inputs a value of 0, a warning appears. 

<form action="/example.html" method="POST">
  <label for="guests">Enter # of guests:</label>
  <input id="guests" name="guests" type="number" min="1" max="4">
  <input type="submit" value="Submit">
</form>

(</input></input>)
// --------------

// Checking Text Length >> 
// 
// Eg character cap or min. number of characters
// minlength and maxlength attributes

<form action="/example.html" method="POST">
  <label for="summary">Summarize your feelings in less than 250 characters</label>
  <input id="summary" name="summary" type="text" minlength="5" maxlength="250" required>
  <input type="submit" value="Submit">
</form>

(</input></input>)
// --------------

// Matching a Pattern >> 
// 
// If we want user input to follow specific guidelines
// 'pattern' attribute, assigned to regular expression 'regex'
// Regular Expressions are a sequence of characters that make up a search pattern.
// If input matches regex, the form can be submitted. 
// 
// Eg checking for a valid credit card number (14/16 digit no.)
// We can use the regex [0-9]{14-16} to check user provided only numbers and entered between 14-16 digits 

<form action="/example.html" method="POST">
  <label for="payment">Credit Card Number (no spaces):</label>
  <br>
  <input id="payment" name="payment" type="text" required pattern="[0-9]{14,16}">
  <input type="submit" value="Submit">
</form>

(</input></input></br>)
// --------------

// Review >>
// 
// Client-side validation happens in browser before info sent to server
// <input> 'required' attribute validates that field has input
// <input type="number"> 'min''max' attributes validates acceptable min.max value
// <input type="text"> 'minLength' 'maxLength' validates acceptable length
// pattern=regex validates input format
// 
// --------------
