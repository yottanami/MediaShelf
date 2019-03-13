import React, { Component } from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator, TouchableOpacity, AsyncStorage} from "react-native";
import Layout from '../Components/Layout';
import NavigationService from '../Configs/NavigationService';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right, H3 } from 'native-base';
import { Mutation } from 'react-apollo';
import gql from "graphql-tag";
import Setting from '../Configs/settings';


const AUTH_MUTATION = gql`
mutation singIn($email: String!, $password: String! ) {
  signIn(input: {email: $email, password: $password}) {
    accessToken
    errors
  }
}
`;

export default class Auth extends Component {
  constructor(props){
    super(props);
    this.onComplete = this.onComplete.bind(this);
    this.onError = this.onError.bind(this);
  }

  render(){
    return (
      <Layout>
        <Mutation
          mutation={AUTH_MUTATION}
          variables= {{email: Setting.usernam, password: Setting.password}}
          onCompleted={data => this._confirm(data)}
          onError    ={error => this._confirm(error)}
        >
          { mutation => (
            <Button  onPress={() => mutation()}>
              <Text>ERRRERE RER ER</Text>
            </Button>
          )}
        </Mutation>
      </Layout>
    );
  }

  onComplete = async data => {
    this.storeToken(data.signIn.accessToken);
  }

  onError = data => {
    alert('خطایی در حین ورود به سامانه پیش آمد لطفا دقایقی دیگیر مجدد تلاش کنید');
  }

  storeToken = async (token) => {
  try {
    await AsyncStorage.setItem('token', token);
  } catch (error) {
    alert('خطایی در زمان ذخیره‌سازی پیش آمد');
  }
};
}
