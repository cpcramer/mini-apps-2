import React from 'react'

class Row extends React.Component {
  render (props) {
    return (
    <div className="col-sm">
        <div className="square" onClick={this.props.click}>
            {this.props.boardState[0]}
        </div>
        <div className="square" onClick={this.props.click}>
            {this.props.boardState[1]}
        </div>
        <div className="square" onClick={this.props.click}>
            {this.props.boardState[2]}
        </div>
        <div className="square" onClick={this.props.click}>
            {this.props.boardState[3]}
        </div>
        <div className="square" onClick={this.props.click}>
            {this.props.boardState[4]}
        </div>
        <div className="square" onClick={this.props.click}>
            {this.props.boardState[5]}
        </div>
        <div className="square" onClick={this.props.click}>
            {this.props.boardState[6]}
        </div>
        <div className="square" onClick={this.props.click}>
            {this.props.boardState[7]}
        </div>
        <div className="square" onClick={this.props.click}>
            {this.props.boardState[8]}
        </div>
        <div className="square" onClick={this.props.click}>
            {this.props.boardState[9]}
        </div>
    </div>
    )}
}

export default Row;