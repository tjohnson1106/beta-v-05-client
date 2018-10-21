import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

import { makeHitSlop } from "../../utils/themes";

class ActionButtons extends Component {
  state = {};
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.actionWrapper}>
          <TouchableOpacity style={styles.actionBtn} hitSlop={makeHitSlop(20)}>
            <AntDesign name="hearto" size={27} color="#00001F" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn} hitSlop={makeHitSlop(20)}>
            <AntDesign name="message1" size={27} color="#00001F" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn} hitSlop={makeHitSlop(20)}>
            <AntDesign name="retweet" size={27} color="#00001F" />
          </TouchableOpacity>
        </View>
        <View style={styles.fakeView} />
        <TouchableOpacity style={styles.bookmarkWrapper} hitSlop={makeHitSlop(20)}>
          <AntDesign name="book" size={27} color="#00001F" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    height: 50,
    paddingHorizontal: 16,
    flexDirection: "row"
  },
  actionWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  actionBtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  fakeView: {
    flex: 1.6
  },
  bookmarkWrapper: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "flex-end"
  }
});

export default ActionButtons;
