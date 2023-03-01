import {StyleSheet} from 'react-native';
import {Color} from '../../globals/GlobalStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    // alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  searchBox: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: Color.white,
    borderRadius: 30,
    alignItems: 'center',
    padding: 10,
    margin: 20,
    elevation: 10,
  },
  searchInput: {
    marginLeft: 10,
    width: '90%',
    fontSize: 18,
    color: Color.red,
  },
  searchIcon: {
    color: Color.red,
  },
  searchresultsouter: {
    width: '100%',
    marginHorizontal: 30,
    // height:"100%",
    backgroundColor: Color.white,
  },
  searchresultinner: {
    width: '100%',
  },
  searchresult: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  searchresulttext: {
    marginLeft: 10,
    fontSize: 18,
    color: Color.red,
  },
  bottomnav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: Color.white,
    zIndex: 20,
  }
});
