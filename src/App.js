import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import Store from './Store.js';
import CartView from './CartView.js';
import Cart from "./Cart.js";

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

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      cartBeingShown: null
    };


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
    this.updated = false

    this.cartSize = 0



    this.handler = this.handler.bind(this)
  }

  handler(e) {
    this.setState({
      page: this.state.page
    })
  }

  navToShopPage() {
    this.setState({page: 0})
  }

  renderPageView() {
    if(this.state.page === 0){
      return <Home/>
    }
    if(this.state.page === 1){
      return <Store handler = {this.handler}/>      
    }
    if(this.state.page === 2){
      return <Cart/>      
    }
  }

  setQuantities(){
    for(var i = 0; i < 15; i++){
      var currentItem = this.buns.inventory[i]
      if(localStorage.getItem(currentItem.title) == null){
        localStorage.setItem(currentItem.title, 0);
      }
      if(localStorage.getItem(currentItem.title) == null){
        localStorage.setItem(currentItem.title, 0);
      }
    }
  }

  setCartSize(){
    this.cartSize = 0
    for(var i = 0; i < 15; i++){
      var currentItem = this.buns.inventory[i]
      this. cartSize += parseInt(localStorage.getItem(currentItem.title))
    }
    return this.cartSize
  }


  drawNav(){
    return(
      <div className = "App-navMenu">
        <div className = {"App-navMenu-button" + (this.state.page === 0 ? " active" : "")} onClick={this.navToShopPage.bind(this)}>Home</div>
        <div className = {"App-navMenu-button" + (this.state.page === 1 ? " active" : "")} onClick={(ev) => this.setState({page: 1})} >Shop</div>        
        <div className = {"App-navMenu-button" + (this.state.page === 2 ? " active" : "")} onMouseOver={this.showCart.bind(this)} onMouseOut={this.hideCart.bind(this)}onClick={(ev) => this.setState({page: 2})} >Cart: {this.setCartSize()}  </div>     
      </div>
      )
  }

  renderCartView() {
    if(this.state.cartBeingShown !== null)
    {
      return this.state.cartBeingShown
    }
  }

  showCart() {
    var currentCart = <CartView onClose = {(ev) => this.setState({cartBeingShown: null})} />
    this.setState({cartBeingShown: currentCart})
  }

  hideCart(){
    this.setState({cartBeingShown: null})
  }

  setUpdate(){
    this.shouldUpdate = true
    console.log('rendering app')

  }

  // updateDisplay(){
  //   if(this.shouldUpdate && (this.shouldUpdatePrev == false)){
  //     this.shouldUpdatePrev = this.shouldUpdate 
  //     this.shouldUpdate = false     
  //     this.setState({page : 1})
  //   }else{
  //     this.shouldUpdatePrev = false
  //   }
  // }

  render() {

    return (
      <div className="App">
      {this.setQuantities()}

        <div className = "App-background" />
        <div className = "App-content" >
          {this.drawNav()}
          {this.renderCartView()}
          <div>
          </div>
          <div>
            {this.renderPageView()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;


