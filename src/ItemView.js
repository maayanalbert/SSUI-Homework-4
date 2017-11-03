import React, { Component } from 'react';
import './App.css';


class ItemView extends Component{
  constructor(props) {
    super(props);
  }

  addOne(){
    var currentValue = localStorage.getItem(this.props.title)
    localStorage.setItem(this.props.title, parseInt(currentValue)+1)
    return console.log(localStorage.getItem(this.props.title))

    /* Force Repaint */
    var quantityDisplay = document.getElementByClassName('productDetailPrice');

    quantityDisplay.style.display='none';
    // siteHeader.offsetHeight; // no need to store this anywhere, the reference is enough
    quantityDisplay.style.display='block';

  }

  render() {
    return (
      <div className="detailPane">
        <div className="Xout" onClick={this.props.onClose}>X</div>
        <div className="detailPane-inner">
          <img className="productDetailImage" src={this.props.image} alt={this.props.description} />
          <div className="productDetailMetaData">
            <div className="productDetailTitle">{this.props.title}</div>
            <div className="productDetailDescription">{this.props.description}</div>
            <div className="productDetailPrice">Price: ${this.props.price}</div>
            <div className="productDetailQuantity" onClick = {this.addOne.bind(this)} >Quantity: {localStorage.getItem(this.props.title)}</div> 
            {console.log(this.props.description)}
          </div>        
        </div>
      </div>
    );
  }

}


export default ItemView;