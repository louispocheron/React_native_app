import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  useWindowDimensions
} from 'react-native'

import CustomInput from '../../components/customInputs/CustomInput'
import CustomButton from '../../components/customButtons/CustomButton'


const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  

  const onRegisterPress = () => {
    console.warn("pressed Register")
  }
  const OnConditionEvent = () => {
    console.warn("condition d'utilisation")
  }



  return (
    <View style={styles.root}>
      <Text style={styles.title}>Créer un compte</Text>
      <CustomInput
       placeholder="Adresse Email"
       value={email}
       setValue={setEmail}
      />
      <CustomInput
       placeholder="Nom / Prenom"
       value={username}
       setValue={setUsername}
      />
      <CustomInput
       placeholder="Mot de passe" 
       value={password}
       setValue={setPassword}
       secureTextEntry={true}
      />
      <CustomInput
       placeholder="Mot de passe" 
       value={passwordRepeat}
       setValue={setPasswordRepeat}
       secureTextEntry={true}
      />
      <CustomButton
       onPress={onRegisterPress}
       text="s'inscrire"
       type='PRIMARY'
      />
      <Text style={styles.text}>
        En vous inscrivant vous acceptez les{' '}
        <Text style={styles.link} onPress={OnConditionEvent}>Conditions Générales d'Utilisation de SAVED</Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    padding: 20,
    alignItems: 'center'
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
    color: "#3B71F3"
  },
  text:{
    color: "gray",
    marginVertical: 10
  },
  link:{
    color: "#3B71F3"
  },
})


export default RegisterScreen