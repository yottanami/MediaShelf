import React, { Component } from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard
} from "react-native";
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

import Setting from "../Configs/settings";
import { colors, fontSize, styles } from "../Styles/styles";
import NavigationService from '../Configs/NavigationService';
import {GenerateAPI} from '../Configs/ApiCalls';

export default class Generate extends Component {
  constructor(props) {
    super(props);
    this.state = { mobile: '09---------' };
    this.handleGenerate = this.handleGenerate.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  render(){
    return (
      <View>
        <Text
          style={styles.def_txt}>
          شماره موبایل خود را وارد کنید
        </Text>
        <TextInput
          keyboardType="phone-pad"
          onChangeText={(mobile) => this.handleInputChange(mobile)}
          onFocus={this.handleFocus}
          value={this.state.mobile}
          maxLength = {11}
        />
        <Button
          onPress={this.handleGenerate}
        >
          <Text>
            ارسال
          </Text>
        </Button>

      </View>
    );
  }

  handleFocus() {
    if (this.state.mobile == '09---------') {
      this.setState({mobile: "09"});
    }
  }
  handleInputChange(mobile){
    re = /^09[0-9]*$/;

    if( re.test(mobile) ) {
      this.setState({mobile: mobile});
    }
    else {
      this.setState({mobile: "09"});
    }
  }
  handleGenerate() {
    Keyboard.dismiss();
    let mobile = this.state.mobile.substring(1);
    GenerateAPI(mobile, this.handleLogin, this.handleError);
  }
  handleLogin(){
    NavigationService.navigation.navigate('Login', {mobile: this.state.mobile});
  }
  generateCallback(result){
    console.log(result);
  }
  handleError(result){
    alert(result);
  }

}
