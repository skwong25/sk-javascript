/* << FETCH() GET REQUESTS >>

The Fetch API provides a JS interface for accessing the HTTP (HyperText Transfer Protocol)
It provides a fetch() method as an easy way to fetch(!) resources asynchronously across the network
This functionality was previously achieved using AJAX calls - XmlHttpRequest (xhr object)
but fetch() provides a better alternative easily used by other technologies.   
Diagram: 
https://s3.amazonaws.com/codecademy-content/courses/intermediate-javascript-requests/diagrams/fetch+GET+diagram.svg


--------------  */


// Codecademy Exercise 1 : STEP-BY-STEP breakdown of fetch() boilerplate code


fetch('https://api-to-call.com/endpoint') 
// calls fetch() function and passes URL as a string 
// this first argument determines the endpoint of the request

// .then( function () {}) or .then( () => {})

.then( response => {
// chains .then() method to then end of the fetch() function 
// passes the success callback arrow function as its first argument, with one parameter 'response'
// .then() is only invokes once the promise status of fetch() is resolved
// remember .then() always returns a promise 

  if (response.ok) {
    return response.json()
  }; // if no errors, response.ok will return a Boolean value 

  throw new Error('Request failed!'); // will 'throw' this error when response.ok is falsy
}, 

( networkError => { // adds arrow function as second argument to .then() - failure handler 
console.log(networkError.message)
}) ) // if we could not reach the endpoint at all (eg server down), then we would get this networkError

.then( jsonResponse => {
  return jsonResponse
} ) // chains another .then() method to end of first .then() 

// In simplest form, we have also seen .fetch() statements as simple as: 
// fetches a json file across the network and prints it  

fetch('http://example.com/movies.json') // accepts one argument - the path to the resource
  .then(response => response.json()) // returns a promise containing a Response object
  .then(data => console.log(data)); // json() method extracts json body content from HTTP response
// The second .then() : the response does not contain the actual data in readable form 
// (it's in a 'stream' - a sequence of objects)
// so the second .then() handles the Promise returned by the first .then() and PRINTS IT 

  // --------------  


/** Codecademy Exercise 2: 
 
 
* using fetch() request to access Datamuse API and render info in browser:
    * we create a query URL 
    * pass it a query URL and a settings object
    * chained .then() method with two callback functions as arguments - a success and failure handler 
    * one to handle the promise if resolved, one to handle network errors if promise rejected
    
* if request is successful, we will get an array of word that sound like the word we inputted 
*/

// Information to reach API
const url = 'https://api.datamuse.com/words'
const queryParams = '?sl='
// queryParams is the start of your query string and will narrow your search to words that sound like your word

// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value; // stores the value of the input field 
  const endpoint = url+queryParams+wordQuery; // adds a query string to the url 
  fetch(endpoint, {cache: 'no-cache'}) // calls fetch() with endpoint as argument
.then( (response) => { // cache is for API to work within browser 
  if (response.ok) { // chains .then() method to fetch()
    return response.json() // next .then() chained would receive a Promise with JSON data
} throw new Error('Request failed!');
}, (networkError) => {  // failure handler - take care on the bracket syntax! 
  console.log(networkError.message)
});
.then((jsonResponse)=>{
  renderResponse(jsonResponse);
});
} 

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);


  // --------------  


 






