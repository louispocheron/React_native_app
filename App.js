import React from 'react';
// https://www.youtube.com/watch?v=ALnJLbjI7EY&ab_channel=notJust%E2%80%A4dev

import {
  View, 
  Text
} from 'react-native';

import LoginScreen from './src/screens/auth/LoginScreen';
import RegisterScreen from './src/screens/auth/RegisterScreen';
// import Navigation from './src/navigation';


const App = () => {
  return(
    // <Navigation />

    <RegisterScreen />
  )
}

export default App;
