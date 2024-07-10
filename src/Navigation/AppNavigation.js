import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from '../Screens/Auth/GetStarted';
import GetStarted1 from '../Screens/Auth/GetStarted1';
import GetStarted2 from '../Screens/Auth/GetStarted2';
import SignIn from '../Screens/Auth/SignIn';
import Registration from '../Screens/Auth/Registration';
import ForgotPassword from '../Screens/Auth/ForgotPassword';
import OtpScreen from '../Screens/Auth/OtpScreen';
import HomePage from '../Screens/MainStack/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import ProductDetail from '../Screens/MainStack/ProductDetail';
import Favourite from '../Screens/MainStack/Favourite';

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
      initialRouteName="AuthStack">
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name= 'MainStack' component={MainStack} />
  
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
      initialRouteName="GetStarted">
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="GetStarted1" component={GetStarted1} />
      <Stack.Screen name="GetStarted2" component={GetStarted2} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
    </Stack.Navigator>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
      initialRouteName='HomePage' >
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name='Favourite' component={Favourite} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
