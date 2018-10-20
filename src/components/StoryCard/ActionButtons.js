import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

class ActionButtons extends Component {
  state = {};
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.actionWrapper}>
          <TouchableOpacity style={styles.actionBtn}>
            <AntDesign name="hearto" size={30} />
          </TouchableOpacity>
        </View>
        <View>{}</View>
        <View>{}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    height: 50,
    backgroundColor: "red",
    paddingHorizontal: 16
  },
  actionWrapper: {
    flex: 1,
    backgroundColor: "dodgerblue"
  },
  actionBtn: {
    flex: 1
  }
});

export default ActionButtons;
