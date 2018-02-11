/**
 * Created by nitesood on 05-Feb-18.
 */

import React, { Component,Text } from 'react';
import Maps from '../Maps';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './styles';
import StarRatingComponent from 'react-star-rating-component';
import RupeeIcon from '../../images/rupee-indian.png';
import logo from '../../images/logo.svg';
import LocationIcon from 'material-ui-icons/LocationOn'
import AppBar from 'material-ui/AppBar';
import DemoImage from '../../images/sample.jpg';
import Star from 'material-ui-icons/Star';
import Badge from 'material-ui/Badge';

const Rupee = props => (
  <svg >
    <RupeeIcon/>
  </svg>
)

const Stars = (props) => (
  <StarRatingComponent
    name="restaurant-cost" /* name of the radio input, it is required */
    value={props.price_range} /* number of selected icon (`0` - none, `1` - first) */
    renderStarIcon={()=> <Star style={{color: 'white'}}/>} /* it should return string or react component */
    starColor='white' /* color of selected icons, default `#ffb400` */
    editing={false} /* is component available for editing, default `true` */
  />
)


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

                <Card style={styles.card}>
                  <a href={list.restaurant.url} target="_blank">
                  <CardMedia
                    overlay={<CardTitle
                      style={{paddingTop: 0}}
                      title={list.restaurant.name}
                      subtitle= {
                        <div>
                          <div style={{fontSize: 16, color: '#fcfcfc', float: 'left'}}>
                            {list.restaurant.location.locality}
                          </div>
                          <div style={{ float: 'right', paddingBottom: 4, marginTop : -15}}>
                            <Badge
                              badgeContent={(list.restaurant.user_rating.aggregate_rating)? list.restaurant.user_rating.aggregate_rating : 'NA'}
                              badgeStyle={{backgroundColor: '#'+list.restaurant.user_rating.rating_color, fontSize: 16, color: 'white', width:32, height:32}}
                            />
                          </div>
                        </div>
                      }
                    />}
                  >
                    <img
                      src={(list.restaurant.featured_image)? list.restaurant.featured_image : DemoImage}
                      alt={list.restaurant.name}
                      style={styles.resImage}/>
                  </CardMedia>
                  </a>
                  <CardText style={styles.cardText}>
                    <div>
                      <div style={styles.cardTitle}>Cuisines: </div>
                      <div style={styles.cardTitleContent}>{list.restaurant.cuisines}</div>
                    </div>
                  </CardText>
                  <CardText style={styles.cardText}>
                    <div>
                      <div style={styles.cardTitle}>Price for two: </div>
                      <div style={styles.cardTitleContent}>{list.restaurant.currency}{list.restaurant.average_cost_for_two}</div>
                    </div>
                  </CardText>
                  <CardActions style={{paddingTop: 8, textAlign : 'center'}}>
                    <RaisedButton
                      label="Book table"
                      disabled={(list.restaurant.book_url)? false: true}
                      secondary={true}
                      href={(list.restaurant.book_url)?list.restaurant.book_url : list.restaurant.url}
                      target="_blank"
                    />
                    <RaisedButton
                      label="Reviews"
                      href={list.restaurant.url}
                      target="_blank"
                    />
                    <RaisedButton
                      label="Order Now"
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
