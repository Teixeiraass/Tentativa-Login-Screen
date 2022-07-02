import { StyleSheet, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { Input, Button, Text } from '@rneui/themed'
import { KeyboardAvoidingView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import firebase from 'firebase/compat'

const RegisterScreen = ({ navigation }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Back to Login"
    })
  }, [navigation])

  const register = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((authUser) => {
      authUser.user.update({
        displayName: name,
        photoUrl: imageUrl || "https://cencup.com/wp-content/upload/2019/07/avatar-placeholder.png"
      })
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.Container}>
      <StatusBar style='light'/> 

      <Text h3 style={{marginBottom: 50}}>
        Create a Signal account
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder='Full Name'
          keyboardType='default'
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder='Email'
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
        <Input
          placeholder='Profile Picture Url (optional)'
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={register}
        />
      </View>
      <Button 
      containerStyle={styles.button}
      raised onPress={register} title="Register"
      />
      <View style={{height: 80}}/>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  button: {
    width: 200, 
    marginTop: 10,
  },
  inputContainer: {
    width: 300,

  }
})