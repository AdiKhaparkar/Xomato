import {StyleSheet, Text, View} from 'react-native';
import {Color, titles} from '../../../globals/GlobalStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.red,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    // resizeMode:'contain'
  },
  title: {
    fontSize: titles.title1,
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: '200',
    color: Color.white,
  },
  logoout: {
    width: '80%',
    height: '30%',
    alignitems: 'center',
    // backgroundColor:Color.white
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  text: {
    fontSize: 18,
    width: '80%',
    color: Color.grey,
    textAlign: 'center',
  },
  btnout:{
    flexDirection:"row"
  },
  btn:{
    fontSize:20,
    color:Color.red,
    textAlign:'center',
    marginVertical:30,
    marginHorizontal:10,
    fontWeight:"700",
    backgroundColor:Color.white,
    borderRadius:10,
    padding:10,
    paddingHorizontal:20
  },
  logged: {
    alignItems: 'center',

},
txtlog: {
    fontSize: 16,
    color: Color.white,
},
txtlogin: {
    fontSize: 16,
    color: Color.white,
    fontWeight: '700',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
}
});
