/**
 * Created by nitesood on 04-Feb-18.
 */
import React, { Component } from 'react';
import GoogleMap, {} from 'google-map-react';

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
    this.state = {
      zoom: 15
    }
  }

  renderMarkers(map, maps) {
    console.log("data: " + this.props.data);
    var marker;
    this.props.data.nearby_restaurants.map((list) =>{
      console.log("list: " + list);
        marker = new maps.Marker({
          position: {lat: +list.restaurant.location.latitude, lng: +list.restaurant.location.longitude},
          map,
          title: list.restaurant.name
        });
    });
  }

  render() {
    return (
      <div className="map-shown">
      <GoogleMap
        defaultZoom={this.state.zoom}
        defaultCenter={{
          lat: this.props.lat,
          lng: this.props.lng
        }}
        onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
      >

        <CurrentLocation
          lat={this.props.lat}
          lng={this.props.lng}
        />

      </GoogleMap>
        </div>
    );
  }
}

export default Maps;