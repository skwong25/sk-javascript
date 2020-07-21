// TIC-TAC-TOE code breakdown 

// Square is a function component (a simple form of component)
//      - no state, only render method
//      - takes 'props' as an argument and returns what should be rendered

function Square(props) { 
  return (  
    <button className="square" onClick={props.onClick}> 
      {props.value} 
    </button>
  );
}

//  ------- BUTTONS -------  
// HTML Button tag <button> defines a clickable button
// Eg: <button name="button">Press me</button>
// Here is defined  1) name of the button 
//                  2) DOM button's built-in component attribute onClick, Eg: <element onclick="myScript"> 
// When onClick is triggered, this accesses the 'onClick' and 'value' property of 'props'  


class Board extends React.Component {
  renderSquare(i) {  // renderSquare is called, and passed the number of the relevant square as an argument
    return (
      <Square
        value={this.props.squares[i]} // the squares array []  stores the values by index? 
        onClick={() => this.props.onClick(i)} // this specifically passes the square index to onClick() 
      />
    );
  }

// Board and Game are subclasses of React.Component  
// When renderSquare(i) is called, it creates an instance of Square, passing a value and the onClick listener as props 

// render() is a method unique to Board 
// <div> tag is a container for HTML elements, defining a section in a HTML doc.  
// Here are 3 sections, each representing a row of the Board
// When Board.render() is called, it calls its own renderSquare for each square, rendering all squares from top to bottom 

  render() {
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

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null) // Array constructor creates an array of empty spaces
        }
      ],
      stepNumber: 0, 
      xIsNext: true 
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1); // copies array of game history up to current step [{},{},{}]
    const current = history[history.length - 1];    // isolates last move, as a key-value pair 
    const squares = current.squares.slice();       // isolates last move, as an array 
    if (calculateWinner(squares) || squares[i]) { // just a check to freeze clicking   
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O"; // the clicked square in the above copied array is assigned a value 
    this.setState({                             // calls setState()  
      history: history.concat([                // concatenates the 'slice' of 'history' [{},{},{}] with [{}]
        {
          squares: squares                   // with the 'squares' variable reflecting the latest move 
        }
      ]),
      stepNumber: history.length,         // stepNumber set to the number of moves now in the 'history' array 
      xIsNext: !this.state.xIsNext       // toggled for the next player 
    });
  }

  jumpTo(step) {                        // jumpTo() method to revert back to prev. step
    this.setState({                    // calls setState() pases an object as argument  
      stepNumber: step,               // sets the stepNumber as the 'step' argument passed
      xIsNext: (step % 2) === 0      // determines if next player is X or O 
    }); 
  }                                // Once the step number is reset, the handleClick will refresh the 'history' to suit 

  render() {
    const history = this.state.history;                  // [{},{},{}]
    const current = history[this.state.stepNumber];     // {}
    const winner = calculateWinner(current.squares);   // calculateWinner returns X, O if winners, or null  

    const moves = history.map((step, move) => {      // iterates 'history' via map(currentValue, index) 
      const desc = move ?                           // if index = !0 , display reads "Go to move 'index'"  
        'Go to move #' + move :                    //  if index = 0  (starting state of history), display reads otherwise  
        'Go to game start';
      return (
        <li key={move}>                         
          <button onClick={() => this.jumpTo(move)}>{desc}</button> 
        </li>
      );
    });

    // <li> HTML tag defines a list item, assigning a proper key, referencing the history[index] - number of the move/step)
    // .map iterates through history, rendering a series of buttons anew each time
    // Each button is sets up an onClick event listener which triggers jumpTo() method

    let status;                               // still within render(method)
    if (winner) {                          
      status = "Winner: " + winner;         // 'status' variable reflects the winner or the next player 
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (                                     
      <div className="game">              
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// The render() method reflects:
//     - squares {} (the current state of the board )
//     - onClick - passes the index [i] as argument to the handleClick() function 
//     - status (Winner or Next Player message) and moves

// Note <ol> HTML tag defines an ordered list, passed the value of 'moves' variable (list of buttons)

// What does the Square function do? Does it just display the value X or 0, as passed to it by Board 
// What does the Board class do? Has a renderSquare() that passes value to Square and sets up a onClick event listener 

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
