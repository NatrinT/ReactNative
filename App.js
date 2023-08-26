import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TouchableExample from './components/TouchableExample'
import RandomUsersScreen from './components/RandomUsersScreen'
import FlatList_Example1 from './components/FlatList_Example1'
import FlatList_HeaderFooter from './components/FlatList_HeaderFooter'
import FlatListAPI from './components/FlatListAPI'
import News from './components/News'
import ProductScreen from './components/ProductScreen'

const App = () => {
  return (
    <View style={styles.container}>
      {/* <TouchableExample/> */}
      {/* <RandomUsersScreen/> */}
      {/* <FlatList_Example1/> */}
      {/* <FlatList_HeaderFooter/> */}
      {/* <FlatListAPI/> */}
      {/* <News/> */}
      <ProductScreen/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    },
})                