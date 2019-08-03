import React from 'react';
import {Text} from 'react-native';
import Layout from '../Components/Layout';
import {Card, CardItem, Body, H3} from 'native-base';
import {ScrollView, Image} from 'react-native';
import Setting from '../Configs/settings';
import {styles} from '../Styles/styles';

const Contact = () => {
    return(
      <Layout>
        <ScrollView>
          <Card>
            <CardItem>
              <H3 style={{flex: 1, flexDirection: 'row'}}>
                {Setting.contactTitle}
              </H3>
            </CardItem>
            <CardItem>
              <Body style={{
                justifyContent: 'center',
                alignItems: 'center',}}>
                <Image
                  style={{ width: 190, height: 190 }}
                  source={require('../assets/contact.png')}
                />
                <Text style={styles.cardText}>
                  {Setting.contactDesc}
                </Text>
              </Body>
            </CardItem>
          </Card>
        </ScrollView>
      </Layout>
    );
};

export default Contact;
//AppRegistry.registerComponent("MyApp", () => App);
