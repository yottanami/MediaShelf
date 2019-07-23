import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Categories from './src/Screens/Categories';
import AuthLoadingScreen from './src/Screens/AuthLoadingScreen';
import RequestOTP from './src/Screens/RequestOTP';
import ConfirmOTP from './src/Screens/ConfirmOTP';
import Posts from './src/Screens/Posts';
import Post from './src/Screens/Post';
import About from './src/Screens/About';
import Contact from './src/Screens/Contact';
import Website from './src/Screens/Website';
import SideBar from './src/Components/Sidebar';
import { createStackNavigator, createAppContainer, createSwitchNavigator, createDrawerNavigator } from "react-navigation";
import { Icon } from "native-base";
import { styles, colors } from "./src/Styles/styles";
import NavigationService from './src/Configs/NavigationService';
import Setting from './src/Configs/settings';


const AuthStack = createStackNavigator({ RequestOTP: RequestOTP, ConfirmOTP: ConfirmOTP },

                                       {
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
                                       },
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
                                               headerLeft: (<Icon ios='ios-menu' android="md-menu" style={styles.headerMenuIcon} onPress={() => this.navigation.toggleDrawer()}/>
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
                                           }, {
                                             initialRouteName: 'Home'
                                           }
                                          );



const DrawerNav = createDrawerNavigator({
  home:
  {
    screen: MainNavigator,
    navigationOptions: {
      title: 'صفحه اصلی',
      drawerIcon: (
        <Icon
          style={styles.drawerIcon}
          name="home"

        />
      ),
    },
  },
  About: {
    screen: About,
    navigationOptions: {
      title: 'درباره ما',
      drawerIcon: (
        <Icon
          style={styles.drawerIcon}
          name="profile"
          type="AntDesign"
        />
      ),
    },
  },
  Contact: {
    screen: Contact,
    navigationOptions: {
      title: 'ارتباط با ما',
      drawerIcon: (
        <Icon
          style={styles.drawerIcon}
          name="contact-mail"
          type="MaterialIcons"
        />
      ),
    },
  },
  Website: {
    screen: Website,
        navigationOptions: {
      title: 'جوائز و مسابقات',
      drawerIcon: (
        <Icon
          style={styles.drawerIcon}
          name="present"
          type="SimpleLineIcons"
          size={10}
        />
      ),
    },
  }

},
                                        {
                                          contentOptions: {
                                            activeTintColor: '#e91e63',
                                            itemStyle: {
                                              flexDirection: 'row-reverse'
                                            }
                                          },
                                          contentComponent: SideBar,
                                          drawerPosition: 'right'
                                        }
                                       );

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: DrawerNav,
    AuthStack: AuthStack,
    HomeDrawer: DrawerNav,
  },{
    initialRouteName: 'AuthLoading',
  }
));
