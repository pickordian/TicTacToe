import React, { Component } from 'react'
import './Square.css'
export default class Square extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { value, onClickButton } = this.props;
      return (
        <button  className='Square' onClick={onClickButton}>{value}</button>
      )
    }
}
