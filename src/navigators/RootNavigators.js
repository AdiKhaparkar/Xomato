import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from '../screens/AuthNavigation/AuthNavigation';
import WelcomeScreen from '../screens/LoginSignupScreen/WelcomeScreen/WelcomeScreen';
import LoginScreen from '../screens/LoginSignupScreen/LoginScreen.js/LoginScreen';

const RootNavigators = () => {
  return (
    <NavigationContainer>
      <AuthNavigation />
      {/* <WelcomeScreen/> */}
      {/* <LoginScreen /> */}
    </NavigationContainer>
  );
};

export default RootNavigators;
