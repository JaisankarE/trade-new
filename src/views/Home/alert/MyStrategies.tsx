import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import GS from '../../../theme/Styles';
import { Stack } from 'react-native-spacing-system';

type NavProps = {
  navigation: NavigationProp<any>;
};

const MyStrategies = ({navigation}: NavProps) => {
  return (
    <View style={CS.container}>
      <Stack size={20} />
      <View style={GS.middle}>
        <Text style={[GS.ff,GS.light,GS.fs14]}>You have no saved strategies.</Text>
        <Text style={[GS.ff,GS.light,GS.fs14]}>Create a custom alert to save your strategy.</Text>
      </View>
      
    </View>
  );
};

const CS = StyleSheet.create({
  container:{
      flex: 1,
      paddingHorizontal: 12,
      ...GS.bg_dark,
  }
});

export default MyStrategies;