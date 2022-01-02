import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import test from './components/test';
import preferences from './components/preferences';

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
        <Screen
        name = "preferences"
        options={{title: "Set job search"}}
        component={preferences}
        />
      </Navigator>
    </NavigationContainer>



  );

}