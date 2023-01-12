import { View, Text } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/customInputs/CustomInput'
import CustomButton from '../../components/customButtons/CustomButton'

const LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLoginPress = () => {
        console.warn("pressed")
      }
    
  


  return (
    <View>
      <CustomInput
        value={email}
        setValue={setEmail}
        placeholder={"Adresse Email"}
      />
      <CustomInput
        value={password}
        setValue={setPassword}
        placeholder={"Mot de passe"}
        secureTextEntry={true}
      />
      <CustomButton 
      text={"Se connecter"}
      onPress={onLoginPress}
      />
    </View>
  )
}

export default LoginScreen