import React, { Component } from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator, TouchableOpacity} from "react-native";
import Layout from '../Components/Layout';
import VideoPlayer from '../Components/Layout';
import NavigationService from '../Configs/NavigationService';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right, H3 } from 'native-base';
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { colors, fontSize, styles } from "../Styles/styles";
import Video from 'react-native-af-video-player';
import Setting from '../Configs/settings';

const PostQuery = gql`
query Posts($categoryId: ID!) {
  posts(categoryId: $categoryId) {
    id,
    title,
    body,
    image
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
                 .map(({ id, title, image }, idx, rateArr) => (
                   <TouchableOpacity
                     key={title}
                     onPress={() => NavigationService.navigate('Post', {id: id})} >
                     <Card style={styles.card}>
                       <CardItem >
                         <H3>{title}</H3>
                       </CardItem>
                       <CardItem cardBody>
                         <Image
                           style={{ width: 400, height: 250 }}
                           source={{uri: Setting.serverMainPath +image.thumb.url}}

                         />
                       </CardItem>

                     </Card>
                   </TouchableOpacity>
                 ))}

              </View>
            );
          }}
        </Query>
      </Layout>
    );
  }
}
