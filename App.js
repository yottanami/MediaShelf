import React, {Component} from 'react';

import {AppRegistry, View, Text} from 'react-native';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import gql from "graphql-tag";

const cache = new InMemoryCache();


const client = new ApolloClient({
  uri: "http://127.0.0.1:3000/graphiql",
  link: HttpLink,
  cache
});

client
  .query({
    query: gql`
             {
                categories {
  	           title
	       }
             }
    `
  })
  .then(result => console.log('result'))
  .catch(function(error) {
    console.log('There has been a problem with your fetch operation: ' + error.message);
    throw error;
  });
;

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h2>My first Apollo app </h2>
        </div>
      </ApolloProvider>
    );
  }
}
