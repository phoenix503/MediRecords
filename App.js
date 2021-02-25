import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import HomePage from "./app/screens/HomePage";
import LoginScreen from "./app/screens/LoginScreen";
import SignupScreen from "./app/screens/SignupScreen";

import {
  createStackNavigator,
} from 'react-navigation-stack';

import { createAppContainer } from 'react-navigation';
import Profile from "./app/screens/Profile";


const RootStack = createStackNavigator({
  WelcomeScreen: {
    screen: WelcomeScreen,
    navigationOptions:{
      headerShown: false
    }
  },
  HomePage: {
    screen: HomePage,
    // navigationOptions:{
    //   headerShown: false
    // }
  },
  LoginScreen:{
    screen: LoginScreen,
    navigationOptions:{
      headerShown: false
    }
  },
  SignupScreen:{
    screen: SignupScreen,
    navigationOptions:{
      headerShown: false
    }
  },
  Profile:{
    screen: Profile,
    navigationOptions:{
      headerShown: false
    }
  },

});

const App = createAppContainer(RootStack);

export default App;

