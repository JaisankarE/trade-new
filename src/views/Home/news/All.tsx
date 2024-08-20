import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import GS from '../../../theme/Styles';
import { Stack } from 'react-native-spacing-system';

type NavProps = {
  navigation: NavigationProp<any>;
};

const All = ({ navigation }: NavProps) => {
  return (
    <View style={CS.container}>
      <Stack size={20} />
      {/* <Text style={GS.light}>All</Text> */}
    </View>
  );
};

const CS = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    ...GS.bg_dark,
  }
});

export default All;