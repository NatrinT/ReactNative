import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TouchableExample from './components/TouchableExample'
import RandomUsersScreen from './components/RandomUsersScreen'

const App = () => {
  return (
    <View>
      {/* <TouchableExample/> */}
      <RandomUsersScreen/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})                