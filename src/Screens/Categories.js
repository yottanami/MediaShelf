import React, { Component } from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  Dimensions
} from "react-native";
import { Container,
         Header,
         Content,
         Card,
         CardItem,
         Thumbnail,
         Text,
         Button,
         Icon,
         Left,
         Body,
         Right
       } from 'native-base';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Setting from "../Configs/settings";
import { colors, fontSize, styles, windowSize } from "../Styles/styles";
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
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          image: require('../assets/carousel/1.jpg')
        }, {
          title: "Why do we use it?",
          desc: "It is a long established fact that a reader will be distracted by the readable content of a pa",
          image: require('../assets/carousel/2.jpg')
        }, {
          title: "Where can I get some?",
          desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered ",
          image: require('../assets/carousel/3.jpg')
        }
      ]

    };
  }
  renderGridItem( item ){

    return (<TouchableOpacity >
              <Card style={styles.card} key={item.item.id}>
                <CardItem>
                  <Image
                    source={{uri: Setting.serverMainPath + item.item.image.thumb.url}}
                    style={styles.cardImage}
                    onPress={() => NavigationService.navigate('Posts', {categoryId: item.item.id})}
                  />
                </CardItem>

                <Text
                  style={styles.cardText}
                  onPress={() => NavigationService.navigate('Posts', {categoryId: item.item.id})}>{item.item.title}</Text>

              </Card>
            </TouchableOpacity>
           );
  }

  render() {
    return (
      <Layout>

        <CustomCarousel data={this.state.carousel_images}/>
        <Query query={CategoryListQuery}>
          {({ loading, error, data }) => {
            if (loading) return <ActivityIndicator color={colors.teal} />;
            if (error) return <Text>OH OH {`Error: ${error}`}</Text>;
            return (
              <View>
                <Card>
                    <Text style={styles.title}>Categories</Text>
                </Card>
                <ScrollView >
                  <FlatList
                    data={data.categories}
                    renderItem={this.renderGridItem}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2}
                  />

                </ScrollView>

              </View>
            );
          }}
        </Query>
      </Layout>
    );
  }
};
