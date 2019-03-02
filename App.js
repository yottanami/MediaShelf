import React, {Component} from 'react';
import {Text, View, Container, Content} from 'native-base';
import  HttpLink from 'apollo-boost';


import Categories from './src/Screens/Categories';
import Login from './src/Screens/Login';
import Generate from './src/Screens/Generate';
import Posts from './src/Screens/Posts';
import Post from './src/Screens/Post';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { SafeAreaView } from "react-navigation";
import NavigationService from './src/Configs/NavigationService';



const MainNavigator = createStackNavigator({
  Home: Generate,
  Login: Login,
  Categories: Categories,
  Posts: Posts,
  Post: Post,
},
                                          {
                                            initialRouteName: 'Home',
                                            defaultNavigationOptions: {
                                              headerStyle: {
                                                backgroundColor: '#f4511e',
                                              },
                                              headerTintColor: '#fff',
                                              headerTitleStyle: {
                                                fontWeight: 'bold',
                                              },
                                            }
                                          }
                                          );
const AppContainer = createAppContainer(MainNavigator);

export default class App extends Component {
  render() {

     return (
        <AppContainer
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
    );
  }
}














//const AppNavigator = createStackNavigator({
//  Home: Category,
//  Post: Post,
//},
//                                          {
//                                            initialRouteName: 'Home',
//                                            defaultNavigationOptions: {
//                                              headerStyle: {
//                                                backgroundColor: '#f4511e',
//                                              },
//                                              headerTintColor: '#fff',
//                                              headerTitleStyle: {
//                                                fontWeight: 'bold',
//                                              },
//                                            }
//                                          }
//                                         );
//
