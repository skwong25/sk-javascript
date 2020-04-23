//   01. MINI LINTER >>

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// STEP 2 
// Split the string into individual words and save them in a new array 'storyWords'. Log no. of words in the story. 
let storyWords = story.split(" ")
console.log(storyWords.length); // Output: 188

// ----------------

// STEP 3 
// Iterate over the array to filter out the words. Save remaining words in an array "betterWords"

/* let betterWords = storyWords.filter((word) => {
    if (word !== 'extremely' && word !== 'literally' && word !== 'actually') {
     return word; 
    } 
}) */

// Alternative way of writing the above using a 'for' statement with a seperate check against unnecessaryWords
// Allows flexibility for array to be modified and to check against other blacklist arrays. 

const isItThere = (word, array) => {
  for (i=0; i<3; i++) {
    if (word === array[i])
    return true;
    }
  } 
  
  let betterWords = storyWords.filter((word) => {
    if (isItThere(word, unnecessaryWords) !== true) {
      return word;
    }
  })

// CHECK using .includes()

const check = (array) => {
  for (j=0; j<unnecessaryWords.length; j++) {
return array.includes(unnecessaryWords[j])
 }
};

console.log(check(betterWords)) //Output: false (i.e no unnecessaryWords detected)


// ---------------- 

// STEP 4
// Log how many times the words in array 'overusedWords' are used

/* SOLUTION 4a using .filter() 
1) A 'for' statement loops through the overusedWords array
2) .filter() iterates through each word in the betterWords array 
3) If there is a match, then the word is passed to (collected in) a new array called 'TallyA'  
4) Finally, .length retrieves the total number of elements/words 'collected' in that array. */


let tallyA = betterWords.filter((word)=>{
  for (i = 0; i < overusedWords.length; i ++ ) {
    if (word === overusedWords[i]) {
      return word;
    }
  }
})
console.log(tallyA); // 'really', 'basically', 'really', 'very', 'very',   'very', 'very',   'very'
console.log(`Filter statement TallyA count: ${tallyA.length}`) // Output: Filter statement TallyA count: 8
// The advantage of .filter() is that is stores it in an array for trackibility. 

// ---------------- 

// OR SOLUTION 4b using reduce.() to keep a TALLY of times those words are used

let tallyB = betterWords.reduce((accumulator, word) => {
  for (i = 0; i < overusedWords.length; i++ ) {
  if (word === overusedWords[i]) {
    accumulator ++
   }
  } return accumulator;
}, 0)

console.log(`Reduce statement TallyB count: ${tallyB}`)
// Output: Reduce statement count: 8
// LESSON: Remember to return the accumulator (tally) total!

// ---------------- 

// OR SOLUTION 4c using a nested loop of for statements

let tallyC = 0;

  for (i = 0; i < betterWords.length; i++ ) {
    for (j = 0; j < overusedWords.length ; j++ ) {
    if (betterWords[i] === overusedWords[j]) {
      tallyC ++;
    }
  } 
  } 
  
  console.log(`Nested Loop TallyC count: ${tallyC}`)

// A nested loop needs declaration of a tally variable, whereas .reduce() had one built-in
// Also this would have to be saved as a function to prevent from calling it 
// However once saved as a function, it could compare different arrays easily. 

// ---------------- 

// OR SOLUTION 4D use .forEach() to loop through, with 'if...else' statement (or switch...case) for each word and add a count each time 

let tallyOv = 0;

let tallyD = betterWords.forEach((word) => {
  for (i = 0; i < overusedWords.length; i++ ) {
    if (word === overusedWords[i]) {
      console.log(tallyOv);
      tallyOv += 1;
    if (tallyOv % 2 === 0) {;
        betterWords.splice(betterWords.indexOf(word), 1, 'indubitably');
    }
    }
  } 
}); 

console.log(`forEach statement TallyD count: ${tallyOv}`)

// Note that the code runs without calling (as it's not a pre-defined function?)
// A .forEach statement still needs declaration of a tally variable outside the block, whereas .reduce() had one built-in
// Note that when I declare tally within the function body, the tally does not jump. 

// ---------------- 

// STEP 5
// Count how many sentences are in the paragraph

let tallySentence = betterWords.reduce((accumulator, word) => {
  let x = word.length-1;
  if (word[x] === '.' || '!') {
    accumulator ++
   } return accumulator;
}, 0)

// ----------------

// STEP 6
// Create a function that logs word count, sentence count, no. of times each overused word appears, with formatting. 

const logInfo = (a,b,c) => {
  console.log('Word count:'+ a.length);
  console.log('Sentence count:'+ b);
  console.log('Number of Overused words:'+ c)
}

logInfo(storyWords, tallySentence, tallyOv); 

// ----------------

// STEP 7
// Log the betterWords array as single string

console.log(betterWords.join(" ")); 

// ----------------

/* OTHER CHALLENGES:

Q: For the overused words, remove it every other time it appears. Replaced overused words with something else. 
A: Added following code to STEP 4 .reduce() statement whilst checking for overusedWords:
This removes the overusedWord every other time (when the tally count is even) and replaces it with 'undubitably' 

if (tallyOv % 2 === 0) {;
  betterWords.splice(betterWords.indexOf(word), 1, 'indubitably');







