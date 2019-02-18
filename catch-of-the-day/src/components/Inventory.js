import React, { Component } from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <AddFishForm addFish={this.props.addFish}/>
        <form />
        <button type="submit" onClick={this.props.loadSampleFishes}>Load Sample Fishes!</button>
      </div>
    );
  }
}

export default Inventory;
