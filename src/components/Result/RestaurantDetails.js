/**
 * Created by nitesood on 11-Feb-18.
 */

import styles from './styles';
import {CardText} from 'material-ui/Card';
import React  from 'react';

const RestaurantDetails = (data) => (
  <CardText style={styles.cardText}>
    <div>
      <div style={styles.cardTitle}>{data.title}: </div>
      <div style={styles.cardTitleContent}>{data.titleDetail}</div>
    </div>
  </CardText>
);

export default RestaurantDetails;
