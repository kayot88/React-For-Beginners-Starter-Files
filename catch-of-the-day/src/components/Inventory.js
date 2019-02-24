import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import Login from './Login';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';
import base, { firebaseApp } from '../base';

class Inventory extends Component {
  static propTypes = {
    fishes: PropTypes.object,
    updatedFish: PropTypes.func,
    deleteFish: PropTypes.func,
    loadSampleFishes: PropTypes.func
  };

  state = {
    uid: null,
    owner: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  authHandler = async authData => {
    const store = await base.fetch(this.props.storeId, { context: this });
    console.log(store);
    console.log(authData);
    if (!store.owner) {
      base.post(`${this.props.storeId}/owner`, { data: authData.user.uid });
    }
    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid
    });
  };

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  logout = async () => {
    await firebase.auth().signOut();
    this.setState({ uid: null });
  };

  render() {
    const logout = <button onClick={this.logout}>Log Out</button>;
    if (!this.state.uid) {
      return <Login authenticate={this.authenticate} />;
    }

    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>Sorry you are not the owner</p>
          {logout}
        </div>
      );
    }

    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {logout}
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
