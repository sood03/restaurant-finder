/**
 * Created by nitesood on 05-Feb-18.
 */
import React, {Component} from 'react';

import App from '../components/App';
import Result from '../components/Result';
import {Route} from 'react-router-dom';

export default class MainStackRouter extends Component{
  render(){
    return (
      <div>
        <Route exact path="/" component={App}/>
        <Route path='/result' render={(props) => ( <Result {...props} /> )}/>
      </div>
    )
  }
}
