import React, { Component } from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { fontSize, colors } from "./styles/styles";

const CategoryListQuery = gql`
{
  categories {
  	title
	}
}
`;

export default () => (
  <Query query={CategoryListQuery}>
    {({ loading, error, data }) => {
      //if (loading) return <ActivityIndicator color={colors.teal} />;

      if (error) return <Text>OH OH {`Error: ${error}`}</Text>;

      return (
        <View style={styles.container}>

          {data.categories
            .map(({ title }, idx, rateArr) => (
              <TouchableOpacity
                style={[
                  styles.currencyWrapper,
                  idx === rateArr.length - 1 && { borderBottomWidth: 0 }
                ]}
                key={title}
              >
                <Text style={styles.currency}>{title}</Text>
              </TouchableOpacity>
            ))}
        </View>
      );
    }}
  </Query>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20
  },
  currencyWrapper: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.teal
  },
  currency: {
    fontWeight: "100",
    color: colors.grey,
    letterSpacing: 4
  }
});
