import {StyleSheet} from 'react-native';
import {Color} from '../../../globals/GlobalStyles';

export const styles = StyleSheet.create({
  offerslider: {
    width: '100%',
    height: 200,
    backgroundColor: Color.white,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    // resizeMode: 'contain',
  },
  slide: {
    width: '100%',
    height: 200,
    backgroundColor: Color.white,
    // resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
});
