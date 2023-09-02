import { StyleSheet, Text, View,Button } from "react-native";
import React from "react";

const ThirdPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>This is Third Page of the app</Text>
      <Button
      title="GO BACK"
      onPress={()=>navigation.goBack('SecondP')}
      />
       <Button
      title="GO THE SECOND PAGE"
      onPress={()=>navigation.navigate('SecondP')}
      />
       <Button
      title="RESET NAVIGATOR TO FIRST PAGE"
      onPress={()=>navigation.navigate('FirstP')}
      />
    </View>
  );
};

export default ThirdPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 16,
  },
});
