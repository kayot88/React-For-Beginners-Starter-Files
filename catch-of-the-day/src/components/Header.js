import React, { Component } from 'react';
import PropTypes from 'prop-types';


const Header = props => (
  <header className="top">
    <h1>
      Catch
      <span
        className="ofThe
    "
      >
        <span className="Of">of</span>
        <span className="The">the</span>
      </span>
      Day
    </h1>
    <h3 className="tagLine">
      <span>
        {props.tagLine}
      </span>
    </h3>
  </header>
);

Header.propTypes = {
  tagLine: PropTypes.string.isRequired
}



export default Header;
