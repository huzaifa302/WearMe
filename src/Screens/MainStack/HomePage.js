import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {Fonts} from '../../Config/Fonts';
import {Colors} from '../../Config/Color';
import {colors} from 'react-native-swiper-flatlist/src/themes';

const {height, width} = Dimensions.get('window');

const HomePage = ({navigation}) => {
  const [slectedCategory, setSelectedCategory] = useState('All Shoes');
  const categories = [
    {
      name: 'All Shoes',
    },
    {
      name: 'Sneakers',
    },
    {
      name: 'Runners',
    },
    {
      name: 'Outdoor',
    },
    {
      name: 'Tennis',
    },
  ];

  const data = [
    {
      id: 1,
      image: require('../../Assest/Images/shoe1.png'),
      title: 'first',
      subTitle: 'second',
      price: '$234',
      isLike: false,
    },
    {
      id: 1,
      image: require('../../Assest/Images/shoe.png'),
      title: 'first',
      subTitle: 'second',
      price: '$234',
      isLike: false,
    },
    {
      id: 1,
      image: require('../../Assest/Images/shoe1.png'),
      title: 'first',
      subTitle: 'second',
      price: '$234',
      isLike: false,
    },
    {
      id: 1,
      image: require('../../Assest/Images/shoe.png'),
      title: 'first',
      subTitle: 'second',
      price: '$234',
      isLike: false,
    },
    {
      id: 1,
      image: require('../../Assest/Images/shoe1.png'),
      title: 'first',
      subTitle: 'second',
      price: '$234',
      isLike: false,
    },
    {
      id: 1,
      image: require('../../Assest/Images/shoe.png'),
      title: 'first',
      subTitle: 'second',
      price: '$234',
      isLike: false,
    },
    {
      id: 1,
      image: require('../../Assest/Images/shoe1.png'),
      title: 'first',
      subTitle: 'second',
      price: '$234',
      isLike: false,
    },
  ];

  const renderCard = (val, ind) => {
    console.log('------vla', val);
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          alignSelf: 'flex-start',
          borderRadius: 16,
          marginRight: 10,
        }}
        onPress={() =>
          navigation.navigate('MainStack', {screen: 'ProductDetail'})
        } activeOpacity={0.8} >
        <View style={{paddingHorizontal: 15, paddingVertical: 15}}>
          <Image
            style={{height: 15, width: 15}}
            resizeMode="contain"
            source={require('../../Assest/Icon/heart.png')}
          />
        </View>
        <Image
          style={{height: 80, width: 150, marginHorizontal: 10}}
          resizeMode="cover"
          source={val.image}
        />
        <Text
          style={{
            fontFamily: Fonts.RalewayRegular,
            color: Colors.ThemeColor,
            fontSize: 12,
            paddingHorizontal: 15,
          }}>
          BEST SELLER
        </Text>
        <Text
          style={{
            fontFamily: Fonts.RalewaySemiBold,
            color: Colors.FieldColor,
            fontSize: 16,
            paddingHorizontal: 15,
          }}>
          NIKE JORDAN
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{paddingLeft: 15, paddingBottom: 15, paddingTop: 8}}>
            <Text
              style={{fontFamily: Fonts.RalewayMedium, color: Colors.Black}}>
              {val?.price}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: Colors.ThemeColor,
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomRightRadius: 20,
              borderTopLeftRadius: 20,
            }}>
            <Text style={{fontSize: 20, color: 'white'}}>+</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
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
            fontFamily: Fonts.RalewayBold,
            color: Colors.Black,
            fontSize: 32,
          }}>
          Explore
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
            style={{height: 24, width: 24, alignSelf: 'center', marginTop: 10}}
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

      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginTop: 20,
        }}>
        <View style={{position: 'relative'}}>
          <TextInput
            style={{
              height: 52,
              width: width - 80,
              backgroundColor: 'white',
              borderRadius: 14,
              shadowColor: Colors.LightTextColor,
              shadowOpacity: 0.9,
              shadowRadius: 5,
              shadowOffset: {
                height: 0,
                width: 0,
              },
              elevation: 3,
              paddingLeft: 50,
              paddingRight: 10,
              color: 'grey',
              fontFamily: Fonts.RalewayRegular,
            }}
            placeholder="Looking for Shoes"
            placeholderTextColor={'grey'}
          />
          <Image
            style={{
              position: 'absolute',
              height: 15,
              width: 15,
              marginTop: 20,
              paddingHorizontal: 30,
              resizeMode: 'contain',
            }}
            source={require('../../Assest/Icon/search.png')}
          />
        </View>
        <View
          style={{
            height: 52,
            width: 52,
            backgroundColor: Colors.ThemeColor,
            borderRadius: 50,
          }}>
          <Image
            source={require('../../Assest/Icon/filter.png')}
            style={{height: 22, width: 18, alignSelf: 'center', marginTop: 15}}
          />
        </View>
      </View>
      <Text
        style={{
          color: Colors.Black,
          fontFamily: Fonts.RalewaySemiBold,
          marginTop: 20,
          fontSize: 16,
        }}>
        Select Category
      </Text>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingVertical: 15}}>
          {categories.map((item, index) => (
            <TouchableOpacity
              onPress={() => setSelectedCategory(item.name)}
              style={{
                backgroundColor:
                  slectedCategory === item.name ? Colors.ThemeColor : '#fff',
                borderRadius: 8,
                marginRight: 10,
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}
              activeOpacity={0.8}>
              <Text
                style={{
                  fontFamily: Fonts.RalewayRegular,
                  fontSize: 12,
                  color: slectedCategory === item.name ? '#fff' : Colors.Black,
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 15,
        }}>
        <Text
          style={{
            fontFamily: Fonts.RalewaySemiBold,
            color: Colors.Black,
            fontSize: 16,
          }}>
          Popular Shoes
        </Text>
        <Text
          style={{
            fontFamily: Fonts.RalewaySemiBold,
            color: Colors.ThemeColor,
            textAlign: 'center',
            alignItems: 'center',
          }}>
          See all
        </Text>
      </View>

      <View>
        <FlatList
          style={{}}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          data={data}
          renderItem={({item, index}) => renderCard(item, index)}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 15,
        }}>
        <Text
          style={{
            fontFamily: Fonts.RalewaySemiBold,
            color: Colors.Black,
            fontSize: 16,
          }}>
          New Arrivals
        </Text>
        <Text
          style={{
            fontFamily: Fonts.RalewaySemiBold,
            color: Colors.ThemeColor,
            textAlign: 'center',
            alignItems: 'center',
          }}>
          See all
        </Text>
      </View>

      <View
        style={{
          backgroundColor: 'white',
          height: 95,
          width: width - 20,
          borderRadius: 22,
          flexDirection: 'row',
          marginTop: 20,
        }}>
        <View style={{paddingHorizontal: 15, paddingTop: 50}}>
          <Image
            style={{height: 15, width: 15}}
            resizeMode="contain"
            source={require('../../Assest/Images/star.png')}
          />
        </View>
        <View style={{paddingTop: 10, position: 'relative'}}>
          <Text style={{fontFamily: Fonts.RalewayMedium, color: Colors.Black}}>
            Summer Sale
          </Text>
          <Text
            style={{
              fontFamily: Fonts.RalewayExtraBold,
              color: Colors.purple,
              fontSize: 36,
              paddingBottom: 15,
            }}>
            15% OFF
          </Text>
          <View style={{position: 'absolute', paddingLeft: 120, paddingTop: 5}}>
            <Image
              source={require('../../Assest/Images/star.png')}
              style={{height: 15, width: 15}}
            />
          </View>
        </View>
        <View>
          <Image
            source={require('../../Assest/Images/star.png')}
            style={{height: 16, width: 15, top: 60, marginLeft: 10}}
          />
        </View>
        <View style={{paddingVertical: 20}}>
          <Image
            source={require('../../Assest/Images/new.png')}
            style={{height: 26, width: 26}}
          />
        </View>
        <View
          style={{
            paddingRight: 50,
            position: 'absolute',
            right: 1,
            bottom: 15,
          }}>
          <Image
            source={require('../../Assest/Images/shoe2.png')}
            style={{height: 100, width: 110}}
          />
        </View>
        <View style={{paddingHorizontal: 100, paddingVertical: 5}}>
          <Image
            source={require('../../Assest/Images/star.png')}
            style={{height: 26, width: 26}}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomePage;
