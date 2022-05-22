import React from 'react';

import { StatusBar,BackHandler } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./Source/Screens/HomeScreen";
import QuizScreen from "./Source/Screens/QuizScreen";
import ResultScreen from "./Source/Screens/ResultScreen";

const Stack = createStackNavigator();
export default function App() {
  React.useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => true);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", () => true);
  }, []);
  return (
    <NavigationContainer>
      <StatusBar
        networkActivityIndicatorVisible={false}
        barStyle="light-content"
        animated={true}
      />
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={"HomeScreen"}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="QuizScreen" component={QuizScreen} />
        <Stack.Screen name="ResultScreen" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
