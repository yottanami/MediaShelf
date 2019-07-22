import React, { Component } from "react";
import PropTypes from 'prop-types';

import {
  View
} from "react-native";

import { Text
       } from 'native-base';

export default class Category extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
    };

    render () {
        return (
          <View >
            <Text>
            </Text>
          </View>
        );
    }
}
