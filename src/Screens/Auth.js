import React, { Component } from "react";
import { View, Text, Image, StyleSheet,StatusBar ,ActivityIndicator, TouchableOpacity, AsyncStorage} from "react-native";
import Layout from '../Components/Layout';
import NavigationService from '../Configs/NavigationService';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right, H3 } from 'native-base';
import { Mutation } from 'react-apollo';
import gql from "graphql-tag";
import Setting from '../Configs/settings';


const AUTH_MUTATION = gql`
mutation singIxn($email: String!, $password: String! ) {
  signIn(input: {email: $email, password: $password}) {
    accessToken
    errors
  }
}
`;

class CallAuth extends Component {


  componentDidMount(){
    this.props.mutation();
  }

  render(){
    return this.props.children;
  }

}



export default function Auth(){
  return (
    <Layout>
      <Mutation
        mutation={AUTH_MUTATION}
        variables= {{email: Setting.username, password: Setting.password}}
        onCompleted={data => onComplete(data)}
        onError    ={error => onError(error)}
      >
        {(mutation, { data, error }) => (
          <CallAuth mutation={mutation}>
            <View>
              <ActivityIndicator />
              <StatusBar barStyle="default" />
            </View>
          </CallAuth>
        )}
      </Mutation>
    </Layout>
  );
}



onComplete = async (data) => {
  this.storeToken(data.signIn.accessToken);
};

onError = data => {
  alert('خطایی در حین ورود به سامانه پیش آمد لطفا دقایقی دیگیر مجدد تلاش کنید');
};

storeToken = async (token) => {
  try {
    AsyncStorage.setItem('token', token);
  } catch (error) {
    alert('خطایی در زمان ذخیره‌سازی پیش آمد');
  } finally {
    NavigationService.navigate('App');
  }
};
