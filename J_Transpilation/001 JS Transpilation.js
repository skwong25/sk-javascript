/* << BROWSER COMPATIBILITY AND TRANSPILATION >>

ES6:
      - Since ECMA International released a new version of JS in 2015
      - Browser compatibility issues - unsupported language syntax in web browsers
        (eg ES6 features such as declaration with 'let' 'const', and string interpolation)
      - While most new browser versions support the majority of ES6 library, compatibility issues persist:
            - some users have not updated to the latest ES6 supported web browser version
            - a few ES6 features, like modules, are not supprted by most web browsers
      - tools include:
            - caniuse.com (website provides data on web browser compatibility for HTML CSS and JS)
                          (can look up browser support on a feature-by-feature basis)
                          (Eg. enter an ES6 feature('let') and see % of browsers that recognise it
            - Babel (JS library to convert new, unsupported JS (ES6) into (ES5) recognised by most modern browsers

Background:
      - Why did ECMA make such substantial updates to JS (from ES5 to ES6)?
            - Readability (easier to understand)
            - Economy of code (requires fewer characters for same functionality)
            - Addresses sources of ES5 bugs. ES6 introduced syntax to mitigate common pitfalls. 
            - Greater similarity with other programming languages (less friction when non-JS developers learn JS)
            - ES6 is backwards compatible to limit browser compatibility issues (you can map ES6 code to ES5)

--------------

  << TRANSPILATION >>

Transpilation is the process of converting one programming language into another.
We will learn how to use Babel to transpile new ES6 into old, browser-compatible ES5. 
We will learn how to setup a JS project that transpiles code when you run 'npm run build' 
from the root directory of a JS project. 
Developers use npm to access and manage Node packages.
Node packages are directories that contain JavaScript code written by other developers. 
You can use these packages to reduce duplication of work and avoid bugs.

>  npm init - a terminal command that creates a package.json file
>  package.json - a file that contains information about a JS project (name, descrip. etc)
>  npm install - a command that installs Node packages
>  babel-cli - a Node package that contains command line tools for Babel
>  babel-preset-env - a Node package that contains ES6+ to ES5 syntax mapping information
>  babelrc - a file that specifies the version of the JS source code {  "presets": ["env"] }
>  "build" script - a package.json script that you used to transpile ES6+ code to ES5
                    "build": "babel src -d lib" - calls babel to transpilate code in src and write to directory (-d)  'lib' 

--------------

  << STEPS >> needed to set up a project for transpilation

1. Initialise your project using 'npm init' and create a directory called 'src'
2. Install babel dependencies by running in Terminal: 

npm install babel-cli -D
npm install babel-preset-env -D

3. Create a .babelrc file inside your project by running 'touch .babelrc' in the root directory
    and add the following code: 

{
  "presets": ["env"]
}

4. Add the following script to your 'scripts' object in package.json: 

"build": "babel src -d lib"

5. Run 'npm run build' whenver you want to transpile your code from your src to lib directories
