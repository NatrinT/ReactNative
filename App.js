import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ViewBoxesWithColorAndtext from './components/ViewBoxesWithColorAndtext';
import DisplayandImage from './components/DisplayandImage';
import LotsOfGreeting from './components/LotsOfGreeting';
import MyCustomTextWith from './components/CustomText';
import CustomText from './components/CustomText';
import Counter from './components/Counter';
import MyInput from './components/MyInput';
import IncrementCounter from './components/IncrementCounter';
import Form from './components/Form';
import UselessTextInput from './components/UselessTextInput';
import Login from './components/Login';
import Recap from './components/Recap';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Counter/> */}
      {/* <MyInput/> */}
      {/* <IncrementCounter/> */}
      {/* <Login/> */}
      <Recap/>
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
