import React, {Component} from 'react';


import Categories from './src/Screens/Categories';
import AuthLoadingScreen from './src/Screens/AuthLoadingScreen';
import RequestOTP from './src/Screens/RequestOTP';
import ConfirmOTP from './src/Screens/ConfirmOTP';
import Posts from './src/Screens/Posts';
import Post from './src/Screens/Post';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
import { SafeAreaView } from "react-navigation";
import { Icon } from "native-base";
import { styles, colors } from "./src/Styles/styles";
import NavigationService from './src/Configs/NavigationService';
import Setting from './src/Configs/settings';


const AuthStack = createStackNavigator({ RequestOTP: RequestOTP, ConfirmOTP: ConfirmOTP },
                                       {
                                         cardStyle: { backgroundColor: '#FF0000' },
                                         headerStyle: {
                                           backgroundColor: '#2f304c',
                                         },
                                         defaultNavigationOptions: {
                                           headerTitle: Setting.appName,
                                           headerLeft: (<Icon ios='ios-menu' android="md-menu" style={styles.headerMenuIcon}/>
                                                       ),
                                           headerStyle: {
                                             backgroundColor: colors.whiteBlue,
                                           },
                                           headerTitleStyle: {
                                             fontWeight: 'bold',
                                             color: colors.grey,
                                             flex: 1,
                                             textAlign: 'right',
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
                                             cardStyle: { backgroundColor: '#07263b' },
                                             initialRouteName: 'Home',
                                             defaultNavigationOptions: {
                                               headerTitle: Setting.appName,
                                               headerLeft: (<Icon ios='ios-menu' android="md-menu" style={styles.headerMenuIcon}/>
                                                           ),
                                               headerStyle: {
                                                 backgroundColor: colors.whiteBlue,
                                                 borderWidth: 1,
                                                 borderColor: colors.darkBlue
                                               },
                                               headerTitleStyle: {
                                                 fontWeight: 'bold',
                                                 color: colors.grey,
                                                 flex: 1,
                                                 textAlign: 'right'
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
