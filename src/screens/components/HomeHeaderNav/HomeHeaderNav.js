import {View, Text,TouchableOpacity} from 'react-native';
import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {styles} from './styles';
import { useNavigation } from '@react-navigation/native';


const HomeHeaderNav = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Fontisto name="nav-icon-list-a" size={24} style={styles.headerIcons} />
      <View style={styles.innercontainer}>
        <Text style={styles.headerText}>Foodie</Text>
        <Ionicons
          name="fast-food-outline"
          size={24}
          style={styles.headerIcons}
        />
      </View>
      <TouchableOpacity onPress={()=>{navigation.navigate("UserprofileScreen")}}>
      <FontAwesome5 name="user-circle" size={24} style={styles.headerIcons} />
      </TouchableOpacity>
      
    </View>
  );
};

export default HomeHeaderNav;
