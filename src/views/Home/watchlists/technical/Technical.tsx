import React from 'react';
import {View, Text} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import Colors from '../../../../theme/Colors';
import GS from '../../../../theme/Styles';

type NavProps = {
  navigation: NavigationProp<any>;
};

const Technical = ({navigation}: NavProps) => {
  return (
    <View style={GS.middle}>
      <Text style={{color: Colors.light}}>Technical</Text>
    </View>
  );
};

export default Technical;
