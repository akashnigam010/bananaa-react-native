import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class bnaApp extends Component {
  render(){
    return(
      <View>
        <Text>Hello World!2</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('bnaApp', () => bnaApp);