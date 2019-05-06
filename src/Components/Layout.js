import React, {Component} from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, StyleProvider } from 'native-base';
import Settings from '../Configs/settings';
import SideBar from './Sidebar';

import GraphqlProvider from './GraphqlProvider';


import getTheme from '../../native-base-theme/components';
import customVariables from '../variables';
import material from '../../native-base-theme/variables/material';

export default class Layout extends Component {

  constructor(props) {
    super(props);
  }

  closeDrawer = () => {
    this.drawer._root.close()
  };

  openDrawer = () => {
    this.drawer._root.open()
  };

  render(){

    return (

        <Container>
          <Content>
            <GraphqlProvider>
              <Text>Debug</Text>
              <StyleProvider style={getTheme(material)}>
                {this.props.children}
              </StyleProvider>
            </GraphqlProvider>
          </Content>
        </Container>

    );
  }
}
