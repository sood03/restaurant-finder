import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Person from 'material-ui-icons/Person';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import styles from './style';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
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

  onSuggestSelect(suggest) {
    console.log(suggest);
  }

  render() {

    return (
      <MuiThemeProvider>
        <div className="background-image" style={styles.backgroundImage}>
          <div style={styles.overLay}>
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
            <PlaceAutoSuggest/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
