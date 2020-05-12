/* << MESSAGE MIXER >>

--------------

/* << BACKGROUND >> 
Message Mizer is a messaging service that allows you to perform an action on input text
and display the output of that behaviour to a console.

At present, MM runs as a program in a single file
This single file includes functions that define behaviour as well as output
By extracting functions into a module, logic can be reused in different parts of the app
Let's help MM turn the program into a module! */

// counts the number of a certain character within a string
function countCharacter(inputString, inputCharacter) {
    let count = 0;
    let string = inputString.toLowerCase();
    let character = inputCharacter.toLowerCase();
      for (let i = 0; i < string.length; i++) {
        if (string[i] === character) {
           count++;
        }
      }
    return count; 
  };
  
  
  // This takes a string and splits it into an array of elements, split by spaces
  // Changes the first character to upper case
  // Joins the array elements back together
  function capitalizeFirstCharacterOfWords(string) {
    let arr = string.split(" ");  
      for (let i = 0; i < arr.length; i++) {  
        let word = arr[i];
          arr[i] = word[0].toUpperCase() + word.substring(1); 
      }
    return arr.join(" "); 
  };
  
  // reverse characters in a word in place
  function reverseWord(word) {
    return word.split("").reverse().join("");
  };
  
  // reverses each word in sentence in place
  function reverseAllWords(sentence) {
    let words = sentence.split(" ");
      for (let i = 0; i < words.length; i++) {
        words[i] = reverseWord(words[i]);
      }
     return words.join(" ");
  };
  
  // to replace FIRST occurrence
  // .replace() is a string method
  // it replaces the first instance of the first parameter with the second parameter found within a given string
  function replaceFirstOccurence(string, toBeReplaced, replaceWith) {
    return string.replace(toBeReplaced, replaceWith);
  };
  
  // to replace ALL occurences
  // could have used regex with .replace() 
  // this splits the string (removing the character/string) and joins (adding another character/string)
  function replaceAllOccurrences(string, toBeReplaced, replaceWith) {
    return string.split(toBeReplaced).join(replaceWith);
  };
  
  // loops through every key and specifies what character is to be replaced, and with which symbol. For every key iteration it calls upon the replaceAllOccurences function to split and join the string, replacing all instances of the current key with its corresponding value.
  function encode(string) {
    let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
      for (let key in replacementObject) {
        string = replaceAllOccurrences(string, key, replacementObject[key]); 
      }	
      return string;
  };


    function palindrome (str) {   
    return str + " " + reverseWord(str);
  };
    
    function pigLatin (sentence, character) {
      return sentence.split(" ").join(character+" ")
  };
    
  
  
  function displayMessage() {
    console.log(countCharacter("What is the color of the sky?", "t"));
    console.log(capitalizeFirstCharacterOfWords("What is the color of the sky?"));
    console.log(reverseWord("What is the color of the sky?"));
    console.log(reverseAllWords("What is the color of the sky?"));
    console.log(replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
    console.log(encode("What is the color of the sky?"));
    console.log(palindrome("sky"));
    console.log(pigLatin("What is the color of the sky", "oink"));
}
  }
  
  displayMessage();

/* Output:
What Is The Color Of The Sky?
?yks eht fo roloc eht si tahW
tahW si eht roloc fo eht ?yks
What is the color of the water?
Wh@t !$ the c0l0r 0f the $ky? 
sky yks
Whatoink isoink theoink coloroink ofoink theoink sky */



