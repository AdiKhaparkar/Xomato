import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {Divider} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import {button, Color} from '../../../globals/GlobalStyles';
import {useNavigation} from '@react-navigation/native';
import {firebase} from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const SignupScreen = () => {
  const navigation = useNavigation();
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);
  const [userNameFocus, setUserNameFocus] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmpasswordFocus, setConfirmPasswordFocus] = useState(false);

  //taking from input data
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setcPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [customError, setCustomError] = useState('');
  const [successmsg, setSuccessmsg] = useState(null);

  const handleSignup = () => {
    // console.log('hello handle signup');

    if (password != cpassword) {
      setCustomError("Password Doesn't Match");
      return;
    } else if (phone.length != 10) {
      setCustomError('Phone Number should be minimum 10 digit');
      return;
    }
    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
          console.log('user created');
          // console.log(userCredentials.user.uid);
          if (userCredentials.user.uid) {
            const userRef = firebase.firestore().collection('userData');
            userRef
              .add({
                email: email,
                password: password,
                phone: phone,
                name: name,
                address: address,
                uid:userCredentials.user.uid
              })
              .then(() => {
                console.log('data added to firestore');
                setSuccessmsg('user Created Successfully');
              })
              .catch(error => {
                console.log('firestore error', error);
              });
          }
        })
        .catch(error => {
          console.log('sign up firebase error', error.message);
          if (
            error.message ==
            'Firebase:The email address is already in use by another account. (auth/email-already-in-use).'
          ) {
            setCustomError('Email Already Exist');
          } else if (
            error.message ==
            'Firebase: The email address is badly formatted .(auth/invalid-email).'
          ) {
            setCustomError('Invalid Email');
          } else if (
            error.message ==
            'Firebase: Password should be at least 6 characters (auth/weak-password).'
          ) {
            setCustomError('Password Should be at least 6 characters');
          } else {
            setCustomError(error.message);
          }
        });
    } catch (error) {
      console.log('signup system  error message', error.message);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container1}>
        {successmsg == null ? (
          <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Sign up</Text>
            {customError !== '' && (
              <Text style={styles.errormsg}>{customError}</Text>
            )}
            <Divider />

            {/*UserName Start*/}
            <View style={styles.inputout}>
              <AntDesign
                name="user"
                size={24}
                color={userNameFocus === true ? Color.red : Color.grey}
              />
              <TextInput
                style={styles.input}
                placeholder="Full Name"
                onFocus={() => {
                  setUserNameFocus(true);
                  setEmailFocus(false);
                  setPasswordFocus(false);
                  setPhoneFocus(false);
                  setConfirmPasswordFocus(false);
                  setCustomError('');
                }}
                onChangeText={text => setName(text)}
              />
            </View>
            {/*UserName Ends*/}

            {/*Email Start*/}
            <View style={styles.inputout}>
              <AntDesign
                name="mail"
                size={24}
                color={emailFocus === true ? Color.red : Color.grey}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                onFocus={() => {
                  setEmailFocus(true);
                  setPasswordFocus(false);
                  setPhoneFocus(false);
                  setConfirmPasswordFocus(false);
                  setUserNameFocus(false);
                  setCustomError('');
                }}
                onChangeText={text => setEmail(text)}
              />
            </View>
            {/*Email Ends*/}

            {/*Phone Number Start*/}
            <View style={styles.inputout}>
              <AntDesign
                name="phone"
                size={24}
                color={phoneFocus === true ? Color.red : Color.grey}
              />
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                keyboardType="phone-pad"
                onFocus={() => {
                  setEmailFocus(false);
                  setPhoneFocus(true);
                  setPasswordFocus(false);
                  setConfirmPasswordFocus(false);
                  setUserNameFocus(false);
                  setCustomError('');
                }}
                onChangeText={text => setPhone(text)}
              />
            </View>
            {/*Phone Number Ends*/}

            {/*Password Start*/}
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
                  setConfirmPasswordFocus(false);
                  setPhoneFocus(false);
                  setUserNameFocus(false);
                  setCustomError('');
                }}
                onChangeText={text => setPassword(text)}
              />
              <Octicons
                name={showPassword == false ? 'eye-closed' : 'eye'}
                size={24}
                color="black"
                onPress={() => setShowPassword(!showPassword)}
              />
            </View>
            {/*Password End*/}

            {/*Confirm Password Starts*/}
            <View style={styles.inputout}>
              <AntDesign
                name="lock"
                size={24}
                color={confirmpasswordFocus === true ? Color.red : Color.grey}
              />
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                secureTextEntry={showConfirmPassword === false ? true : false}
                onFocus={() => {
                  setEmailFocus(false);
                  setConfirmPasswordFocus(true);
                  setPasswordFocus(false);
                  setPhoneFocus(false);
                  setUserNameFocus(false);
                  setCustomError('');
                }}
                onChangeText={text => setcPassword(text)}
              />
              <Octicons
                name={showConfirmPassword == false ? 'eye-closed' : 'eye'}
                size={24}
                color="black"
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            </View>
            {/*Confirm Password ends*/}

            <Text style={styles.address}> Please Enter your Address</Text>
            <View style={styles.inputout}>
              <TextInput
                style={styles.input1}
                placeholder="Enter your Address"
                onChangeText={text => setAddress(text)}
              />
            </View>

            <TouchableOpacity
              style={button.btn1}
              onPress={() => handleSignup()}>
              <Text style={styles.signInText}>Sign up</Text>
            </TouchableOpacity>

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
              Already have an account{' '}
              <Text
                style={styles.signup}
                onPress={() => navigation.navigate('LoginPage')}>
                {' '}
                Sign In
              </Text>
            </Text>
          </SafeAreaView>
        ) : (
          <View style={styles.container1}>
            <Text style={styles.successmessage}>{successmsg}</Text>

            <TouchableOpacity
              style={button.btn1}
              onPress={() => navigation.navigate('LoginPage')}>
              <Text style={styles.signInText}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={button.btn1}
              onPress={() => setSuccessmsg(null)}>
              <Text style={styles.signInText}>Go back</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default SignupScreen;
