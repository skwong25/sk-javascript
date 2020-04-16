/* 1 Loops tell computers to repeat a block of code to allow manual repetition
- A 'for' loop contains three expressions in brackets separated by ;:
  - declaring an iterator variable 'let counter = 0' (ie Loop starts counting at 0)
  - a stopping condition 'counter < 4' to be checked against
  - an interaction statement 'counter++' which is assigned a new value on iteration
  - {code body} will execute until condition evaluates to false - 'console.log(counter)' */ 


for (let counter = 0; counter < 4; counter++) {
  console.log(counter); 
}

/* OUTPUT: 
1
2
3
4 */

// QUESTION: How does a 'for' loop differ from using .forEach array method? 
// ANSWER? A 'for' loop executes a block code a prescribed number of times. 
// The .forEach method just applies a function each element in an array. 

// 2.  'For' loops are handy for looping through Arrays / iterating over data structures

// Note the iterator variable is 'i', shorthand for 'index'
const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
for (let i = 0; i < animals.length; i++){
  console.log(animals[i]);
}

/* OUTPUT:
Grizzly Bear
Sloth
Sea Lion

// 3. Nested Loops
// For each element in the outer loop, the inner loop will run in its entirety: */

const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  }
};

// 4. The 'While' Loop - best when a loop need to execute for an undetermined number of times. 
// Converting a'for' loop into a 'while' loop:

// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
  console.log(counterOne);
}

// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}
 // Note that if we didn't incremement counterTwo we would have an infinite loop! 

 // 5. Do...While statements say do a task once and keep doing until a condition is no longer met

let countString = '';
let i = 0;

do {
  countString = countString + i;
  i++;
} while (i < 5);

console.log(countString); // prints 01234

// The code block changes the countString variable by appending the string form of the i variable.
// First, the code block after the 'do' keyword is executed once. 
// Then the condition is evaluated. 
// If the condition evaluates to true, the block will execute again. 
// The looping stops when the condition evaluates to false.

// This differs from a 'while' statement as 'do...while' will run at least once, 
// irregardless of whether condition evaluates to true

// 6. The 'break' keyword - allows programs to break out of a loop within a loop's code block
// helpful when looping through large data structures
// with 'break' we can add test conditions besides the stopping condition, to exit loop when met 

for (let i = 0; i < 99; i++) {
  if (i > 2 ) {
     break;
  }
  console.log('Banana.');
}

console.log('Orange you glad I broke out the loop!');


 