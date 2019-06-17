import React from 'react';
import Row from './Row.jsx';

class Board extends React.Component {
  render (props) {
    return (
    <div class="row">
        < Row click={this.props.click} boardState={this.props.boardState[0]}/>
        < Row click={this.props.click} boardState={this.props.boardState[1]}/>
        < Row click={this.props.click} boardState={this.props.boardState[2]}/>
        < Row click={this.props.click} boardState={this.props.boardState[3]}/>
        < Row click={this.props.click} boardState={this.props.boardState[4]}/>
        < Row click={this.props.click} boardState={this.props.boardState[5]}/>
        < Row click={this.props.click} boardState={this.props.boardState[6]}/>
        < Row click={this.props.click} boardState={this.props.boardState[7]}/>
        < Row click={this.props.click} boardState={this.props.boardState[8]}/>
        < Row click={this.props.click} boardState={this.props.boardState[9]}/>
      </div>
    )}
}

export default Board;