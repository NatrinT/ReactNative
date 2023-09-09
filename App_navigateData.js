import { View, Text, Button } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import CreatePostScreen from "./screens/CreatePostScreen";
import IndexScreen from "./screens/IndexScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        mode = 'model'
        screenOptions={{
          headerStyle: {
            backgroundColor: "#FF0000",
          },
          headerTintColor: "#ffff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}>
        <Stack.Screen
        name="Index"
        component={IndexScreen}
        options={{title:'MainPage'}}
        />
        <Stack.Screen
        name="CreatePost"
        component={CreatePostScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
