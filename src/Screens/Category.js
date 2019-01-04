import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import CategoryList from "./CategoryList.js";


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
