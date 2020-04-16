// ARRAYS - CODE CHALLENGES

// Write a function that, given multiple arrays of integers 
// will produce the sum of all the elements in the arrays. 

testArray = [ 1, 2, 3 ]
sum = testArray.join("+")
console.log (sum)


let count = 0 

function addArray (testArray) {
    for (i = 0 ; i <= testArray.length ; i ++) {
        count += testArray[i] 
    } return count 
}  

console.log (addArray(testArray))

testArray.forEach(function(item){
    count + 1; 
    return count; 
})

console.log (count)

