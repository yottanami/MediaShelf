import React, { Component } from 'react';
import { View, Image, StyleSheet} from 'react-native';
import { DrawerItem, DrawerItems, NavigationActions, StackActions } from "react-navigation";
import { Container, Content, Body, Icon, Text } from 'native-base';
import { styles, colors } from "../Styles/styles";
import  Setting from "../Configs/settings";

export default class SideBar extends Component {

  constructor(props){
    super(props);
  }

  clearStack = (routeToGo) =>  {
    if (routeToGo == 'Home'){
      const resetAction = StackActions.reset({
      index: 0,
      actions: [
                NavigationActions.navigate({ routeName: routeToGo})
      ]
    });
      this.props.navigation.dispatch(resetAction);
    }else{
      this.props.navigation.navigate(routeToGo);
    }
  }


  render() {
    const { navigate } = this.props.navigation;

    return (

      <Container>
        <Content style={styles.drawer}>
          <Body>
            <Image
              resizeMode={'contain'}
              source={require('../assets/logo.png')}

              style={{
                width: 150,
              }}
            />
          </Body>
          <DrawerItems
            labelStyle={{color: colors.grey}}
            itemStyle={{ flexDirection: 'row-reverse'}}
            {...this.props }
            onItemPress={(route) => {
              this.clearStack(route.route.routeName);
            }
                        }
          >
          </DrawerItems>

          <View style={styles.drawerBadge}>
            <Text>
              {Setting.appDesc}
            </Text>
          </View>


        </Content>
      </Container>
    );
  }
}
