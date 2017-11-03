import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom'

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


class Item extends Component{
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

    this.buns = {
      inventory: [Bacon, BirthdayCake, Blackberry, CaramelPecan, CarrotCake, Cranberry, GlutenFree, LemonLavender, MappleApplePecan,
      OldFashionedButterMilk, Original, PumpkinSpice, StrawberryRhubarb, Vegan, Walnut],
      detail: null,
    }
    this.cartList = []
  }

  drawBuns(currentItem){
    if(localStorage.getItem(currentItem.title) >0){
      var statement = currentItem.title + " : " + localStorage.getItem(currentItem.title)
      return(<div>{statement}</div>)
    }
  }





  render() {
    return (
      <div> 
        <div>
          <div className = "Cart-List">
            {this.buns.inventory.map(currentItem => this.drawBuns(currentItem))}
          </div>

        </div>
      </div>
    );
  }
}


export default Item;