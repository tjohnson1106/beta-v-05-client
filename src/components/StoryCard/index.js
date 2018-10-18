import React, { PureComponent } from "react";
import { View, Text, StyleSheet } from "react-native";

import Header from "./Header";

class StoryCard extends PureComponent {
  state = {};
  render() {
    return (
      <View style={styles.root}>
        <Header />
        <Text>StoryCard</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    minHeight: 500,
    backgroundColor: "red",
    paddingBottom: 10
  }
});

export default StoryCard;
