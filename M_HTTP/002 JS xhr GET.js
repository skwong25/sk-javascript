/* << INTRO TO HTTP REQUESTS >>
4 most common types: GET POST PUT DELETE

GET >> retrieving info from a source
POST >> posting info to a source (that will process the info and return it)

-------------- 

// Mission 1. 
learn how to make GET and POST requests by using JS's XHR object
also incorporate query strings into requests
we will use: Datamuse API for GETs 
             Rebrandly URL Shortener API for POSTs (register account and obtain API key)

Note - JSON = JS Object Notation (data format)

-------------- 

// A lil more on HTTP Requests >> 

Why make a website asynchronous?
For Websites (eg newspaper websites) this provides better user experience. 
Typically, code written to prevent hold-up - text rendered, THEN image.
A user can browse the site (and click) without the entire page having to reload 

JS's greatest assets = being an ASYNCHRONOUS language (non-blocking) 
JS uses EVENT LOOP to handle asynchronous function calls.
When a program runs, function calls are made and added to stack. 
Functions that make requests (wait for server response) get sent to a seperate queue.
Once stack clears, then queued functions execute. 

Web devs create smoother browsing experience via event loop 
by deciding when to call functions and how to handle asynchronous events. 
Let's explore one system of technologies called Asynchronous JS & XML, or AJAX.

-------------- 

// XHR GET Requests I

Asynchronous JS & XML (AJAX) enables requests to be made after the initial page load. 
Initially AJAX was used only for XML formatted data, now with many diff formats. 

Similarly the XMLHttpRequest (XHR) API, named for XML -
can be used to make many kinds of requests and supports other forms of data. 

* Note - boilerplate is code included in many places with little/no alteration

https://s3.amazonaws.com/codecademy-content/courses/intermediate-javascript-requests/diagrams/XHR+GET+diagram.svg
BOILERPLATE CODE for an AJAX GET request using an XMLHttpRequest object: */

const xhr = new XMLHttpRequest(); // common practice is name object 'xhr'
const url = "https://api-to-call.com/endpoint"; // remember to save url as a 'string'

xhr.responseType = 'json'; // response to be formatted in JS Object Notation
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
// this conditional statement checks to see if the request has finished 
return xhr.response;
} 
}

xhr.open( 'GET', url);
// .open() creates a new request, arguments passed in determine request type and URL
xhr.send() 

// -------------- 

/* XHR GET Requests II-IV

Codecademy Exercise 1 : 

We will create requests to set a topic, find adjectives describing an input word using query strings

A query string (QS) contains add. info to be sent with a request
The Datamuse API les us retrieve specific data with query strings attached to the request URL - 
            - A query string is separated from the URL using '?'
            - After '?', we can then create a parameter (a key value pair joined by a =) E.g */

            'https://api.datamuse.com/words?key=value'

            // To add more, use '&' to seperate parameters. E.g: 

            'https://api.datamuse.com/words?key=value&anotherKey=anotherValue'

// A QS is part of the full query (/URL) to send info using parameters as key-value pairs
// A QS typically follows '?' in the URL
// The key-value pair parameters are sent in the form key=value, each pair seperated by '&'
// In the below exercise, the first parameter of our QS is 'rel_jjb'
// the value of this parameter will be set to the text input

// -------------- 

// The below code creates a request, which accepts the input of a word and topic 
//  once submitted, it returns a response of adjectives related to a topic

// main.js >> 

// Information to reach API
const url = 'https://api.datamuse.com/words?'; // url directs the request
const queryParams = 'rel_jjb='; // this will search for words that describe another word
const additionalParams = '&topics='; // created add. param to retrieve more specific results
// '&' seperates parameters (in a url). '=' will join 'topics' to a value. 

// Selecting page elements
const inputField = document.querySelector('#input');
const topicField = document.querySelector('#topic'); // input field
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value; // grabs the value in input field and assigns to variable 
  const topicQuery = topicField.value; 
  const endpoint = `${url}${queryParams}${wordQuery}${additionalParams}${topicQuery}`;
// we updated concatenated string to incl. additionalParams and topicQuery
// endpoint stores the value of the entire URL and query string: 
// 'https://api.datamuse.com/words?rel_jjb=WORD&topics=TOPIC'

  const xhr = new XMLHttpRequest(); // creates a new XMLHttpRequest object 
  xhr.responseType = 'json'; // when the data is sent back, it will be in json format 

  xhr.onreadystatechange = () => { // contains event handler, equal to anonymous arrow function
    if (xhr.readyState === XMLHttpRequest.DONE) { // to be called when xhr's state changes
      renderResponse(xhr.response); // code to execute with response
    }
  }
  
  xhr.open('GET', endpoint); // method call will create request with 'GET' type and url destination
  xhr.send(); // method sends request to the server
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){ // 'while' loop
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);


// -------------- 


// helperfunction.js >> 

// Formats response to look presentable on webpage
const renderResponse = (res) => { // the method call takes 'xhr.response' as argument 
    // handles if res is falsey
    if(!res){
      console.log(res.status)
    }
    // in case res comes back as a blank array
    if(!res.length){
      responseField.innerHTML = "<p>Try again!</p><p>There were no suggestions found!</p>"
      return
    }
  
    // creating an array to contain the HTML strings
    let wordList = []
    // looping through the response and maxxing out at 10
    for(let i = 0; i < Math.min(res.length, 10); i++){
      // creating a list of words
      wordList.push(`<li>${res[i].word}</li>`)
    }
    // joins the array of HTML strings into one string
    wordList = wordList.join("")
  
    // manipulates responseField to render the modified response
    responseField.innerHTML = `<p>You might be interested in:</p><ol>${wordList}</ol>`
    return
  }
  
  // Renders response before it is modified
  const renderRawResponse = (res) => {
    // taking the first 10 words from res
    let trimmedResponse = res.slice(0, 10)
    //manipulates responseField to render the unformatted response
    responseField.innerHTML = `<text>${JSON.stringify(trimmedResponse)}</text>`
  }
  
  // Renders the JSON that was returned when the Promise from fetch resolves.
  const renderJsonResponse = (res) => {
    // creating an empty object to store the JSON in key-value pairs
    let rawJson = {}
    for(let key in response){
      rawJson[key] = response[key]
    }
    // converting JSON into a string and adding line breaks to make it easier to read
    rawJson = JSON.stringify(rawJson).replace(/,/g, ", \n")
    // manipulates responseField to show the returned JSON.
    responseField.innerHTML = `<pre>${rawJson}</pre>`
  }


// -------------- 
