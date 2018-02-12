/**
 * Created by nitesood on 05-Feb-18.
 */

import React, { Component } from 'react';
import Maps from '../Maps';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styles from './style';
import AppBar from 'material-ui/AppBar';
import RestaurantCard from './RestaurantCard';


class Result extends Component {
  constructor(props){
    super(props);

    this.state = {
      center: {lat: 12.930459, lng: 77.634707},
      zoom: 15,
      lat: 12.930459,
      lng: 77.634707,
      data: ''
    }
  }

  render(){
    return (
      <MuiThemeProvider>
        <div>
          <div style={styles.root} className="restaurant-list">
            <AppBar
              title={this.props.location.currentLocation.data.location.city_name}
              iconElementLeft={<div/>}
            />
            {
              this.props.location.currentLocation.data.nearby_restaurants.map((list) => (
                <RestaurantCard list={list}/>
              ))
            }
          </div>
          <Maps
            {...this.props}
            lat={(this.props.location.currentLocation)? this.props.location.currentLocation.lat : this.state.lat}
            lng={(this.props.location.currentLocation)? this.props.location.currentLocation.lng : this.state.lng}
            center={(this.props.location.currentLocation)? this.props.location.currentLocation : this.state.center}
            data={(this.props.location.currentLocation)? this.props.location.currentLocation.data : this.state.data}
          >
          </Maps>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Result;
