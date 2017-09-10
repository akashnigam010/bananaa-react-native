import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';

export default class Component1 extends Component {

	constructor(props) {
	  super(props);	
	  this.state = {
	  	name: 'Tintin',
	  	message: this.props.message,
	  	showName: true
	  };
	}

	static defaultProps = {
	  message: 'value'
	}	

	render(){
		let message = this.state.showName ? this.state.message : 'No Name';
		console.log(message);
		return(
		  <View>
		  	<Text style={styles.textView}>{message}</Text>
		  	<View style={styles.view}>
		  		<Text style={styles.v3}>{this.state.name}</Text>	
		  		<Text style={styles.v3}>{this.state.name}</Text>	
		  		<Text style={styles.v3}>{this.state.name}</Text>
		  		<Text style={styles.v3}>{this.state.name}</Text>	
		  	</View>
		  </View>
		);
	}
}

const styles = StyleSheet.create({
	view: {
		height: 100,
		flexDirection: 'row'
	},
	textView: {
		color: 'blue'
	},
	v3: {
		flex: 1,
		color: '#000000'
	}
});

AppRegistry.registerComponent('Component1', () => Component1);