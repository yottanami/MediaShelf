import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import {H2} from 'native-base';
import Layout from '../Components/Layout';
import VideoPlayer from '../Components/Layout';
import NavigationService from '../Configs/NavigationService';

import { Query } from "react-apollo";
import gql from "graphql-tag";

import { colors, fontSize, styles } from "../Styles/styles";
import Video from 'react-native-af-video-player';
import Setting from '../Configs/settings';

const PostQuery = gql`
query Post($id: ID!) {
  post(id: $id) {
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
    const id = this.props.navigation.getParam('id', 0);
    return (
      <Layout>
        <Query query={PostQuery} variables={{id}}>
          {({ loading, error, data }) => {
            if (loading) return <ActivityIndicator color={colors.teal} />;
            if (error) return <Text>OH OH :{`Error: ${error}`}</Text>;

            return (
              <View style={styles.videoBox}>
                     <H2>{data.post.title}</H2>
                   <Video
                     key={data.post.title}
                     url={Setting.serverMainPath + data.post.video.url}
                     placeholder={Setting.serverMainPath + data.post.image.url}
                     logo={Setting.serverMainPath + data.post.image.url}
                     title={data.post.title}
                     rotateToFullScreen
                   />
                     <Text>{data.post.body}</Text>
              </View>
            );
          }}
        </Query>
      </Layout>
    );
  }
}
