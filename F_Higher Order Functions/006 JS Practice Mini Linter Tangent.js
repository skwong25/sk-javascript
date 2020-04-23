
// Q: Write a function that finds the word that appears the greatest number of times.
// A: Strategy! 
1. Declare an array variable 'unique' to store unique words 
2. Iterate through the betterWords array with a check to see if the word already exists in the 'unique' array
3. If it doesn't exist, then push to 'unique' using slice (NM!)
4. If it does exist, then introduce a count to that word
5. Finally, log the word with the highest count. */

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';
let betterWords = story.split(" ")

// The below obtains all the unique values from initial array, stored in 'unique' array

const obtainUnique = (array) => {

  array.filter((word) => {
  let indexA = array.indexOf(word);
  let slice = array.slice(indexA,indexA+1); 
  if (unique.includes(word) === false) {
    unique.push(slice[0]);
    } 
  })
  console.log("No. of unique words: " + unique.length);
  return unique;
}

// The below creates a 2D array with the values from unique, to allow a count for each unique value 

const create2D = () => {
  uniqueCount = unique.map((word)=> {
    return [word,0]
}) 
console.log('Count is:' + uniqueCount.length);
return uniqueCount;
} 

// The below iterates through testArray again, counts ++ everytime it's corresponding value appears. 

const frequencyCount = (array) => {
array.filter((item) => {
  for (j=0; j<uniqueCount.length; j++) {
    if (uniqueCount[j][0] === item) {
      uniqueCount[j][1] ++;
    }
  } 
}) 
console.log(uniqueCount);
return uniqueCount;
}

// The below iterates through the count and finds the value with the highest frequency, declare the corresponding 'unique' value as 'mostPopular'

const frequencyCompare = () => {
  let mostPopular;
  let highestCount = 0; 
  for (j=0;j < uniqueCount.length; j++ ) {
    if (uniqueCount[j][1] > highestCount) {
    highestCount = uniqueCount[j][1];
    mostPopular = uniqueCount[j][0];
  } 
} console.log(`The most used word is '${mostPopular}' with a count of ${highestCount}`)
} 

// LESSON! .slice() returns the slice as an array
// This then made 'unique' a nested array which caused issues with finding a specific value
// A: We push the first index of the array, which accesses just the value. 


// WRITE A FUNCTION THAT INCORPORATE ALL OF THE ABOVE

let unique = []; 

const doAll = (array) => { 
  let unique = []; 
 obtainUnique(array); 
 create2D();
 frequencyCount(array);
 frequencyCompare();
}

doAll (betterWords); 

// Output: Count is:123 // 2D array listing words and frequency count // The most used word is 'the' with a count of 11

// LESSON! pay attention to variable scope! 
// Remember to 'return' variables at the end of a function to allow the information to be used in the next function. 
// Next task is to refactor the doAll function so that unique is not global scope variable!

// AND READ THE REDUCE() PAGES WE FOUND! 
// LOOK INTO THE 'SORT' FUNCTION 