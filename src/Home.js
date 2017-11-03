import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
    };
  }


  render() {
    return (
      <div className="App">

          <header className="App-header">
            <p className="App-introHeader">
              Welcome To the Bun Bun Bake Shop!
            </p>
            <p className="App-introBody">
              We are a small bakery that specializes in cinnamon rolls, from our 
              famous classic cinnamon roll to a variety of artisan flavors. Our 
              shop is located in Pittsburgh, PA, but we ship fresh rolls to 
              anywhere in the USA. Visitors to our site should be able to buy 
              cinnamon rolls by different flavors.
            </p>
          </header>
          {console.log(this.state.page)}
      </div>
    );
  }
}

export default Home;


