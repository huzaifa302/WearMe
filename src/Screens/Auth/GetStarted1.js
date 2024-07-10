import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import {Fonts} from '../../Config/Fonts';
import {Colors} from '../../Config/Color';

const GetStarted1 = ({navigation}) => {
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../Assest/Images/background1.png')}>
      <View style={{flex: 0.5, backgroundColor: 'transparent'}} />
      <View style={{flex: 0.5, marginTop: 50}}>
        <Text
          style={{
            fontFamily: Fonts.RalewayBold,
            color: Colors.TextColor,
            fontSize: 35,
            textAlign: 'center',
          }}>
          Let’s Start Journey{'\n'}With Nike{' '}
        </Text>
        <View style={{marginTop: 20}}>
          <Text
            style={{
              fontFamily: Fonts.RalewayRegular,
              color: Colors.TextColor,
              fontSize: 16,
              textAlign: 'center',
              paddingBottom: 20,
            }}>
            Smart, Gorgeous & Fashionable{'\n'}Collection Explore Now{' '}
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            height: 30,
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <View
            style={{
              borderRadius: 3,
              width: 30,
              height: 3,
              backgroundColor: Colors.SliderColor,
              marginRight: 8,
            }}></View>
          <View
            style={{
              borderRadius: 3,
              width: 40,
              height: 3,
              backgroundColor: Colors.TextColor,
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
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            marginBottom: 20,
          }}>
          <TouchableOpacity
            style={{
              height: 50,
              backgroundColor: Colors.TextColor,
              marginHorizontal: 20,
              borderRadius: 10,
            }}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('GetStarted2')}>
            <Text
              style={{
                alignSelf: 'center',
                paddingTop: 13,
                fontFamily: Fonts.RalewaySemiBold,
                color: Colors.Black,
              }}>
              Next{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default GetStarted1;
