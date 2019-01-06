import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import CategoryList from "./CategoryList.js";
import { styles } from "../Styles/styles";

export default class Category extends Component {

  render() {

    return (
      <View>
        <Text style={styles.title}>Categories</Text>
        <CategoryList
        />
      </View>
    );
  }
}
