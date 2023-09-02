import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
        name='Home' 
        component={HomeScreen}
        options={{title:'Home : Overview'}}
        />
        <Stack.Screen 
        name='Detail' 
        component={DetailsScreen}
        options={{title:'Detail : Overview'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App