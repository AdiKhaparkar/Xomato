import {View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {button} from '../../globals/GlobalStyles';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {firebase} from '@react-native-firebase/firestore';
const OrderPlacedScreen = ({route}) => {
  const navigation = useNavigation();
  const {cartdata} = route.params;
  const [orderdata, setOrderdata] = useState([]);
  const [totalCost, setTotalCost] = useState('0');

  useEffect(() => {
    setOrderdata(JSON.parse(cartdata));
  }, [cartdata]);

  // userdata -------------------------------------------------------
  const [userloggeduid, setUserloggeduid] = useState(null);
  const [userdata, setUserdata] = useState(null);
  useEffect(() => {
    const checklogin = () => {
      firebase.auth().onAuthStateChanged(user => {
        // console.log(user);
        if (user) {
          // navigation.navigate('home');
          setUserloggeduid(user.uid);
        } else {
          // No user is signed in.
          console.log('no user');
        }
      });
    };
    checklogin();
  }, []);

  useEffect(() => {
    const getuserdata = async () => {
      const docRef = firebase
        .firestore()
        .collection('userData')
        .where('uid', '==', userloggeduid);
      const doc = await docRef.get();
      if (!doc.empty) {
        doc.forEach(doc => {
          setUserdata(doc.data());
        });
      } else {
        console.log('no user data');
      }
    };
    getuserdata();
  }, [userloggeduid]);

  useEffect(() => {
    if (cartdata != null) {
      const foodprice = JSON.parse(cartdata).cart;
      let totalfoodprice = 0;
      foodprice.map(item => {
        // console.log(item.data.foodPrice)
        totalfoodprice =
          parseInt(item.data.foodPrice) * parseInt(item.Foodquantity) +
          parseInt(item.data.foodAddonPrice) * parseInt(item.Addonquantity) +
          totalfoodprice;
      });
      // console.log(totalfoodprice)
      setTotalCost(JSON.stringify(totalfoodprice));
    }
  }, [cartdata]);

  const placenow = () => {
    const docRef = firebase
      .firestore()
      .collection('UserOrders')
      .doc(new Date().getTime().toString());
    docRef.set({
      orderid: docRef.id,
      orderdata: orderdata.cart,
      orderstatus: 'pending',
      ordercost: totalCost,
      orderdate: firebase.firestore.FieldValue.serverTimestamp(),
      orderaddress: userdata.address,
      orderphone: userdata.phone,
      ordername: userdata.name,
      orderuseruid: userloggeduid,
      orderpayment: 'online',
      paymenttotal: totalCost,
    });
    // navigation.navigate('home');
    alert('Order Placed Successfully');
    // navigation.navigate('trackorders');
  };

  return (
    <ScrollView style={styles.containerout}>
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
        style={button.navbtnout}>
        <View style={button.navbtn}>
          <AntDesign
            name="back"
            size={24}
            color="black"
            style={button.navbtnin}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.head1}>Your Order Summary</Text>
        <FlatList
          style={styles.c1}
          data={orderdata.cart}
          renderItem={({item}) => {
            return (
              <View style={styles.rowout}>
                <View style={styles.row}>
                  <View style={styles.left}>
                    <Text style={styles.qty}>{item.Foodquantity}</Text>
                    <Text style={styles.title}>{item.data.foodName}</Text>
                    <Text style={styles.price1}>₹{item.data.foodPrice}</Text>
                  </View>
                  <View style={styles.right}>
                    <Text style={styles.totalprice}>
                      ₹
                      {parseInt(item.Foodquantity) *
                        parseInt(item.data.foodPrice)}
                    </Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.left}>
                    <Text style={styles.qty}>{item.Addonquantity}</Text>
                    <Text style={styles.title}>{item.data.foodAddon}</Text>
                    <Text style={styles.price1}>
                      ₹{item.data.foodAddonPrice}
                    </Text>
                  </View>
                  <View style={styles.right}>
                    <Text style={styles.totalprice}>
                      ₹
                      {parseInt(item.Addonquantity) *
                        parseInt(item.data.foodAddonPrice)}
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        />

        <View style={styles.row}>
          <View style={styles.left}>
            <Text style={styles.title}>Order Total :</Text>
          </View>
          <View style={styles.left}>
            <Text style={styles.totalprice}>₹{totalCost}</Text>
          </View>
        </View>

        <View style={styles.userdataout}>
          <Text style={styles.head1}>Your Details</Text>
          <View style={styles.row}>
            <View style={styles.left}>
              <Text style={styles.title}>Name :</Text>
            </View>
            <View style={styles.right}>
              <Text style={styles.title}>{userdata?.name}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.left}>
              <Text style={styles.title}>Email :</Text>
            </View>
            <View style={styles.right}>
              <Text style={styles.title}>{userdata?.email}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.left}>
              <Text style={styles.title}>Phone :</Text>
            </View>

            <View style={styles.right}>
              <Text style={styles.title}>{userdata?.phone}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.left}>
              <Text style={styles.title}>Address :</Text>
            </View>
            <View style={styles.right}>
              <Text style={styles.title}>{userdata?.address}</Text>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity style={button.btn1}>
            <Text style={styles.btntext} onPress={() => placenow()}>
              Proceed to Payment
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default OrderPlacedScreen;
