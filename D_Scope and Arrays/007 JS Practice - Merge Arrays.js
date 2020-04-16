let namesColours = [["JayZ","red"], ["Blue Ivy","yellow"], ["Beyonce","green"],["Eminem", "pink"]]
let namesAges = [["Beyonce", 35], ["JayZ", 50], ["Blue Ivy", 7]]

// TASK 1: write a function that can merge two 2D arrays

function mergeArrays (arrayOne, arrayTwo) {  

for ( let i = 0; i < arrayOne.length; i++ ) {
  for (let q = 0; q < arrayTwo.length; q++ ) {
    if (arrayOne[i][0] === arrayTwo[q][0]) {
      arrayOne[i][2] = arrayTwo[q][1]; 
    } 
  }  
} console.log(arrayOne)
}

mergeArrays(namesColours, namesAges)




