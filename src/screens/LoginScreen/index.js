// @flow

import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { iOSColors } from "react-native-typography";

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.header}>
          <Text>Vertigo</Text>
        </View>
        <View style={styles.content}>
          <Text>Content</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    flex: 0.3,
    backgroundColor: blue,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center"
  },
  appName: {
    color: iOSColors.white,
    fontSize: 50
  },
  content: {
    flex: 1,
    backgroundColor: "red",
    alignSelf: "stretch"
  }
});

export default LoginScreen;
