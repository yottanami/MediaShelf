import React, { Component } from "react";
import {
  View,
  TextInput,
  Keyboard,
  TouchableOpacity,
  StyleSheet,
  Button
} from 'react-native';

export default class RequestOTP extends Component {
  constructor(props){
    super(props);
    this.state = { otp: '09---------' };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleRequestOTP = this.handle.bind(this);
  }

  render(){
    return(
      <View>
        <Text>
          شماره موبایل خود را وارد کنید:
        </Text>

        <TextInput
          keyboardType="numeric"
          onChangeText={(mobile) => this.handleInputChange(mobile)}
          onFocus={this.handleFocus}
          value={this.state.mobile}
          maxLength={11}
        />
        <Button
          onPress={this.handleRequestOTP}
        >
          <Text>
            ارسال
          </Text>
        </Button>

      </View>
    );
  }

  handleInputChange(mobile){

  }

  handleError(result){
    alert(result);
  }

  handleFocus(){
    this.setState({mobile: ''});
  }

  handleRequestOTP(){

  }

}
