import React, {Component} from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, StyleProvider } from 'native-base';
import Settings from '../Configs/settings';
import SideBar from './Sidebar';

import GraphqlProvider from './GraphqlProvider';


import getTheme from '../../native-base-theme/components';
import customVariables from '../variables';

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
      <StyleProvider  style={getTheme(customVariables)}>
        <Container>
          <Content>
            <GraphqlProvider>

              {this.props.children}
            </GraphqlProvider>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}
