import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const SecondPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>This is Second Page of the app</Text>
      <Button
      title="GO BACK"
      onPress={()=>navigation.goBack('FirstP')}
      />
       <Button
      title="GO THE SECONDPAGE... AGAIN"
      onPress={()=>navigation.push('SecondP')}
      />
       <Button
      title="GO TO FIRST PAGE"
      onPress={()=>navigation.navigate('FirstP')}
      />
       <Button
      title="GO TO THRID PAGE"
      onPress={()=>navigation.navigate('ThirdP')}
      />
    </View>
  );
};

export default SecondPage;

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
