/*  INTRO: Blocks & Scope
Scope defines where variables can be accessed or referenced
stars are accessed globally, skyline is accessed locally

A Block is the code found witin a set of {}
Blocks help us group statements together. This could be within a function body or an 'if' statement.

We think about scope in relation to blocks because variables exist either within or outwith blocks

1  Global Scope - global variables are declared outwith blocks
When you declare global variables they go to the 'global namespace', availbel until  program finishes. 

2 Block Scope - local variables with 'block scope' are only accesible to code within the block

Q. Why aren't all variables globally accesible?
A. Scope pollution: too many global variables in global namespace 
  or reuse of variables across diff scopes! 
  
  3 Good Practice in Scoping
  It's best practice not to define variables in the global scope.
  If a variable does not need to exist outside a block— it shouldn’t! 
  
  Tightly scoping:
  - visually defines code blocks into modular - easier to control and manage. 
  - improves clarity as variables are grouped with associated code.
  - it saves memory as code ceases to exist after block finishes running
  - however duplicate code indicates variable may be scoped too
  Example */

  const logSkyColor = () => {
    const dusk = true;
    let color = 'blue'; 
    if (dusk) {
      let color = 'pink';
      console.log(color); // pink
    }
    console.log(color); // blue 
  };
  
  console.log(color); // ReferenceError




