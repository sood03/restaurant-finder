/**
 * Created by nitesood on 05-Feb-18.
 */

import React, { Component } from 'react';
import Maps from '../Maps';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class Result extends Component {
  constructor(props){
    super(props);

    this.state = {
      center: {lat: 12.930459, lng: 77.634707},
      zoom: 16,
      lat: 12.930459,
      lng: 77.634707,
      data: ''
    }
  }

  render(){
    return (
      <MuiThemeProvider>
        <div>
          <Maps
            {...this.props}
            lat={(this.props.location.currentLocation)? this.props.location.currentLocation.lat : this.state.lat}
            lng={(this.props.location.currentLocation)? this.props.location.currentLocation.lng : this.state.lng}
            center={(this.props.location.currentLocation)? this.props.location.currentLocation : this.state.center}
            data={(this.props.location.currentLocation.data)? this.props.location.currentLocation.data : this.state.data}
          />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Result;
