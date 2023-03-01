import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.box}>
          <FontAwesome5 name="pizza-slice" size={24} color="black" style={styles.icon}/>
          <Text style={styles.text}>Burger</Text>
        </View>
        <View style={styles.box}>
        <MaterialCommunityIcons name="noodles" size={24} color="black" style={styles.icon}/>
          <Text style={styles.text}>Burger</Text>
        </View>
        <View style={styles.box}>
        <Ionicons name="beer" size={24} color="black" style={styles.icon}/>
          <Text style={styles.text}>Burger</Text>
        </View>
        <View style={styles.box}>
        <MaterialCommunityIcons name="food-turkey" size={24} color="black" style={styles.icon}/>
          <Text style={styles.text}>Burger</Text>
        </View>
        <View style={styles.box}>
          <FontAwesome5 name="hamburger" size={24} color="black" style={styles.icon}/>
          <Text style={styles.text}>Burger</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Categories;
