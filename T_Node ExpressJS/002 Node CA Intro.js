// << Node.jsintro >>
https://nodejs.org/api/

// Node.js is a JS runtime (environmt that allows us to execute JS outside of the browser)
// For a long time, JS could only be executed on the browser - remaining front-end only lang. 
// A 'runtime' converts code written in a high level, human-readable programming language and compiles it down to code the computer can execute.

// Node can build web servers and web apps, but also command-line apps and desktop apps. 
// The goal is to get comfortable with running JS in the Node environmt and familiarise oneself with Node features
// Node can be combined with Express.js framework to create effective web application back-ends. 
// (note that I already use npm which is Node package manager - how does that relate?)

// check version of node installed:
node -v

// check path to where node saved:
which node 

//  -----------------------------------

// NODE REPL
// REPL is abbreviation for read-eval-print-loop. It's a program that loops through 3 states, then loops again: 
// 1. read state - program reads user input
// 2. eval state - program evaluates user's input
// 3. print state - program prints out its evaluation to console

// Node.js installation comes with in-built JS REPL. 
// Access REPL by typing command 'node' and hit 'enter'. '>' indicates the REPL is running. 
// By default, you indicate your input it ready for evaluation when you hit 'enter'. 
// To have multiple lines evaluated at once, type '.editor' while in REPL, then 'CONTROL' 'D' for evaulation. 
// Each session of REPL has a single shared memory until you exit REPL. 

// REPL can be useful for performing calcs, learning a lang, and developing code
// because it gives you immediate feedback outside of a browser/website. 

// Every Node-specific global property sits inside the Node global object
// This object contains useful properties & methods available anywhere in the Node environmt. 

// Exercise: Experiment within Node REPL mode.
// Access the global object by: type 'global' or console.log(global) 
// alternatively, type 'Object.keys(global)' to just view list of properties


//  -----------------------------------
// RUNNING A PROGRAM WITH NODE
//  -----------------------------------

// Node provides the ability to run JS programs on our own computers instead of just in browser's console or embedded in HTML

// We will learn how to run a program on Node: 
node programName.js 
> 
// in theory, although we did this in Terminal in REPL mode and it generated Uncaught SyntaxError: Unexpected identifier

//  -----------------------------------
// ACCESSING THE PROCESS OBJECT
//  -----------------------------------

// In computer science, a process is the instance of a computer program that is being executed
// Eg Activity Monitor or Task Manager shows info about various processess running right now

// process.env property is an object that stores & controls info on the environmt in which its currently running
// process.env object contains a PWD property that hold string with the directory that the current process is located in 
// it can be useful to have if/else logic dependant on current environmt - web app in dev phase might perform diff when live to users 
// we could store this info on the process.env object 
// one convention is to add a property to process.env with the key NODE_ENV and a value of either 'production' or 'development'

if (process.env.NODE_ENV === 'development'){
    console.log('Testing! Testing! Does everything work?');
  }

// process.memoryUsage() returns info on the CPU demands of the current process. Returns property like this: 

{ rss: 26247168,
    heapTotal: 5767168,  // here, heap refers to a block of computer memory 
    heapUsed: 3573032,
    external: 8772 }

process.memoryUsage().heapUsed // will return a number representing how many bytes of memory the current process is using 

// process.argv holds an array of command line values provided when the current process was initiated
// The 1st element in the array is the absolute path to the Node, which ran the process
// The 2nd element is the path to the file that's running. 
// The following elements will be any command line arguments provided when the process was initiated, seperated with spaces. 

node myProgram.js testing several features
console.log(process.argv[3]); // Prints 'several'

// More process properties:
https://nodejs.org/api/process.html

//  -----------------------------------
// CORE MODULES AND LOCAL MODULES
//  -----------------------------------

// Modularity is a software design technique where one program has distinct parts each providing a single piece of the overall functionality
// Separate 'modules' come together to build a cohesive whole
// Modularity allows scalable programs, separating program's concerns into manageable chunks
// Node has several core modules to perform common tasks, defined within Node.js's source and located in the lib / folder. 

// The require() function first checks if its a core module, if not, it moves to diff location to require it. 
/*  For core modules, require in with a string: */ let events = require('events');
// For non-core modules, require in with a path: 

// dog.js
module.exports = class Dog {

    constructor(name) {
      this.name = name;
    }
  
    praise() {
      return `Good dog, ${this.name}!`;
    }
  };

// app.js
let Dog = require('./dog.js'); // or './dog' as require() assumes file extension
const tadpole = new Dog('Tadpole');
console.log(tadpole.praise());

// See docs for more: https://nodejs.org/api/modules.html#modules_modules


//  -----------------------------------
// NODE PACKAGE MANAGER
//  -----------------------------------

// CA recommends Nodemon, which watches files in a project and restarts app anytime they change. 


//  -----------------------------------
// EVENT DRIVEN ARCHITECTURE
//  -----------------------------------

// Traditional imperative programming > write series of instructions for computer to execute in a pre-defined order
// Web applications > need to write logic to handle situations without knowing when they'll occur
// Event-driven principles > eg onClick event

// Node provides an EventEmitter class: 

// Require in the 'events' core module
let events = require('events');
// Create an instance of the EventEmitter class
let myEmitter = new events.EventEmitter();

// Each event emitter has an .on() method which assigns a listener callback function to a named event. 
.on() 
// first argument > name of the event as string
// second argument > the listener callback function

// Each event emitter instance also has .emit() method which announces a named event has occurred. 
.emit() 
// first argument > name of the event as string 
// second argument > the data that should be passed into the listener callback function 

let newUserListener = (data) => {
    console.log(`We have a new user: ${data}.`);
};

// Assign the newUserListener function as the listener callback for 'new user' events
myEmitter.on('new user', newUserListener)

// Emit a 'new user' event
myEmitter.emit('new user', 'Lily Pad')
// newUserListener will be invoked with 'Lily Pad'`

//  -----------------------------------
// ASYNCHRONOUS JS WITH NODE.JS
//  -----------------------------------

// Server-side dev involves time-consuming tasks such as reading files or querying a database
// Instead of halting execution of code to await operations, Node uses 'event loop'
// the event-loop enables asynchronous actions to be handled in a non-blocking way

// Node provides APIs for performing asynchronous tasks which expect callback functions as arguments
// These APIs trigger the subscription to and emitting of events to signal completion of the operation
// When operation completes, the callback fucntion is added to a queue of tasks 
// When the current stack of synchronous tasks finishes executing, the operations on the queue will be performed. 

// This means that if the synchronous tasks never end, operations waiting in the event-queue would never run. Eg:

let keepGoing = true;

let callback = () => {
  keepGoing = false;
};

setTimeout(callback, 1000); // Run callback after 1000ms

while(keepGoing === true) {
  console.log(`This is the song that never ends...`)
};

// this uses asynchronous Node setTimeout() API which asynchronously executes callback function after delay
// The while loop has no end condition and continues forever. 
// Even though the callback is added to the event queue after 1sec, it never has a chance to run. 
// The synchronous loop will always fill the stack!
// To avoid infinite loop, could replace while-loop with an asynchronous function eg Node setInterval() API

// Modern way of handling asynchronous tasks is through JS Promises (async...await) 
// Newer versions of Node provide collection of traditional Node asynchronous APIs formatted for promises instead of callbacks. 
// found on util.promisify

//  -----------------------------------
// USER INPUT / OUTPUT 
//  -----------------------------------

// console.log() prompts computer to output info to Terminal 
// In Node environmt, console.log() method is a 'thin wrapper' on the .stdout.write() method of the 'process' object
// stdout = standard output 

// In Node, we can also receive input from a user through the terminal using stdin.on() method on the 'process' object: 

process.stdin.on('data', (userInput) => { // process.stdin is an instance of EventEmitter so we can use .on()
  let input = userInput.toString()
  console.log(input)
});

// When user enters text into terminal and htis enter, a 'data' event fires and invokes the listener callback.
// The userInput we receive is an instance of the Node Buffer class, so we convert to string before printing. 
// In Node, Buffer objects are used to represent binary data in the form of a sequence of bytes

//  -----------------------------------
// ERRORS
//  -----------------------------------

// Node environmt has standard JS errors like: EvalError, SyntaxError, RangeError, ReferenceError, TypeError, URIError, 
// as well as JS Error class for creating new error instances 
// Within our code, we can generate errors and 'throw' them
// With synchronous code in Node, we can use error handling techniques such as try...catch statements. 

// Many asynchronous Node APIs use error-first callback functions: 
// callback functions which have an error as the first argument and the data as second argument
// If asynchronous task results in an error, it will be passed in as the 1st argument to the callback function
// If no error was thrown, the first argument is 'undefined' Eg:

const errorFirstCallback = (err, data)  => {
  if (err) {
    console.log(`There WAS an error: ${err}`);
  } else {
     // err was falsy
      console.log(`There was NO error. Event data: ${data}`);
  }
}

// Node uses error-first callbacks with many asynchronous APIs because
// traditional try...catch statemens won't work for errors through during asynchronous operations. 


//  -----------------------------------
// FILESYSTEM
//  -----------------------------------

// All data on a computer is organised/accessed through a file system 
// The Node fs core module is an API for interacting with the file system (modelled after POSIX standard)

// Each fs module method has a synchronous AND asynchronous version 
// Eg: .readFile() reads data from a provided file: 

const fs = require('fs');

let readDataCallback = (err, data) => { // error-first callback function
  if (err) {
    console.log(`Something went wrong: ${err}`);
  } else {
    console.log(`Provided file contained: ${data}`);
  }
};

fs.readFile('./file.txt', 'utf-8', readDataCallback);
// first argument - string path to file 
// second argument - string specifying file's character encoding (usually 'utf-8' for text files )
// third argument - callback function invoked when async tasks of reading file is complete
// Node passes the contents of file.txt into the provided callback as its second argument. 

//  -----------------------------------
// READABLE STREAMS
//  -----------------------------------

fs.createReadStream()
// Data is processed sequentially in a stream 
// (streaming data means you don't need enough RAM to process all at once, nor all data to begin processing)
// One of the simplest uses of streams is reading & writing to files line-by-line.
// To read files line-by-line, use .createInterface() method from the readline core module 
.createInterface() /* returns an EventEmitter set up to emit 'line' events */

const readline = require('readline'); // requires in readline core module 
const fs = require('fs');             // requires in fs core module (API for interacting with file system)

const myInterface = readline.createInterface({ // assigns myInterface to returned value from calling .createInterface  with an object containng designated 'input'
    input: fs.createReadStream('text.txt')    // return value of .createReadStream is a stream from the text.txt file
});                                          // createInterface returns an instance of the EventEmitter class

myInterface.on('line', (fileLine) => {        //.on assigns a listener callback function to execute when line events are emitted. A line event will be emitted after each line from the file is read. 
  console.log(`The line read: ${fileLine}`); // our listener callback logs to console 
});

//  -----------------------------------
// EXERCISE 1 - readable streams
//  -----------------------------------

// 1. Create a program that reads each item off of a shopping list (located in shoppingList.txt) and prints it to the console. 
// Create a myInterface variable. Assign myInterface the value returned from invoking readline.createInterface().
// Invoke readline.createInterface() with an object with a key of input and a value of fs.createReadStream(). 

// 2. Create a listener callback function to use in the next step. Name this function printData. 
// printData() should expect to receive some data and should log to console in the format: Item: [data], where [data] is the argument passed into the function. 
 
// 3. Remember that a 'line' event will be emitted after each line from the file is read. 
// Assign our printData() function to execute whenever a 'line' event is emitted by using myInterface‘s .on() method.

const readline = require('readline');
const fs = require('fs');

let myInterface = readline.createInterface( {
    input: fs.createReadStream("./shoppingList.txt")
})
// myInterface has value of an instance of EventEmitter 
// createInterface creates an instance of EventEmitter
// It is invoked with an object, with input property equal to return value of createReadStream() - which creates a stream from the txt file
// a 'line' event will be emitted after each line from file is read
// We can then use .on() or .emit() with myInterface 
// reminder: .emit() makes an announcement when an event has occurred
// .on() assigns a listener callback function to a named event 
// .emit passes data to the listener call function when the event occurs

let printData = (data) => {
    console.log(`Item: ${data}`)
}

myInterface.on('line', printData);

// Runs the program in terminal, output:

$ node app.js
Item: apples
Item: pears
Item: royal jelly
Item: bread
Item: milk
Item: tofu
Item: beans
Item: flan
Item: pork
Item: tamarind
$  


//  -----------------------------------
// WRITABLE STREAMS 
//  -----------------------------------

fs.createWriteStream()
// We can create a writeable stream to a file using fs.createWriteStream() method

const fs = require('fs')

const fileStream = fs.createWriteStream('output.txt'); // sets the output file 

fileStream.write('This is the first line!');  // then we write lines to the file
fileStream.write('This is the second line!'); // unlike a readable stream which ends when no more data to read
fileStream.end();                             // a writeable stream remains open indefinitely. 

// We can indicate the end of a writable stream with the .end() method

//  -----------------------------------
// EXERCISE 2 - readable and writable streams
//  -----------------------------------

// 1. Create a writeable stream. We want to write to file shoppingResults.txt.

// 2. Create a listener callback function called transformData. 
// transformData should expect to receive data and should write() to the writable stream in the format of
// 'They were out of: [line]\n'

// 3. Assign our transformData function to execute whenever a 'line' event is emitted on the myInterface stream.
// Run program in terminal

const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
  input: fs.createReadStream('shoppingList.txt')
});
// fs.createReadStream creates a stream of data
// readline.createInterface() returns an EventEmitter
// I believe it emits an event for each line  

const fileStream = fs.createWriteStream('shoppingResults.txt');
// sets the file to write the stream into

let transformData = (line) => {
  fileStream.write(`They were out of: ${line}\n`);
}

myInterface.on('line', transformData);

// Output (in shoppingResults.txt):
They were out of: apples
They were out of: pears
They were out of: royal jelly
They were out of: bread
They were out of: milk
They were out of: tofu
They were out of: beans
They were out of: flan
They were out of: pork
They were out of: tamarind


//  -----------------------------------
// CREATE AN HTTP SERVER
//  -----------------------------------

// Node was designed with back-end developmt needs as a top priority
// One of these needs is the ability to create web servers
// computer processess that listen for requests from clients and return reponses

// A Node core module designed to meet these needs is the http module 
// http module contains functions that simplify interacting with HTTP and streamline receiving and responding to requests

/* the */ http.createServer() /* method returns an instance of a */ http.server
http.server /* has */.listen() /* method which causes server to 'listen' for incoming connections */
/* when we run */ http.createServer /* we pass in a custom callback function (requestListener) */
// this callback is triggered once server is listening and receives a request

/* how */ requestListener /* callback function works: */
// the function expects 2 arguments: a request object and a response object
// each time a request to server is made, Node invokes the requestListener callback passing in the request and response objs of incoming request
// Request and Response objs come with a number of properties and methods of their own 
// Within the requestListener function, we can access info about the request via the request object passed in 
// the requestListener is responsible for setting the response head and body
// the requestListener must signal that the interaction is complete by calling the response.end() method

const http = require('http'); // requires in http core module 

let requestListener = (request, response) => { // 
  response.writeHead(200, {'Content-Type': 'text/plain' }); // status code 200 means no errors encountered
  response.write('Hello World!\n'); // header communicates file type is text
  response.end(); 
};

const server = http.createServer(requestListener); 
// http.createServer is invoked with a requestListener callback function
// similar to running .on() on an EventEmitter, the requestListener will execute whenever HTTP request is sent to the server on the correct port

server.listen(3000); // starts server with the port 3000 

// You could run the above code on your local machine, and access it by visiting http://localhost:3000/ from your browser. 
// “localhost” is used to refer to the same computer that’s running the current Node process. 

/** Review
 * 
 * Node.js is a JavaScript runtime, an environment that allows us to execute our JavaScript code by converting it into something a computer can understand.
 * REPLs are processes that read, evaluate, print, and repeat (loop), and Node.js comes with its own REPL we can access in our terminal with the node command.
 * We run JavaScript programs with Node in the terminal by typing node followed by the file name (if we’re in the same directory) or the absolute path of the file.
 * Code can be organized into separate files, modules, and combined through requiring them where needed using the require() function.
 * In addition to core modules, modules included within the environment to efficiently perform common tasks, we can also create our own modules using module.exports and the require() function.
 * We can access NPM, a registry of hundreds of thousands of packages of re-usable code from other developers, directly through our terminal.
 * Node has an event-driven architecture.
 * We can make our own instances of the EventEmitter class and we can subscribe to listen for named events with the .on() method and emit events with the .emit() method.
 * Node uses an event loop which enables asynchronous actions to be handled in a non-blocking way by adding callback functions to a queue of tasks to be executed when the callstack is empty.
 * In order to handle errors during asynchronous operations, provided callback functions are expected to have an error as their first parameter.
 * Node allows for both output, data/feedback to a user provided by a computer, and input data/feedback to the computer provided by the user.
 * The Node fs core module is an API for interacting with the file system.
 * Streams allow us to read or write data piece by piece instead of all at once.
 * The Node http core module allows for easy creation of web servers, computer processes that listen for requests from clients and return responses.
 * 
 */