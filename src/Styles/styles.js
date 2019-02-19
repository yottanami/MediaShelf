import {StyleSheet} from "react-native";

export const colors = {
  darkBlue: "#2E3B4B",
  white: "#f0f2f5",
  grey: "#dee3e8",
  teal: "#287b97"
};

export const fontSize = {
  large: "6em",
  medium: "4em",
  small: "2em"
};

export const styles = StyleSheet.create({
  card: {

  },
  videoBox: {

    flex: 1,
    justifyContent: 'center'
  },
  title: {
    color: colors.teal,
    fontSize: 20,
    padding: 30,
    textAlign: 'center'
  }
});
