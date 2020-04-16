/* This code to to review the Loop module including:
- writing 'for' loops
- using 'for' loops to iterate through an array
- with an interator variable that increments/decrements
- creating a nested loop (loop within a loop)
- 'while' loops (stopping condition is first, iterator variable is global)
- 'do...while' loops (stopping condition is last)
- using the 'break' keyword

2. do YP challenge

// writing a 'for' loops to iterate through an array
*/

let convicts = ['jayz', 'valjean', 'yoopi', 'donnie yen']
let prisonCode = [24600, 24610, 24620, 24630]

for (let i = 0; i < convicts.length; i++) {
  console.log("Prisoner " + prisonCode[i] + ": " + convicts[i])
  
}

// creating a nested loop
for (let i = 0; i < convicts.length; i++) {
  for ( let j = 0; j < prisonCode.length; j++) {
    if (convicts[i] === 'valjean' && prisonCode[j] === 24610 ) {
      console.log("We have a bread thief in our midsts!");
    }
  }
}

// 'while' loops (allows a global iterator variable)
// iterator variable only needs to be 0 (index) when looping through an array 

// 'do...while' loops

let breadRations = 10 
while (breadRations > 5) {
  breadRations -- ;
  console.log(breadRations);
}

do {
  console.log(breadRations);
  breadRations ++ ; 
} while (breadRations <= 10);

// use the 'break' keyword to add test conditions besides the stopping condition

for (k = 0; k < convicts.length; k++) {
  if (convicts[k] === "donnie yen") {
    break;
  }
  console.log(convicts[k]+"collects bread.")
  breadRations -- ;
  console.log("Bread remaining: " + breadRations)
}



