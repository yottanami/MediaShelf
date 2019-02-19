import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import Layout from '../Components/Layout';
import VideoPlayer from '../Components/Layout';
import NavigationService from '../Configs/NavigationService';

import { Query } from "react-apollo";
import gql from "graphql-tag";

import { colors, fontSize, styles } from "../Styles/styles";
import Video from 'react-native-af-video-player';


const PostQuery = gql`
query Posts($categoryId: ID!) {
  posts(categoryId: $categoryId) {
    title,
    body,
    image,
    video
	}
}
`;

export default class Post extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    const categoryId = this.props.navigation.getParam('categoryId', 0);
    return (
      <Layout>
        <Query query={PostQuery} variables={{categoryId}}>
          {({ loading, error, data }) => {
            if (loading) return <ActivityIndicator color={colors.teal} />;
            if (error) return <Text>OH OH :{`Error: ${error}`}</Text>;

            return (
              <View style={styles.videoBox}>

                {data.posts
                 .map(({ title, image, video }, idx, rateArr) => (

                   <Video
                     key={title}
                     url={''}
                     logo={''}
                     placeholer={''}
                     title={title}
                     rotateToFullScreen
                   />

                 ))}

              </View>
            );
          }}
        </Query>
      </Layout>
    );
  }
}
