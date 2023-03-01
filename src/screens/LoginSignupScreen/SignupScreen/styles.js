import {StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Color, titles} from '../../../globals/GlobalStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop:'10%',
  },
  container1: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:'40%',
  },
  header: {
    fontSize: titles.title1,
    textAlign: 'center',
    marginVertical: 10,
    // fontWeight: '200',
    color: Color.red,
  },
  inputout: {
    flexDirection: 'row',
    width: '80%',
    marginVertical: 10,
    backgroundColor: Color.white,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    elevation: 20,
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    width: '80%',
  },
  signInText: {
    color: Color.white,
    fontSize: titles.btntxt,
    fontWeight: 'bold',
  },

  or: {
    color: Color.red,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  signInTxt: {
    color: Color.grey,
    marginBottom: 10,
    fontSize: 25,
  },
  socialMediaButtons: {
    flexDirection: 'row',
    paddingVertical: 20,
  },
  signupIcon: {
    backgroundColor: Color.white,
    width: 50,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    elevation: 20,
  },
  signup: {
    color: 'black',
    paddingBottom: 20,
  },
  address: {
    fontSize: 18,
    color: Color.grey,
    textAlign: 'center',
    marginTop: 20,
  },
  input1: {
    fontSize: 15,
    marginLeft: 10,
    width: '80%',
  },
  errormsg:{
    color:Color.red,
    fontSize:18,
    textAlign:'center',
    marginTop:10,
    borderColor:Color.red,
    borderWidth:1,
    borderRadius:10,
    padding:10
  },
  successmessage:{
    color:Color.green,
    fontSize:18,
    textAlign:'center',
    margin:10,
    borderColor:Color.green,
    borderWidth:1,
    borderRadius:10,
    padding:10
  }

});
