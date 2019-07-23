import React, { Component } from 'react';
import { View, Image, StyleSheet} from 'react-native';
import { DrawerItem, DrawerItems } from "react-navigation";
import { Container, Content, Body, Icon, Text } from 'native-base';
import { styles, colors } from "../Styles/styles";
import  Setting from "../Configs/settings";


export default class SideBar extends Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <Container>
        <Content style={styles.drawer}>
          <Body>
            <Image
              resizeMode={'contain'}
              source={require('../assets/logo.png')}
              style={{
                width: 150,
              }}
            />
          </Body>
          <DrawerItems
            labelStyle={{color: colors.grey}}
            style={{textAlign: 'right'}}
            {...this.props}>
          </DrawerItems>


          <View style={styles.drawerBadge}>
                          <Text>

      رسالت ما در طبیبت،


                ارائه خدماتی در راستای سلامت شماست.
              </Text>
            </View>


        </Content>
      </Container>
    );
  }
}
