import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Person from 'material-ui-icons/Person';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import styles from './style';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import zomato from 'zomato';
import Maps from '../Maps';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import PlaceAutoSuggest from '../PlaceAutoSuggest';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      locationText : ''
    }
  }

  setLocationText = (text) => {
    this.setState({
      locationText : text
    })
  }

  fetchList(){

    console.log("Fetching");
    var client = zomato.createClient({
      userKey : '7749b19667964b87a3efc739e254ada2'
    });

    console.log("client created");

    client.getCities({
      q:"New Delhi", //query by city name
      lat:"28.613939", //latitude
      lon:"77.209021", //longitude
      city_ids:"1,2,3", //comma separated city_ids value
      count:"2" // number of maximum result to display
    }, function(err, result){
      if(!err){
        console.log(result);
      }else {
        console.log(err);
      }
    });
  }

  onSuggestSelect(suggest) {
    console.log(suggest);
  }

  render() {

    return (
      <MuiThemeProvider>
        <Toolbar style={styles.toolbar}>
          <ToolbarGroup>
            <img src={logo} style={styles.logo} alt="logo" />
            <ToolbarTitle text="Restaurant Finder" style={{color : 'white', paddingLeft: 20, fontSize : 30}}/>
          </ToolbarGroup>
          <ToolbarGroup>

            <ToolbarTitle text="Sood" style={{color : 'white', fontSize : 26}}/>
            <IconMenu
              iconStyle = {{color : 'white', width : 26, height : 26}}
              iconButtonElement={

                <IconButton touch={true} style={{color : 'white'}}>
                  <Person/>
                </IconButton>
              }
              anchorOrigin={{horizontal:"left",vertical:"bottom"}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
            >
              <MenuItem primaryText="Profle" />
              <MenuItem primaryText="Logout" />
            </IconMenu>
          </ToolbarGroup>
        </Toolbar>

        <div className="background-image" style={styles.backgroundImage}>
          <PlaceAutoSuggest/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
