import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../Config/Color';
import {Fonts} from '../Config/Fonts';

const {width, height} = Dimensions.get('window');

const TextInputCustom = ({
  containerStyle,
  styles,
  isPassword,
  secondaryIcon,
  secondaryOnpress,
  ...props
}) => {
  const [isPress, setIsPress] = useState(false);
  const [hideText, setHideText] = useState(isPassword);

  return (
    <View
      style={[
        {
          backgroundColor: Colors.BackIconColor,
          height: 55,
          marginTop: 25,
          borderRadius: 10,
          paddingLeft: 20,
          borderWidth: 1,
          borderColor: isPress ? '#48B2E7' : 'transparent',
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'space-between',
          paddingRight: 15,
        },
        props.containerStyle,
      ]}>
      <TextInput
        style={[
          {
            backgroundColor: Colors.BackIconColor,
            fontFamily: Fonts.RalewayRegular,

            fontSize: 13,
            color: 'black',
            flex: 1,
          },
          styles,
        ]}
        onFocus={() => setIsPress(true)}
        onBlur={() => setIsPress(false)}
        {...props}
        placeholderTextColor="grey"
        {...props}
        secureTextEntry={hideText}
      />
      {isPassword && (
        <TouchableOpacity
          style={{paddingLeft: 15}}
          onPress={() => setHideText(!hideText)}>
          <Image
            style={{
              height: 12,
              width: 20,
              tintColor: 'black',
            }}
            source={
              !hideText
                ? require('../Assest/Icon/Eye.png')
                : require('../Assest/Icon/eyeHidden.png')
            }
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextInputCustom;
