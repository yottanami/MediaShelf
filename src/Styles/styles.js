import { Dimensions } from 'react-native';

// export const {width, height} = Dimensions.get('window');

import {StyleSheet} from "react-native";

export const windowSize = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width - 14
};

export const colors = {
  darkBlue: "#2E3B4B",
  whiteBlue: "#2f304c",
  white: "#d9d9d9",
  grey: "#dee3e8",
  teal: "#287b97"
};


export const fontSize = {
  large: "6em",
  medium: "4em",
  small: "2em"
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkBlue,
    padding: 6,
    justifyContent: 'center'
  },
  headerLogo:{
    height: 40,
  },
  headerMenuIcon:{
    color: colors.grey,
    fontSize: 30,
    paddingRight: 20
  },
  videoBox: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: "100",
    padding: 10,
    marginTop: 8,
    textAlign: 'center'
  },
  grid: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
  gridItem: {
    margin:5,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItemImage: {
    width: 100,
    height: 100,
    borderWidth: 1.5,
    borderColor: 'white',
    borderRadius: 50,
    justifyContent:'center',
    alignItems:'center'
  },
  gridItemText: {
    marginTop: 5,
    textAlign:'center',
  },
  contentBox: {
    justifyContent:'center',
    alignItems:'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  backgroundImage: {
   resizeMode: 'cover',
   width: windowSize.width,
   height: windowSize.height,
   backgroundColor: 'transparent',

  },


  banner: {
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 50,
    justifyContent:'center',
    alignItems:'center',
    width: windowSize.width,
    height: windowSize.height / 4

  },
  bannerText: {
    fontSize: 30,
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: {width: -1, height: 2},
    textShadowRadius: 5,
  },
  card: {
    width: windowSize.width / 2,
    height: windowSize.height / 3.1,
    justifyContent:'center',
    alignItems:'center',
  },
  cardImage:{
    height: windowSize.height / 4.5,
    flex: 1
  },
  cardText: {
    color: colors.grey,
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: 0,
    marginBottom: 0,
  },
  drawer:{
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
  drawerContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerIcon: {
    color: colors.grey,
    fontSize: 19
  },
  drawerBadge: {
    textAlign: 'center',
    margin: 20,
    marginTop: 40,
    padding: 10,
    color: colors.grey,
    backgroundColor: '#009000',
    fontWeight: "900",
    borderRadius: 20,
  }
});
