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
import {LoginAPI} from '../Configs/ApiCalls';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  render(){
    return (
      <View>
        <Text
          style={styles.def_txt}>
          کد دریافتی را وارد نمایید.
        </Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={(otp) => this.handleInputChange(otp)}
          value={this.state.otp}
          maxLength = {5}
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

  handleInputChange(otp){
    re = /^[0-9]*$/;

    if( re.test(otp) ) {
      this.setState({otp: otp});
    }
    else {
      this.setState({otp: "09"});
    }
  }
  handleLogin() {
    Keyboard.dismiss();
    LoginAPI(this.state.otp, this.handleLogin, this.handleError);
  }
  handleLogin(){
    //NavigationService.navigation.navigate('Login');
  }
  handleError(result){
    alert(result);
  }

}
