import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import { makeCircle } from "../../utils/themes";
import { fakeAvatar } from "../../utils/constants";

export default function Header() {
  return (
    <View style={styles.root}>
      <View style={styles.userMetaWrapper}>
        <View style={styles.avatarWrapper}>
          <Image source={{ uri: fakeAvatar }} style={styles.avatarImg} />
        </View>
      </View>
      <View style={styles.buttonWrapper}>{}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: 60,
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingHorizontal: 16
  },
  userMetaWrapper: {
    flex: 1,
    backgroundColor: "blue",
    flexDirection: "row"
  },
  buttonWrapper: {
    flex: 0.1,
    backgroundColor: "yellow"
  },
  avatarWrapper: {
    flex: 0.15,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center"
  },
  avatarImg: {
    ...makeCircle(45)
  }
});
