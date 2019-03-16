import React, {Component} from 'react';


import Categories from './src/Screens/Categories';
import Login from './src/Screens/Login';
import AuthLoadingScreen from './src/Screens/AuthLoadingScreen';
import Auth from './src/Screens/Auth';
import Generate from './src/Screens/Generate';
import Posts from './src/Screens/Posts';
import Post from './src/Screens/Post';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
import { SafeAreaView } from "react-navigation";
import NavigationService from './src/Configs/NavigationService';


const AuthStack = createStackNavigator({ Auth: Auth, Generate: Generate, Login: Login });

const MainNavigator = createStackNavigator({
  Auth: Auth,
  Generate: Generate,
  Home: Categories,
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
const AppContainer = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: MainNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

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
