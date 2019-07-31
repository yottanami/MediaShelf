import React, {Component} from 'react';
import {View, Text, Image, Button} from 'react-native';
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
import { DrawerActions } from 'react-navigation-drawer';


const AuthStack = createStackNavigator({ RequestOTP: RequestOTP, ConfirmOTP: ConfirmOTP },
                                       {
                                         defaultNavigationOptions: {
                                           header: null,
                                         }
                                       }
                                      );

const MainStack = createStackNavigator({
  Home: Categories,
  Posts: Posts,
  Post: Post,
  About: About,
  Website: Website,
  Contact: Contact,
},
                                       {
                                         cardStyle: { backgroundColor: '#07263b' },
                                         headerLayoutPreset : 'center',
                                         initialRouteName: 'Home',

                                         defaultNavigationOptions: ({ navigation }) => ({
                                           headerTintColor: colors.grey,
                                           itemStyle: {
                                             flexDirection: 'row-reverse'
                                           },
                                           headerTitle:  (<Image resizeMode={'contain'} source={require("./src/assets/logo.png")} style={styles.headerLogo} />),
                                           headerRight: (
                                             <Icon ios='ios-menu' android="md-menu" style={styles.headerMenuIcon} onPress={() => navigation.toggleDrawer()} />
                                           ),
                                           headerStyle: {
                                             backgroundColor: colors.whiteBlue,
                                             borderWidth: 1,
                                             borderColor: colors.darkBlue,
                                           },
                                           headerTitleStyle: {
                                             textAlign: 'center',
                                             fontWeight: 'bold',
                                             color: colors.grey,
                                           },
                                         }

                                                                                       )}
                                      );


const DrawerNav = createDrawerNavigator({
  Home:
  {
    screen: MainStack,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'teX',
      title: 'صفحه اصلی',
      drawerIcon: (
        <Icon
          style={styles.drawerIcon}
          name="home"

        />
      ),
    })
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
        />
      ),
    },
  }

},{
  contentComponent: SideBar,
  drawerPosition: 'right',
}
                                       );
export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: DrawerNav,
    AuthStack: AuthStack,
  },{
    initialRouteName: 'AuthLoading',
  }
));
