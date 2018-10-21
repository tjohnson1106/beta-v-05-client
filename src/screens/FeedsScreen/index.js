import React, { Component } from "react";
import { FlatList, ActivityIndicator, StyleSheet, View } from "react-native";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

import { StoryCard } from "../../components";

class FeedsScreen extends Component {
  state = {};

  _keyExtractor = item => item.id;

  _renderItem = ({ item }) => <StoryCard data={item} />;

  render() {
    if (this.props.data.loading) {
      return (
        <View style={styles.loadingWrapper}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <FlatList
        data={this.props.data.photos}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

const getPhotos = gql`
  query {
    photos {
      id
      imageUrl
      caption
    }
  }
`;

const styles = StyleSheet.create({
  loadingWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default graphql(getPhotos)(FeedsScreen);
