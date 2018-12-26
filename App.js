import React, {Component} from 'react';
import { AppRegistry, Text, View } from 'react-native';
import  ApolloClient from 'apollo-boost';
import  HttpLink from 'apollo-boost';
import { InMemoryCache} from 'apollo-cache-inmemory';

import { ApolloProvider } from 'react-apollo';

import Category from './Category';

export default class extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //const cache = new InMemoryCache();
    //const url =  new HttpLink({uri: "http://172.16.6.146:3000/graphql"});
    const client = new ApolloClient(
      {
        uri: "http://172.16.6.146:3000/graphql",
        cache
      }
    );
    return (
      <ApolloProvider client={client}>
        <View>
          <Category/>
        </View>
      </ApolloProvider>
    );
  }
}
