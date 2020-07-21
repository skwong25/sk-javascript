// 0:
// JS code conventions:
https://www.crockford.com/code.html

// 1:
// When you switch from async...await request to fetch request
// remember that it does not require an async function any longer 

// 2: 
// Showing in the console (not an error): 
// The development server has disconnected. Refresh page if necessary.
// [HMR] Waiting for update signal from WDS

// HMR: Hot Module Reload
// WDS: Webpack Dev Server
// This is just saying that it's ready to refresh when we save, no need to manually refresh

// 3:
// Ensure the API Key you are using is correct
// For OMDb API we required a OMDb generated API Key

// 4:
// Test if a component is running 
// using console.log - test at the beginning of code and at the end

// 5.
// After restarting Terminal, navigate to the relevant directory
// and enter 'npm start' 

// 6.
// You ALWAYS forget the this. in 
//      - this.setState()
//      - this.state = {}

// 7.
// setState() call didn't seem to update the state
// However, it was just taking a while. 
// Suggestions how to fix this use: ComponentDidMount..?

// 8.
// When changing the parameter from t= to s= , rewrote the code to process an Object / access it's key with a value of an array. 
// The console displays the error "Objects are not valid as a React child"
// Arose because we were trying to display an Object/Array in Output.js 
// Once we accessed the 'Title' Property via Key this message no longer shows 
// 8.1
// When moving FetchRequest function outside of App.js, we got this message again:
// Error: Objects are not valid as a React child (found: [object Promise])
// Possibly it wouldn't allow me to 'return props.function(data)' back to App.js
// Also had 3 sets of 'if...return' conditions to cover the various circumstances that might arise
// In the end, I got rid of all the conditions, simply run 'props.function(data)' and put 'return null' at the end. 

// 9.
// Count your brackets and your blessings (errant brackets)

// 10.
// A render() function MUST return something. 

// 11.
// Remember that setState can update multiple state at once. 
// Also beware of a LAG in state update if other components rely on passed state. 

// 12.
// Accessing Properties: 
// If you are accessing object properties - check with angle brackets instead of dot operator 
// Object["Key"] - as Object."Key" won't work 

// 13.
// When a variable is logging as [object Object]
// You can read its value by applying JSON.stringify(variable))

// 14.
// We are getting error message in console and as a Warning when we run npm test: 
// Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. 
// Forum: To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.
https://www.robinwieruch.de/react-warning-cant-call-setstate-on-an-unmounted-component
// A: We added a lifecycle function, which I don't think runs (the component never mounts?!) but has fixed the Warning:

componentWillUnmount() { 
        console.log("component will unmount and the state is: " + this.state.isLoading);
    }

// 15.
// When converting STATELESS CLASS COMPONENTS into FUNCTIONAL COMPONENTS
// Remember to: 
//       - provide the function parameter of (props)
//       - update all 'this.props.value' to 'props.value'
//       - all functions must be properly declared: function doIt (props) {} or const doIt = (props) => {}
//       - functional components still begin with Caps like a component class 
//       - no render () {} function is required, can simply return <JSX/> 

// 16.
// Apparently in React.16, if you setState() with 'null' it doesn't re-render
// (eg if a setState() updated a <img src="" /> to re-render identical image )
// It is useful to add a check for the state being the same as before:
//      - if state's value is the same as before
//      - the state's new value is 'null'
// As long as a following method call isn't dependant on a re-render. 
https://blog.logrocket.com/returning-null-from-setstate-in-react-16-5fdb1c35d457/

// 17.
/* We do not need  */ import React from 'react'; /* if we do not have any JSX in the code */

// 18. React unit testing
// 18.1 - 
// Error: array.map is not a function
// Ensuring your array prop is in the right format to allow iteration: 
// render(<ComponentInstance props.one = "{ Title:'The Notebook' ... }" /> 
// The code was getting confused between the inner and outer quotations - ensure they are different.

// 18.2 -
// TypeError: Cannot read property 'createElement' of undefined
// 18.3 - 
// Warning: React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: undefined.
// Online responses point to incorrect export/imports.
// We were exporting the Component upon declaration, we changed this to an 'export default' statement which fixed it. 
// However, we had to ensure that for any other Parent Component importing that Component - its import statement had to be changed 
import Output from './Output' /* instead of previous named import */ import {Output} from '.Output' 

// 18.4 -
// Error: Import / Export may only be placed at the top level
// Solution: Check your brackets! We were missing a curly bracket. 

// 18.5 -
// Error: Unable to find an accessible element with the role "button"
// When there was <button><button/> element in the return 
const {getByRole} = render(<Output movieData={testArray}/>)
let ol = getByRole('button')
// SOLUTION: We may have to render <App/> also as the render 

// 18.6 -
// TypeError: expect(...).toBeInTheDocument is not a function.
// TypeError: expect(...).toHaveAttribute is not a function
// sorted by:
import "@testing-library/jest-dom/extend-expect”;

// Above is an instance of usage of react testing library with jest, 
// hence the addition of the jest-dom helpers. 
// RTL does not depend on jest, it can be used with other test runners and assertion libraries. 
// That's why jest-dom is not included by default. 
// jest-dom is a library that extends Jest using custom matchers in order to make assertions on DOM elements easier. 
// jest is used for unit testing, whereas RTL is mostly for integration tests. 

// 18.7 -
// Rem to pass props to all <Components/> rendered in tests otherwise they will fail propTypes checks

// 19 - 
// When adding a <button/> element to a component
// It does not show on the browser until you add a header. (Not sure why?!)

// 20 -
// https://kentcdodds.com/blog/common-mistakes-with-react-testing-library
// LESSONS:
// No need to wrap in act() unecessarily - render and fireevent are already wrapped in act()
/*use screen for querying & debugging i.e */ screen.getByText 
// don't use cleanup - cleanup happens automatically

// 21 -
// Q: How i can check git status for hidden files and remove them form Git tracking?
// A: git ls-files and git rm should do it

// to rename a file on Terminal: mv >filename< >.newfilename<
// delete a file: rm >src/.DS_Store<

// 22 -
// Enumeration (enum / factor / categorical variable )
// Enumerator names are usually identifiers that behave as constants. 
// An enumerator type has different values. 
// Eg 4 enumerators: Hearts, Clubs, Spades, Diamonds belong to an enumerator type named "suit".
// If  variable V is declared as having suit to a data type, one can assign any of those four values to it. 
// The names of an enum's type fields are capitalised, because they are a fixed set of CONSTANTS. 

// 23 -
// The app was working but test was failing with error: 
// TypeError: Cannot read property 'comparator' of undefined
// A: Changed my enumerator constant name from YEAR-ASCENDING to YEAR_ASCENDING, neglected to update it in the test. 

// 24 - 
// Proptypes
// Note that you must import PropTypes from 'prop-types’ instead of 
// {noOfResults: React.PropTypes.number.isRequired}
https://reactjs.org/docs/typechecking-with-proptypes.html

// 24.1 - Checking for 2 data types (null and other)
`movieData: PropTypes.oneOfType([PropTypes.object, PropTypes.null]), … `
// This caused Error as propTypes will not accept ’null': Invalid argument supplied to oneOfType. Expected an array of check functions, but received undefined at index 1.
// Alternative is use custom validation function:
https://stackoverflow.com/questions/37842868/how-can-i-declare-a-proptype-corresponding-to-a-nullable-number

// 25 - 

