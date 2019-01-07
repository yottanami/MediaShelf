import React, {Component} from 'react';
import { AppRegistry, Text, View } from 'react-native';
import  HttpLink from 'apollo-boost';
import { InMemoryCache} from 'apollo-cache-inmemory';

import  ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
//import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import Settings from '../Configs/settings';
//import Reducers from '../Reducers';

export default class AppoloProvider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cache = new InMemoryCache();
    const client = new ApolloClient(
      {
        uri: Settings.serverPath
        //cache
      }
    );

    //const store = applyMiddleware()(createStore);

    return (
      <ApolloProvider client={client}>
        <View>
          {this.props.children}
        </View>
      </ApolloProvider>
    );
  }
}
