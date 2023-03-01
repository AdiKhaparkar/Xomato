import {StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {Color} from '../../../globals/GlobalStyles';

export const styles = StyleSheet.create({
  container: {
    marginVertical:20,
  },
  cardouthead: {
    color: Color.black,
    width:"90%",
    fontSize:30,
    fontWeight:"200",
    borderRadius:10,
    marginHorizontal:10
  },
  cardsout:{
    width:"100%",
    // backgroundColor:"red"
  },
  card:{
    width:300,
    height:300,
    margin:10,
    borderRadius:10,
    borderWidth:1,
    borderColor:Color.white,
    backgroundColor:"grey"
  },
  cardimgin:{
    width:"100%",
    height:200,
    borderRadius:10
  },
  section2:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
  },
  txt1:{
    fontSize:18,
    color:Color.black,
    marginHorizontal:5,
    width:150
  },
  txt2:{
    fontSize:20,
    color:Color.green,
    marginRight:10
  },
  section2inside:{
    flexDirection:'row',
    alignItems:"center",
    marginHorizontal:10
  },
  section3:{
    alignItems:"center",
    position:"absolute",
    bottom:1,
    width:"100%"
  },
  buybtn:{
    backgroundColor:Color.red,
    color:Colors.col1,
    paddingHorizontal:10,
    paddingVertical:5,
    fontSize:20,
    borderRadius:10,
    width:"90%",
    textAlign:"center"
  }

});
