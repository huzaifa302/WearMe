import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../Config/Color';

import BackButton from '../../Component/BackButton';
import {Fonts} from '../../Config/Fonts';
import TextInputCustom from '../../Component/TextInputCustom';

const {width, height} = Dimensions.get('window');
const SignIn = ({navigation}) => {
  const [tick, setTick] = useState(false);

  return (
    <View style={{paddingHorizontal: 20, marginTop: 20, flex: 1}}>
      <BackButton navigation={navigation} />

      <Text
        style={{
          fontFamily: Fonts.RalewayBold,
          color: Colors.Black,
          fontSize: 32,
          textAlign: 'center',
        }}>
        {' '}
        Hello Again!
      </Text>

      <Text
        style={{
          fontFamily: Fonts.RalewayRegular,
          color: Colors.LightTextColor,
          textAlign: 'center',
          marginTop: 7,
        }}>
        Fill your details or continue with{'\n'}social media
      </Text>

      <Text
        style={{
          fontFamily: Fonts.RalewayMedium,
          color: 'black',
          fontWeight: 10,
          marginTop: 30,
        }}>
        Email Address
      </Text>

      <TextInputCustom containerStyle={{}} placeholder="xyz@gmail.com" />

      <Text
        style={{
          fontFamily: Fonts.RalewayMedium,
          color: 'black',
          fontWeight: 10,
          marginTop: 25,
        }}>
        Password
      </Text>

      <TextInputCustom placeholder="*******" isPassword />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingRight: 50,
          }}>
          <TouchableOpacity
            style={{
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#48B2E7',
              height: 25,
              marginRight: 10,
              marginTop: 10,
              width: 25,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => setTick(!tick)}>
            <Image
              style={{
                height: 12,
                width: 12,
                tintColor: tick ? '#48B2E7' : 'transparent',
              }}
              source={require('../../Assest/Icon/tick.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <Text
            style={{
              fontFamily: Fonts.RalewayRegular,
              color: Colors.LightTextColor,
              marginTop: 10,
              marginRight: 5,
            }}>
            Remember Me{' '}
          </Text>
        </View>

        <View>
          <Text
            style={{
              fontFamily: Fonts.RalewayRegular,
              color: Colors.LightTextColor,
              marginTop: 10,
            }}
            onPress={()=> navigation.navigate('ForgotPassword')}>
            Recovery Password
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          width: width - 40,
          height: 50,
          backgroundColor: Colors.ThemeColor,
          marginTop: 25,
          borderRadius: 15,
          justifyContent: 'center',
        }}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('MainStack',{screen:'HomePage'})} >
        <Text
          style={{
            color: 'white',
            justifyContent: 'center',
            textAlign: 'center',
            fontFamily: Fonts.RalewayRegular,
          }}>
          Sign In
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: width - 40,
          height: 50,
          backgroundColor: Colors.TextColor,
          marginTop: 25,
          borderRadius: 15,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        activeOpacity={0.8}>
        <Image
          source={require('../../Assest/Icon/google.png')}
          style={{marginRight: 10}}
        />
        <Text style={{fontFamily: Fonts.RalewaySemiBold, color: Colors.Black}}>
          Sign In with Google{' '}
        </Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          flex: 1,
          marginTop: '50%',
        }}>
        <Text
          style={{
            fontFamily: Fonts.RalewayMedium,
            color: Colors.LightTextColor,
            marginRight: 5,
          }}>
          New User?
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Registration')}
          activeOpacity={0.8}>
          <Text style={{fontFamily: Fonts.RalewayMedium, color: Colors.Black}}>
            Create Account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;
