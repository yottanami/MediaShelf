import React, {Component} from 'react';
import { AppRegistry, Text, View } from 'react-native';
import  HttpLink from 'apollo-boost';
import { InMemoryCache} from 'apollo-cache-inmemory';

import  ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';


import Category from './Category';
import { categoryReducer } from './Reducers';

export default class extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cache = new InMemoryCache();
    //const url =  new HttpLink({uri: "http://172.16.6.146:3000/graphql"});
    const client = new ApolloClient(
      {
        uri: "http://172.16.6.146:3000/graphql"
        //cache
      }
    );

    const store = applyMiddleware()(createStore);

    return (
      <ApolloProvider client={client} store={store}>
        <View>
          <Category/>
        </View>
      </ApolloProvider>
    );
  }
}
