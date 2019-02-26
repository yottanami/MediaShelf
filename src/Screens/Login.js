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


  render(){
    return (
      <View>
        <Text
          style={styles.def_txt}>
          شماره موبایل خود را وارد کنید
        </Text>
        <TextInput
          style={styles.sign_in_input}
          value = {this.state.phone}
          onChangeText={(text) => this.onChangeText(text)}
          onFocus={this.onFocus}
          keyboardType="phone-pad"
        />
        <Button
          onPress={this.onPress}
        >
          <Text>
            ارسال
          </Text>
        </Button>

      </View>
    );
  }

  onPress() {
    Keyboard.dismiss();
    let phone = this.state.phone;
    GenerateAPI(phone);
  }

}
