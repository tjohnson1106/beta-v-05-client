import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { human, iOSColors } from "react-native-typography";

import Header from "./Header";
import ActionButtons from "./ActionButtons";
import Meta from "./Meta";
import CommentInput from "../CommentInput";

class StoryCard extends Component {
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
        <ActionButtons />
        <Meta />
        <View style={styles.commentsWrapper}>
          <TouchableOpacity>
            <Text style={styles.commentViewAll}>View all 10 comments</Text>
          </TouchableOpacity>
          <CommentInput />
        </View>
        <View style={styles.timeAgoWrapper}>
          <Text style={styles.timeAgo}>6 Hours Ago</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    minHeight: 800,
    paddingBottom: 10
  },
  img: {
    flex: 1
  },
  commentsWrapper: {
    height: 50,
    paddingHorizontal: 16
  },
  commentViewAll: {
    ...human.calloutObject,
    color: iOSColors.midGray
  },
  timeAgoWrapper: {
    height: 70,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 16
  },
  timeAgo: {
    ...human.footnoteObject,
    color: iOSColors.midGray
  }
});

export default StoryCard;
