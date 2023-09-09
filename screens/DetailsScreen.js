import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const DetailsScreen = ({route,navigation}) => {

  //2.Get the param
  const {itemId,otherParam} = route.params;

  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Detail Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}{'\n'}</Text>
      <Button
      title='Go to Detail... Again'
      onPress={()=>navigation.push('Detail',{
        itemId : Math.floor(Math.random()*100),
        otherParam: 'I love Traimpatthanakarn'
      })}
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