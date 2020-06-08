let namesColours = [["JayZ","red"], ["Blue Ivy","yellow"], ["Beyonce","green"],["Eminem", "pink"]]
let namesAges = [["Beyonce", 35], ["JayZ", 50], ["Blue Ivy", 7]]

// TASK 1: write a function that can merge two 2D arrays

function mergeArrays (arr1, arr2) {  
for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr2.length; j++ ) {
      if ( arr1[i][0] === arr2[j][0]) {
          arr1[i].push(arr2[j][1]);
      };
  };
}}

mergeArrays(arr1, arr2)

/* Output: 
[
[ 'JayZ', 'red', 50 ],
[ 'Blue Ivy', 'yellow', 7 ],
[ 'Beyonce', 'green', 35 ],
[ 'Eminem', 'pink' ]
] */
