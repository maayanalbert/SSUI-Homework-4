import React, { Component } from 'react';
import './App.css';


class Item extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="productWrapper" onClick = {this.props.onClick}>
        <img className="productImage" src={this.props.image} title={this.props.title} />
        <div className="productLabel">{this.props.title}</div>
      </div>
    );
  }
}


export default Item;