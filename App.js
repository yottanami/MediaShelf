import React, {Component} from 'react';
import {Text, View, Container, Content} from 'native-base';
import  HttpLink from 'apollo-boost';


import Category from './src/Screens/Category';
import Post from './src/Screens/Post';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { SafeAreaView } from "react-navigation";


const AppNavigator = createStackNavigator({
  Home: Category,
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

export default createAppContainer(AppNavigator);
