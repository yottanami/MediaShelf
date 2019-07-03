import React, { Component } from "react";
import Video, { ScrollView, Container } from 'react-native-af-video-player';
import Setting from '../Configs/settings';
import gql from "graphql-tag";
import NavigationService from '../Configs/NavigationService';


import {
  View,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions
} from "react-native";

import { Header,
         Content,
         Card,
         CardItem,
         Thumbnail,
         Text,
         Button,
         Icon,
         Left,
         Body,
         Right,
         H3
       } from 'native-base';


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

export default class VideoPlayer extends Component {

  constructor() {
    super();
    //    this.onFullScreen = this.onFullScreen.bind(this)
    this.state = {
      data: {}
    };
  }

  async componentDidMount (){
    const client = this.props.client;

    try {
      await client.query({
        query: PostQuery,
        variables: {id: this.props.postID}
      }).then(data => {
        this.setState({data: data.data});
      });
    } catch(err) {
      console.log("Error fetching post-----------", err);
      alert('Error fetching data');
    }
  }


  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    const header = state.params.fullscreen ? undefined : null;
    return {
      header
    };
  }

  onFullScreen(status) {
    this.props.setNavigationOptions(status);
  }

  render () {
    if(this.state.data.post != null){
      return (
        <ScrollView>
                <Video
                  key={this.state.data.post.title}
                  url={Setting.serverMainPath + this.state.data.post.video.url}
                  placeholder={Setting.serverMainPath + this.state.data.post.image.url}
                  logo={Setting.serverMainPath + this.state.data.post.image.url}
                  title={this.state.data.post.title}
                  onFullScreen={fullScreen => this.onFullScreen(fullScreen)}
                  rotateToFullScreen
                />
          <Card>
            <CardItem>
              <H3>
                {this.state.data.post.title}
              </H3>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  {this.state.data.post.body}
                </Text>
              </Body>
            </CardItem>
          </Card>
        </ScrollView>
      );

    }else{
      return <ActivityIndicator />;
    }
  }
}
