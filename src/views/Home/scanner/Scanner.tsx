import React from 'react';
import {View, Text} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import GS from '../../../theme/Styles';
import ForYou from './ForYou';
import AllScans from './AllScans';
import Colors from '../../../theme/Colors'; // Import Colors object

type NavProps = {
  navigation: NavigationProp<any>;
};

const Tab = createMaterialTopTabNavigator();

const Scanner = ({navigation}: NavProps) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.light,
        tabBarInactiveTintColor: Colors.gray,
        tabBarLabelStyle: {
          ...GS.fw700,
          ...GS.fs11,
        },
        tabBarStyle: {
          backgroundColor: Colors.dark,
          borderTopWidth: 0,
        },
        tabBarItemStyle: {
          width: 'auto',
        },
        swipeEnabled: false,
      }}>
      <Tab.Screen name="FOR YOU" component={ForYou} />
      <Tab.Screen name="ALL SCANS (160)" component={AllScans} />
    </Tab.Navigator>
  );
};

export default Scanner;
