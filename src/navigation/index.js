import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen'
import RegisterScreen from '../screens/auth/RegisterScreen'

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={LoginScreen}/>
        {/* <Stack.Screen name="register" component={RegisterScreen}/> */}

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation