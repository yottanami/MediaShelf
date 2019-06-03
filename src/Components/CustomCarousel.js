import React, {Component} from 'react';
import { Dimensions } from 'react-native';

import {Text, View, Card, CardItem, Body} from 'native-base';
import Carousel, {Pagination} from 'react-native-snap-carousel';

export default class CustomCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { width: Dimensions.get('window').width };
  }


  _renderItem ({item, index, currentIndex}) {
    const self = this;
    return (
      <Card>
            <CardItem>
              <Body>
                <Text>
                  {item.title}
                </Text>
              </Body>
            </CardItem>
          </Card>

    );
  }

  render(){

    return (
      <Carousel
          ref={(c) => { this._carousel = c; }}
          renderItem={this._renderItem}
          sliderWidth={499}
          itemWidth={this.weigth}
          data={this.props.data}
          autoplay={true}
          autoplayDelay={500}
          autoplayInterval={3000}
        />
    );
  }

}
