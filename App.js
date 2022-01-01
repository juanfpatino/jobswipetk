import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, SafeAreaView, ScrollView, View, StyleSheet, ActivityIndicator, Button
  , RefreshControl } from 'react-native';
  import Constants from 'expo-constants';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import test from './components/test';


const {Navigator, Screen} = createStackNavigator();

export default function App() {

  return(
    <NavigationContainer>
      <Navigator>
        <Screen 
        name = "test"
        options = {{title: "Test screen"}}
        component={test}
        />
      </Navigator>
    </NavigationContainer>



  );

}