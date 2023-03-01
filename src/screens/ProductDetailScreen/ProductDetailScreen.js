import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {button} from '../../globals/GlobalStyles';
import {firebase} from '@react-native-firebase/firestore';
import {Divider} from 'react-native-paper';

const ProductDetailScreen = ({route}) => {
  const navigation = useNavigation();
  const [ischecked, setischecked] = useState(false);
  const [quantity, setquantity] = useState('1');
  const [addonquantity, setaddonquantity] = useState('0');
  const data = route.params;
  if (route.params === undefined) {
    navigation.navigate('home');
  }

  const addTocart = () => {
    const docRef = firebase
      .firestore()
      .collection('UserCart')
      .doc(firebase.auth().currentUser.uid);

    const data1 = {data, Addonquantity: addonquantity, Foodquantity: quantity};
    console.log(data1);

    docRef.get().then(doc => {
      if (doc.exists) {
        docRef.update({
          cart: firebase.firestore.FieldValue.arrayUnion(data1),
        });
        console.log('Updated');
      } else {
        docRef.set({
          cart: [data1],
        });
        console.log('Added');
      }
      alert('Added to cart');
    });
  };

  const increaseQuantity = () => {
    setquantity((parseInt(quantity) + 1).toString());
  };
  const decreaseQuantity = () => {
    if (parseInt(quantity) > 1) {
      setquantity((parseInt(quantity) - 1).toString());
    }
  };

  const increaseAddonQuantity = () => {
    setaddonquantity((parseInt(addonquantity) + 1).toString());
  };
  const decreaseAddonQuantity = () => {
    if (parseInt(addonquantity) > 0) {
      setaddonquantity((parseInt(addonquantity) - 1).toString());
    }
  };

  const cartdata = JSON.stringify({
    cart: [{Addonquantity: addonquantity, Foodquantity: quantity, data}],
  });

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <View style={button.navbtn}>
          <AntDesign
            name="back"
            size={24}
            color="black"
            style={button.navbtnin}
          />
        </View>
      </TouchableOpacity>

      <View style={styles.container1}>
        <View style={styles.s1}>
          <Image
            source={{
              uri: data.foodImageUrl,
            }}
            style={styles.cardimgin}
          />
        </View>

        <View style={styles.s2}>
          <View style={styles.s2in}>
            <Text style={styles.head1}>{data.foodName}</Text>
            <Text style={styles.head2}>₹{data.foodPrice}/-</Text>
          </View>
          <View style={styles.s3}>
            <Text style={styles.head3}>About Food</Text>
            <Text style={styles.head4}>{data.foodDescription}</Text>
            <View style={styles.s3in}>
              {data.foodType == 'veg' ? (
                <Text style={button.veg}></Text>
              ) : (
                <Text style={button.nonveg}></Text>
              )}
              <Text style={styles.head5}>{data.foodType}</Text>
            </View>
          </View>

          <View style={styles.container2}>
            <Text style={styles.txt1}>Location</Text>
            <Text style={styles.txt2}>{data.restaurantName}</Text>
            <View style={styles.container2in}>
              <Text style={styles.txt3}>{data.restaurantAddressBuilding}</Text>
              <View style={styles.dash}></View>
              <Text style={styles.txt3}>{data.restaurantName}</Text>
              <View style={styles.dash}></View>
              <Text style={styles.txt3}>{data.restaurantAddressCity}</Text>
            </View>
          </View>
          <Divider />

          {data.foodAddonPrice && (
            <View style={styles.container3}>
              <Text style={styles.txt3}>Add Extra </Text>
              <View style={styles.c3in}>
                <Text style={styles.text4}>{data.foodAddon}</Text>
                <Text style={styles.text4}>₹{data.foodAddonPrice}/-</Text>
              </View>

              <View style={button.incdecout}>
                <Text
                  onPress={() => increaseAddonQuantity()}
                  style={button.incdecbtn}>
                  +
                </Text>
                <TextInput value={addonquantity} style={button.incdecinput} />
                <Text
                  onPress={() => decreaseAddonQuantity()}
                  style={button.incdecbtn}>
                  -
                </Text>
              </View>
              {/* <View style={hr80}></View> */}
            </View>
          )}

          <View style={styles.container3}>
            <Divider />

            <Text style={styles.txt3}>Food Quantity</Text>
            <View style={button.incdecout}>
              <Text onPress={() => increaseQuantity()} style={button.incdecbtn}>
                +
              </Text>
              <TextInput value={quantity} style={button.incdecinput} />
              <Text onPress={() => decreaseQuantity()} style={button.incdecbtn}>
                -
              </Text>
            </View>
            <Divider />
          </View>

          <View style={styles.container4}>
            <View style={styles.c4in}>
              <Text style={styles.txt2}>Total Price</Text>
              {data.foodAddonPrice ? (
                <Text style={styles.txt3}>
                  ₹
                  {(
                    parseInt(data.foodPrice) * parseInt(quantity) +
                    parseInt(addonquantity) * parseInt(data.foodAddonPrice)
                  ).toString()}
                  /-
                </Text>
              ) : (
                <Text style={styles.txt3}>
                  ₹{(parseInt(data.foodPrice) * parseInt(quantity)).toString()}
                  /-
                </Text>
              )}
            </View>
          </View>
        </View>

        <View style={styles.btncont}>
          <TouchableOpacity
            style={button.btn2}
            onPress={() => {
              addTocart();
            }}>
            <Text style={styles.btntxt}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={button.btn2}>
            <Text
              style={styles.btntxt}
              onPress={() => navigation.navigate('placeorder', {cartdata})}>
              Buy Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetailScreen;
