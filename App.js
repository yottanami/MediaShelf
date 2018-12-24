import React, {Component} from 'react';
import { AppRegistry, Text } from 'react-native';
import  ApolloClient from 'apollo-boost';
import  HttpLink from 'apollo-boost';
import { InMemoryCache} from 'apollo-cache-inmemory';

import { ApolloProvider } from 'react-apollo';



export default class extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const cache = new InMemoryCache();
    const url =  new HttpLink({uri: "https://127.0.0.0:3000/graphql"});
    const client = new ApolloClient(
      {
        uri: url,
        cache
      }
    );
    return (
      <ApolloProvider client={client}>

      </ApolloProvider>
    );
  }
}
