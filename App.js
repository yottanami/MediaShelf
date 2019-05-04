import React, {Component} from 'react';


import Categories from './src/Screens/Categories';
import AuthLoadingScreen from './src/Screens/AuthLoadingScreen';
import RequestOTP from './src/Screens/RequestOTP';
import ConfirmOTP from './src/Screens/ConfirmOTP';
import Posts from './src/Screens/Posts';
import Post from './src/Screens/Post';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
import { SafeAreaView } from "react-navigation";
import NavigationService from './src/Configs/NavigationService';

const AuthStack = createStackNavigator({ RequestOTP: RequestOTP, ConfirmOTP: ConfirmOTP },
                                       {
                                         cardStyle: { backgroundColor: '#07263b' },
                                         headerStyle: {
                                           backgroundColor: '#2f304c',
                                         },
                                         defaultNavigationOptions: {
                                           headerTitle: 'نام اپلیکیشن',
                                           headerStyle: {
                                             backgroundColor: '#2f304c',
                                           },
                                           headerTitleStyle: {
                                             textAlign: 'center',
                                             fontWeight: 'bold',
                                             color: '#fff',
                                             flex: 1,
                                             textAlign: 'right'
                                           },
                                         }
                                       }
                                      );

const MainNavigator = createStackNavigator({
  Home: Categories,
  Posts: Posts,
  Post: Post,
},
                                           {
                                             //
                                             cardStyle: { backgroundColor: '#07263b' },
                                             initialRouteName: 'Home',
                                             defaultNavigationOptions: {
                                               headerStyle: {
                                                 backgroundColor: '#2f304c',
                                               },
                                               headerTitleStyle: {
                                                 fontWeight: 'bold',
                                               },
                                             }
                                           }
                                          );
export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: MainNavigator,
    AuthStack: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

//export default class App extends Component {
//  render() {

//     return (
//        <AppContainer
//         ref={navigatorRef => {
//          NavigationService.setTopLevelNavigator(navigatorRef);
//       }}
//    />
//);
//}
//}














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
