import React, {Component} from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
import Settings from '../Configs/settings';

export default class Head extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <Container>
        <Header>
          <Left/>
          <Body>
            <Title>{Settings.app_name}</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}
