import React, {Component} from 'react';
import {Text, View, Container, Content} from 'native-base';
import  HttpLink from 'apollo-boost';

import GraphqlProvider from './src/Components/GraphqlProvider';
import Category from './src/Screens/Category';
import Layout from './src/Components/Layout';

export default class extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <Layout>
          <GraphqlProvider>
            <Category/>
          </GraphqlProvider>
      </Layout>

    );
  }
}
