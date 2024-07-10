import {View, Text, TouchableOpacity, Dimensions, Image} from 'react-native';
import React from 'react';
import BackButton from '../../Component/BackButton';
import {Fonts} from '../../Config/Fonts';
import {Colors} from '../../Config/Color';
import TextInputCustom from '../../Component/TextInputCustom';

const {width, height} = Dimensions.get('window');
const Registration = ({navigation}) => {
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
        Register Account{' '}
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
          marginTop: 25,
        }}>
        Your Name{' '}
      </Text>

      <TextInputCustom containerStyle={{}} placeholder="John Doe" />

      <Text
        style={{
          fontFamily: Fonts.RalewayMedium,
          color: 'black',
          fontWeight: 10,
          marginTop: 20,
        }}>
        Email Address{' '}
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

      <TouchableOpacity
        style={{
          width: width - 40,
          height: 50,
          backgroundColor: Colors.ThemeColor,
          marginTop: 25,
          borderRadius: 15,
          justifyContent: 'center',
        }}
        activeOpacity={0.8}>
        <Text
          style={{
            color: 'white',
            justifyContent: 'center',
            textAlign: 'center',
            fontFamily: Fonts.RalewayRegular,
          }}>
          Sign Up
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
        style={{flexDirection: 'row', alignSelf: 'center', marginTop: '30%'}}>
        <Text
          style={{
            fontFamily: Fonts.RalewayMedium,
            color: Colors.LightTextColor,
            marginRight: 5,
          }}>
          Already Have An Account?
        </Text>
        <Text
          style={{fontFamily: Fonts.RalewayMedium, color: Colors.Black}}
          onPress={() => navigation.navigate('SignIn')}>
          Login
        </Text>
      </View>
    </View>
  );
};

export default Registration;
