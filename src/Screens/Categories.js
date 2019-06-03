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
import Setting from "../Configs/settings";
import { colors, fontSize, styles } from "../Styles/styles";
import NavigationService from '../Configs/NavigationService';
import CustomCarousel from "../Components/CustomCarousel";
import Layout from '../Components/Layout';



const CategoryListQuery = gql`
{
  categories {
  	title,
image,
id
	}
}
`;


export default class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      carousel_images: [
        {
          title: "What is Lorem Ipsum?",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }, {
          title: "Why do we use it?",
          desc: "It is a long established fact that a reader will be distracted by the readable content of a pa"
        }, {
          title: "Where can I get some?",
          desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered "
        }
      ]

    };
  }

  render() {

    return (
      <Layout>
        <Text style={styles.title}>Categories</Text>
        <CustomCarousel data={this.state.carousel_images}/>
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
                         style={{ width: 600, height: 150 }}
                         source={{uri: Setting.serverMainPath +image.thumb.url}}
                         onPress={() => NavigationService.navigate('Posts', {categoryId: id})}
                       />
                     </CardItem>
                     <CardItem >
                       <Text
                         onPress={() => NavigationService.navigate('Posts', {categoryId: id})}>{title}</Text>
                     </CardItem>
                   </Card>

                 ))}


              </View>
            );
          }}
        </Query>
      </Layout>
    );
  }
};
