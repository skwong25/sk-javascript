/** << FETCH() POST REQUESTS I - II >>
 * 
 * 
 * Diagram: https://s3.amazonaws.com/codecademy-content/courses/intermediate-javascript-requests/diagrams/fetch+POST+diagram.svg
 * Difference between fetch() POST and fetch() GET requests:
 * 
 * The initial call takes TWO arguments: 
        *  an endpoint
        *  an object that contains info needed for the POST request: 
               - method: 'POST',
               - body: JSON.stringify({id:'200'}) 

* Reconstruct the boilerplate POST request code step-by-step: */

fetch('https://api-to-call.com/endpoint', { 
  method: 'POST', // determines what the request is
  body: JSON.stringify({id: '200'}) // what info is sent to the API
}).then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Request failed!'); // if we get back some status error
}, networkError => {console.log(networkError.message);
}).then(jsonResponse => {
  return jsonResponse;
})

/**
 * Call a fetch() function, pass it URL string as first argument (endpoint)
 * Pass a settings object as second argument wih two properties: method and body
 * Chain .then() to the fetch() and pass it a success callback function as first parameter
 * Success handler checks the ok property of the response object inside of a conditional statement
 * If evaluates truthy, it returns response.json(): 
 *       - Note! json() method of the Body mixin takes a Response stream and reads it to completion. 
 *       - It returns a promise that resolves with the result of parsing the body text as JSON 
 * Below the conditional statement, create a new error to be raised if a status error returns. 
 * Creates a failure callback function to log network error message.
 * Chains another .then() with an arrow callback function to return jsonResponse. 
 * The purpose is to view the JSON returned from the previous .then()
 */
   

  // --------------  


/** << FETCH() POST REQUESTS III >>
 * We will use the boilerplate code above to shorten a URL using Rebrandly URL Shortener API */

 // Information to reach API
const apiKey = '8b5f6c3b9b05408d801908faf6620139';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// functions
const shortenUrl = () => {
  const urlToShorten = inputField.value // captures the url 
  const data = JSON.stringify({destination: urlToShorten})
  fetch(url, { // Rem the request returns a Promise either resolved or rejected 
    method: 'POST',
    headers: { // Additional headers within the settings object are required to dictate format
  'Content-type': 'application/json',
  'apikey': apiKey 
    },
    body: data
  }).then(()=> {response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message); // failure handler safeguards rare event of network error
    } 
  }).then(jsonResponse=>{
    renderResponse(jsonResponse);
  })
}

// Clear page and call functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);
 

// --------------  


/** << FETCH() REQUESTS REVIEW >> we can:
 * 
 * use fetch() to make GET & POST requests
 * check the status of the responses coming back
 * catch errors that might arise
 * take successful responses and render it on the webpage
 * 
 * This is the basis of how the internet works! 
 * 


 






