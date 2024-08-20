import React from 'react';
import { View, Text } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GS from '../../../theme/Styles';
import Colors from '../../../theme/Colors'; 
import ForYou from './ForYou';
import Live from './Live';
import Trending from './Trending';
import All from './All';
import Events from './Events';

type NavProps = {
  navigation: NavigationProp<any>;
};

const Tab = createMaterialTopTabNavigator();

const News = ({ navigation }: NavProps) => {
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
        tabBarScrollEnabled: true,
        swipeEnabled: false,
      }}
    >
      <Tab.Screen name="Live" component={Live} />
      <Tab.Screen name="For You" component={ForYou} />
      <Tab.Screen name="Trending" component={Trending} />
      <Tab.Screen name="All" component={All} />
      <Tab.Screen name="Events" component={Events} />
    </Tab.Navigator>
  );
};

export default News;
