import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ImagePath} from '../../../config/config';
import {styles} from './styles';
import {Divider} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
// import { firebase } from '../../../Firebase/FirebaseConfig';
import {firebase} from '@react-native-firebase/firestore';
const WelcomeScreen = () => {
  const navigation = useNavigation();

  const [userlogged, setUserlogged] = useState(null);

  useEffect(() => {
    const checklogin = () => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          setUserlogged(user);
        } else {
          setUserlogged(null);
          console.log('No user Logged In');
        }
      });
    };
    checklogin();
  }, []);


  const handlelogout = () => {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        setUserlogged(null);
        console.log('signed out');
    }).catch((error) => {
        // An error happened.
        console.log(error);
    });
}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Fooodie</Text>
      <View style={styles.logoout}>
        <Image source={ImagePath.logo} style={styles.logo} />
      </View>
      <Divider />
      <Text style={styles.text}>
        Find the best food around you at the best lowest price
      </Text>
      <Divider />

      {userlogged === null ? (
        <View style={styles.btnout}>
          <TouchableOpacity onPress={() => navigation.navigate('SignupPage')}>
            <Text style={styles.btn}>Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
            <Text style={styles.btn}>Log In</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.logged}>
          <Text style={styles.txtlog}>
            Signed in as <Text style={styles.txtlogin}>{userlogged.email}</Text>
          </Text>
          <View style={styles.btnout}>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
              <Text style={styles.btn}>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlelogout()}>
              <Text style={styles.btn}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default WelcomeScreen;
