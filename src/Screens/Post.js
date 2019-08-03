import React, { Component } from 'react';
import { StyleSheet, View, Alert, Text, ActivityIndicator, Orientation } from 'react-native';
import {H2, H3, Card, CardItem, Right, Body, Button} from 'native-base';
import { colors, fontSize } from "../Styles/styles";
import Video, { ScrollView, Container } from 'react-native-af-video-player';
import { Query, withApollo, ApolloConsumer } from "react-apollo";
import Setting from '../Configs/settings';
import gql from "graphql-tag";
import Layout from '../Components/Layout';
import VideoPlayer from '../Components/VideoPlayer';
import NavigationService from '../Configs/NavigationService';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

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

class Post extends Component {
  constructor() {
    super();
    this.onFullScreen = this.onFullScreen.bind(this);
  }


  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    const header = (state.params.fullscreen ? null : undefined);
    return {
      header,
    };
  }

  onFullScreen(status) {
    this.props.navigation.setParams({
      fullscreen: status
    });
  }


  render() {
    const id = this.props.navigation.getParam('id', 0);
    return (
      <Layout>
        <ApolloConsumer>
          {client =>
           <VideoPlayer client={client} postID={id} setNavigationOptions={this.onFullScreen} />
          }
        </ApolloConsumer>
      </Layout>
    );
  }
}

export default Post = Post;
