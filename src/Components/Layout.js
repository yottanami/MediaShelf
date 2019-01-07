import React, {Component} from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer } from 'native-base';
import Settings from '../Configs/settings';
import SideBar from './Sidebar';

import GraphqlProvider from './GraphqlProvider';

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
        <Drawer
          ref={(ref) => { this.drawer = ref; }}
          content={<SideBar />}
          onClose={() => this.closeDrawer()} >

          <Content>
            <GraphqlProvider>

              {this.props.children}
            </GraphqlProvider>
          </Content>

        </Drawer>
      </Container>
    );
  }
}
