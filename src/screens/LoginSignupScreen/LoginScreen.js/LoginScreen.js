import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {Divider} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import {button, Color} from '../../../globals/GlobalStyles';
import {useNavigation} from '@react-navigation/native';
import {firebase} from '@react-native-firebase/firestore';
const LoginScreen = () => {
  const navigation = useNavigation();
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [customError, setCustomerror] = useState('');
  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        var user = userCredential.user;
        console.log("Logged in SuccessFully !!!!!");
        // console.log(user);


        navigation.navigate("HomeScreen")
      })
      .catch((error)=>{
        var errorMessage= error.message;
        // console.log(errorMessage);
        if(errorMessage==="Firebase: The email address is badly formatted .(auth/invalid-email).")
        {
          setCustomerror("Please enter a valid email address")
        }
        else{
          setCustomerror("Incorrect email or Password")
        }
        
      })
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>LoginScreen</Text>
      {customError !== '' && (
        <Text style={styles.errormsg}>{customError}</Text>
      )}
      <Divider />
      <View style={styles.inputout}>
        <AntDesign
          name="user"
          size={24}
          color={emailFocus === true ? Color.red : Color.grey}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onFocus={() => {
            setEmailFocus(true);
            setPasswordFocus(false);
          }}
          onChangeText={text => {
            setEmail(text);
          }}
        />
      </View>
      <View style={styles.inputout}>
        <AntDesign
          name="lock"
          size={24}
          color={passwordFocus === true ? Color.red : Color.grey}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={showPassword === false ? true : false}
          onFocus={() => {
            setEmailFocus(false);
            setPasswordFocus(true);
            setShowPassword(false);
          }}
          onChangeText={text => {
            setPassword(text);
          }}
        />
        <Octicons
          name={showPassword == false ? 'eye-closed' : 'eye'}
          size={24}
          color="black"
          onPress={() => setShowPassword(!showPassword)}
        />
      </View>
      <TouchableOpacity style={button.btn1} onPress={() => handleLogin()}>
        <Text style={styles.signInText}>Sign in</Text>
      </TouchableOpacity>
      <Text style={styles.forgot}>Forgot Password?</Text>
      <Text style={styles.or}>OR</Text>
      <Text style={styles.signInTxt}>Sign In with</Text>
      <View style={styles.socialMediaButtons}>
        <TouchableOpacity>
          <View style={styles.signupIcon}>
            <AntDesign name="google" size={24} color={'red'} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.signupIcon}>
            <AntDesign name="facebook-square" size={24} color={'blue'} />
          </View>
        </TouchableOpacity>
      </View>
      <Divider />
      <Text style={styles.signup}>
        Don't have an account{' '}
        <Text
          style={styles.signup}
          onPress={() => navigation.navigate('SignupPage')}>
          {' '}
          Sign Up
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default LoginScreen;
