import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Container from '../components/Container';

import FBSDK, { LoginManager } from 'react-native-fbsdk';

class Screen extends Component {

  _fbAuth() {
    LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
      function(result) {
        console.log('resusssssssssssssssssssslt');
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

  handlePress = () => {
    alert('result');
    this.props.navigator.dismissModal();
  };

  render() {
    return (
      <TouchableOpacity onPress={this._fbAuth}>
          <Text>Login with Facebook!!!</Text>
        </TouchableOpacity>
    );
  }
}

export default Screen;
