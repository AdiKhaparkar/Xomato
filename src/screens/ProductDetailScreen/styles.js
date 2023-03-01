import {StyleSheet, Text, View} from 'react-native';
import {Color} from '../../globals/GlobalStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    width: '100%',
  },
  container1: {
    flex: 1,
    backgroundColor: '#fff',
  },
  s1: {
    width: '100%',
    height: 300,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardimgin: {
    width: '100%',
    height: '100%',
  },
  s2: {
    width: '100%',
    padding: 20,
    position: 'relative',
    top: -30,
    backgroundColor: Color.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  s2in: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  head1: {
    fontSize: 30,
    fontWeight: '500',
    color: Color.red,
    width: 220,
    marginRight: 10,
  },
  head2: {
    fontSize: 50,
    fontWeight: '200',
    color: Color.black,
  },
  s3: {
    backgroundColor: Color.red,
    padding: 20,
    borderRadius: 20,
  },
  head3: {
    fontSize: 30,
    fontWeight: '200',
    color: Color.white,
  },
  head4: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: '400',
    color: Color.white,
  },
  s3in: {
    backgroundColor: Color.white,
    padding: 10,
    borderRadius: 10,
    width: 130,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  head5: {
    color: Color.black,
    fontSize: 20,
    fontWeight: '200',
    marginLeft: 10,
  },
  btntxt: {
    backgroundColor: Color.red,
    color: Color.white,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 20,
    borderRadius: 10,
    width: '90%',
    textAlign: 'center',

},
btncont: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    flexDirection: 'row',
},
container2: {
    width: '90%',
    backgroundColor: Color.white,
    padding: 20,
    borderRadius: 20,
    alignSelf: 'center',
    marginVertical: 10,
    elevation: 10,
    alignItems: 'center',
},
txt1: {
    color: Color.red,
    fontSize: 20,
    fontWeight: '200',

},
txt2: {
    color: Color.black,
    fontSize: 30,
    fontWeight: '200',
    marginVertical: 10,

},
container2in: {
    flexDirection: 'row',
    alignItems: 'center',
},
txt3: {
    color: Color.red,
    fontSize: 18,
},
dash: {
    width: 1,
    height: 20,
    backgroundColor: Color.red,
    marginHorizontal: 10,
},
c3in: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
},
container3: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
},
text4: {
    color: Color.black,
    fontSize: 20,
    marginHorizontal: 10,
},
c4in: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
}
});
