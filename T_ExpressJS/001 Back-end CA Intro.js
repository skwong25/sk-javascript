// << Back-End intro >>

// Front-end consists of info sent from a web server, to a client (eg web browser) so users can see and interact with website

// Web server is a process running on a computer that listens for incoming requests for info and returns responses
// Each time a user navigates to a website, the browser makes a (HTTP) request to the web server of that site

// The format of the request is called protocol. 
// The protocol to access websites is HTTP.

// Storing, accessing, and manipulating data is a large part of a web application’s back-end
// For simple websites, user makes a single request and receives response to view that website  
// once received, files don't move or change >> a static website. (eg profile page )
// However Twitter which needs to provide access to new content as it's created is NOT a static website = more complex backend. 

// Modern web apps cater to specific user rather than send same files to every visitor - this is known as dynamic content. 
// The application server = Collection of programming logic to deliver dynamic content to a user + manage security + process payments

//  --------------

// STORING DATA 
// back-ends of modern databases include database/s : relational databases and non-relational databases (NoSQL databases)
// Relational databases store info in tables of columns/rows (Popular relational databases: MySQL, PostgreSQL)
// Non-relational might use other systems eg key-value pairs or document storage model (Popular NoSQL: MongoDB, Redis)
// Eg SQL (Structured Query Lanaguage) is a programming language for accessing / changing data stored in relational databases. 
// Back-end also needs a way to programmatically access, change, analyse the data stored there. 

//  --------------

// API
// Much of what back-end entails is reading, updating, deleting info stored in a database. 
// To ensure a consistent way of interacting with data, a backend often has a web API (Application Program Interface)
// API is a collection of predefined ways/rules for interacting with a web app's data, often through HTTP request-response cycle.
// (to create new data, read existing data, update existing data, delete existing data)

//  --------------

// Authorisation and Authentication
// are two other concepts server-side logic handles
// Authentication - validating identity of user (logins/passwords/)
// Authorisation - controls access to resources and actions

//  --------------

// STACK TECHNOLOGIES
// Front-end must be built using HTML, CSS & JS but back-end has more flexibility (PHP, JS, Python, Java)
// Most developers use frameworks - a collection of tools that shape the organisation of your backend and provide efficient ways of accomplishing diff tasks
// Back-end frameworks: Laravel >> PHP, Express.js >> JS (runs in Node environmt), Ruby on Rails >> Ruby,  Spring /JSF >> Java
// The collection of technologies used to create front-end & back-end of a web app is called the stack
// Full-stack developer works in both
// Eg MEAN stack is a technology stack for building web apps that use MongoDB (database), Express.js (back-end), AngularJS (front-end), Node.js (back-end)
// Eg the 'archetypal' LAMP stack: Linux, Apache, MySQL, PHP