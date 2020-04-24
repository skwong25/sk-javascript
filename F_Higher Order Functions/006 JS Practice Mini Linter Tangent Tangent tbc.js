
// Q: Write a function that finds the word that appears the greatest number of times.
/* A: Strategy! 
1. Declare an array variable 'unique' to store unique words 
2. Iterate through the betterWords array with a check to see if the word already exists in the 'unique' array
3. If it doesn't exist, then push to 'unique' using slice (NM!)
4. If it does exist, then introduce a count to that word
5. Finally, log the word with the highest count. */

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';
let betterWords = story.split(" ")

const runCode = (array) => {
array.reduce((tally, word) => {
  if (!tally[word]) {
    tally[word] = 1;
  } else {
    tally[word] = tally[word] + 1;
  }
  return tally;
}, []);
}

// The below iterates through the count and finds the value with the highest frequency, declare the corresponding 'unique' value as 'mostPopular'

const frequencyCompare = (tally) => {
  let mostPopular;
  let highestCount = 0; 
  for (j=0;j < tally.length; j++ ) {
    if (tally[j][1] > highestCount) {
    highestCount = tally[j][1];
    mostPopular = tally[j][0];
  } 
} console.log(`The most used word is '${mostPopular}' with a count of ${highestCount}`)
} 

const doAll = (array) => { 
let tally = [];
runCode(array);
frequencyCompare(tally);
}

doAll (betterWords);  
