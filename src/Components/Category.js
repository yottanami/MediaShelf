import React, { Component } from "react";
import PropTypes from 'prop-types';

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

import { colors, fontSize, styles, windowSize } from "../Styles/styles";
import Setting from "../Configs/settings";


export default class Category extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
    };

    render () {
      const { data: { id, title, image}, navigation } = this.props;

        return (
          <TouchableOpacity>
            <Card
              style={styles.card}
              key={id}
              onPress={() => navigation.navigate('Posts', {categoryId: id})}
            >
                <CardItem>
                  <Image
                    source={{uri: Setting.serverMainPath + image.thumb.url}}
                    style={styles.cardImage}
                  />
                </CardItem>

                <Text
                  style={styles.cardText}
                >{title}</Text>

              </Card>
            </TouchableOpacity>
        );
    }
}
