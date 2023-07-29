import { StyleSheet, Text, View} from 'react-native'
import React, {useState} from 'react'
import { Button,TextInput } from 'react-native-web'

const Recap = () => {
    const[textPassword,settextPassword] = useState('')
    const[textEmail,settextEmail] = useState('')
    const checkAlert = () => {
        if(textEmail!='' && textPassword!=''){
            alert('email : '+textEmail+'\nPassword : '+textPassword)
        }
        else{
            alert('Enter your password or email')
        }
    }
  return (
    <View style={styles.container}>
      <TextInput
      placeholder='Enter Email'
      style = {styles.Input}
      value = {textEmail}
      onChangeText={(value)=>{settextEmail(value)}}
      />
      <Text>{'\n'}</Text>
      <TextInput
      placeholder='Enter Password'
      style = {styles.Input}
      value = {textPassword}
      onChangeText={(value)=>{settextPassword(value)}}
      />
      <Text>{'\n'}</Text>
      <Button
      title='SUBMIT'
      style={styles.submitButton}
      onPress={checkAlert}
      />
    </View>
  )
}

export default Recap

const styles = StyleSheet.create({
    container:{
        padding:23
    },
    Input:{
        margin:15,
        height:40,
        borderColor:'#7a42f4',
        borderWidth:1
    },
    submitButton:{
        backgroundColor:'#7a42f4',
        padding:10,
        margin:15,
        height:40,
    },
    submitButtonText:{
        color:'white'
    }
})