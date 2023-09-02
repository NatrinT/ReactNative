import { View, Text, Button } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#008b8b",
          },
          headerTintColor: "#ffff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="FirstP"
          component={FirstPage}
          options={{ title: "FirstPage" }}
        />
        <Stack.Screen
          name="SecondP"
          component={SecondPage}
          options={{ title: "SecondPage" }}
        />
        <Stack.Screen
          name="ThirdP"
          component={ThirdPage}
          options={{ title: "ThirdP" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
