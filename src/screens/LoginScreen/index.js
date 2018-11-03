// @flow

import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Button
} from "react-native";
import { iOSColors } from "react-native-typography";
import LinearGradient from "react-native-linear-gradient";

import { fonts } from "../../utils/themes";

const COLOR_GRADIENTS = ["#5187fb", "#2f7083"];

const BUTTON_GRADIENTS = ["#5187fb", "#7159ab", "#5e3563", "#361c2c"];

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <StatusBar barStyle="default" hidden={true} />
        <LinearGradient
          start={{
            x: 0.0,
            y: 0.0
          }}
          end={{ x: 1.0, y: 1.0 }}
          colors={COLOR_GRADIENTS}
          style={styles.header}
        >
          <Text style={styles.appName}>Vertigo</Text>
        </LinearGradient>
        <ImageBackground
          source={require("../../../assets/images/login_image.jpg")}
          style={styles.content}
        >
          <View style={styles.section}>
            <View style={styles.inputWrapper}>
              <TextInput placeholder="Email" />
            </View>
            <View style={styles.inputWrapper}>
              <TextInput style={styles.input} placeholder="Password" />
            </View>
            <TouchableOpacity style={styles.loginButton}>
              <LinearGradient
                colors={BUTTON_GRADIENTS}
                start={{
                  x: 0.0,
                  y: 0.0
                }}
                end={{ x: 1.0, y: 1.0 }}
                style={styles.buttonGradient}
              >
                <Text style={styles.loginButtonText}>Login</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ImageBackground>
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
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center"
  },
  appName: {
    color: iOSColors.white,
    fontSize: 50,
    fontFamily: fonts.julius
  },
  content: {
    flex: 1,
    alignSelf: "stretch",
    width: "100%",
    height: "100%"
  },
  section: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch"
  },
  inputWrapper: {
    height: 45,
    width: "90%",
    borderRadius: 5,
    borderColor: "#E4E4E4",
    borderWidth: 1,
    backgroundColor: "#FAF9F9",
    marginBottom: 10,
    padding: 10
  },
  input: {
    flex: 1
  },
  loginButton: {
    height: 45,
    width: "90%",
    borderRadius: 5,
    borderColor: "#E4E4E4",
    borderWidth: 1,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonGradient: {
    alignSelf: "stretch",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  loginButtonText: {
    color: iOSColors.white
  }
});

export default LoginScreen;
