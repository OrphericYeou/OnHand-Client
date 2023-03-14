import { useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import Stacks from "./src/navigation"
import InitialContainer from './src/navigation/';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat':require('./assets/font/Montserrat/Montserrat-Regular.ttf'),
    'Montserrat-i':require('./assets/font/Montserrat/Montserrat-Italic.ttf'),
    "Montserrat-bold": require("./assets/font/Montserrat/Montserrat-Bold.ttf"),
    "Montserrat-s-bold": require("./assets/font/Montserrat/Montserrat-SemiBold.ttf"),
    "Montserrat-medium": require("./assets/font/Montserrat/Montserrat-MediumItalic.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    
    return null;
  }

  return (
    <NavigationContainer>
      <InitialContainer/>
    </NavigationContainer>
  );
}