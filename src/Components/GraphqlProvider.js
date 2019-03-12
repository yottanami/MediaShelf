import React, {Component} from 'react';
import { AppRegistry, Text, View } from 'react-native';
//import  HttpLink from 'apollo-boost';
import { InMemoryCache} from 'apollo-cache-inmemory';

import  ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';

//import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import Settings from '../Configs/settings';
//import Reducers from '../Reducers';



export default class AppoloProvider extends Component {


  constructor(props) {
    super(props);
  }


  render() {
    const httpLink = createHttpLink({
      uri: Settings.serverPath,
    });

    const authLink = setContext((_, { headers }) => {
      // get the authentication token from local storage if it exists
      const token = 'This is the part of me';
      // return the headers to the context so httpLink can read them
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : "",
        }
      };
    });

    const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
    //const cache = new InMemoryCache();
    //const client = new ApolloClient(
     // {
      //  uri: Settings.serverPath
        //cache
      //}
    //);

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
