import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const DetailsScreen = ({navigation}) => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Detail Screen</Text>
      <Button
      title='Go to Detail... Again'
      onPress={()=>navigation.push('Detail')}
      />
      <Button
      title='GO TO HOME'
      onPress={()=>navigation.navigate('Home')}
      />
      <Button
      title='Go Back'
      onPress={()=>navigation.goBack('Detail')}
      />
    </View>
  )
}

export default DetailsScreen