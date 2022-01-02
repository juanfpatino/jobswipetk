import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import test from './components/test';
import preferences from './components/preferences';
import search from './components/search';

const {Navigator, Screen} = createStackNavigator();

export default function App() {

  return(
    <NavigationContainer>
      <Navigator>

        <Screen
        name = "preferences"
        options={{title: "Set job search"}}
        component={preferences}
        />
        <Screen
        name = "search"
        options={{title: "Results"}}
        component={search}
        />
        <Screen 
        name = "test"
        options = {{title: "Test screen"}}
        component={test}
        />
      </Navigator>
    </NavigationContainer>



  );

}