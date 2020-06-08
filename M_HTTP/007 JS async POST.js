/**  << async POST requests >> 
 * 
 * As per xhr & fetch() POST requests, POST requires more info than GET
 * With async we have the same structure of try...catch 
 * The main diff = just like in fetch() GET request, our fetch() call needs a second argument with:
 *      { 
 *      method: 'POST'
 *      body: JSON.stringify({id: '200'}) 
 *      } 


 --------------  


 * Codecademy Exercise 1 : STEP-BY-STEP breakdown of ASYNC POST request
 * 
 * Boilerplate Code Diagram: 
 * https://s3.amazonaws.com/codecademy-content/courses/intermediate-javascript-requests/diagrams/async+await+POST+diagram.svg
 * 
 * create arrow function using async (returns a promise: async function getData () {} )
 * Add a 'try' statement with a catch statement to handle if things go wrong
 * As its a POST request, use 'await' keyword before fetch() and save to a variable 
 * First argument: pass fetch a string URL 
 * Second argument: (request options) method: 'POST' , body: JSON.stringify({id: 200}).
 * 
 */

const getData = async () => {
  try {
const response = await fetch('https://api-to-call.com/endpoint', {
  method: 'POST',                      // << async GET request for reference (identical except...
  body: JSON.stringify({id: 200})     // << ... additional request options - methods & body ):
})
if (response.ok) {
  const jsonResponse = await response.json();
  return jsonResponse;
} throw new Error('Request failed!');
  } catch (error) {
    console.log(error);
  };
} 


// --------------  
// Throwback Comparison to fetch API:
// the fetch() call is identical , with two arguments: url & request options
// fetch() is chained with .then() method instead of being within a try...catch block



fetch('https://api-to-call.com/endpoint', { 
  method: 'POST', 
  body: JSON.stringify({id: '200'}) 
}).then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Request failed!'); 
}, networkError => {console.log(networkError.message);
}).then(jsonResponse => {
  return jsonResponse;
})



// --------------  
// Throwback Comparison to xhr object: 



const xhr = new XMLHttpRequest;
const url = 'https://api-to-call.com/endpoint';
const data = JSON.stringify({id: '200'}); // the diff between xhr GET & POST is inclusion of data
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
 if (xhr.readyState === XMLHttpRequest.DONE) {
   return xhr.response;
 }
};
xhr.open('POST',url);
xhr.send(data); // the diff between xhr GET & POST is inclusion of data



// --------------  



// Codecademy Exercise 2 : An async POST request to access Datamuse API

// information to reach API
const apiKey = '8b5f6c3b9b05408d801908faf6620139';
const url = 'https://api.rebrandly.com/v1/links';

// AJAX functions
const shortenUrl = async () => {
  const urlToShorten = inputField.value;                      // captures input as a variable
  const data = JSON.stringify({destination: urlToShorten});  // captures data in JSON format
  try {
const response = await fetch( url, {      // sends request
  method: 'POST',                        // equest options
  body: data,
  headers: {
'Content-type': 'application/json',
'apikey': apiKey
}
})
if (response.ok) {                                 // handles response
  const jsonResponse = await response.json();     // parses in JSON 
  renderResponse(jsonResponse);                  // formats response
}
  } catch(error) {
    console.log(error)
  };
}  

// -------------- 

/**  << REQUESTS REVIEW II >>
 * 
 * GET & POST requests can be created in many ways ( xhr{}, fetch(), async/await )
 * Use AJAX to asynchronously request data from APIs. 
 * fetch() & async/await are new ES6 (promises) & ES8 functionalities. 
 * Promises = new type of JS object, represents data to be returned from a request 
 * fetch() = web API that can be used to create requests. 
 * fetch() returns promises...
 * async functions return promises...
 * so we can chain .then() methods to handle the return values of fetch() and async 
 * the .json() method coverts a returned promise to a JSON object
 * 
 * 
 * QUESTION: Which is better to make GET & POST requests? xhr / fetch / async?
 * 
 * Article:
 * https://gomakethings.com/why-i-still-use-xhr-instead-of-the-fetch-api/
 * https://gomakethings.com/how-to-use-the-fetch-api-with-vanilla-js/
 * 
 * fetch() SEEMED to require extensive scaffolding in Error handling: 
 * a fetch() Promise won't reject on HTTP error status (even if HTTP status is 404 or 500)
 * It only rejects on network failure or if anything prevents the request from completing
 * That is why we check if response.ok === true, THEN return data or throw an error accordingly 
 * But actually xhr object does this too...
 * 
 * SO WHAT DOES FETCH DO BETTER IN?  PROMISES  
 * Interdependant functions: where return value from one is required to process another
 * XHR calls would be nested several layers deep.  
 * The fetch API uses Promises which allows the chaining of .then() as many times as needed. 