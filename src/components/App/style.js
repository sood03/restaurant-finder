/**
 * Created by nitesood on 04-Feb-18.
 */

import BackgroundImage from '../../images/background.jpeg';

export default {
  overLay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  logo : {
    height: 80,
  },

  toolbar : {
    backgroundColor: 'transparent',
    padding : 45,
    flex: 1
  },
  appTitle : {
    fontSize: 1.5
  },

  backgroundImage : {
    backgroundImage: `url(${BackgroundImage})`,
  },

  locationSearchBox : {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
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