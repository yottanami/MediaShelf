import React, {Component} from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Drawer, StyleProvider } from 'native-base';
import GraphqlProvider from './GraphqlProvider';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import {  styles } from "../Styles/styles";
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
      <Container style={styles.container}>
          <Content>
            <GraphqlProvider>
              <StyleProvider style={getTheme(material)}>
                  {this.props.children}
              </StyleProvider>
            </GraphqlProvider>
          </Content>
        </Container>
    );
  }
}
