import { StyleSheet, Text, View,Button } from "react-native";
import React from "react";

const FirstPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>This is the First Page of the app</Text>
      <Button
      title="GO TO SECOND PAGE"
      onPress={()=>navigation.navigate('SecondP')}
      />
    </View>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    rowGap:10,
  },
  textStyle: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 16,
  },
});
