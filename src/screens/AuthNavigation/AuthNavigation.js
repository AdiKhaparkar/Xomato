import {View, Text} from 'react-native';
import React from 'react';

import WelcomeScreen from '../LoginSignupScreen/WelcomeScreen/WelcomeScreen';
import LoginScreen from '../LoginSignupScreen/LoginScreen.js/LoginScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignupScreen from '../LoginSignupScreen/SignupScreen/SignupScreen';
import { HomeScreen } from '../HomeScreen/HomeScreen';
const Stack = createNativeStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Welcomepage">
      <Stack.Screen
        name="Welcomepage"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignupPage"
        component={SignupScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LoginPage"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
