import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import React, {useRef} from 'react';
import {Colors} from '../../Config/Color';
import {Fonts} from '../../Config/Fonts';
import {colors} from 'react-native-swiper-flatlist/src/themes';
import Carousel from 'react-native-snap-carousel';

const {height, width} = Dimensions.get('window');
const ProductDetail = ({navigation}) => {
  // Alert.alert("Hello")
  const carouselRef = useRef();
  const ProductImage = [
    {
      image: require('../../Assest/Images/shoe.png'),
    },
    {
      image: require('../../Assest/Images/shoe2.png'),
    },
    {
      image: require('../../Assest/Images/shoe1.png'),
    },
    {
      image: require('../../Assest/Images/shoe7.png'),
    },
    {
      image: require('../../Assest/Images/shoe5.png'),
    },
  ];
  return (
    <View style={{flex: 1}}>
      <ScrollView
        style={{
          flex: 1,
          paddingHorizontal: 10,
          backgroundColor: Colors.background,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 15,
          }}>
          <TouchableOpacity style={{marginTop: 15}} activeOpacity={0.8}>
            <Image
              source={require('../../Assest/Icon/menu.png')}
              style={{height: 20, width: 26}}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: Fonts.RalewaySemiBold,
              color: Colors.Black,
              fontSize: 16,
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            Sneaker Shop
          </Text>
          <View
            style={{
              height: 44,
              width: 44,
              backgroundColor: Colors.BackIconColor,
              borderRadius: 50,
              marginTop: 5,
              position: 'relative',
            }}>
            <Image
              source={require('../../Assest/Icon/cart.png')}
              style={{
                height: 24,
                width: 24,
                alignSelf: 'center',
                marginTop: 10,
              }}
            />
            <Text
              style={{
                position: 'absolute',
                width: 10,
                height: 10,
                backgroundColor: 'red',
                borderRadius: 50,
                right: 0,
              }}>
              .
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontFamily: Fonts.RalewayBold,
            color: Colors.Black,
            fontSize: 26,
            marginTop: 20,
          }}>
          Nike Air Max 270{'\n'}Essential
        </Text>
        <Text
          style={{
            fontFamily: Fonts.RalewayMedium,
            fontSize: 16,
            color: Colors.LightTextColor,
            marginTop: 5,
          }}>
          Men’s Shoes
        </Text>
        <Text
          style={{
            fontFamily: Fonts.RalewayBold,
            color: Colors.Black,
            fontSize: 26,
            marginTop: 5,
          }}>
          $179.39{' '}
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          {/* <Image
            source={require('../../Assest/Images/shoe3.png')}
            style={{width: width - 40, height: 300, bottom: 50}}
          /> */}

          <Carousel
            ref={carouselRef}
            data={ProductImage}
            scrollEnabled={false}
            renderItem={({item, index}) => (
              <View style={{marginTop: 30, alignItems: 'center'}}>
                <Image
                  source={item.image}
                  resizeMode="contain"
                  style={{width: 200, height: 200}}
                />
              </View>
            )}
            sliderWidth={width}
            itemWidth={width}
          />
          <View
            style={{
              backgroundColor: '#707B81',
              alignSelf: 'center',
              flexDirection: 'row',
              paddingVertical: 5,
              marginBottom: 20,
              paddingHorizontal: 15,
              borderRadius: 10,
            }}>
            <TouchableOpacity onPress={()=> carouselRef.current.snapToPrev()} >
              <Image
                source={require('../../Assest/Images/less1.png')}
                style={{height: 15, width: 15, tintColor: 'white'}}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: 7}} onPress={()=> carouselRef.current.snapToNext()}>
              <Image
                source={require('../../Assest/Images/great.png')}
                style={{height: 15, width: 15, tintColor: 'white'}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          {ProductImage.map((item, index) => {
            return (
              <View
                style={{
                  backgroundColor: 'white',
                  height: 70,
                  width: 70,
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderRadius: 20,
                  shadowColor: 'silver',
                  shadowOpacity: 0.9,
                  elevation: 10,
                  shadowRadius: 100,
                  shadowOffset: {width: -2, height: 10},
                }}>
                <Image
                  style={{height: 60, width: 60, marginHorizontal: 10}}
                  resizeMode="contain"
                  source={item.image}
                />
              </View>
            );
          })}
        </View>
        <Text
          style={{
            fontFamily: Fonts.RalewayRegular,
            color: Colors.LightTextColor,
            marginTop: 10,
          }}>
          The Max Air 270 unit delivers unrivaled, all-day comfort. The sleek,
          running-inspired design roots you to everything Nike........
        </Text>
        <View style={{alignItems: 'flex-end'}}>
          <Text
            style={{
              fontFamily: Fonts.RalewayRegular,
              color: Colors.ThemeColor,
            }}>
            Read more
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 20,
            marginTop: 40,
            marginLeft: 20,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.BackIconColor,
              height: 52,
              width: 52,
              borderRadius: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate('MainStack', {screen: 'Favourite'})
            }>
            <Image
              source={require('../../Assest/Icon/heart.png')}
              style={{height: 24, width: 24, alignSelf: 'center'}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.ThemeColor,
              borderRadius: 13,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 35,
              paddingHorizontal: 50,
            }}
            activeOpacity={0.8}>
            <Image
              source={require('../../Assest/Icon/cart.png')}
              style={{height: 24, width: 24, tintColor: 'white'}}
            />
            <Text
              style={{
                fontFamily: Fonts.RalewaySemiBold,
                color: 'white',
                paddingLeft: 10,
              }}>
              Add To Cart
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetail;
