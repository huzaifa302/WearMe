import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Colors} from '../Config/Color';

const BackButton = ({navigation}) => {
  return (
    <TouchableOpacity
    onPress={()=> navigation.goBack()}
      style={{
        width: 44,
        height: 44,
        backgroundColor: Colors.BackIconColor,
        borderRadius: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
      }}
      activeOpacity={0.8}>
      <Image
        style={{
          width: 7,
          height: 12,
          alignItems: 'center',
          alignSelf: 'center',
        }}
        resizeMode="contain"
        source={require('../Assest/Icon/back.png')}
      />
    </TouchableOpacity>
  );
};

export default BackButton;
