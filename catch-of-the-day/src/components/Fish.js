import React from "react";
import PropTypes from 'prop-types';
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string, 
      price: PropTypes.number
    })
  }
  render() {
    const { image, name, price, desc, status } = this.props.details;
    // console.log(status);
    const isAvailable = status === "available";
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button
          disabled={!isAvailable}
          onClick={() => this.props.addToOrder(this.props.index)}
        >
          {isAvailable ? "Add To Order" : "Sold Out!"}
        </button>
      </li>
    );
  }
}

export default Fish;

// import React, { Component, Fragment} from 'react';
// import { formatPrice } from '../helpers';
// class Fish extends Component {
//   handleClick = () => {
//     this.props.addtoorder(this.props.indexKey)
//   }
//   render() {
//     const { image, name, price, desc, status } = this.props.details;
//     const isAvailable = status ==='available';
//     return (
//       <li className="menu-fish">
//         <img src={image} alt={name} />
//         <h3 className="fish-name">
//           {name}
//           <span className="price">{formatPrice(price)}</span>
//         </h3>
//         <p>{desc}</p>
//         <button addtoorder={this.props.addToOrder} disabled={!isAvailable} onClick={this.handleClick}>{isAvailable ? 'Add To Card' : 'Sold Out'}</button>
//       </li>
//     );
//   }
// }

// export default Fish;
