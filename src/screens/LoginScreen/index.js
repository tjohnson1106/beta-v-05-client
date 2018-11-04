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
import { iOSColors, human, systemWeights } from "react-native-typography";
import LinearGradient from "react-native-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";

import { fonts } from "../../utils/themes";

const COLOR_GRADIENTS = ["#5187fb", "#2f7083"];

const BUTTON_GRADIENTS = ["#5187fb60", "#b4daff", "#00156c60", "#e6f4f1"];

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <StatusBar barStyle="dark-content" />
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
            <View style={styles.forgotWrapper}>
              <Text style={styles.forgotText}>Forgot your login details? </Text>
              <TouchableOpacity>
                <Text style={styles.helpText}> Get help signing in.</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.orWrapper}>
            <View style={styles.orDivider} />
            <View style={styles.orTextWrapper}>
              <Text style={styles.orText}>OR</Text>
            </View>
            <View style={styles.orDivider} />
          </View>
          <View style={[styles.section, styles.sectionBottom]}>
            <TouchableOpacity style={styles.facebookLoginButton}>
              <AntDesign size={30} name="facebook-square" color="#5187fb" />
              <Text style={styles.facebookLoginButtonText}> Continue With Facebook</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.noAccountWrapper}>
            <Text style={styles.accountInquiryText}>Don't have an account? </Text>
            <TouchableOpacity>
              <Text style={styles.helpText}>Sign up here.</Text>
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
  sectionBottom: {
    flex: 0.7,
    justifyContent: "flex-start"
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
  },
  forgotWrapper: {
    marginVertical: 10,
    flexDirection: "row"
  },
  helpText: {
    ...human.footnoteObject,
    ...systemWeights.semibold,
    color: "#318DEE"
  },
  forgotText: {
    ...human.footnoteObject,
    ...systemWeights.bold,
    color: "#318DEE",
    fontSize: 12.75
  },
  orWrapper: {
    width: "90%",
    marginVertical: 10,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center"
  },
  orDivider: {
    height: 1,
    width: "100%",
    flex: 1,
    backgroundColor: "#E4E4E4"
  },
  orTextWrapper: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center"
  },
  orText: {
    ...systemWeights.semibold,
    color: iOSColors.gray
  },

  facebookLoginButton: {
    flexDirection: "row",
    height: 50,
    alignItems: "center"
  },
  // TODO:  Find text color that displays properly
  facebookLoginButtonText: {
    color: "#5187fb",
    ...human.calloutObject,
    ...systemWeights.semibold
  },
  noAccountWrapper: {
    height: 50,
    width: "100%",
    borderColor: "#ECECEC",
    borderTopWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  accountInquiryText: {
    ...human.footnoteObject,
    ...systemWeights.bold,
    color: iOSColors.midGray
  }
});

export default LoginScreen;
