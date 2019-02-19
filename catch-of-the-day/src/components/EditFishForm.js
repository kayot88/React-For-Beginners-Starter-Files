import React, { Component } from 'react';

class EditFishForm extends Component {
  handlerChange = event => {
    // console.log(event.currentTarget.value);
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updatedFish(this.props.index, updatedFish);
  };
  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handlerChange}
          value={this.props.fish.name}
        />
        <input
          type="text"
          name="price"
          onChange={this.handlerChange}
          value={this.props.fish.price}
        />
        <select
          type="text"
          name="status"
          onChange={this.handlerChange}
          value={this.props.fish.status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold out!</option>
        </select>
        <textarea
          name="desc"
          onChange={this.handlerChange}
          value={this.props.fish.desc}
        />
        <input
          type="text"
          name="image"
          onChange={this.handlerChange}
          value={this.props.fish.image}
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Delete Fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;
