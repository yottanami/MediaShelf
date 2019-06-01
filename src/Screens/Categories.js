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
import { CustomCarousel } from "../Components/CustomCarousel";
import Layout from '../Components/Layout';
import Carousel, {pagination} from 'react-native-snap-carousel';

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
          title: " "
        }, {
          title: " "
        }, {
          title: " "
        }
      ]
    };
  }

  _renderItem ({item, index, currentIndex}) {
    const self = this;
    return (
      <View>
        <Text>
          {item.title}
        </Text>
      </View>
    );
  }

  get pagination () {
    const { entries, activeSlide } = this.state;
    return (
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'rgba(255, 255, 255, 0.92)'
        }}
        inactiveDotStyle={{
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }
  render() {

    return (
      <Layout>
        <Text style={styles.title}>Categories</Text>

        <Carousel
          ref={(c) => { this._carousel = c; }}
          renderItem={this._renderItem}
          sliderWidth={499}
          itemWidth={400}
          data={this.state.carousel_images}
          autoplay={true}
          autoplayDelay={500}
          autoplayInterval={3000}
        />
        { this.pagination }

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
