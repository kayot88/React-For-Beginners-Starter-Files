import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="top">
        <h1>
          Catch
          <span className="ofThe">
            <span className="Of">of</span>
            <span className="The">the</span>
          </span>
          Day
        </h1>
        <h3 className="tagLine">
          <span>Fresh Day</span>
        </h3>
      </header>
    );
  }
}

export default Header;
