import React, { Component } from 'react';

const Header = ({ tagLine, age }) => (
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
        {tagLine} {age}
      </span>
    </h3>
  </header>
);

export default Header;
