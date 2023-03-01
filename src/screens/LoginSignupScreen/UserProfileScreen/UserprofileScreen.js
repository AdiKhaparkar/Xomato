import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {firebase} from '@react-native-firebase/firestore';
import {doc} from 'firebase/fireStore';
import {useNavigation} from '@react-navigation/native';
import {button} from '../../../globals/GlobalStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const UserprofileScreen = () => {
  const navigation = useNavigation();
  const [userloggeduid, setUserloggeduid] = useState(null);
  const [userdata, setUserdata] = useState(null);

  // console.log(userlogged.uid);
  useEffect(() => {
    const checklogin = () => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          setUserloggeduid(user.uid);
        } else {
          setUserloggeduid(null);
          // console.log('No user Logged In');
          // navigation.navigate('LoginPage');
        }
      });
    };
    checklogin();
  }, []);

  useEffect(() => {
    const getuserData = async () => {
      const docRef = firebase
        .firestore()
        .collection('userData')
        .where('uid', '==', userloggeduid);
      const doc = await docRef.get();
      if (!doc.empty) {
        doc.forEach(doc => {
          setUserdata(doc.data());
        });
      } else {
        console.log('No such Document !');
      }
    };
    getuserData();
  }, [userloggeduid]);

  // console.log(userdata);

  return (
    <View style={button.containerout}>
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
        style={button.navbtnout}>
        <View style={button.navbtn}>
          <AntDesign
            name="back"
            size={24}
            color="black"
            style={button.navbtnin}
          />
        </View>
      </TouchableOpacity>

      <View style={styles.container}>
        <Text style={styles.head1}>Your Profile</Text>
        <View style={styles.containerin}>
          <Text style={styles.head2}>
            Name:
            {userdata ? 
              <Text style={styles.head2in}>{userdata.name}</Text>
             : 
              'loading'
            }
          </Text>

          <Text style={styles.head2}>
            Email:{' '}
            {userdata ? (
              <Text style={styles.head2in}>{userdata.email}</Text>
            ) : (
              'loading'
            )}
          </Text>


          <Text style={styles.head2}>
            Phone:{' '}
            {userdata ? (
              <Text style={styles.head2in}>{userdata.phone}</Text>
            ) : (
              'loading'
            )}
          </Text>


          <Text style={styles.head2}>
            Address:{' '}
            {userdata ? (
              <Text style={styles.head2in}>{userdata.address}</Text>
            ) : (
              'loading'
            )}
          </Text>
        </View>
      </View>
    </View>
  );
};
