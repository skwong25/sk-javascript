https://reactjs.org/tutorial/tutorial.html 
// << WHAT IS REACT? >>

/** 1. React is a declarative, efficient and flexible JS library for building user interfaces
* It allows us to compose complex UIs from small isolated piece of code called 'components'
* Components are used to tell React what we want to see on screen. 
* When data changes, React efficiently updates and re-renders our components.  
* We'll begin with React.Component subclasses: */


class ShoppingList extends React.Component { // this is the only similarity to JS subclassess 
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

// Example usage: <ShoppingList name="Mark" />

/** Here, ShoppingList is a React component class or React component type.
 * A component takes in parameters, called 'props' (properties)
 * and returns a heirarchy of views to display via the 'render' method 
 * The 'render' method returns a description of what you want to see on the screen
 * React takes this description and displays the result
 * In particular, 'render' returns a React ELEMENT (a lightweight descrip of what to render)
 * Most React devs use a special syntax called 'JSX' to make these structures easier to write 
 * The <div/> syntax is transformed at build time to React.createElement('div').
 * React.createElement is described in detail in the API ref but here we will use JSX
*/

// --------------

// JSX

/** JSX comes with the full power of JS. You can put any JS expression in braces inside JSX
 * Each React element is a JS object that can be stored in a variable or passed around your program. 
 * The ShoppingList component only renders built-in DOM components like <div /> and <li/>
 * But you can compose and render custom React components too.
 * Eg we can now refer to the whole shopping list by writing <ShoppingList />
 * Each React component is encapsulated and can operate independently
 * This allows us to build complex UIs from simple components.
 */

// --------------

/** Inspecting the Starter Code 
 * 
 * We have three React components provided. Currently there are no interactive components:
 *  - Square (renders a single <button>)
 *  - Board (renders 9 squares)
 *  - Game (renders a board with placeholder values that we will modify later)
 * 
 * STEP 1 - 'Passing a prop' from a parent Board component to a child Square component.
 * --------------
 * Passing props is how info in React app flows, from parents to childen
 * 
 * STEP 2 - Making an Interactive Component 
 * --------------
 * Let's fill the Square component with an X when we click it. 
 * 
 * 2.1 Added onClick={function(){alert('click');}} to button tag 
 * We are passing a function as the onClick prop. 
 * React only calls this function after a click. Common Mistake: Forgetting () =>  
 * onClick = {alert('click')} would fire the alert every time the component re-renders
 * Output: alert screen in browser that says 'click' and has an OK button. 
 * 
 * Next step: we want the Square component to 'remember' that it got clicked and fill with an X mark
 * To 'remember' things, components use 'State'
 * React components can have a state by setting this.state in their constructors
 * this.state should be considered as private to a React component that its defined in 
 * Let's store the current value of the Square in this.state and change it when Square is clicked
 * First we'll add a constructor to the class to initialise the state.
 * Note that in JS classes, we must always call 'super' when defining the constructor of a subclass. 
 * All React component classes that have a constructor should start with a super(props) call
 * 
 * Now we change the Square's render method to display the current state's value when clicked 
 * 2.2 Changed this.props.value with this.state.value. 
 * Replaced the onClick={...} event handler with 'onClick={()=>this.setState({value: 'X'})}'
 * By calling this.setState from an onClick handler in the Square's render method,
 * we tell React to re-render that Square wherever its <button> is clicked 
 * Square's this.state.value is now 'X' so we will see X on the game board when we click on any Square
 * When you call setState in a component, React auto-updates the child components inside of it too
*/

/* STEP 5: replaced Square class with a function component (a simpler form of component)

class Square extends React.Component { 

 
  constructor(props) { // STEP 2.1 Added constructor method
    super(props); //super calls the parent constructor method for the (props) argument
     this.state = { // this.state is initialised with the value of an object 
      value:null, // with a key-value pair 
    };
  } // STEP 3.3 Deletes constructor because Square no longer tracks the game's state

  render() {
    return (
      <button 
      className="square" 
      onClick={() => this.props.onClick()}  // Step 2.1 & 2.2 // STEP 3.4 
      >
        {this.props.value} // STEP 1.2: added 'this.props.value' Output: grid populates with no 0-8
      </button>           // STEP 2.2 Changed 'this.props.value' to 'this.state.value'.
    );                   // For this reason, Square ignores the value 'prop' passed to it by the Board
  }                     // STEP 3.4 Changed back to 'this.props.value'
}

*/

function Square (props) { 
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  /*
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null), // STEP 3.1
      xIsNext: true,               // STEP 6.1 First move is 'X' by default
    }
  }
  */ // STEP 8.2: Lifting State Up - delete the constructor in Board

  /* STEP 8.5 Lifting State Up - Moving handClick method from Board to Game 

  handleClick(i) { // STEP 4.0
    const squares = this.state.squares.slice(); 
    if (calculateWinner(squares) || squares [i]) {
      return; // STEP 7.1 This ignores a further click if there is already a value/winner 
    }
    squares[i] = this.state.xIsNext? 'X':'O'; // STEP 6.1: if xIsNext = true, 'X' is displayed 
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext, // step 6.1: Bang flips boolean 'xIsNext'
    }); 
  }
*/
  renderSquare(i) {
    return ( // Brackets added so JS doesn't break after 'return'
      <Square 
        value={this.props.squares[i]}        // STEP 1.1: added 'value={i}'
        onClick={() => this.props.handleClick(i)} // STEP 3.2: changed to 'this.state.squares[i]'
      />                                   // STEP 3.3: added onClick function  
    );                                    // STEP 8.3: Lifting State Up, changed to 'this.props.squares[i]'
  }                                        

  render() {
   /* const status = 'Next player:' + (this.state.xIsNext? 'X':'O'); // STEP 6.2 show which player is next */
      /*
      const winner = calculateWinner(this.state.squares); 
      let status;
      if (winner) {
        status = 'Winner:' + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext? 'X':'O')
      } // STEP 7.0: Updated the 'status' code to check for a winner
      */ // STEP 8.5: Removed this code and Lifted State Up to Game component

    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component { // STEP 8.0: Lifting State Up of 'squares' from Board to Game 

  constructor (props) {
    super (props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0, // STEP 10.1: Add stepNumber to indicate which step we're currently viewing
      xIsNext:true,
    };
  }

  handleClick(i) { // STEP 8.5: Moved handleClick method from Board to Game and modified to suit structure
    const history =  this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length-1]; // STEP 10.3: if we revert to earlier move, 
    const squares = this.state.squares.slice(); // this throws away moves beyond that point
    if (calculateWinner(squares) || squares[i]) {
      return; 
    }
    squares[i] = this.state.xIsNext? 'X':'O'; 
    this.setState({
      history: history.concat([{ // .concat() preferable to .push() as it doesn't mutate original array
        squares: squares,
      }]),
      stepNumber: history.length, // STEP 10.3: updates the stepNumber after each move 
      xIsNext: !this.state.xIsNext, 
    }); 
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step, 
      xIsNext: (step % 2) === 0, 
    });
  }

  render() { // 8.5: Lifting State Up, updated to render to last [history] element & check winner
    const history = this.state.history;
    const current = history[this.state.stepNumber]; // 10.5 so renders the currently selected move 
    const winner = calculateWinner(current.squares); // and not the last move 

    const moves = history.map((step, move) => { // 9.0: mapping history of moves 
      const desc = move ?  
        'Go to move #' + move : 'Go to game start';
      return (
        <li ={move}> 
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      ); // STEP 10.0 Add key as <li key={move}>
    });

    let status;
    if (winner) {
      status = 'Winner' + winner;
    } else { 
      status = 'Next player: ' + (this.state.xIsNext? 'X':'O');
    }

    return ( // 8.5: Lifting State Up, updated <Board/> to reflect current.squares and pass onClick function
      <div className="game">
        <div className="game-board">
          <Board 
          squares = {current.squares}
          onClick={(i) => this.handleClick(i)}
          /> 
        </div>
        <div className="game-info">
          <div>{/status}</div> 
          <ol>{moves}</ol> 
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

/** Developer Tools
 * React DevTools extension for Chrome/Firefox lets you inspect a React component tree with browser's dev tools 
 * React DevTools let you check the props and state of your React components
 * After installing React DevTools, right-click on any element on the page, click 'Inspect' to open dev tools
 * Use "Components" tab to inspect the component tree.
 * 
 * --------------
 * 
 * STEP 3 - Lifting State Up
 * 
 * Currently each Square component maintains the game's state. 
 * To check for a winner, we'll maintain the value of each of the 9 squares in one location. 
 * 
 * You might think that Board should just add Square for each Square's state.
 * Discouraged as the code becomes dfficult to understand, susceptible to bugs, hard to refactor...
 * The best approach is to store the game's state in the parent Board component instead of in each Square
 * The Board component can tell each Square what to display by passing a prop
 * just like when we passed a number to each Square. 
 * 
 * To collecting data from multiple children (or to have 2 child components communicate with each other)
 * declare the shared state in their parent component instead.
 * The parent component can pass the state back down to the children by using props.
 * This keeps the child components in sync with each other and the parent component.
 * 
 * Lifting state into a parent component is common when React components are refactored. 
 * 
 * 3.1 Add a constructor to the Board...
 * set the Board's initial state to contain an array of 9 nulls corresponding to the 9 squares.
 * When we fill the Board in later, the this.state.squares array will look something like this:
 * 
 * [
  'O', null, 'X',
  'X', 'X', 'O',
  'O', null, null,
*  ]
*
* We will now use the prop passing mechanism again. 
* We will modify the Board to instruct each individual square about its individual value ('X','O', or 'null')
* 3.2 Modify the Board's renderSquare to read from [squares] defined in the Board's constructor
* Each Square now receives a value prop that will be either 'X', 'O' or 'null'
* 
* Next we will changes what happens when a Square is clicked. 
* The Board component now maintains which squares are filled.
* We need to create a way for the Square to update the Board's state. 
* Since the state is considered to be private to a component that defines it, 
* we cannot update the Board's state directly from the Square. 
*
* 3.3  Instead pass down a function from Board to Square. Square will call the function when clicked. 
* Now we're passing down two props from Board to Square: value and onClick
* The onClick prop is a function that Square can call when clicked. 
* 3.4 Make the following changes to Square: 
* 
    Replace 'this.state.value' with 'this.props.value' in Square’s render method
    Replace 'this.setState()' with 'this.props.onClick()' in Square’s render method
    Delete the constructor from Square because Square no longer keeps track of the game’s state
*
* 
* --------------
* 
* HOKAY! - This is how it works:
* 
* When a Square is clicked, the onClick function provided by the Board is called.
* 1. The 'onClick' prop on the built-in DOM <button> component tells the React to set up a click event listener
* 2. When the button is clicked, React calls the onClick event handler defined in Square’s render() method.
* 3. This event handler calls this.props.onClick(). The Square’s onClick prop was specified by the Board.
* 4. Since the Board passed onClick={() => this.handleClick(i)} to Square, the Square calls this.handleClick(i) when clicked.
* 5. We have not defined handleClick() method yet, so our code crashes. 
* 
* Note! The DOM <button> element's 'onClick' attribute has a special meaning to React as a built-in component
* For custom components like 'Square', the naming is up to you. 
* We could give any name to the Square's onClick prop or Board's handleClick method and code works same. 
* React convention: use on[Event] names for props representing events and handle[Event] for event handler methods. 
* 
*/  
// --------------
/** STEP 4: 
* 4.0 Define handleClick method in Board class
 * After these changes, when we click on the Squares to fill them, the state is stored in the Board component.
 * When the Board's state changes, the Square components re-render automatically.
 * Keeping the state of all squares in the Board component allows it to determine a winner in the future. 
 * 
 * The Square components receive values from, and inform the Board components when they're clicked. 
 * In React terms, the Square components are now CONTROLLED COMPONENTS. The Board has full control over them. 
 * Note that in handleClick we call .slice() to create & modify  a copy of [squares] instead of modifying existing.
 * Explanation of why below! 
 * * 
 * --------------
 *
 * Why Immutability is Important
 * 
 * Two approaches to changing data: 
 *      - 1. mutate the data (directly change data's values)
 *      - 2. replace the data with a new copy which has desired changes
 * 
 * The Benefits to Non-Mutation:
 * 
 *      - Complex Features Become Simple
 *        Immutability makes complex features easier to implement
 *        Eg. Time travel feature to retrace game's moves (ie ability to 'undo' and 'redo' moves)
 *        Avoiding direct data mutation lets us keep previous versions of game history intact and reuse them later 
 *      
 *      - Detecting Changes
 *        Detecting changes in mutable objects is difficult because they are modified directly
 *        Detection requires comparison to previous copies and the entire object tree to be traversed
 *        
 *      - Determining When to Re-Render in React
 *        Main benefit of immutability is that it helps build PURE COMPONENTS in React
 *        Immutable data can easily determine if changes have been made...
 *        ...which helps to determine when a component requires re-rendering
 *        Read more on shouldComponentUpdate() and how to build PURE COMPONENTS:
 *        https://reactjs.org/docs/optimizing-performance.html#examples
 * 
 *  --------------
 * 
 * STEP 5: what is a FUNCTION COMPONENT?
 * 
 * 5.0 We will now change Square to be a FUNCTION COMPONENT 
 * Function components are a simpler way to write components 
 * that only contain a 'render' method and don't have their own state 
 * Instead of defining a class which extends React.Component, 
 * we can write a function that takes 'props' as input and return what should be rendered. 
 * Function components are less tedious to write than classes, 
 * and many components can be expressed this way. 
 * 
 * --------------
 * 
 * STEP 6: Taking Turns
 * 
 * 6.0 Allow O's to be marked on the board and show 
 * Set the first move to be "X" by modifiying the initial state in the Board constructor
 * Each time a player moves, xIsNext (a boolean) is flipped
 * This determines which player goes next and the game's state will be saved.
 * 6.1  We'll update the Board's handleClick function to flip the value of xIsNext 
 * 6.2 Show which player is next by modifying the 'status' text in Board's render() method 
 * 
 * --------------
 * 
 * STEP 7: Declaring a Winner
 * 
 * We should also show when the game is won and there are no more turns to make
 * calculateWinner() helper function checks for a winner, returns 'X' or 'O' or null as appropriate
 * we will call calculateWinner(squares) in the Board's render function to check if a player has won
 * If a player has won, let's display text "Winner X" or "Winner O"
 * 7.0 Replace the status declaration in Board's 'render' function with new code.
 * 7.1 We will now change the Board's handleClick function to return early 
 * by ignoring a click if someone has won a game or if a Square is already filled
 * 
 * --------------
 * 
 * STEP 8: Adding Time Travel 
 * 
 * Storing a History of Moves makes it possible to 'go back in time' to prev moves
 * Impossible if we had mutated [squares] BUT we treated [squares] as immutable...
 * since we used slice() to create a copy of [squares] after every move.
 * Allows us to store every past version & navigate between turns that already happened 
 * We'll store past [squares] in [history] representing all board states from 1st to last move
 * [ {squares: [null, null, null...]}, {squares:[null, null, 'X'...]} ]
 * 
 * Lifting State Up, Again 
 * 
 * We'll want a top-level Game component to display a list of past moves with access to [history]
 * so we will place 'history' in the top-level Game component.
 * 
 * Placing the 'history' state into the Game lets us remove the squares state from its child Board component
 * We are now lifting it up from the Board into the top-level Game component. 
 * 
 * This gives the Game component full control over the Board's data, 
 * and let's it instruct the Board to render previous turns from the 'history'.
 * 
 * 8.0 Set up the initial state for the Game component within its constructor.
 * 8.1 Have the Board component received squares and onClick props from the Game component
 * Since we have a single click handler in Board for many Squares, 
 * we need to pass the location of each Square into the onClick handler to indicate which square was clicked 
 * Required steps:
 * 
 * 8.2 Delete the constructor in Board.
 * 8.3 Replace this.state.squares[i] with this.props.squares[i] in Board’s renderSquare.
 * 8.4 Replace this.handleClick(i) with this.props.onClick(i) in Board’s renderSquare.
 * 
 * 8.5 Update the Game component's render function to use the most recent history entry 
 * to determine and display the game's status.
 * We can then remove the corresponding code from the Board's render method. 
 * 
 * 8.6 Finally, move the handleClick method from Board to Game component. 
 * This involves modifying handleClick because the Game component's state is structured differently.
 * Within the Game's handleClick method, we concatenate new history entries onto 'history'
 * At this point, the Board component only has renderSquare & render methods
 * The game's state and handleClick method are in the Game component. 
 * 
 * --------------
 * 
 * STEP 9: Showing Past Moves
 * 
 * Since we are recording the game's history, we can now display it to the player as a list of past moves. 
 * React elements are first-class JS objects, meaning we can pass them around in our applications. 
 * To render multiple items in React, we can use an array of React elements. 
 * 
 * Using JS map() array method, we can map our history of moves to React elements representing
 * buttons on the screen, and display a list of buttons to 'jump' to past moves
 * 
 * 9.0 Map over 'history' in the Game's render method.
 * For each move in the game's history, we create a list item <li> which contains a button <button>
 * The button has an onClick handler which calls this.JumpTo() method (not yet implemented)
 * For now, we should see a list of moves occurred in the game and a warning in the dev tools console:
 * 
 * "Warning: Each child in an array or iterator should have a unique “key” prop. 
 * Check the render method of “Game”." 
 * 
 * --------------
 * 
 * Picking a Key
 * 
 * When we render a list, React stores info about each rendered list item. 
 * When we update a list, React needs to determine what has changed. 
 * We could have added, removed, re-arranged or updated the list's items.
 * As React cannot know our intentions, we need to specify a 'key' property for each list item
 * to differentiate each list item from its sibling such as database IDs in strings. 
 * When a list is re-rendered, React takes each list item's key and 
 * searches the previous list's items for a matching key.
 * If the current list has a key that didn't exist before, React creates a component.
 * If the current list is missing a key that existed in the prev list, React destroys the component. 
 * If two keys match, the corresponding component is moved. 
 * Keys tell React about the identity of each component, allowing React to maintain state between re-renders. 
 * If a component's key changes, the component will be destroyed and re-created with a new state. 
 * 
 * 'key' is a special and reserved property in React (along with 'ref', a more advanced feature).
 * When an element is created, React extracts the 'key' property and stores the key directly on the returned element
 * Even though 'key' looks like it belongs in 'props', 
 * 'key' cannot be referencing using this.props.key.
 * React automatically uses 'key' to decide which components to update. 
 * A component cannot inquire about its key. 
 * 
 * Assign proper keys when you build dynamic lists. 
 * If you don't have an appropriate key, you may want to restructure your data so that you do. 
 * 
 * If no key is specified, React presents a warning and uses the array index as a key by default.
 * Using the array index as key is problematic when trying to re-order a list's items or inserting/removing list items. 
 * Explicitly passing key={i} silences the warning but has the same problems as array indices 
 * and is not recommended in most cases
 * 
 * Keys do not need to be globally unique; only unique between components and their siblings. 
 * 
 * --------------
 * 
 * STEP 10: Implementing Time Travel
 * 
 * Each past move has a unique ID associated with it - the sequential number of the move.
 * It's safe to use the move index as key, since moves are never re-ordered, deleted, intersected.
 * 
 * 10.0 In the Game component's render method, we can add the key as <li key={move}> 
 * 10.1 Add stepNumber to the Game component's state to indicate which step we're currently viewing
 * 10.2 Define the jumpTo method in Game to update the stepNumber. 
 *      We can also set xIsNext to true if the number stepNumber is changing to, is even. 
 * 
 * 10.3 We will modify Game's handleClick method that fires when you click a square:
 *      - After a new move is made, we want stepNumber to update.
 *      - Replace this.state.history with a 'slice' of only the relevant part
 *        This ensures that if we 'go back in time', moves beyond that points are thrown away.
 *  
 * 10.4 Modify Game component's render() from always rendering the last move
 *      to rendering the currently selected move according to StepNumber.
 * 
 * --------------
 * 
 * WRAPPING UP
 * Final Result: https://codepen.io/gaearon/pen/gWWZgR?editors=0010
 * 
 * We created a tic-tac-toe game that: 
 * - lets you play tic-tac-toe.
 * - indicates when a player has won the game
 * - stores a game's history as a game progresses
 * - allows plays to review a game's history and see previous versions of a game's board
 * 
 * - touched on React concepts including elements, components, props and state.
 * 
 * --------------
 * 
 * Ideas for improvements: 
 * 
 * 1. Display the location for each move in the format (col, row) in the move history list.
 * 2. Bold the currently selected item in the move list.
 * 3. Rewrite Board to use two loops to make the squares instead of hardcoding them.
 * 4. Add a toggle button that lets you sort the moves in either ascending or descending order.
 * 5. When someone wins, highlight the three squares that caused the win.
 * 6. When no one wins, display a message about the result being a draw.
 *      
 *  *   */



 
/*
JS LESSONS:
Array constructor: Array(7) creates an array of 7 empty spaces
.fill() array method: changes all elements in an array to a given static value( argument )

REACT LESSONS:
setState() API method - 
Primary method used to update user interface in response to event handlers and server responses.
It enqueues changes to the component state and tells React that this component and children 
need to be re-rendered with the updated state.  