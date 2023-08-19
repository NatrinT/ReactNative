import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TouchableExample from './components/TouchableExample'
import RandomUsersScreen from './components/RandomUsersScreen'
import FlatList_Example1 from './components/FlatList_Example1'
import FlatList_HeaderFooter from './components/FlatList_HeaderFooter'

const App = () => {
  return (
    <View>
      {/* <TouchableExample/> */}
      {/* <RandomUsersScreen/> */}
      {/* <FlatList_Example1/> */}
      <FlatList_HeaderFooter/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})                