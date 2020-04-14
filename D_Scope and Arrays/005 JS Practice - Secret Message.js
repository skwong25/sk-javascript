let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// STEP 1 & 2
// remove last string of array and check the length to see if it has worked 
console.log (secretMessage.length) // 24
secretMessage.pop(); 
console.log (secretMessage.length) // 23

// STEP 3 
// Add the words 'to' and 'Program' to the end of the array
secretMessage.push('to', 'Program');
console.log (secretMessage.length); // 25

// STEP 4
// Change the word 'easily' to 'right'
secretMessage[7] = 'right'; 

// STEP 5 
// Remove first string of the array
secretMessage.shift()
console.log (secretMessage.length); // 24

// STEP 6
// Add string 'Programming' to beginning
secretMessage.unshift('Programming')
console.log (secretMessage.length); // 25

// STEP 7 
// Replace 'get', 'right', 'the', 'first', 'time' with 'know'
secretMessage.splice(6, 5, 'know')

// STEP 8 
// Print the secret message as a sentence
console.log(secretMessage.join(" "))
// Prints: Programming is not about what you know it is about what you can figure out. 
// -2015, Chris Pine, Learn to Program

// LESSONS: 
// .join() creates and return a new string concatenating all of the elements in an array
// To specify no seperators, set parameter as an empty string " "

