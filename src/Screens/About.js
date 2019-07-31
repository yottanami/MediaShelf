import React from 'react';
import {Text} from 'react-native';
import Layout from '../Components/Layout';
import {Card, CardItem, Body, H3} from 'native-base';
import {ScrollView, Image} from 'react-native';
import Setting from '../Configs/settings';
import {styles} from '../Styles/styles';

const About = () => {
    return(
      <Layout>
        <ScrollView>
          <Card>
            <CardItem>
              <H3 style={{flex: 1, flexDirection: 'row'}}>
                {Setting.aboutUsTitle}
              </H3>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  style={{ width: '100%', height: 190 }}
                  source={require('../assets/us.png')}
                />
                <Text style={styles.cardText}>
                  {Setting.aboutUsDesc}
                </Text>
              </Body>
            </CardItem>
          </Card>
        </ScrollView>
      </Layout>
    );
};

export default About;
//AppRegistry.registerComponent("MyApp", () => App);
