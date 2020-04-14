import React, { Component } from 'react';

import Flat from './flat.jsx'

class FlatList extends Component { // A stateful component needs to
  constructor(props) { // be promoted into a class
    super(props);
  }

  render() {
    return this.props.flats.map((flat, index) => {
      return <Flat
                flat={flat}
                key={flat.lat}
                index={index}
                selected={flat.name === this.props.selectedFlat.name}
                selectFlat={this.props.selectFlat} />
    });
  }
}

export default FlatList;
