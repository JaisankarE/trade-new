import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LandingPage from '../views/LandingPage';
import HomeNav from './HomeNav';
import ChartScreen from './ChartScreen';
import UserSession from '../views/auth/UserSession';
import SocketSession from '../views/auth/SocketSession';

const Stack = createNativeStackNavigator();

function AuthNav() {
  return (
    <>
      <Stack.Navigator
        initialRouteName="LandingPage"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}>
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="UserSession" component={UserSession}  options={{ animation: 'none' }}/>
        <Stack.Screen name="SocketSession" component={SocketSession} />
        <Stack.Screen name="Home" component={HomeNav} />
        <Stack.Screen name="ChartScreen" component={ChartScreen} />
      </Stack.Navigator>
    </>
  );
}

export default AuthNav;
