import React, { Component } from "react";
import { Mutation } from 'react-apollo';
import gql from "graphql-tag";
import Layout from '../Components/Layout';
import {
  View,
  Text,
  Input,
  Button
} from 'native-base';
import {
  Keyboard,
  TouchableOpacity,
  Image
} from 'react-native';
import {AsyncStorage} from 'react-native';
import {  styles } from "../Styles/styles";

const CONFIRM_OTP_MUTATION = gql`
mutation confirmOtp($otp: String!, $mobile: String!) {
  confirmOtp(input: {otp: $otp, mobile:  $mobile}) {
    accessToken
    errors
  }
}
`;

export default class ConfirmOTP extends Component {
  constructor(props){
    super(props);
    this.state = { otp: '----' , mobile: this.props.navigation.getParam('mobile')};
    this.handleError = this.handleError.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleConfirmOTP = this.handleConfirmOTP.bind(this);
  }

  render(){
    return(
      <Layout>
        <Mutation
          mutation={CONFIRM_OTP_MUTATION}
          variables= {{otp: this.state.otp, mobile: this.state.mobile}}
          onCompleted={data => this.handleConfirmOTP(data)}
          onError    ={error => this.handleError(error)}
        >

          {(mutation, { data, error }) => (
            <View style={styles.contentBox}>
                              <Image
                  resizeMode={'contain'}
                  source={require('../assets/logo.png')}
                  style={{
                    width: 200,
                  }}
                />
              <Text>
کدی که از طریق پیامک دریافت کرده‌اید وارد نمایید. اگر پس از ده دقیقه هنوز هیچ پیامکی دریافت نکرده‌اید مجدد تلاش نمایید
              </Text>

              <Input
                keyboardType="numeric"
                onChangeText={(otp) => this.handleInputChange(otp)}
                onFocus={this.handleFocus}
                value={this.state.otp}
                maxLength={4}
              />
              <Button
                onPress={()=>{
                  mutation({
                    variables: {
                      otp: this.state.otp
                    }
                  })
                    .then(res => res)
                    .catch(err => err);
                  this.setState({otp: '----'});
                }}

              >
                <Text>
                  تایید ورود
                </Text>
              </Button>
            </View>
          )}

        </Mutation>
      </Layout>
    );
  }

  handleInputChange(otp){
    re = /^[0-9]*$/;

    if( re.test(otp) ) {
      this.setState({otp: otp});
    }
    else {
      this.setState({otp: ""});
    }
  }

  handleError(result){
    alert(result);
  }

  handleFocus(){
    this.setState({otp: ''});
  }

  async handleConfirmOTP(result){
    if (result.confirmOtp.accessToken){
          try {
            await AsyncStorage.setItem('userToken', result.confirmOtp.accessToken);
          } catch (error) {
            alert('خطایی در زمان ذخیره‌سازی پیش آمد');
          } finally {
            this.props.navigation.navigate('App');
          }
    }else{
      alert('خطایی در زمان ورود پیش آمد لطفا از صحت کد وارد شده مطمئن شوید');
    }
  }

}
