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

const AnyReactComponent = ({ text }) => (
  <div style={{
    position: 'relative', color: 'white', background: 'red',
    height: 40, width: 60, top: -20, left: -30,
  }}>
    {text}
  </div>
);

class Maps extends Component {
  static defaultProps = {
    center: {lat: 12.9279, lng: 77.6271},
    zoom: 13
  };

  render() {
    return (
      <div style={{height: 800}}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={12.9279}
            lng={77.6271}
            text={'Meesho'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Maps;
