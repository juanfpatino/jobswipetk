import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, SafeAreaView, ScrollView, View, StyleSheet, ActivityIndicator, Button
  , RefreshControl } from 'react-native';
  import Constants from 'expo-constants';


export default function preferences({ navigation }) {


  return (
    <View style={styles.container}>
    <SafeAreaView>
        <Text>hi</Text>
    </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pic:{

    height: 500,
    width: 500

  }
});