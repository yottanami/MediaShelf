import React, { Component } from 'react';
import { View, Image, StyleSheet} from 'react-native';
import { DrawerItem, DrawerItems } from "react-navigation";
import { Container, Content, Body, Icon } from 'native-base';
import { styles } from "../Styles/styles";
import  Setting from "../Configs/settings";


export default class SideBar extends Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <Container>
        <Content contentContainerStyle={styles.drawer}>
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
            {...this.props}>
          </DrawerItems>
        </Content>
      </Container>
    );
  }
}
