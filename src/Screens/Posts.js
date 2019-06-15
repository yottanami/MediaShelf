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
    const { navigate } = this.props.navigation;

    return (
      <Layout>
        <Query query={PostQuery} variables={{categoryId}} >
          {({ loading, error, data }) => {
            if (loading) return <ActivityIndicator color={colors.teal} />;
            if (error) return <Text>OH OH :{`Error: ${error}`}</Text>;

            return (
              <View>

                {data.posts
                 .map(({ id, title, image, body }, idx, rateArr) => (
                   <TouchableOpacity
                     key={id}
                     onPress={() => navigate('Post', {id: id})} >
                     <Card>
                       <CardItem>
                         <Right style={{flex:1}}>
                           <H3>
                             {title}
                           </H3>
                         </Right>
                       </CardItem>

                       <CardItem cardBody>
                         <Image
                           style={{ width: '100%', height: 150 }}
                           source={{uri: Setting.serverMainPath +image.thumb.url}}

                         />
                       </CardItem>
                       <CardItem footer>
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
