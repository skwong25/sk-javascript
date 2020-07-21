// Testng React components - Overview
https://reactjs.org/docs/testing-recipes.html
// 23.06.2020 Update - Have not found a way to make the tests in the examples actually run. Not sure what I am missing?? 

// Two categories of testing: 
//      - Rendering component trees in a simplified test environmt and asserting their output
        //   We will look at this case. 
//      - Running a complete app in a realistic browser environmt (end-to-end test)
//        Useful for preventing regressions to workflows, but not concerned with React components specifically.
//        Frameworks like Cypress, puppeteer and webdriver are useful for running end-to-end tests.

// Choosing testing tools:
//      - Iteration speed vs. Realistic environmt & How Much to Mock? 
//      - Jest is a JS test runner, allows us to access DOM via jsdom. 
//            - jsdom is a approximation of how the browser works. 
//            - jsdom offers gd iteration speed and features like mocking modules & timers 
//      - React Testing Library is a set of helpers to test React components
//            - encourages best practice for accessiblity & eases refactoring
//            - however, doesn't allow you to 'shallowly' render a component without children
//            - Jest allows you to do this via 'mocking'.

// behold!
// RECIPES: Common patterns when writing tests for React components
// ENVIRONMENTS: What to consider when setting up the testing environmt

/** A large portion of UI tests can be written with the above setup: 
 * using Jest as a test runner, 
 * rendered to jsdom, 
 * with user interactions specified as sequences of browser events, 
 * powered by the act() helper (example). 
 * For example, a lot of React’s own tests are written with this combination.
 * 
 * In an environment where you can’t simulate a DOM (e.g. testing React Native components on Node.js), 
 * you could use event simulation helpers to simulate interactions with elements. 
 * Alternately, you could use the fireEvent helper from @testing-library/react-native.
 * 
 * If writing a library that tests mostly browser-specific behavior, 
 * requiring native browser behavior like layout or real inputs, use a framework like mocha.
 * */
// ---------------------------------------------------------------------

//   1. RECIPES >> 

// 1.1 Setup / Teardown 
//      For each test, we want to render our React tree to a DOM element attached to a document. 
//      So it can receive DOM events. When test ends, we want to 'clean up' and unmount the tree from the document. 
//      Common way is use a paid of 'beforeEach' and 'afterEach' blocks
//      so they'll always run & isolate the effects of the test. Eg: 

import { unmountComponentAtNode } from "react-dom";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // execute cleanup on exiting - even if test fails! ('leaky' tests affect each other's behaviour and diff to debug)
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// --------------------------------

// 1.2 act() helper 
//      The name 'act' comes from Arrange-Act-Assent pattern
//      When writing UI tests, tasks (eg rendering, user events, data fetching) can be considered 'units' of interaction
//      act() ensures all updates related to units are processed & applied to DOM before making any assertions:

act(() => {
        // render components
      });
      // make assertions

//      Helps tests run closer to what real users experience using your application. 
//      Note, you might find using act() directly too 'verbose'
//      A library like React Testing Library contains helpers already wrapped in act()

// --------------------------------

// 1.3 Rendering >> 
//      To test whether a component render correctly for given props. Eg:

// hello.js

import React from "react";

export default function Hello(props) {
  if (props.name) {
    return <h1>Hello, {props.name}!</h1>;
  } else {
    return <span>Hey, stranger</span>;
  }
}

// test for the above component: 

// hello.test.js

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Hello from "./hello";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a name", () => {
  act(() => {    
    render(<Hello />, container);  
  });  
  expect(container.textContent).toBe("Hey, stranger");

  act(() => {
    render(<Hello name="Jenny" />, container);
  });
  expect(container.textContent).toBe("Hello, Jenny!");

  act(() => {
    render(<Hello name="Margaret" />, container);
  });
  expect(container.textContent).toBe("Hello, Margaret!");
});

/** Format is:
 * it ("what we are testing", () => {
 *      act(() => {
 *              render( <component instance props="example"/>, container as defined earlier); 
 *      }); 
 *      expect (container.textContent).toBe("expectedtext");
 */

//  To check if a dropdown or a button correctl renders - we need to change the property in expect()
// from textContent to...? 

// --------------------------------

// 1.4 Data Fetching >>
//      Instead of calling API, mock requests with dummy data. Eg:
//      (Although you may still run end-to-end tests to test whole app is working.)

// user.js

import React, { useState, useEffect } from "react";

export default function User(props) {
  const [user, setUser] = useState(null); // React hook sets internal state: {user:null}

  async function fetchUserData(id) {            // asynchronous function for a get request 
    const response = await fetch("/" + id);     
    setUser(await response.json());             // updates state with returned data as a JSON object
  }

  useEffect(() => {                       // React hook
    fetchUserData(props.id);
  }, [props.id]);

  if (!user) {
    return "loading...";
  }

  return (
    <details>
      <summary>{user.name}</summary>
      <strong>{user.age}</strong> years old
      <br />
      lives in {user.address}
    </details>
  );
}

// test for the above component: 

// user.test.js

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import User from "./user";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders user data", async () => {
  const fakeUser = {    name: "Joni Baez",    age: "32",    address: "123, Charming Avenue"  
        };  
        jest.spyOn(global, "fetch").mockImplementation(() =>    
                Promise.resolve({      
                        json: () => Promise.resolve(fakeUser)    
                })  
        );

// Use the asynchronous version of act to apply resolved promises
await act(async () => {
    render(<User id="123" />, container); // QUESTION: How does props.id=123 link to fakeUser data? 
  });                                    // Is there a third Component involved?

  expect(container.querySelector("summary").textContent).toBe(fakeUser.name);
  expect(container.querySelector("strong").textContent).toBe(fakeUser.age);
  expect(container.textContent).toContain(fakeUser.address);

  // remove the mock to ensure tests are completely isolated  
  global.fetch.mockRestore();
});
