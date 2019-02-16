import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import Layout from '../Components/Layout';
import NavigationService from '../Configs/NavigationService';
import VideoPlayer from 'react-native-video-controls';


import { Query } from "react-apollo";
import gql from "graphql-tag";

import { colors, fontSize, styles } from "../Styles/styles";

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
        <View>

          {data.posts
           .map(({ title, image, video }, idx, rateArr) => (
             <View>
                  <Text style={styles.title}>{title}</Text>
                  <VideoPlayer
                  //source={{ uri: "http://172.16.6.146:3000"+video.url }}
                  source={{ uri: "http://techslides.com/demos/sample-videos/small.mp4"}}
                  navigator={ this.props.navigator}
                  toggleResizeModeOnFullscreen= {false}
                />
                </View>
           ))}

        </View>
      );
    }}
  </Query>
      </Layout>
    );
  }
}
