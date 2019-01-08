import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import CategoryList from "./CategoryList.js";
import Layout from '../Components/Layout';


import { Query } from "react-apollo";
import gql from "graphql-tag";

import { colors, fontSize, styles } from "../Styles/styles";

const CategoryListQuery = gql`
{
  posts {
  	title
	}
}
`;

export default class Post extends Component {

  render() {

    return (
      <Layout>

         <Query query={CategoryListQuery}>
    {({ loading, error, data }) => {
      if (loading) return <ActivityIndicator color={colors.teal} />;
      if (error) return <Text>OH OH {`Error: ${error}`}</Text>;

      return (
        <View>

          {data.categories
           .map(({ title, image }, idx, rateArr) => (
                   <Text >{title}</Text>
           ))}

        </View>
      );
    }}
  </Query>
      </Layout>
    );
  }
}
