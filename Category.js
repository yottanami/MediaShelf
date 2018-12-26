import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import CategoryList from "./CategoryList.js";
import { colors, fontSize } from "./styles/styles.js";

export default class Category extends Component {

  render() {

    return (
      <View>
        <Text>Categories</Text>
        <CategoryList
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  heading: {
    fontWeight: "200",
    color: colors.white,
    letterSpacing: 6
  }
});
