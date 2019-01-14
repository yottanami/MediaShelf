import React, { Component } from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { colors, fontSize, styles } from "../Styles/styles";
import NavigationService from '../Configs/NavigationService';

const CategoryListQuery = gql`
{
  categories {
  	title,
image,
id
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
           .map(({ title, image, id }, idx, rateArr) => (
             <Card style={styles.card} key={title}>
               <CardItem cardBody>
                 <Image
                     style={{ width: 150, height: 150 }}
                     source={{uri: "http://172.16.6.146:3000"+image.thumb.url}} 
                     onPress={() => NavigationService.navigate('Post', {categoryId: id})}
                     />
               </CardItem>
               <CardItem >
                   <Text 
                   onPress={() => NavigationService.navigate('Post', {categoryId: id})}>{title}</Text>
               </CardItem>
             </Card>

           ))}


        </View>
      );
    }}
  </Query>
);
