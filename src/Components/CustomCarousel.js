import React, {Component} from 'react';
import { Dimensions, ImageBackground } from 'react-native';

import {Text, View, Card, CardItem, Body} from 'native-base';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import { styles, windowSize } from "../Styles/styles";
export default class CustomCarousel extends Component {
  constructor(props) {
    super(props);
  }


  _renderItem ({item, index, currentIndex}) {
    const self = this;
    return (
      <ImageBackground
        source={item.image} style={styles.banner}
        imageStyle={{ borderRadius: 25 }}
      >
        <Text style={styles.bannerText}>{item.title}</Text>
      </ImageBackground>
    );
  }

  render(){

    return (
      <Carousel
        ref={(c) => { this._carousel = c; }}
        renderItem={this._renderItem}
        sliderWidth={windowSize.width}
        itemWidth={windowSize.width}
        data={this.props.data}
        autoplay={true}
        autoplayDelay={500}
        autoplayInterval={3000}
        loop={true}
      />
    );
  }

}
