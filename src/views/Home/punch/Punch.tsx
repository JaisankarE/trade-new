import React, { useEffect } from 'react';
import { Linking, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GS from '../../../theme/Styles';

const Punch = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const url = 'https://google.com';
    Linking.openURL(url);
    navigation.goBack();
  }, []);

  return (
    <View style={GS.middle}>
      <Text style={GS.light}>Punch</Text>
    </View>
  );;
};

export default Punch;
