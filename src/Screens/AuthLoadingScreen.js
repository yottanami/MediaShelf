import React, {Component} from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

export default class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this._bootstrapAsync();
  }
  _bootstrapAsync =  async() => {
    await AsyncStorage.getItem('userToken').then((userToken) => {
      this.props.navigation.navigate(userToken ? 'App' : 'Generate');
    });
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
