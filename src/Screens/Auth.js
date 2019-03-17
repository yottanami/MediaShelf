import React, { Component } from "react";
import { View, Text, Image, StyleSheet,StatusBar ,ActivityIndicator, TouchableOpacity, AsyncStorage} from "react-native";
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



class CallAuth extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.mutation();
  }

  render(){
    return this.props.children;
  }

}


const  onComplete = async data => {
    storeToken(data.signIn.accessToken);
};

const  onError = data => {
    //alert(data);
    alert('خطایی در حین ورود به سامانه پیش آمد لطفا دقایقی دیگیر مجدد تلاش کنید');
};

const  storeToken = async (token) => {
    try {
      await AsyncStorage.setItem('token', token);
    } catch (error) {
      alert('خطایی در زمان ذخیره‌سازی پیش آمد');
    } finally {
       NavigationService.navigate('App');
    }
  };
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
