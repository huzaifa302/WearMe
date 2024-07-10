import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors} from '../../Config/Color';
import {Fonts} from '../../Config/Fonts';

const {width, height} = Dimensions.get('window');
const GetStarted = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../Assest/Images/background.png')}
      style={{flex: 1}}>
      <Text
        style={{
          color: Colors.TextColor,
          fontFamily: 'Raleway-Black',
          fontSize: 30,
          textAlign: 'center',
          marginTop: 100,
        }}>
        WELCOME TO{'\n'}NIKE
      </Text>
      <Image
        style={{
          height: width,
          alignSelf: 'flex-end',
          width: width,
          marginTop: 20,
        }}
        resizeMode="contain"
        source={require('../../Assest/Images/Shoe_i.png')}
      />
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          height: 30,
          justifyContent: 'center',
        }}>
        <View
          style={{
            borderRadius: 3,
            width: 40,
            height: 3,
            backgroundColor: Colors.TextColor,
            marginRight: 8,
          }}></View>
        <View
          style={{
            borderRadius: 3,
            width: 30,
            height: 3,
            backgroundColor: Colors.SliderColor,
            marginRight: 8,
          }}
        />
        <View
          style={{
            borderRadius: 3,
            width: 30,
            height: 3,
            backgroundColor: Colors.SliderColor,
          }}></View>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 20}}>
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: Colors.TextColor,
            marginHorizontal: 20,
            marginTop: 5,
            borderRadius: 10,
          }} onPress={()=> navigation.navigate('GetStarted1')} activeOpacity={0.8}>
          <Text
            style={{
              alignSelf: 'center',
              paddingTop: 13,
              fontFamily: Fonts.RalewaySemiBold,
              color: Colors.Black,
            }} >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default GetStarted;
