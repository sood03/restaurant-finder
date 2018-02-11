/**
 * Created by nitesood on 11-Feb-18.
 */
import RestaurantDetails from './RestaurantDetails';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './styles';import DemoImage from '../../images/sample.jpg';
import Badge from 'material-ui/Badge';
import React from 'react';

const RestaurantCard = (props) => (
  <Card style={styles.card}>
    <a href={props.list.restaurant.url} target="_blank">
      <CardMedia
        overlay={<CardTitle
          style={{paddingTop: 0}}
          title={props.list.restaurant.name}
          subtitle= {
            <div>
              <div style={{fontSize: 16, color: '#fcfcfc', float: 'left'}}>
                {props.list.restaurant.location.locality}
              </div>
              <div style={{ float: 'right', paddingBottom: 4, marginTop : -15}}>
                <Badge
                  badgeContent={(props.list.restaurant.user_rating.aggregate_rating)? props.list.restaurant.user_rating.aggregate_rating : 'NA'}
                  badgeStyle={{backgroundColor: '#'+props.list.restaurant.user_rating.rating_color, fontSize: 16, color: 'white', width:32, height:32}}
                />
              </div>
            </div>
          }
        />}
      >
        <img
          src={(props.list.restaurant.featured_image)? props.list.restaurant.featured_image : DemoImage}
          alt={props.list.restaurant.name}
          style={styles.resImage}/>
      </CardMedia>
    </a>

    <RestaurantDetails title = 'Cuisines' titleDetail = {props.list.restaurant.cuisines}/>
    <RestaurantDetails title='Price for two' titleDetail={props.list.restaurant.currency + props.list.restaurant.average_cost_for_two}/>

    <CardActions style={{paddingTop: 8, textAlign : 'center'}}>
      <RaisedButton
        label="Book table"
        disabled={(props.list.restaurant.book_url)? false: true}
        secondary={true}
        href={(props.list.restaurant.book_url)?props.list.restaurant.book_url : props.list.restaurant.url}
        target="_blank"
      />
      <RaisedButton
        label="Reviews"
        href={props.list.restaurant.url}
        target="_blank"
      />
      <RaisedButton
        label="Order Now"
        href={props.list.restaurant.url}
        target="_blank"
      />
    </CardActions>
  </Card>
)

export default RestaurantCard
