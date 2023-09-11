import "@babel/polyfill";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddBookScreen from "./screens/AddBookScreen";
import HomeScreen from "./screens/HomeScreen";
import awsExport from "./src/aws-exports"
import {Amplify} from 'aws-amplify'
Amplify.configure(awsExport);

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddBook" component={AddBookScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
