import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {button} from '../../../globals/GlobalStyles';
import { useNavigation } from '@react-navigation/native';

const CardSlider = ({data, title}) => {
  // console.log(title)
  // console.log(data)
  const navigation = useNavigation()
  const openProductpage=(item)=>{
navigation.navigate("ProductDetailScreen", item)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.cardouthead}>{title}</Text>

      <FlatList
        horizontal
        style={styles.cardsout}
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity key={item.index} onPress={()=>{
            openProductpage(item)

          }}>
            <View style={styles.card}>
              <View style={styles.section1}>
                <Image
                  source={{uri: item.foodImageUrl}}
                  style={styles.cardimgin}
                />
              </View>
              <View style={styles.section2}>
                <Text style={styles.txt1}>{item.foodName}</Text>
                <View style={styles.section2inside}>
                  <Text style={styles.txt2}>Rs. {item.foodPrice} /-</Text>

                  {item.foodType == 'veg' ? (
                    <Text style={button.veg}></Text>
                  ) : (
                    <Text style={button.nonveg}></Text>
                  )}
                </View>
              </View>

              <View style={styles.section3}>
                <Text style={styles.buybtn}>Buy</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CardSlider;
