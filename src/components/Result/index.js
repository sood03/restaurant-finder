/**
 * Created by nitesood on 05-Feb-18.
 */

import React, { Component } from 'react';
import Maps from '../Maps';

class Result extends Component {
  constructor(props){
    super(props);
  }


  render(){
    // console.log('lat: ' + this.props.currentLocation.lat);
    // console.log('lng: ' + this.props.currentLocation.lng);

    return (
      <div>
        <Maps
          {...this.props}
          lat={this.props.location.currentLocation.lat}
          lng={this.props.location.currentLocation.lng}
          center={this.props.location.currentLocation}
        />
      </div>
    )
  }
}

export default Result;
