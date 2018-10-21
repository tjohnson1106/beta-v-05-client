import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { human, systemWeights } from "react-native-typography";

export default function Meta({ caption = "Photo comment area", username = "username" }) {
  return (
    <View style={styles.root}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>
          Liked by <Text style={systemWeights.regular}>Jane Doe</Text> and
          <Text style={systemWeights.regular}>1,322 others</Text>
        </Text>
      </View>
      <View>
        <Text style={styles.text}>
          <Text>{username}</Text> {caption}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    minHeight: 50,
    paddingHorizontal: 16
  },
  wrapper: {
    flex: 1
  },
  text: {
    ...human.footnoteObject,
    ...systemWeights.light
  }
});
