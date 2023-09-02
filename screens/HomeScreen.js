import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const HomeScreen = ({route,navigation}) => {

    const {itemId} = route.params;

  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Home Screen</Text>
      <Text>Initial param : itemId - {itemId}{'\n'}</Text>
      <Button
      title='UPDATE PARAM'
      onPress={()=>navigation.setParams({itemId: Math.floor(Math.random()*100)})}
      />
      <Text/>
      <Button
      title='Go to Detail'
      onPress={()=>navigation.navigate('Detail')}
      />
    </View>
  )
}

export default HomeScreen