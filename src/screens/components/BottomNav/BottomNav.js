import {  View } from 'react-native'
import React from 'react'
import { styles } from './styles';
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from '@react-navigation/native';


export const BottomNav = () => {
    const navigation= useNavigation();
    return (
        <View style={styles.container}>
            {/* <Text>BottomNav</Text> */}
            <View style={styles.btncon1}>
                <AntDesign name="home" size={30} color="black" style={styles.icon1} onPress={() => { navigation.navigate('home') }} />

            </View>
            <View style={styles.btncon2} >
                <Ionicons name="search" size={30} color="black" style={styles.icon2} onPress={() => { navigation.navigate('home') }} />
            </View>
            <View style={styles.btncon1} >
                <AntDesign name="shoppingcart" size={30} color="black" style={styles.icon1} onPress={() => { navigation.navigate('UserCartScreen') }} />

            </View>
            <View style={styles.btncon1} >
                <FontAwesome5 name="map-marked-alt" size={30} color="black" style={styles.icon1} onPress={() => { navigation.navigate('trackorders') }} />
            </View>
        </View>
    )
}

export default BottomNav