import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Button,
} from "react-native";
import { SafeAreaView } from "react-navigation";
import colors from "../config/colors";
import LottieView from "lottie-react-native";

export default class WelcomeScreen extends React.Component {
  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    // this.animation.play(30, 120);
  }

  render() {
    return (
      <SafeAreaView style={styles.background}>
        <View style={styles.logoContainer}>
          {/* <Image
            style={styles.logo}
            source={require("../assets/img1.jpg")}
          ></Image> */}

          <View >
            <LottieView
              ref={(animation) => {
                this.animation = animation;
              }}
              style={{
                width: 400,
                top: 20,
                height: 300,
                backgroundColor: "#fff",
              }}
              source={require("../assets/book.json")}
            />
             
          </View>
             <Text style={styles.title}>MediRecords</Text>
        </View>
    
    
   

        <View style={styles.loginButtonbg}>
          <Button
            style={styles.loginButton}
            title="Login"
            onPress={() => this.props.navigation.navigate("LoginScreen")}
          ></Button>
        </View>

        <View style={styles.registerButtonbg}>
          <Button
            style={styles.registerButton}
            title="Signup"
            onPress={() => this.props.navigation.navigate("SignupScreen")}
          ></Button>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "white",
  },

  title: {
   textAlign: 'center', 
    marginTop: 0,
    width: "100%",
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
  },

  logo: {
    height: 200,
    width: 200,
    top: 80,
  },

  title:{
    fontSize:24,
    textDecorationStyle:"double"
  },

  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },

  loginButtonbg: {
    backgroundColor: "#fcfc65",
    width: "90%",
    height: 70,
    justifyContent: "center",
    borderRadius:20,
    borderWidth: 2,
    borderColor: '#fff',
    marginRight:40,
    marginLeft:40,
  
  },

  registerButtonbg: {
    width: "90%",
    height: 70,
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:20,
    paddingBottom:10,
    backgroundColor:'lightgreen',
    borderRadius:20,
    borderWidth: 2,
    borderColor: '#fff'
  },

  loginButton: {
    width: "100%",
    height: 70,
    color: "#fff",
  },

  registerButton: {
    color:'#000',
    textAlign:'center',
  },
});
