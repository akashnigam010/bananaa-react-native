import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

import Component1 from './app/components/Component1';

export default class bnaApp extends Component {
  render(){
    return(
      <Component1 />
    );
  }
}

AppRegistry.registerComponent('bnaApp', () => bnaApp);