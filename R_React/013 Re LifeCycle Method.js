// CodeAcademy tutorial - REACT.JS : PART II

// LIFECYCLE METHOD >>

// LifeCycle methods are methods that get called at certain moments in a component's life
// Eg: lifecycle method that gets called right before a component renders for first time
// Or lifecycle method that gets called after a component renders, every time EXCEPT the first

// Mounting Lifecycle Methods:
// Three categories: mounting, updating, unmounting 

// A component 'mounts' when it renders for the first time. 
// This is when 'mounting lifecycle methods' get called. 
// When a component mounts, it auto calls these three methods in order:
//    - componentWillMount, called right before render and ONLY for the first time. 
//    - render
//    - componentDidMount, called right after and ONLY for the first time.

// componentWillMount >> 

// render >> 
//        belongs to two categories, mounting AND updating lifecycle methods 

// componentDidMount >> 
//        first time renders, get called right AFTER HTML from 'render' has loaded: Eg:

// If your React App uses AJAX to fetch initial data from API, 
// then componentDidMount is the place to make that AJAX call...

// Generally, componentDidMount is a gd place to connect a React app to external applications
// such as web APIs or JS frameworks
// ComponentDidMount is also the place to set timers using setTimeout or setInterval

// --------------

// UPDATING LIFECYCLE METHODS >>

// What is updating?
// The first time a component instance renders, it does not update
// A component updates every time it renders, starting with the second render. 
// When a component instance updates, it calls all five in order:

// Five Updating Lifecycle Methods:
//    1. componentWillReceiveProps
//         - called before rendering begins, only if props received. 
//         - a common use is comparing incoming props to current 'props' or 'state'
//           and deciding what to render based on that comparison
//    2. shouldComponentUpdate
//        - auto receives two arguments (nextProps, nextState)
//        - its typical to compare those to this.props and this.state and decide action from there
//        - still called before rendering begins
//        - if returns false, no remaining lifecycle method for that updating period is called
//          (including render)
//        - best way to use: have it return false ONLY UNDER CERTAIN CONDITIONS
//          if conditions not met, component does not update
//    3. componentWillUpdate
//        - auto receives two arguments (nextProps, nextState)
//        - you cannot call this.setState from the body of componentWillUpdate
//        - its main purpose is to interact with things OUTSIDE of the React architecture
//           non-React setup pre-component render eg checking window size or interacting API
//    4. render
//    5. componentDidUpdate 
//        - when component instance updates, gets called AFTER render HTML finishes loading
//        - auto receives two arguments (prevProps, prevState)
//          (references to component's props and state BEFORE current updating period began)
//          (these can be compared to the current props and state)
//        - usually used for interacting with things outside of React environment
//          eg browser or APIs - similar to componentWillUpdate in that way

// --------------

// UNMOUNTING LIFECYCLE METHODS >>

// componentWillUnmount
// A component's UNMOUNTING period occurs when the component is REMOVED from the DOM
// This could happen if the DOM is rerendered without the component
// OR if the user navigates to a diff website / closes browser

// componentWillUnmount gets called right before a component is removed from the DOM
// if a component initiates methods requiring cleanup, here is where you should put it


// --------------

// LIFECYCLE METHODS RECAP >>
// https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html
// React have denounced certain of their own lifecycles as unsafe coding practices
// 
// https://www.codecademy.com/articles/how-to-create-a-react-app




// 

// ACCUMULATED LESSONS:
//    - a class is not a function. Syntax: class Class extends SuperClass {}
//    - Don't be putting ; in objects
//    - You always miss 'this' off this.eventHandler
//    - Rem that event listeners have to go into an element's opening tag like <button> or <select>
//    - Default Arguments - Ensure the correct argument is passed
// In the instance that an event listener triggers a method that requires sepcific argument...
// By default, an event listener within an element, when fired will pass an event object 
// The solution is to define another FUNCTION Eg: handleChange(e) 
// which should take an EVENT OBJECT as an argument, extract the name we need
// and then call the EVENT HANDLER, passing in the extract name. 
//    - Spelling errors!! Eg:
//      * 'handleEvent' instead of 'handleChange' 
//      * 'prop' instead of 'props'