/**
 * Created by nitesood on 04-Feb-18.
 */
import React, { Component } from 'react';
import GoogleMap, {} from 'google-map-react';
import CurrentLocation from './CurrentLocation';

class Maps extends Component {
  constructor(props){
    super(props);
    this.state = {
      zoom: 15,
      data: ''
    }
  }

  renderMarkers(map, maps) {
    var infowindow = new maps.InfoWindow();
    var marker;
    this.props.data.nearby_restaurants.map((list,i) =>{
      marker = new maps.Marker({
        position: {lat: +list.restaurant.location.latitude, lng: +list.restaurant.location.longitude},
        map,
        animation: maps.Animation.DROP,
        title: list.restaurant.name
      });

      maps.event.addListener(marker, 'mouseover', (function(marker, i) {
        return function() {
          infowindow.setContent(list.restaurant.name);
          infowindow.open(map, marker);
        }
      })(marker, i));

      maps.event.addListener(marker, 'mouseout', (function(marker, i) {
        return function() {
          infowindow.close();
        }
      })(marker, i));

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