import React, {Component} from 'react';
import {View} from 'react-native';
import { Container, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Drawer, StyleProvider } from 'native-base';
import GraphqlProvider from './GraphqlProvider';
import SideBar from './Sidebar';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import {  styles } from "../Styles/styles";
export default class Layout extends Component {

  constructor(props) {
    super(props);
  }

  render(){

    return (
      <Drawer
        type="displace"
        ref={(ref) => { this.drawer = ref; }}
      //content={<SideBar navigator={this.navigator} />}
        content={<View style={{backgroundColor: "#000", height: 1000}}/>}
        acceptPan={true}
        type="displace"
        panOpenMask={0.85}
        openDrawerOffset={10.2}
        captureGestures={true}
      >

        <Container style={styles.container}>

          <Content>

            <GraphqlProvider>
              <StyleProvider style={getTheme(material)}>
                <View>
                  {this.props.children}
                </View>
              </StyleProvider>
            </GraphqlProvider>
          </Content>
        </Container>
      </Drawer>
    );
  }
}
