import React from 'react';
import { View, Text } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GS from '../../../theme/Styles';
import Colors from '../../../theme/Colors'; 
import Active from './Active';
import Triggered from './Triggered';
import MyStrategies from './MyStrategies';

type NavProps = {
  navigation: NavigationProp<any>;
};

const Tab = createMaterialTopTabNavigator();

const Alert = ({ navigation }: NavProps) => {
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
      }}
    >
      <Tab.Screen name="ACTIVE" component={Active} />
      <Tab.Screen name="Triggered" component={Triggered} />
      <Tab.Screen name="My Strategies" component={MyStrategies} />
    </Tab.Navigator>
  );
};

export default Alert;
