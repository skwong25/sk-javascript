/* << XHR POST REQUESTS >>

GET >> retrieving info from a source
POST >> posting info to a source (that will process the info and return it)

We will make a POST request using our Rebrandly API:
https://app.rebrandly.com/account/api-keys
(why do we need to register for an API
        - security
        - storage of data (Rebrandly stores your shortened URL's))
        - servers suffer from API request load, accounts can impose limits on requests
Major diff between GET and POST > POST requires additional info within body of the request
Diagram:
https://s3.amazonaws.com/codecademy-content/courses/intermediate-javascript-requests/diagrams/XHR+POST+diagram.svg

--------------  */

// Codecademy Exercise 1 : 

const xhr = new XMLHttpRequest;
// The XMLHttpRequest JS object is used to interact with servers.
const url = 'https://api-to-call.com/endpoint';
const data = JSON.stringify({id: '200'});
// JSON.stringify() converts value to a JSON string so we can send data to a server 
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
 if (xhr.readyState === XMLHttpRequest.DONE) {
   return xhr.response;
 }
};
xhr.open('POST',url);
xhr.send(data);
// Note that we passed an argument in the .send() method call, not required in the 'GET' request 

// --------------  

// XHR POST Requests I

// We will be making a POST request to the Rebrandly API to shorten  URL

// Information to reach API
const apiKey = '8b5f6c3b9b05408d801908faf6620139';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  // urlToShorten will save the input value
  const data = JSON.stringify({destination: urlToShorten});
  // the API expects to see an object with a key 'destination' that has the value of the URL
  const xhr = new XMLHttpRequest;
  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
  renderResponse(xhr.response);
    }
  }

xhr.open('POST', url);
// to access the Rebrandly API, we need a header with two key-value pairs. 
// In the header, you must include values for 'Content-type' and an 'apikey'. 

xhr.setRequestHeader('Content-type', 'application/json');
xhr.setRequestHeader('apikey', apiKey);
xhr.send(data);
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

// Pasted the URL into the field:
// https://medium.com/@codecademy/breaking-the-coding-language-barrier-bf24652c3c60

// Output: Your shortened url is: rebrand.ly/3iyw56j 

// QUESTION: How does a URL shortening service work?
// A unique shorter URL is mapped to a longer URL, leads to same destination as the longer URL
// The info typically stored in a table / hash map in key-value pairs
// where keys are the shortened URLs and values are the longer URLs

// --------------  

/** XHR POST Requests REVIEW
 * 
 * JS is the language of the web because of its asynchronous capabilities
 * AJAX (Asynchronous JavaScript & XML) is a set of tools to take advan of JS' asynchronous abilities
 * HTTP request methods: GET, POST etc
 * GET requests information only from other sources
 * POST introduces new info to other sources, in addition to requesting it
 * Both can be written using a XMLHttpRequest (XHR) object and 'vanilla' JavaScript requires: 
 *        - constructing the XHR object using 'new', setting 'responseType'
 *        - creating a function to handle the response 
 *        - opening and sending the request
 * 
 * To add a QUERY STRING to a URL endpoint, use ? and include a parameter 
 * To provide additional parameters, use & nd then include a key-value pair, joined by =  Eg:
 * ${url}${queryParams}${wordQuery}${additionalParams}${topicQuery}
 * 'https://api.datamuse.com/words?rel_jjb=WORD&topics=TOPIC'
 * the URL expects a query string: https://api.datamuse.com/words?
 * Parameter is a key-value pair. Key : 'rel_jjb=' Value: ${wordQuery}
 * Additional Parameter: '&topics=' 
 * 
 * Determining how to correctly write the requests and how to properly implement 
 * requires carefully reading the documentation of the API you're working with. 






