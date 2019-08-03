import React from 'react';
import Layout from '../Components/Layout';
import {Card, CardItem, Body, H3, H1, View} from 'native-base';
import {ScrollView, Image, Linking, Text, TouchableOpacity} from 'react-native';
import Setting from '../Configs/settings';
import {styles} from '../Styles/styles';

const Website = () => {
    return(
      <Layout>
        <ScrollView>
          <Card>
            <CardItem>
              <H3 style={{flex: 1, flexDirection: 'row'}}>
                {Setting.webSiteTitle}
              </H3>
            </CardItem>
            <CardItem>
              <Body style={{
                justifyContent: 'center',
                alignItems: 'center',}}>
                  <Image
                    style={{ width: 190, height: 190 }}
                    source={require('../assets/website.png')}
                  />
                <Text style={styles.cardText}>
                  {Setting.webSiteDesc}
                </Text>
                <TouchableOpacity
                  onPress={ ()=>{ Linking.openURL(Setting.site)}}
                >
                  <H1
                    style={styles.drawerBadge} >
                    {Setting.site}
                  </H1>
                </TouchableOpacity>
              </Body>
            </CardItem>
          </Card>
        </ScrollView>
      </Layout>
    );
};

export default Website;
