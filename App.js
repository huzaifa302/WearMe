import { View, Text, LogBox } from 'react-native'
import React, { useEffect } from 'react'
  import SplashScreen from 'react-native-splash-screen'
import AppNavigation from './src/Navigation/AppNavigation'
import { NavigationContainer } from '@react-navigation/native'


LogBox.ignoreAllLogs()
const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 1000);
  }, [])
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
    
  )
}

export default App