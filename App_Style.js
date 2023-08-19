import { View, Text } from 'react-native'
import React from 'react'
import styles from './components/styles'

const App = () => {
  return (
    <View style={styles.container}>
      <text style={styles.row}>React</text>
      <text style={styles.row}>Native</text>
    </View>
  )
}

export default App