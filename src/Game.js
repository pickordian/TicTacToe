import React, { Component } from 'react'
import Board from './Board'
import './Game.css'
export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "X turn"
    }
    this.setMessage = this.setMessage.bind(this);
  }
  setMessage = (i_message) => {
    this.setState({
      message: i_message
    });
  }
  render() {
    return (
      <div className="Game" >
        <p> {this.state.message} </p>
        <Board setMessage={this.setMessage} ></Board>
      </div>
    )
  }
}
