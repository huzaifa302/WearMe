import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import React, {useState} from 'react';
import BackButton from '../../Component/BackButton';
import {Colors} from '../../Config/Color';
import {Fonts} from '../../Config/Fonts';
import {TextInput} from 'react-native-gesture-handler';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const {width, height} = Dimensions.get('window');
const OtpScreen = ({navigation}) => {
  const [isPress, setIsPress] = useState(false);

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
        OTP Verification{' '}
      </Text>

      <Text
        style={{
          fontFamily: Fonts.RalewayRegular,
          color: Colors.LightTextColor,
          textAlign: 'center',
          marginTop: 7,
        }}>
        Please check your email to see the{'\n'}verification code
      </Text>

      <Text
        style={{
          fontFamily: Fonts.RalewayMedium,
          color: 'black',
          fontWeight: 10,
          marginTop: 25,
          fontSize: 21,
        }}>
        OTP Code{' '}
      </Text>

     
        <OTPInputView
          style={{width: '100%', height: 150,alignSelf:'center'}}
          pinCount={4}
          // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          // onCodeChanged = {code => { this.setState({code})}}
          autoFocusOnLoad ={false}
          codeInputFieldStyle={{
            width: 70,
            height: 56,
            backgroundColor: Colors.BackIconColor,
            color: 'black',
            paddingHorizontal: 30,
            borderRadius: 15,
          }}
          codeInputHighlightStyle={{
            borderWidth:1,
            borderColor:'#48B2E7'
          }}
          onCodeFilled={code => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />
       

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
        onPress={() => navigation.navigate('SignIn')}>
        <Text
          style={{
            color: 'white',
            justifyContent: 'center',
            textAlign: 'center',
            fontFamily: Fonts.RalewayRegular,
          }}>
          Verify{' '}
        </Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <Text
          style={{
            fontFamily: Fonts.RalewayRegular,
            fontSize: 14,
            color: Colors.LightTextColor,
          }}>
          Resend code to
        </Text>
        <Text
          style={{
            fontFamily: Fonts.RalewayRegular,
            fontSize: 14,
            color: Colors.LightTextColor,
          }}>
          00:30
        </Text>
      </View>
    </View>
  );
};

export default OtpScreen;
