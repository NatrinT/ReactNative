import { StyleSheet, Text, TextInput, View ,Button} from 'react-native'
import React, { useState } from 'react'

const Login = () => {
    const[textInputName,settextInputName] = useState('')
    const[textInputEmail,settextInputEmail] = useState('')

    const checkTextInput = () => {
        if(!textInputName.trim()){
            alert('Please Enter Name')
            return
        }
        if(!textInputEmail.trim()){
            alert('Please Enter Email')
            return
        }
        alert('Success')
    }
  return (
    <View style={styles.container}>
      <TextInput
      placeholder='Enter Name'
      style = {styles.textInputStlye}
      valueN = {textInputName}
      onChangeText={(valueN)=>{settextInputName(valueN)}}
      />
      <Text>{'\n'}</Text>
      <TextInput
      placeholder='Enter Email'
      style = {styles.textInputStlye}
      valueE = {textInputEmail}
      onChangeText={(valueE)=>{settextInputEmail(valueE)}}
      />
      <Text>{'\n'}</Text>
      <Button
      title='SUBMIT'
      onPress={checkTextInput}
      />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20
    },
    textInputStlye:{
        width:'100%',
        height:40,
        paddingHorizontal:5,
        borderWidth:0.5,
        marginTop:15
    }
})