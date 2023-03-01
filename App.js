import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import WelcomeScreen from './src/screens/LoginSignupScreen/WelcomeScreen/WelcomeScreen';
import LoginScreen from './src/screens/LoginSignupScreen/LoginScreen.js/LoginScreen';
import AuthNavigation from './src/screens/AuthNavigation/AuthNavigation';
import RootNavigators from './src/navigators/RootNavigators';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignupScreen from './src/screens/LoginSignupScreen/SignupScreen/SignupScreen';
import {HomeScreen} from './src/screens/HomeScreen/HomeScreen';
import {firebase} from './src/Firebase/FirebaseConfig';
import auth from '@react-native-firebase/auth';
import {UserprofileScreen} from './src/screens/LoginSignupScreen/UserProfileScreen/UserprofileScreen';
import ProductDetailScreen from './src/screens/ProductDetailScreen/ProductDetailScreen';
import UserCartScreen from './src/screens/UserCart/UserCart';
import OrderPlacedScreen from './src/screens/OrderPlacedScreen/OrderPlacedScreen';
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
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
        <Stack.Screen
          name="UserprofileScreen"
          component={UserprofileScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ProductDetailScreen"
          component={ProductDetailScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="UserCartScreen"
          component={UserCartScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OrderPlacedScreen"
          component={OrderPlacedScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <RootNavigators />
    // <RootNavigators>
    //   <SafeAreaView style={styles.container}>
    //     {/* <WelcomeScreen /> */}
    //     {/* <LoginScreen /> */}
    //     <AuthNavigation />
    //   </SafeAreaView>
    // </RootNavigators>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
