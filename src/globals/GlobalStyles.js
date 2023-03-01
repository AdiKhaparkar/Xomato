import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

// export const Globalstyles = StyleSheet.create({
//   btn1: {
//     width: '80%',
//     height: 50,
//     backgroundColor:"red",
//     borderRadius:10,
//     alignItems:"center",
//     justifyContent:"center",
//     elevation:10,
//     color:"white"
//   },
// });

export const Color = {
  red: 'red',
  white: '#fff',
  grey: '#bfbfbf',
  green: 'green',
  black: 'black',
};
export const titles = {
  title1: 30,
  btntxt: 20,
};
export const button = {
  btn1: {
    width: '80%',
    height: 50,
    backgroundColor: Color.red,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    color: Color.white,
    marginBottom: 20,
  },
  btn2: {
    width: 150,
    height: 50,
    backgroundColor: Color.red,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    color: Color.white,
    margin: 20,
  },
  veg: {
    backgroundColor: Color.green,
    width: 20,
    height: 20,
    borderRadius: 50,
  },
  nonveg: {
    backgroundColor: Color.red,
    width: 20,
    height: 20,
    borderRadius: 5,
  },
  navbtn: {
    backgroundColor: Color.red,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    borderRadius: 50,
    borderTopLeftRadius: 0,
  },
  navbtnin: {
    color: Color.white,
  },
  navbtnout: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10,
  },
  incdecbtn: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    elevation: 10,
    padding: 10,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  incdecinput: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    padding: 10,
    width: 50,
    marginHorizontal: 10,
    fontSize: 20,
  },
  incdecout: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
};
