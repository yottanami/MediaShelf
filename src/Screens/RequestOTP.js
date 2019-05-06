import React, { Component } from "react";
import { Mutation } from 'react-apollo';
import gql from "graphql-tag";
import Layout from '../Components/Layout';
import ConfirmOTP from './ConfirmOTP';
import {
  View,
  TextInput,
  Keyboard,
  TouchableOpacity,
  Text
} from 'react-native';
import {Button} from 'native-base';

const REQUEST_OTP_MUTATION = gql`
mutation requestOtp($mobile: String!) {
  generateOtp(input: {mobile: $mobile}) {
    result
  }
}
`;

export default class RequestOTP extends Component {
  constructor(props){
    super(props);
    this.state = { mobile: '09---------' };
    this.handleError = this.handleError.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleRequestOTP = this.handleRequestOTP.bind(this);
  }

  render(){
    return(
      <Layout>
        <Mutation
          mutation={REQUEST_OTP_MUTATION}
          variables= {{mobile: this.state.mobile}}
          onCompleted={data => this.handleRequestOTP(data)}
          onError    ={error => this.handleError(error)}
        >

          {(mutation, { data, error }) => (

            <View>
              <Text>Here</Text>
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
                onPress={()=>{
                  mutation({
                    variables: {
                      mobile: this.state.mobile
                    }
                  })
                    .then(res => res)
                    .catch(err => err);
//                  this.setState({mobile: '09---------'});
                }}

              >
                <Text>ورود</Text>
              </Button>
            </View>
          )}

        </Mutation>
      </Layout>
    );
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

  handleError(result){
    alert(result);
  }

  handleFocus(){
    this.setState({mobile: '09'});
  }

  handleRequestOTP(result){
    if (result.generateOtp.result == 'Success'){
      this.props.navigation.navigate('ConfirmOTP', {mobile: this.state.mobile});
    }else{
//      console.log(result.generateOtp);
      alert('خطایی در زمان ورود پیش آمد لطفا دقایقی صبر نمایید و مجدد تلاش فرمایید');
    }

  }

}
