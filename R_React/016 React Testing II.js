// Testng React components - Round II 
https://www.freecodecamp.org/news/testing-react-hooks/
// Testing Playground:
https://testing-playground.com/?markup=DwGwhgRgpiAEBmB7ATgXgEQFcDOVkDswBbKdAPgFVcDipgB6caEMgKGAEt8AHTAF1YcAJhhx5CJdKwlRR1GVO7gAxlAAWiEELwYNAd1jYNmLbACSsZWBBwAnokwB%2BKULB8wAWj5RsfYaIVWPz4QWXQofG9kWHtMaLEaSVZrPgwIqJiHePlaKQA3a0wwgCtENXwPIURSINtuMO8ADz4pejZgCH4%2BRHxYGQxsDgBzfExudFg%2BOrDsTAgiDhayQZGxhk6%2BbvwyIA&query=PTAEEUFcFMCcE9TwPaVqaAbaBbaA7AFwGdQALOaAGlAAdZoAzOAQwCNNEB3AS0LIBQIUAANiAYwYEAdAHNohAELxAZAQAKFQEoR00AElGSVKHEt8AckKhIxaELASp%2Ba7dHjkRFj3xxpARxgEAGUsaHFCZFgNbWkBexMPQi8fWH9A%2BBDscMi1c29aSEJzTQFHaBl5JXgAJWRsXLZCiItNIA
// Retrieving data from API and rendering list, good example Studio Ghibli:
https://medium.com/@armando_amador/how-to-make-http-requests-using-fetch-api-and-promises-b0ca7370a444

// Eg testing syntax:

describe('Testing sum', () => {
  function sum(a, b) {
     return a + b;
  }

  it('should equal 4',()=>{
     expect(sum(2,2)).toBe(4);
    })

  test('also should equal 4', () => { // test and it used interchangeably
      expect(sum(2,2)).toBe(4);
    }) 
});

// describe wraps 'it' or 'text' blocks (groups tests)
// the string should be something that happens in tests and be printed to console
// expect()toBe() allows assertions 


//  ---------------

// BREAKDOWN OF REACT EG TEST:

test('renders learn react link', () => {
  const { getByText } = render(<App />);  // Object destructuring 
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

const { getByText } = render(<App />); 
// is the same as 
const getByText = render(<App />).getByText 

// render function is provided by React Testing library
// render(<App />) returns / evaluates to an object containing a number of functions
// 2: { getByText } gets function getByText, which searches for all elements in the rendered virtual DOM with a text node
// 3: checks if text “learn react” is contained anywhere in the virtual DOM rendered by the <App /> component.
// 4: the Jest expect function is used to make an assertion about this text being in the document.
// toBeInTheDocument is provided by another library jest-dom

// getByText format:
getByText("textgiven"); 
// getByText returns a HTML element. To access the text content: 
getByText(/Initial/i).textContent
// in context of the assertion statement: 
expect(getByText(/Initial/i).textContent).toBe("Initial State Changed")
// (/Initial/i) is a regex expression that returns the first node that at least contains the text 'Initial'
// regex `i`  is ignore case.

//  ---------------

// Shallow rendering lets your render a component 'one level deep' (does not render Child components)
// If not shallow rendering, articles say to make sure you 'cleanup' after every test (to unmount/cleanup)
afterEach(cleanup) 
// However, we have read that this is unnecessary as cleanup happens automatically. 

//  ---------------

// What Query Should I Use?

// The Accessibility Tree contains accesibility-related info for most HTML elements (based on the DOM tree):
//  - name, description, role and state
//  - the 'name' refers to its 'accesible name' (ie the visible one upon render)

// getByLabelTest -
// use this to grab forms and input fields
// Q: In test3 of App.test.js, I wasn't sure if the element grabbed was Input Element or Label Element?
// A: getByLabelText searches for the label matching given TextMatch, then finds the element associated with that label.
//    So it grabbed the Input field, then it has no text (so placeholder text doesnae count) which is empty.
//    To query the actual <label/> element, use a 'selector':
//    const inputNode = screen.getByLabelText('Username', { selector: 'input' })

// screen - 
// screen is an alternative to render() , and queries inside the html <body/> element (document.body)
// https://stackoverflow.com/questions/61482418/react-testing-library-screen-vs-render-queries
// It's also noted in Ken.C.Dodds 'common mistakes' unless setting a container or baseElement.
// Instead of defining the query by destructuring, the query is already bound to screen.

const { getByText } = render(<div>Foo</div>)
expect(getByText('Foo')).toBeInTheDocument()
// is the same as: 
render(<div>Foo</div>)
expect(screen.getByText('Foo')).toBeInTheDocument()

// screen.debug -  
// Logs current state of the component so we know what it looks like in HTML / shortcut for console.log(prettyDOM(baseElement))
import React from 'react'
import { render } from '@testing-library/react'

const HelloWorld = () => <h1>Hello World</h1>
render(<HelloWorld />)
screen.debug()
// <div>
//   <h1>Hello World</h1>
// </div>
// you can also pass an element: debug(getByTestId('messages'))

// what is selector? (lo lo)

// getByRole -
// searches for all elements in the rendered virtual DOM with the role of 'list' and name of 'number'
// Note the role of 'list' did not work, for our dropdown menu
// use queryByRole when testing that an element doesn’t exist.

// describe - 
// a Jest method for containing one or more related tests. 
// Every time you start writing a new suite of tests for a functionality wrap it in a describe block. 

// getByText
// use queryByText when testing that an element doesn’t exist. getByText doesn’t throw when an element isn’t found.

// Assertion: toBe vs. toEqual
// toBe checks for strict Equality ===
// toEqual checks for same Value - deep equal check

//  ----------------------------------
// How to deal with API in Unit Testing? 
//  ----------------------------------
// https://www.valentinog.com/blog/fake/
// https://dev.to/zaklaughton/the-only-3-steps-you-need-to-mock-an-api-call-in-jest-39mb

// Why do we need fake APIs?
// A typical dependancy might be external data source. Here, the dependancy is the API's response. 
// A test using real API could fail if API is slow / rate-limited / has network issues / not developmt ready. 
// So MOCKING and STUBBING 'fake' an API, by replacing with a fabricated service (surgical swap of a single function)
// Most mocking/stubbing tools intercept and replace network calls to provide a fake response. 
// Useful working on decoupled frontend architectures.
// Mocking is: replacing outgoing dependancy function in testing with a fake copy. Eg: network calls: Fetch/XMLHttprequest
//             assert on the mocked function to see if its called by another piece of code (?)
//             how many times its called
//             how many parameters its called with

// Stubbing - replacing an external service - incoming dependancies, with a fake version. Eg: network reponse.
//
/* How to mock? 
    1. Import the module you want to mock into your test file.
    2. jest.mock() the module.
    3. Use .mockResolvedValue(<mocked response>) to mock the response.
*/

//  ----------------------------------
// Principles: 
//  ----------------------------------

// The more your tests resemble the way your software is used the more confidence they can give you. 
// Write mostly integration tests. Integration tests should mock as little as possible
// Unit tests good but don't resemble end user interaction with your app. 
// It is very easy to test implementation details with unit tests, especially with shallow render.  
// Do not test implementation details such as function / variable names. Risk false negatives and doesn't concern end user. 


//  ----------------------------------
// CODE-READING PRACTICE! YAY. 
//  ----------------------------------

//  ------------------------------------------------------------------------------------
// React component - testing Input and Label:
//  ------------------------------------------------------------------------------------

function FavoriteNumber({min = 1, max = 9}) { // the parameters is an object with key value pairs 
  const [number, setNumber] = React.useState(0) // React hook. state = number: 0 
  const [numberEntered, setNumberEntered] = React.useState(false) // React hook. state = numberEntered: false 
  
  function handleChange(event) { // takes parameter of an 'event' 
    setNumber(Number(event.target.value)) // sets the state.number to value of the 'event' object passed
    setNumberEntered(true) // sets state.numberEntered to true
  }
  
  const isValid = !numberEntered || (number >= min && number <= max)  // isValid is true if either no number entered yet 
  return (                                                           // OR the state.number is within the min/max limits
    <div>
      <label htmlFor="favorite-number">Favorite Number</label> 
      <input
        id="favorite-number"
        type="number"
        value={number}
        onChange={handleChange}
      />
      {isValid ? null : <div role="alert">The number is invalid</div>}
    </div> 
  )
} 

// input field accepts numbers only. It's value reflects the state. onChange fires the handleChange method. 
// If the input is valid (no number entered or a valid number), nothing happens. 
// Otherwise, produces an alert notifying of error. 

// Following the test:

test('renders a number input with a label "favorite number"', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FavoriteNumber />, div) // outdated - no longer require containers 
  const {getByLabelText} = getQueriesForElement(div)
  
  const input = getByLabelText(/favorite number/i) 
expect(input).toHaveAttribute('type', 'number')
})

//  ------------------------------------------------------------------------------------