/**
 * Created by nitesood on 04-Feb-18.
 */

// import React, { Component } from 'react';
// import logo from '../../logo.svg';
// import GoogleMapReact from 'google-map-react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
// import styles from './style';


import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const CurrentLocation = () => (
  <div style={{
    background: '#CBD9EF', height: 20, width: 20, borderRadius: 10
  }}>
    <div style={{
      position: 'relative', color: 'white', background: '#4285F4',
      height: 10, width: 10, borderRadius: 5, top: 5, left: 5
    }}>
    </div>
  </div>
);

class Maps extends Component {
  constructor(props){
    super(props);
  }

  static defaultProps = {
    center: {lat: 12.930459, lng: 77.634707},
    zoom: 13,
    lat: 12.930459,
    lng: 77.634707
  };

  render() {
    return (
      <div style={{height: 800}}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <CurrentLocation
          lat={this.props.lat}
          lng={this.props.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Maps;
