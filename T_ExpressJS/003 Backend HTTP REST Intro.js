// --------------------
// << what is Back-End? >>
// --------------------

// front-end:
// code executed on the client's side (anything that sends requests to back-end eg browser, mobile application)
// typically HTML, JS, CSS runs in a client's browser and creates user interface

// back-end:
// is the code that runs on the server - all the technology required to process incoming requests, generate and return response:
//  - server (the computer that receives requests)
//  - app
//      - the application running on the server that listens for requests, 
//      - retrieve info from database, 
//      - sends response
//  - database (used to organise / persist data)

// HTTP & REST - main conventions to provide a structure to the requst-response cycle between clients and servers

// Core Functions of an App: 
// -------------------------
// The server runs an app that contains logic about how to respond to various requests based on the HTTP verb and the Uniform Resource Identifier (URI)
// The pair of an HTTP verb and a URI is called a route and matching them based on a request is called routing 
// Some of these handler functions are middleware
// Middleware is any code that executes between the server receiving a request and sending a response.
// Middleware functions might modify the request object, query the database, or process the incoming request. 
// Middleware functions typically end by passing control to the next middleware function, rather than sending a response. 

// Eventually a middleware function will be called that ends the request-response cycle by sending a HTTP response back to the client 
// Each route can have handler function/s that are executed whenever a request to that route (HTTP verb & URI) is matched


// What kind of responses can a server send?: 
// ----------------------------------------
// Eg: HTML file, JSON data, status code


// Why do we need databases?
// ------------------------
// Databases provide an interface to save data - reducing load on the main memory of the sever CPU
// Many requests sent to server might require a database query - request info or submit data. 


// What is a Web API?
// ------------------------
// An API is a collection of clearly defined methods of communication between diff software components  
// A web API is the interface created by the back-end: 
// the collection of endpoints and the resources those endpoints expose
// A Web API is defined by the types of requests it can handle
// determined by the routes it defines, and types of responses clients can expect to receive after hitting those routes
// One Web API can be used to provide data for different front-ends - multiple diff HTML pages or apps

// Other principes of the Request-Response Cycle 
// ----------------------------------------------
// No response without a request (duh!)
// Every request needs a response - otherwise client is left 'hanging' (indef waiting)
// Server sends no more than one response per request - otherwise throws errors.


// Mapping Out a Request 
// ---------------------
// 1. Alice clicks on a picture of a phone on Shop.com. 
// The click event makes a GET request to: http://www.SuperCoolShop.com/products/66432.
// The URI '/products/66432' specifies that the client wants more info about the product with ID 66432
// 
// 2. Alice's request travels across internet to Shop.com's server
// Slow step in process as cannot go faster than speed of light and may be a distance
// So websites may have multiple servers and direct users to the closest

// 3. Server which is actively listening for requests, receives Alice's request. 

// 4. Event listeners that match this request (GET and URI) are triggered. 
// The code that runs on server between request and response is the middleware. 

// 5. In processing the request, the server code makes a database query to get more info
// The database contains contains all product info: name, price, reviews, string that provides a path to image

// 6. Database query is executed, database sends requested data back to server
// Database queries are a slow step. Reading and writing from static memory is slow. 
// Database might be on a diff machine and query may have to go across the internet. 

// 7. Server receives the data it needs from the database, 
// it is now ready to construct and send its response back to client
// The response body has all the info the browser needs to display.
// The response header will contain HTTP status code 200 to indicate the request has succeeded. 

// 8. The response travels across internet, back to Alice's computer. 

// 9. Browser receives response and uses info to create & render the view that Alice ultimately sees. 

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

// --------------------
// << what is HTTP? >>
// --------------------
// Understanding how your web browser communicates with the internet

// The internet is made up of resources hosted on diff servers. 
// Resource can be any entity on the web: HTML files, stylesheets, images, videos, scripts
// Browsers asks servers for the resources it wants and displays them to you
// HTTP is a fundamental part of request-response protocol

// HTTP: HyperText Transfer Protocol
// is used to structure requests and responses over the internet
// HTTP involves the transfer of data from one point to another over the network

// The transfer of resources happens via TCP (Transmission Control Protocol)
// TCP manages the channel between your browser and the server
// HTTP is the command language both devices must follow to communicate

// HTTP & TCP: How it Works
// ---------------------
// Alice types an address into browser: www.shop.com
// She is commanding the browser to open up a TCP connection to the server that responds to that URL (Uniform Resource Locator)
// The computer, making request, is the client

// Once TCP connection established, 
// client sends a HTTP GET request to the server to retrieve the webpage it should display. 
// After the server has sent the response, it closes the TCP connection. 

// If you open the website in browser again, or if browser requests something further from the server
// a new TCP connection is opened
// A client can call HTTP requests: GET, POST, PUT, DELETE

// Example: You want to check out latest on http://codeacademy.com
// http tells the browser to use http as network protocol
// the browser takes the domain name from the URL (Uniform Resource Locator)
// and asks the internet Domain Name Server (DNS server) to return an IP address (Internet Protocol)
// (The DNS Domain Name System is a telephone book for the internet)

// Now the client knows the IP address, it opens a TCP connection to the server at that address using the http protocol
// It initiates a GET request to the server containing the host IP address and optionally data payload
// The GET request contains following text:

GET / HTTP/1.1               // type of request and protocol HTTP/1.1
Host: www.codecademy.com    // server address

// If server locates the path, might respond with header:

HTTP/1.1 200 OK             // confirms server understands HTTP/1.1 protocol, status code signifies resource found 
Content-Type: text/html    // type of content being sent to client
// This is followed by content requested

// If not able to locate path:
HTTP/1.1 404 NOT FOUND
// 404 error signifies resource not found
https://www.codecademy.com/articles/http-errors-404

// What is HTTPS?
// ---------------------
// HTTP Secure allows encryption of data sent and received
// when passing sensitive / personal info to and from websites
// Up to businesses maintaining servers to set it up, requires certification. 

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

// --------------------
// << what is REST? >>
// --------------------

// Representational State Transfer 
// is an architectural style for providing standards between computer systems to communicate
// REST-compliant systems (REST-ful systems) are characterised by 
// 1) how they are stateless & 2) how they seperate concerns of client and server


// Seperation of Client & Server?
// -------------------------------
// In REST architectural style, implementation of client and server is independant from one another
// Separating user interface concerns from database storage concerns...
// improves flexibility of the interface across platforms
// improves scalability by simplifying server components
// allows each component to evolve independently

// By using a REST interface, different clients 
// hit the same REST endpoints, performs the same actions, get the same results


// Statelessness
// -------------
// Systems following the REST paradigm are stateless
// meaning the server does not need to know what state the client is in and vice versa 
// (I thought it meant that the system does not keep state)
// Thus server and client can understand any message received without seeing prev. messages.
// The constraint of stateless is enforced via use of 'resources' rather than 'commands'
// (Resources are nouns of the web - any obj, doc, thing tobe stored or sent)

// As REST systems interact through standard operations on resources 
// they do not rely on the implementation of interfaces

// Such constraints help RESTful applications achieve:
// reliability, quick performance, scalability, 
// as components can be managed, updated and reused without affecting the whole system

// Communication between Client & Server (when implementing a RESTful interface)
// --------------------------------------
// In the REST architecture...
// clients sent requests or modify resources, servers send responds to requests 
// 

// MAKING REQUESTS
// REST requires that a client makes a request to a server to retrieve/modify data on server
// A request consists of:
// HTTP verb (defines what kind of operation to perform),
// a header ( allows client to pass along info abt the request)
// a path to the resource (E.g: url + query string)
// optional message body containing data


// HTTP VERBS
// 4 basic verbs we use in request to interact with resources in a REST system:
// GET (retrieve collection or specific resource (by id) )
// POST (create new resource)
// PUT (update specific resource (by id))
// DELETE (remove specific resource (by id))

// Learn more here: https://www.codecademy.com/articles/what-is-crud


// HEADERS AND ACCEPTS PARAMETERS
// In the header of a request, client specifies type of content it can receive from the server
// This is called the 'Accept' field
// ensures server does not send data that can't be understood/processed by client
// Options for type of content are MIME Types:
https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types

// MIME Types, used to specify type content in the Accept field 
// consist of a type and a subtype, seperated by a slash (/). 
// Eg a text file containing HTML specified with text/html
// Eg a text file containing CSS specified with text/css
// Eg a generic text file would be text/plain (but this is not a catch-all, eg if expecting css)

// Other types and subtypes:
// image - image/png, image/jpeg, image/gif
// audio - audio/wav, audio/mpeg
// video - video/mp4, video/ogg
// application - application/json, application/pdf, application/xml, application/octet-stream

// Eg GET req for client accessing resource id 23 in an 'articles' resources on a server:
// GET / articles/23
// Accept: text/html, application/xhtml
// The Accept header field is saying the client will accept content in text/html OR app/xhtml format


// PATHS
// Requests must contain a path to a resource that the operation should be performed on
// In RESTful APIs, paths should be designed to help client know whats going on 
// (simple, easy to read & understand, heirarchical and descriptive)
// Conventionally, first part of path is the plural form of the resource.
// Eg: fashionboutique.com/customers/223/orders/12 

// Paths should contain the info necessary to locate a resource with the degree of specifity needed
// Eg: When referring to a list/collection of resources, it is unnecessary to add an id to POST request
// to the path 'fashionboutique.com/customers'
// as the server generates a new id for the new object. The additional identifier is not required. 

// To access a single resource, append an id to the path: 
// Eg: GET fashionboutique.com/customers/:id
// Eg:  DELETE fashionboutique.com/customers/:id

// SENDING RESPONSES
// ------- Content Types -------
// In cases where the server is sending a data payload to the client 
// the server must include a MIME Type 'content-type' in the header of the responses
// This 'content-type' header alerts client to the type of data in the response body 
// The 'content-type' the servers sends back in the response should be one of those options
// that the client specified in the Accept field in the header of the request 

// GET request to access resource id 23 in the 'articles' resource:
GET /articles/23 HTTP/1.1
Accept: text/html, application/xhtml

// The server might send back content with the response header:
HTTP/1.1 200 (OK)
Content-Type: text/html

// This signifies the content requested is being returned in the response body
// with a content-type of 'text/html' which the client has said its able to accept.

// ------- Response Codes -------
// Server responses contain status codes to alert the client about the success of the operation:
// 
// 200 (OK) - standard response for successful HTTP requests
// 201 (CREATED) - successful HTTP request resulting in item being created
// 204 (NO CONTENT) - successful HTTP request where nothing is returned in response body
// 400 (BAD REQUEST) - request cannot be processed due to bad request syntax, excessive size, client error
// 403 (FORBIDDEN) - client does not have permission to access this resource 
// 404 (NOT FOUND) - resource could not be found at the time. May be deleted or not exist yet.
// 500 (INTERNAL SERVER ERROR) - generic answer for unexpected failure if no specific info available.

// Each HTTP verb should be returned these expected status codes upon success:
// GET - 200 (OK)
// POST - 201 (CREATED)
// PUT - 200 (OK)
// DELETE - 204 (NO CONTENT)

// ------- Egs of Requests & Responses -------
// We have a clothing store app that allows you to view/create/edit/delete customers & orders
// We could create an HTTP API that allows a client to perform these functions:

// >> To view all customers, the request would look like this:
// GET http://fashionboutique.com/customers
// Accept: application/json

// The response header:
// Status Code: 200 (OK)
// Content-type: application/json
// followed by the customer's data requested in the application/json format

// >> To create a new customer by posting data:
// POST http://fashionboutique.com/customers
// Body:
    {
        "customer": {
            "name" = "Scylla Buss"
            "email" = "scylla.buss@email.org"
        }
    }

// Server then generates an id for that object and returns header:
// Status Code: 201 (CREATED)
// Content-type: application/json

// >> To view a single customer, we GET it vby specifying customer id:
// GET http://fashionboutqiue.com/customers/123
// Accept: application/json

// Response header: 
// Status Code: 200 (OK)
// Content-Type: application/json
// followed by the data for customer resource with id 123 in application/json format

// >> Update the customer by PUT-ting new data (same for delete):
// DELETE http://fashionboutique.com/customers/123 or
// PUT http://fashionboutique.com/customers/123
// Body:
    {
        "customer": {
            "name" = "Scylla Buss"
            "email" = "scylla.buss@email.org"
        }
    }

// Practice with REST 
// --------------------------------------

// Imagine we are building a photo-collection site to make an API
// to keep track of users, venues and photos of those venues
// The site has an index.html and a style.css
// Each user has name and password
// Each photo has a venue and an owner (i.e the user who took the photo)
// Each venue has a name and street address
// Design a REST system that would accomodate:
//  - storing users, photos, venues
//  - accessing venues, accessing photos of a certain venue

// What kind of requests would we like to make?
// What responses would the server return?
// What the content-type of each response should be?

{
    "user": {
        "id" = 123
        "name" = "Cilla Black"
        "password" = "passw0rd"
    }
}

{
    "photo": {
        "id": 001
        "venue_id": 10
        "autho_id": 123
    }
}

{
    "venue": {
        "id": 10
        "name": "Hole in the Wall"
        "address": "3, overlinks road"
        
    }
}

// GET REQUESTS

Request- GET /index.html Accept: text/html Response- 200 (OK) Content-type: text/html

Request- GET /style.css Accept: text/css Response- 200 (OK) Content-type: text/css

Request- GET /venues Accept:application/json Response- 200 (OK) Content-type: application/json

Request- GET /venues/:id Accept: application/json Response- 200 (OK) Content-type: application/json

Request- GET /venues/:id/photos/:id Accept: application/json Response- 200 (OK) Content-type: image/png


// POST REQUESTS

Request- POST /users    Response- 201 (CREATED) Content-type: application/json

Request- GET /venues  Response- 201 (CREATED) Content-type: application/json

Request- GET /venues/:id/photos    Response- 201 (CREATED) Content-type: application/json

// PUT REQUESTS

Request- POST /users/:id    Response- 20O (OK) 

Request- GET /venues/:id  Response- 200 (OK) 

Request- GET /venues/:id/photos/:id    Response- 200 (OK) 

// DELETE REQUESTS


Request- POST /users/:id    Response- 204 (NO CONTENT) 

Request- GET /venues/:id  Response- 204 (NO CONTENT) 

Request- GET /venues/:id/photos/:id    Response- 204 (NO CONTENT) 



