import {View, Text, Image} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import {styles} from './styles';

const OfferSlider = () => {
  return (
    <View>
      <View style={styles.offerslider}>
        <Swiper autoplay={true} showsButtons={true}>
          <View style={styles.slide}>
            <Image
              source={require('../../../assets/sliderPoster1.png')}
              style={styles.image}
            />
          </View>
           <View style={styles.slide}>
            <Image
              source={require('../../../assets/sliderPoster2.png')}
              style={styles.image}
            />
          </View>
        <View style={styles.slide}>
            <Image
              source={require('../../../assets/sliderPoster3.png')}
              style={styles.image}
            />
          </View>  
        </Swiper>
      </View>
    </View>
  );
};

export default OfferSlider;
