import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNav from './src/navigation/AuthNav';
import { StatusBar } from 'react-native';
import Colors from './src/theme/Colors';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={Colors.dark} barStyle="light-content" />
      <NavigationContainer>
        <AuthNav />
      </NavigationContainer>
    </>
  );
}
