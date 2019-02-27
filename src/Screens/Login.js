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
import {GenerateAPI, LoginApi} from '../Configs/ApiCalls';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { mobile: '09---------' };
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
          onPress={this.handleLogin}
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
      this.setState({phone: "09"});
    }
  }
  handleLogin() {
    Keyboard.dismiss();
    let phone = this.state.mobile;
    //GenerateAPI(phone);
  }

}
