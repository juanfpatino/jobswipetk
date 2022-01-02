import React from 'react';
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