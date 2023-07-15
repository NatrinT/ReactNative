import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ViewBoxesWithColorAndtext from './components/ViewBoxesWithColorAndtext';
import DisplayandImage from './components/DisplayandImage';
import LotsOfGreeting from './components/LotsOfGreeting';
import MyCustomTextWith from './components/CustomText';
import CustomText from './components/CustomText';

export default function App() {
  return (
    <View style={{alignItems:'center',justifyContent:'center',margin:0,padding:0,flex:1}}>
      {/* <ViewBoxesWithColorAndtext/> */}
      {/* <DisplayandImage/> */}
      {/* <LotsOfGreeting/> */}
      <CustomText/>
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
