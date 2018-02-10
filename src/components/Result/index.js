/**
 * Created by nitesood on 05-Feb-18.
 */

import React, { Component } from 'react';
import Maps from '../Maps';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import styles from './styles';

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
            {
              this.props.location.currentLocation.data.nearby_restaurants.map((list) => (
                <Card style={styles.card}>
                  <CardMedia
                    overlay={<CardTitle title={list.restaurant.name} subtitle={list.restaurant.location.locality}/>}
                  >
                    <img src={list.restaurant.featured_image} alt={list.restaurant.name} style={styles.resImage}/>
                  </CardMedia>
                  <CardText>
                    {list.restaurant.cuisines}
                  </CardText>
                  <CardActions>
                    <FlatButton
                      label="Book table"
                      href={(list.restaurant.book_url)?list.restaurant.book_url : list.restaurant.url}
                      target="_blank"
                    />
                    <FlatButton
                      label="Reviews"
                      href={list.restaurant.url}
                      target="_blank"
                    />
                  </CardActions>
                </Card>
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
