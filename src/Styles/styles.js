import {StyleSheet} from "react-native";

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
  },grid: {
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
});
