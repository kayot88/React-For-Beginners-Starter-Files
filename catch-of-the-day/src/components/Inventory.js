import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';

class Inventory extends Component {
  static propTypes = {
    fishes: PropTypes.object,
    updatedFish: PropTypes.func,
    deleteFish: PropTypes.func,
    loadSampleFishes: PropTypes.func
  };
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(key => {
          return (
            <EditFishForm
              key={key}
              index={key}
              fish={this.props.fishes[key]}
              updatedFish={this.props.updatedFish}
              deleteFish={this.props.deleteFish}
            />
          );
        })}
        <AddFishForm addFish={this.props.addFish} />
        <form />
        <button type="submit" onClick={this.props.loadSampleFishes}>
          Load Sample Fishes!
        </button>
      </div>
    );
  }
}

export default Inventory;
