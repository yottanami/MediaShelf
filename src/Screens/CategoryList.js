import React, { Component } from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { fontSize, colors } from "./styles/styles";

const CategoryListQuery = gql`
{
  categories {
  	title,
image
	}
}
`;

export default () => (

  <Query query={CategoryListQuery}>
    {({ loading, error, data }) => {
      if (loading) return <ActivityIndicator color={colors.teal} />;
      if (error) return <Text>OH OH {`Error: ${error}`}</Text>;

      return (
        <View>

          {data.categories
           .map(({ title, image }, idx, rateArr) => (
             <View key={title}>
               <Text >{title}</Text>
               <Image
                 style={{ width: 50, height: 50 }}
                 source={{uri: "http://172.16.6.146:3000"+image.thumb.url}} />
              </View>
            ))}
        </View>
      );
    }}
  </Query>
);
