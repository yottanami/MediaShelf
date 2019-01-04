import React, {Component} from 'react';
import { AppRegistry, Text, View } from 'react-native';
import  HttpLink from 'apollo-boost';

import GraphqlProvider from './src/Components/GraphqlProvider';
import Category from './src/Screens/Category';

export default class extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GraphqlProvider>
        <View>
          <Category/>
        </View>
      </GraphqlProvider>
    );
  }
}
