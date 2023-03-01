import {
  View,
  Text,
  StatusBar,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import HomeHeaderNav from '../components/HomeHeaderNav/HomeHeaderNav';
import Categories from '../components/Categories/Categories';
import OfferSlider from '../components/OfferSlider/OfferSlider';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from './styles';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
// import firestore from '@react-native-firebase/auth';
import CardSlider from '../components/CardSlider/CardSlider';
import {BottomNav} from '../components/BottomNav/BottomNav';

export const HomeScreen = () => {
  const [foodData, setFoodData] = useState([]);
  const [VegData, setVegData] = useState([]);
  const [NonVegData, setNonVegData] = useState([]);
  const [search, setSearch] = useState('');
  // console.log(search);
  const foodRef = firestore().collection('FoodData');

  // useEffect(() => {
  useEffect(() => {
    foodRef.onSnapshot(snapshot => {
      setFoodData(snapshot.docs.map(doc => doc.data()));
    });
  }, []);
  // console.log(VegData)

  useEffect(() => {
    setVegData(foodData.filter(item => item.foodType == 'veg'));
    setNonVegData(foodData.filter(item => item.foodType == 'non-veg'));
  }, [foodData]);

  return (
    <View style={styles.container}>
      <StatusBar />
      <HomeHeaderNav />
      <View style={styles.bottomnav}>
        <BottomNav />
      </View>

      <ScrollView>
        <View style={styles.searchBox}>
          <AntDesign
            name="search1"
            size={24}
            color="black"
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search"
            style={styles.searchInput}
            onChangeText={text => {
              setSearch(text);
            }}
          />
        </View>
        {search != '' && (
          <View style={styles.searchresultsouter}>
            <FlatList
              data={foodData}
              style={styles.searchresultinner}
              renderItem={({item}) => {
                if (
                  item.foodName
                    .toLowerCase()
                    .includes(search.toLocaleLowerCase())
                ) {
                  return (
                    <View style={styles.searchresult}>
                      <AntDesign name="arrowright" size={24} color="black" />
                      <Text style={styles.searchresulttext}>
                        {item.foodName}
                      </Text>
                    </View>
                  );
                }
              }}
            />
          </View>
        )}

        <Categories />
        <OfferSlider />

        <CardSlider title={'Todays Special'} data={foodData} />
        <CardSlider title={'NonVeg Love'} data={NonVegData} />
        <CardSlider title={'Veg Hunger'} data={VegData} />
      </ScrollView>
    </View>
  );
};
