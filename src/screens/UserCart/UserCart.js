import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {firebase} from '@react-native-firebase/auth';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {button} from '../../globals/GlobalStyles';
import BottomNav from '../components/BottomNav/BottomNav';
const UserCartScreen = () => {
  const [cartdata, setCartdata] = useState(null);
  const [totalCost, setTotalCost] = useState('0');
  const navigation = useNavigation();



  const getCartData = async () => {
    const docRef = firebase
      .firestore()
      .collection('UserCart')
      .doc(firebase.auth().currentUser.uid);

    docRef
      .get()
      .then(doc => {
        if (doc.exists) {
          const data = JSON.stringify(doc.data());
          setCartdata(data);
        } else {
          console.log('No such Document Exist');
        }
      })
      .catch(error => {
        console.log('Error getting Document', error);
      });
  };

 
useEffect(() => {
    getCartData();
  }, []);

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




  const deleteItem = item => {
    const docRef = firebase
      .firestore()
      .collection('UserCart')
      .doc(firebase.auth().currentUser.uid);
    docRef.update({
      cart: firebase.firestore.FieldValue.arrayRemove(item),
    });
    getCartData();
  };

 
  return (
    <View style={styles.containerout}>
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

      <View style={styles.bottomnav}>
        <BottomNav />
      </View>
      <View style={styles.container}>
        <Text style={styles.head1}>Your Cart</Text>
        {cartdata == null || JSON.parse(cartdata).cart.length == 0 ? (
          <Text style={styles.head2}>Your cart is Empty</Text>
        ) : (
          <FlatList
            style={styles.cardlist}
            data={JSON.parse(cartdata).cart}
            renderItem={({item}) => {
              return (
                <View style={styles.cartcard}>
                  <Image
                    source={{uri: item.data.foodImageUrl}}
                    style={styles.cartimg}
                  />
                  <View style={styles.cartcardin}>
                    <View style={styles.c1}>
                      <Text style={styles.txt1}>
                        {item.Foodquantity}&nbsp;{item.data.foodName}
                      </Text>
                      <Text style={styles.txt2}>
                        ₹{item.data.foodPrice}/each
                      </Text>
                    </View>
                    {item.Addonquantity > 0 && (
                      <View style={styles.c2}>
                        <Text style={styles.txt3}>
                          {item.Addonquantity}&nbsp;{item.data.foodAddon}
                        </Text>
                        <Text style={styles.txt3}>
                          ₹{item.data.foodAddonPrice}/each
                        </Text>
                      </View>
                    )}
                    <TouchableOpacity
                      style={styles.c4}
                      onPress={() => deleteItem(item)}>
                      <Text style={styles.txt1}>Delete</Text>
                      <AntDesign
                        name="delete"
                        size={24}
                        color="black"
                        style={styles.del}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
        )}
        <View style={styles.btncont}>
          <View style={styles.c3}>
            <Text style={styles.txt5}>Total</Text>
            <Text style={styles.txt6}>₹{totalCost}</Text>
          </View>
          <TouchableOpacity style={button.btn2}>
            <Text
              style={styles.btntxt}
              onPress={() => navigation.navigate('OrderPlacedScreen', {cartdata})}>
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UserCartScreen;
