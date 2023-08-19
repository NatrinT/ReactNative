import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import { TouchableHighlight,TouchableOpacity } from "react-native-web";

const TouchableExample = () => {
  const [count, setCount] = useState(0);
  const onPress = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.button} onPress={onPress}>
        <Text>TouchableHighlight</Text>
      </TouchableHighlight>
      <View style={styles.countContainer}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.countContainer}>TouchableOpacity</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.countContainer}>
        <TouchableHighlight style={styles.button} onPress={onPress}>
          <Text style={styles.countContainer}>{count}</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default TouchableExample;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal:10,
    },
    button:{
        alignItems:'center',
        backgroundColor:'#DDDDDD',
        padding:10,
    },
    countContainer:{
        alignItems:'center',
        padding:10,
    },
    countText:{
        color:'#FF00FF'
    }
})