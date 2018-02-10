/**
 * Created by nitesood on 04-Feb-18.
 */

import BackgroundImage from '../../images/background.jpeg';

export default {
  appHeader: {
    backgroundColor: '#00BCD4',
    height: 150,
    width: 1000,
    padding: 20,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },

  logo: {
    height: 80,
  },
  toolbar : {
    backgroundColor: '#00BCD4',
    padding : 50,
    flex: 1
  },

  root : {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    zIndex: 10000000
  },

  gridList: {
    width: 500,
    overflowY: 'auto',
  },
  card: {
    marginBottom: 10,
    marginTop: 10
  }
}
