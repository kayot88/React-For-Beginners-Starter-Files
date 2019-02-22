import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Order extends React.Component {
  static propTypes = {
    fishes: PropTypes.object,
    order: PropTypes.object,
    deleteFromOrder: PropTypes.func
  };
  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === 'available';

    if (!fish) return null;

    if (!isAvailable) {
      return (
        <CSSTransition
          classNames="order"
          key={key}
          timeout={{ enter: 250, exit: 250 }}
        >
          <li key={key}>
            Sorry {fish ? fish.name : 'fish'} is no longer available
          </li>
        </CSSTransition>
      );
    }
    return (
      <CSSTransition
        classNames="order"
        key={key}
        timeout={{ enter: 250, exit: 250 }}
      >
        <li key={key}>
          <span>
            <TransitionGroup component="span" className="count">
              <CSSTransition
                classNames="count"
                key={count}
                timeout={{ enter: 2000, exit: 2000 }}
              >
                <span>{count}</span>
              </CSSTransition>
            </TransitionGroup>
            lbs {fish.name}
            {formatPrice(count * fish.price)}
          </span>
          <button onClick={() => this.props.deleteFromOrder(key)}>
            &times;
          </button>
        </li>
      </CSSTransition>
    );
  };
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';
      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <TransitionGroup component="ul" className="order">
          {orderIds.map(this.renderOrder)}
        </TransitionGroup>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;

// import React, { Component } from 'react';
// import { formatPrice } from '../helpers';
// class Order extends Component {
//   // renderOrder = key => {
//   //   const fish = this.props.fishes[key];
//   //   const count = this.props.order[key];
//   //   // const isAvailable = fish.status === 'available';
//   //   // if (!isAvailable) {
//   //   //   <li>Sorry {fish ? fish.name : 'fish'} is out of available</li>;
//   //   // }
//   //   // return <li>
//   //   //     {count} lbs {fish.name}
//   //   //     {formatPrice(count * fish.price)}
//   //   //   </li>
//   // };
//   render() {
//     const orderIds = Object.keys(this.props.order);
//     const total = orderIds.reduce((prevTotal, key) => {
//       const fish = this.props.fishes[key];
//       const count = this.props.order[key];
//       const isAvailable = fish && fish.status === 'available';
//       if (isAvailable) {
//         return prevTotal + count * fish.price;
//       }
//       return prevTotal;
//     }, 0);
//     return (
//       <div className="order-wrap">
//         <h2>Order</h2>
//         <ul>{orderIds.map(key => <li>{key}</li>)}</ul>
//         <div className="total">
//           Total:
//           <strong>{formatPrice(total)}</strong>
//         </div>
//       </div>
//     );
//   }
// }

// export default Order;
