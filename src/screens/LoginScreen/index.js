import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class LoginScreen extends Component {
  state = {};
  render() {
    return (
      <View style={styles.root}>
        <Text>Login Screen</Text>
      </View>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
