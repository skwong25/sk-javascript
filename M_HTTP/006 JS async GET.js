/**  << async GET requests >> 
 * 
 * Where previously we chained Promises (.then()), ES8 syntax async...await simplifies requests
 * Includes try and catch statements
*/


// --------------  


/** Codecademy Exercise 1 : STEP-BY-STEP breakdown of ASYNC GET request
 * 
 * Boilerplate Code Diagram: 
 * https://s3.amazonaws.com/codecademy-content/courses/intermediate-javascript-requests/diagrams/async+await+GET+diagram.svg
 * 
 * Remember:
 * 'async' returns a promise (no need for constructor)
 * 'await' allows program to continue to run while waiting for a promise to resolve
 * an exception/error within a 'try...catch' block will invoke the catch code to run 
 */

// create arrow function using async
// async function getData () {}

// The try block code will send a request and handle the response
// The catch statement will handle an error if thrown

const getData = async () => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint'); 
    if (response.ok) {
    const jsonResponse = await response.json();
    // .json() is an asynchronous method so we 'await' it's promise status
    return jsonResponse; // normally would want to use the jsonResponse info in a diff manner 
      }
      throw new Error('Request failed!');
  } catch (error) {
    console.log(error); 
// typically there will be more sophisticated ways of handling errors
// like redirecting users to another page
  }


// --------------  
// Throwback Comparison to fetch API:
// fetch API by default makes GET requests
// fetch() uses a .then() method, which has a success and failure handler 
// in async...await, this is replaced by the try...catch block

fetch('https://api-to-call.com/endpoint') 
.then( response => {         
  if (response.ok) {        // the response isn't usable json, Fetch API uses streams 
    return response.json() // so we use .json() method native to Fetch API 
  }; 
  throw new Error('Request failed!');  // Don't quite understand this:  
}, (networkError => {              // if response.ok != true
console.log(networkError.message) // it resolves successfully but throws an error
}) )                             // if it rejects, it directly invokes the failure handler
.then(jsonResponse => {         // and does not pass through the if conditional check  
  return jsonResponse;         // Is this a correct reading? 
})
// --------------  


// --------------  
// Throwback Comparison to xhr object: 
// xhr does not use Promises
// xhr object can use an if...else statement to handle unexpected errors.

const xhr = new XMLHttpRequest();
const url = "https://api-to-call.com/endpoint"; 

xhr.responseType = 'json'; 
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
return xhr.response;
} else {
  console.log('error', xhr);
  }
}

xhr.open( 'GET', url);
xhr.send() 
// -------------- 


// Codecademy Exercise 2 : A fetch() GET request to access Datamuse API

// Information to reach API
const apiKey = '8b5f6c3b9b05408d801908faf6620139';
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jja=';

// AJAX function
const getSuggestions = async () => {
  const wordQuery = inputField.value;                           // captures input as a variable
  const endpoint = `${url}${queryParams}${wordQuery}`;         // concatenates url + query string
  try {
const response = await fetch(endpoint, {cache: 'no-cache'}); // sends request
if (response.ok) {                                          // handles response
  const jsonResponse = await response.json();              // parses in JSON 
  renderResponse (jsonResponse);                          // formats response
}
  } catch(error) {
    console.log(error);
  };
} 

// -------------- 
