import React, {Component} from 'react';
import {AppRegistry, Text, View, TouchableOpacity} from 'react-native';

import Component1 from './app/components/Component1';
import FBSDK, { LoginManager } from 'react-native-fbsdk';

export default class bnaApp extends Component {

	_fbAuth() {
		LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
		  function(result) {
		    if (result.isCancelled) {
		      alert('Login cancelled');
		    } else {
		      alert('Login success with permissions: '
		        +result.grantedPermissions.toString());
		    }
		  },
		  function(error) {
		    alert('Login fail with error: ' + error);
		  }
		);
	}

	render(){
		return(
		  <View>
		  	<Text>Hello</Text>
		  	<Text>Hello</Text>
		  	<Text>Hello</Text>
		  	<Text>Hello</Text>
		  	<Text>Hello</Text>
		  	<TouchableOpacity onPress={this._fbAuth}>
		  		<Text>Login with Facebook</Text>
		  	</TouchableOpacity>
		  </View>
		);
	}
}

AppRegistry.registerComponent('bnaApp', () => bnaApp);