import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={[styles.container,{flexDirection:'column'}]}>
      {/* <view style={{flex:1,backgroundColor:'red'}}/>
      <view style={{flex:2,backgroundColor:'darkorange'}}/>
      <view style={{flex:3,backgroundColor:'green'}}/> */}
      <view style={{flex:1,backgroundColor:'blue'}}/>
      <view style={{flex:1,backgroundColor:'skyblue'}}/>
      <view style={{flex:1,backgroundColor:'steelblue'}}/>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
     flex:1,   
  }
 })

export default App