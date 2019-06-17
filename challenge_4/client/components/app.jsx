import React from 'react'
import Board from './Board.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
        board:
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ] 
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount () {
      this.handleBombs();
      this.handleFlags();
  }

  handleClick () {
    console.log('Hello click')
  }

  handleBombs () {
      //   insert 10 random bombs
    for(let i = 0; i < 10; i++){
        let r1 = Math.ceil(Math.random() * 9);
        let r2 = Math.ceil(Math.random() * 9);
        let currentBoard = this.state.board;
        currentBoard[r1][r2] = -1;
        this.setState({board : currentBoard });
    }
  }

  handleFlags () {
    for(let i = 0; i < 10; i++){
        let counter;
        for(let j = 0; j < 10; j++){
            counter = 0;
            if(this.state.board[i][j] >= 0){

                if(this.state.board[i][j + 1] === -1){
                    counter++;
                }
                if(this.state.board[i][j - 1] === -1){
                    counter++;
                }
                if(this.state.board[i - 1] && this.state.board[i - 1][j - 1] === -1){
                    counter++;
                }
                if(this.state.board[i - 1] && this.state.board[i - 1][j] === -1){
                    counter++;
                }
                if(this.state.board[i - 1] && this.state.board[i - 1][j + 1] === -1){
                    counter++;
                }
                if(this.state.board[i  + 1] && this.state.board[i + 1][j - 1] === -1){
                    counter++;
                }
                if(this.state.board[i  + 1] && this.state.board[i + 1][j] === -1){
                    counter++;
                }
                if(this.state.board[i  + 1] && this.state.board[i + 1][j + 1] === -1){
                    counter++;
                } 
                let currentBoard = this.state.board;
                currentBoard[i][j] = counter;
                this.setState({board : currentBoard });
            }
        }
    }
  }

  render () {
    return (
    <div class="container">
        < Board click={this.handleClick} boardState={this.state.board}/>
    </div>
    )}
}

export default App;