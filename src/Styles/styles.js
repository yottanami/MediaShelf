import { Dimensions } from 'react-native';

// export const {width, height} = Dimensions.get('window');

import {StyleSheet} from "react-native";

export const windowSize = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width
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
    backgroundColor: colors.darkBlue
  },
  headerMenuIcon:{
    fontSize: 30,
    paddingLeft: 20
  },
  videoBox: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    padding: 30,
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
    height: 200,
    width: null,
    flex: 1
  }
});
