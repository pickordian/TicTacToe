import React, { Component, Fragment } from 'react'
import Square from './Square'
import './Board.css'
export default class Board extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.win = this.win.bind(this);
    this.state = {
      board: Array(3).fill(null).map(row => new Array(3).fill('-')),
      Xturn: true,
      turnNum: 0,
      isWin: false
    };

  }
  play = (row, col) => {
    if (this.state.board[row][col] == '-' && !this.state.isWin) {
      let message = "";
      let temp_board = [...this.state.board];
      temp_board[row][col] = this.state.Xturn ? "X" : "O";
      this.setState({
        board: temp_board,
        Xturn: !this.state.Xturn,
        turnNum: this.state.turnNum + 1,
      })
    
      if (this.win(row, col)) {
        message = temp_board[row][col] + " wins"
        this.setState({
          isWin: true
        });
      }
      else if (this.state.turnNum >= 8) {
        message = "tie";
      }
      else {
        message = (this.state.Xturn? "O" : "X") + " turn"
      }
      this.props.setMessage(message);
    }
    
  }
  win = (row, col) => {
    if (this.state.board[row][0] == this.state.board[row][1]
      && this.state.board[row][1] == this.state.board[row][2])
      return true;
    if (this.state.board[0][col] == this.state.board[1][col]
      && this.state.board[1][col] == this.state.board[2][col])
      return true;
    if (this.state.board[0][0] != '-'
      && this.state.board[0][0] == this.state.board[1][1]
      && this.state.board[0][0] == this.state.board[2][2])
      return true;
    if (this.state.board[2][0] != '-'
      && this.state.board[2][0] == this.state.board[1][1]
      && this.state.board[2][0] == this.state.board[0][2])
      return true;
  }
  render() {
    return (
      <div className='Board'>
        <Square value={this.state.board[0][0]} onClickButton={() => this.play(0, 0)} ></Square>
        <Square value={this.state.board[0][1]} onClickButton={() => this.play(0, 1)} ></Square>
        <Square value={this.state.board[0][2]} onClickButton={() => this.play(0, 2)} ></Square>
        <Square value={this.state.board[1][0]} onClickButton={() => this.play(1, 0)} ></Square>
        <Square value={this.state.board[1][1]} onClickButton={() => this.play(1, 1)} ></Square>
        <Square value={this.state.board[1][2]} onClickButton={() => this.play(1, 2)} ></Square>
        <Square value={this.state.board[2][0]} onClickButton={() => this.play(2, 0)} ></Square>
        <Square value={this.state.board[2][1]} onClickButton={() => this.play(2, 1)} ></Square>
        <Square value={this.state.board[2][2]} onClickButton={() => this.play(2, 2)} ></Square>
      </div>
    )
  }
}
