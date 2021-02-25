import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import LottieView from 'lottie-react-native';

export default class LoginScreen extends React.Component {
  state = {
    number: "",
    password: "",
  };

  constructor(props) {
    super(props);
    this.searchInput = React.createRef();
  }

  
  handleLogin = () => {
    console.log(this.state.number);
    this.textInput.clear();
    this.animation.play(30, 120);


    this.props.navigation.navigate("HomePage", {
      number: this.state.number,
    })

    // var dataToSend = { 
    //   password: this.state.password.toString(),
    //   mobile: this.state.number };

    //   var formBody = [];
    //   for (var key in dataToSend) {
    //     var encodedKey = encodeURIComponent(key);
    //     var encodedValue = encodeURIComponent(dataToSend[key]);
    //     formBody.push(encodedKey + '=' + encodedValue);
    //   }
    //   formBody = formBody.join('&');

    // fetch("https://amityaaroh.000webhostapp.com/medirecords/login.php", {
    //   method: "POST", 
    //   body: formBody,
    //   headers: {
  
    //     "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    //   },
    // })
    //   .then((response) => { 
      
    //     if(response.status === 200){
    //       console.log("response cdoe",response.status);
    //       this.props.navigation.navigate("HomePage", {
    //             number: this.state.number,
    //           })

    //     }

    //   })
    //   .catch((error) => {
        
    //     console.error("error",error);
    //   });
  
  }
  

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>MediRecords</Text>
        <View style={styles.inputView}>
          <TextInput
            ref={input => { this.textInput = input }}
            style={styles.inputText}
            placeholder="Enter Number"
            placeholderTextColor="#fff"
            keyboardType="numeric"
            onChangeText={(text) => this.setState({ number: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Enter Password"
            placeholderTextColor="#fff"
            onChangeText={(text) => this.setState({ password: text })}
          />
        </View>

        <TouchableOpacity
         onPress={() => {
           alert("Work In Progress")
         }
        }
        >
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.handleLogin} style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate("WelcomeScreen", {
              username: "Priyansh",
            })
          }
        >
          <Text style={styles.loginText}>Go Back?</Text>
        </TouchableOpacity>

        <LottieView
              ref={(animation) => {
                this.animation = animation;
              }}
              style={{
                width: 120,
                top: 8,
                height: 120,
                backgroundColor: "transparent",
              }}
              source={require("../assets/loader.json")}
            />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  forgot: {
    color: "white",
    fontSize: 11,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "#fff",
  },
});
