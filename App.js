/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SignUp from './Signup';
import Login from './Login';
import HomeScreen from './HomeScreen'
import{createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

const App= createStackNavigator({
  Login:{
    screen:Login,
    navigationOptions:{
      headerShown:false
    }
  },
  SignUp:{
    screen:SignUp,
    navigationOptions:{
      headerShown:false
    }
  },
  HomeScreen:{
    screen:HomeScreen,
    navigationOptions:{
      headerShown:false
    }
  }
})

export default createAppContainer(App)

