import React, { Component } from 'react'

export default class index extends Component {

  render() {
    const { 
      text,
      onClick,
      type 
    } = this.props;
    return (
      <button 
        onClick={onClick} 
        {...this.props}
        type={type}
      >
        {text}
      </button>
    )
  }
}
