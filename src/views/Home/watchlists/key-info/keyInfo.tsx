import React from 'react';
import {View, Text} from 'react-native';
import Colors from '../../../../theme/Colors';
import GS from '../../../../theme/Styles';

const keyInfo = () => {
  return (
    <View style={GS.middle}>
      <Text style={{color: Colors.light}}>keyInfo</Text>
    </View>
  );
};

export default keyInfo;
