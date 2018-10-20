import React, { PureComponent } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import Header from "./Header";

class StoryCard extends PureComponent {
  state = {};
  render() {
    return (
      <View style={styles.root}>
        <Header />
        <Image
          style={styles.img}
          source={{
            uri:
              "https://res.cloudinary.com/bracket-factory/image/upload/v1532454234/saga/pexels-photo-210492.jpg"
          }}
        />
        <Text>StoryCard</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    minHeight: 500,
    paddingBottom: 10
  },
  img: {
    flex: 1
  }
});

export default StoryCard;
