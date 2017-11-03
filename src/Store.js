import React, { Component } from 'react';
import './App.css';
import Item from './Item.js';
import ItemView from './ItemView.js'

import BaconBun from "./images/Bacon.png"
import BirthdayCakeBun from "./images/Birthday Cake.png"
import BlackberryBun from "./images/Blackberry.png"
import CaramelPecanBun from "./images/Caramel Pecan.png"
import CarrotCakeBun from "./images/Carrot Cake.png"
import CranberryBun from "./images/Cranberry.png"
import GlutenFreeBun from "./images/Gluten Free.png"
import LemonLavenderBun from "./images/Lemon Lavender.png"
import MappleApplePecanBun from "./images/Mapple Apple Pecan.png"
import OldFashionedButterMilkBun from "./images/Old Fashioned Buttermilk.png"
import OriginalBun from "./images/Original.png"
import PumpkinSpiceBun from "./images/Pumpkin Spice.png"
import StrawberryRhubarbBun from "./images/Strawberry Rhubarb.png"
import VeganBun from "./images/Vegan.png"
import WalnutBun from "./images/Walnut.png"


export class Store extends Component{
  constructor(props) {
    super(props);
    var Bacon = {image: BaconBun, quantity: localStorage.getItem('Bacon'), price: 2, title: "Bacon", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
    var BirthdayCake = {image: BirthdayCakeBun, quantity: 0, price: 2, title: "Birthday Cake", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
    var Blackberry = {image: BlackberryBun, quantity: 0, price: 2, title: "Blackberry ", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
    var CaramelPecan = {image: CaramelPecanBun, quantity: 0, price: 2, title: "Caramel Pecan ", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
    var CarrotCake = {image: CarrotCakeBun, quantity: 0, price: 2, title: "Carrot Cake", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
    var Cranberry = {image: CranberryBun, quantity: 0, price: 2, title: "Cranberry", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
    var GlutenFree = {image: GlutenFreeBun, quantity: 0, price: 2, title: "Gluten Free", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
    var LemonLavender = {image: LemonLavenderBun, quantity: 0, price: 2, title: "Lemon Lavender", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
    var MappleApplePecan = {image: MappleApplePecanBun, quantity: 0, price: 2, title: "Maple Apple Pecan", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
    var OldFashionedButterMilk = {image: OldFashionedButterMilkBun, quantity: 0, price: 2, title: "Buttermilk", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
    var Original = {image: OriginalBun, quantity: 0, price: 2, title: "Original", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
    var PumpkinSpice = {image: PumpkinSpiceBun, quantity: 0, price: 2, title: "Pumpkin Spice", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
    var StrawberryRhubarb = {image: StrawberryRhubarbBun, quantity: 0, price: 2, title: "Strawberry Rhubarb", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
    var Vegan = {image: VeganBun, quantity: 0, price: 2, title: "Vegan", description: "Lorem ipsum dolor sit amet."}
    var Walnut = {image: WalnutBun, quantity: 0, price: 2, title: "Walnut", description: "Lorem ipsum dolor sit amet."}

    this.state = {
      inventory: [Bacon, BirthdayCake, Blackberry, CaramelPecan, CarrotCake, Cranberry, GlutenFree, LemonLavender, MappleApplePecan,
      OldFashionedButterMilk, Original, PumpkinSpice, StrawberryRhubarb, Vegan, Walnut],
      detail: null,
    }

    this.currentItem = 1
  }


  selectItem(id) {
    this.currentItem = this.state.inventory[id]
    var currentView = <ItemView onClose = {(ev) => this.setState({detail: null})} image = {this.currentItem.image} quantity = {this.currentItem.quantity} title = {this.currentItem.title} price = {this.currentItem.price} description = {this.currentItem.description} />
    this.setState({detail: currentView})
  }


  renderItemView() {
    if(this.state.detail !== null)
    {
      return this.state.detail
    }
  }

  addOne(){
    console.log(this.currentItem.title)
    var currentValue = localStorage.getItem(this.currentItem.title)
    localStorage.setItem(this.currentItem.title, parseInt(currentValue)+1)
    var currentView = <ItemView onClose = {(ev) => this.setState({detail: null})} image = {this.currentItem.image} quantity = {this.currentItem.quantity} title = {this.currentItem.title} price = {this.currentItem.price} description = {this.currentItem.description} />
    this.setState({detail: currentView})
    this.props.handler()
    return localStorage.getItem(this.currentItem.title)
  }

  deleteOne(){
    var currentValue = localStorage.getItem(this.currentItem.title)
    if(localStorage.getItem(this.currentItem.title) > 0){
      localStorage.setItem(this.currentItem.title, parseInt(currentValue)-1)
    }
    var currentView = <ItemView onClose = {(ev) => this.setState({detail: null})} image = {this.currentItem.image} quantity = {this.currentItem.quantity} title = {this.currentItem.title} price = {this.currentItem.price} description = {this.currentItem.description} />
    this.setState({detail: currentView})
    this.props.handler()
    return localStorage.getItem(this.currentItem.title)
  }

  renderButtons(){
    if(this.state.detail != null){
      return(
        <div className = "App-navMenu">
          <div className = "App-navMenu-button" onClick={this.deleteOne.bind(this)} >-</div>
          <div className = "App-navMenu-not-button" >Quantity</div>
          <div className = "App-navMenu-button" onClick={this.addOne.bind(this)} >+</div>
        </div>
      )
    }
  }

  renderInventory() {
    var elements = []
    for(var i=0; i < this.state.inventory.length; i++)
    {
      var currentItem = this.state.inventory[i]
      elements.push(<Item onClick = {this.selectItem.bind(this, i)} image = {currentItem.image} title = {currentItem.title} description = {currentItem.description} price = {currentItem.price} quantity = {currentItem.quantity}/>)
    }
    return (
      <div>
            {this.renderItemView()}
            {this.renderButtons()}
            {elements}
      </div>
    )
  }


  render() {
    return (
      this.renderInventory()
    );
  }
}


export default Store;
