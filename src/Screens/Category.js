import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import CategoryList from "./CategoryList.js";
import { styles } from "../Styles/styles";
import Layout from '../Components/Layout';

export default class Category extends Component {

  render() {

    return (
      <Layout>
        <Text style={styles.title}>Categories</Text>
        <CategoryList />
      </Layout>
    );
  }
}
