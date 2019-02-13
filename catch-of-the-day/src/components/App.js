import React, { Component } from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class App extends Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagLine="Frash seafood market" age={1000} />
          <Header tagLine="Second" age={50} />
        </div>
        <Order />
        <Inventory />
      </div>
    );
  }
}

export default App;
