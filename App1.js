import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UselessTextInput from './components/UselessTextInput';
import Login from './components/Login';
import Recap from './components/Recap';
import DefineStyle from './components/DefineStyle';
import styles from './components/styles';

export default function App1() {
  return (
    <View style={styles.container}>
      {/* <Counter/> */}
      {/* <MyInput/> */}
      {/* <IncrementCounter/> */}
      {/* <Login/> */}
      {/* <Recap/> */}
      {/* <DefineStyle/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
     flex:1,   
     justifyContent:'center',    
     alignItems:'center'   
  }
 })
