import {StyleSheet, Text, View} from 'react-native';
import {Color, titles} from '../../../globals/GlobalStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: titles.title1,
    textAlign: 'center',
    marginVertical: 10,
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
  forgot: {
    color: Color.grey,
    marginTop: 20,
    marginBottom: 10,
  },
  or: {
    color: Color.red,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  signInTxt: {
    color: Color.grey,
    marginVertical: 10,
    fontSize: 25,
  },
  socialMediaButtons: {
    flexDirection: 'row',
  },
  signupIcon: {
    backgroundColor: Color.white,
    width: 50,
    margin: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    elevation: 20,
  },
  signup: {
    color: 'black',
  },
});
