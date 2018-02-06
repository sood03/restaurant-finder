/**
 * Created by nitesood on 04-Feb-18.
 */

import BackgroundImage from '../../images/background.jpeg';

export default {
  logo : {
    height: 80,
  },

  toolbar : {
    backgroundColor: '#00BCD4',
    padding : 45,
    flex: 1
  },
  appTitle : {
    fontSize: 1.5
  },

  backgroundImage : {
    height: 800,
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundImage: `url(${BackgroundImage})`,
    backgroundColor: '#FBFAFA',
  },

  locationSearchBox : {
    display: 'flex',
    // height: 50,

    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
    // textAlign: 'center',
    // display: 'inline-block',
  },

  locationSearchText: {
    backgroundColor : 'white',
    borderRadius : 8,
    margin: 10,
    width: 500
  },

  locationInputStyle : {
    marginLeft: 10
  },

  locationSearchButton :{
    margin : 10,
  }

}