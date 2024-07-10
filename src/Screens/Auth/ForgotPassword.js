import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Modal,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import BackButton from '../../Component/BackButton';
import {Colors} from '../../Config/Color';
import {Fonts} from '../../Config/Fonts';
import TextInputCustom from '../../Component/TextInputCustom';

const {width, height} = Dimensions.get('window');
const ForgotPassword = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const onReset = ()=>{
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
      navigation.navigate('OtpScreen')
    }, 4000);
  }
  return (
    <View style={{paddingHorizontal: 20, marginTop: 20, flex: 1}}>
      <BackButton navigation={navigation} />

      <Text
        style={{
          fontFamily: Fonts.RalewayBold,
          color: Colors.Black,
          fontSize: 32,
          textAlign: 'center',
          marginTop: 10,
        }}>
        {' '}
        Forgot Password{' '}
      </Text>

      <Text
        style={{
          fontFamily: Fonts.RalewayRegular,
          color: Colors.LightTextColor,
          textAlign: 'center',
          marginTop: 7,
        }}>
        Enter your Email account to reset{'\n'}your password
      </Text>

      <TextInputCustom containerStyle={{}} placeholder="Enter You Email" />

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
        onPress={onReset}>
        <Text
          style={{
            color: 'white',
            justifyContent: 'center',
            textAlign: 'center',
            fontFamily: Fonts.RalewayRegular,
          }}>
          Reset Password{' '}
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#00000080',
          }}>
          <View
            style={{
              margin: 20,
              backgroundColor: 'white',
              borderRadius: 20,
              padding: 35,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}>
            <View
              style={{
                height: 44,
                width: 44,
                backgroundColor: Colors.ThemeColor,
                borderRadius: 50,
              }}>
              <Image
                style={{
                  height: 24,
                  width: 24,
                  justifyContent: 'center',
                  alignSelf:'center',
                  marginTop:10
                }}
                source={require('../../Assest/Icon/email.png')}
              />
            </View>
            <Text
              style={{
                textAlign: 'center',
                color: Colors.Black,
                fontFamily: Fonts.RalewayBold,
                marginVertical:10

              }}>
              Check your email
            </Text>
            <Text
              style={{
                fontFamily: Fonts.RalewayRegular,
                color: Colors.LightTextColor,
                textAlign: 'center',
              }}>
              We have send password recovery code in your email
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ForgotPassword;
