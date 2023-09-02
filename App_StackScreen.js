import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

function HomeScreen({navigation}){
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Home Screen</Text>
      <Button
      title='Go to Detail'
      onPress={()=>navigation.navigate('Detail')}
      />
    </View>
  )
}

function DetailScreen(){
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Detail Screen</Text>
    </View>
  )
}

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
        component={DetailScreen}
        options={{title:'Detail : Overview'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App