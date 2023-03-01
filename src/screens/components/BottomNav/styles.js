import {StyleSheet} from 'react-native';
import { Color } from '../../../globals/GlobalStyles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: Color.white,
    width: '100%',
    elevation: 30,
    borderTopColor: Color.red,
    borderTopWidth: 0.5,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  btncon1: {
    alignItems: 'center',
  },
  btncon2: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    top: -20,
    backgroundColor: Color.red,
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  icon2: {
    color: Color.white,
  },
  icon1: {
    color: Color.red,
  },
});
