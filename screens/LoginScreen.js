import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Input, Image, Button } from '@rneui/themed'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import firebase from 'firebase/compat/app'

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      console.log(authUser)
      if(authUser){
        navigation.navigate("Home")
      }
    });

    return unsubscribe;
  }, [])

  const singIn = () => {}

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.Container}>
      <StatusBar style='light'/>
      <Image 
        source={{
          url: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png"
        }}
        style={{width: 200, height: 200}}
      />
      <View style={styles.inputContainer}>
        <Input 
        placeholder='Email' 
        autoFocus 
        keyboardType='email-address'
        value={email} 
        onChangeText={(text) => setEmail(text)}
        />
        <Input 
        placeholder='Password' 
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Button containerStyle={styles.button} onPress={singIn} title='Login' />
      <Button onPress={() => navigation.navigate("Register")} 
      containerStyle={styles.button} 
      type="outline" 
      title='Register' 
      />
      <View style={{height: 100}}/>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
})