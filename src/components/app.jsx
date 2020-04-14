import React, { Component } from 'react';

import FlatList from './flat-list.jsx';
import flats from '../data/flats.js'
import GoogleMapReact from 'google-map-react';
import Marker from './marker.jsx'


class App extends Component { // A stateful component needs to
  constructor(props) { // be promoted into a class
    super(props);

    this.state = {
      selectedFlat: flats[0],
      flats
    }
  }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList flats={this.state.flats} selectedFlat={this.state.selectedFlat} selectFlat={this.selectFlat} />
        </div>
        <div className="map-container">
          <GoogleMapReact defaultCenter={this.center()} defaultZoom={12} >
            <Marker lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
