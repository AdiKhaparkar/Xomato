import {StyleSheet} from 'react-native';
import {Color} from '../../../globals/GlobalStyles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    width: '100%',
    elevation: 10,
    borderRadius: 10,
  },
  header: {
    color: Color.red,
    fontSize: 25,
    fontWeight: '300',
    margin: 10,
    alignSelf: 'center',
    paddingBottom: 5,
    borderBottomColor:Color.red,
    borderBottomWidth:1
  },
  box:{
    backgroundColor:Color.white,
    elevation:20,
    margin:10,
    padding:10,
    borderRadius:10,
    alignItems:'center',
    justifyContent:"center",
    flexDirection:'row'
  },
  icon:{
    marginRight:10,
    color:Color.black
  },
  text:{
    color:Color.black
  }
});
