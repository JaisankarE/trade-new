import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import GS from '../../../theme/Styles';
import { Stack } from 'react-native-spacing-system';



type NavProps = {
  navigation: NavigationProp<any>;
};

const Live = ({ navigation }: NavProps) => {
  return (
    <ScrollView>
      <View style={CS.container}>
        <Stack size={20} />
        <Text style={[GS.ff,GS.fs12,GS.light]}>Zee Business</Text>
        <Stack size={5} />
        <View style={[CS.imageborder]}>
          <Image style={[CS.imagecard]} source={require('../../../../assets/images/zee_business.jpeg')} />
        </View>

        <Stack size={25} />
        <Text style={[GS.ff,GS.fs12,GS.light]}>ONBO BAJAR</Text>
        <Stack size={5} />
        <View style={[CS.imageborder]}>
          <Image style={[CS.imagecard]} source={require('../../../../assets/images/live.jpeg')} />
        </View>

        <Stack size={25} />
        <Text style={[GS.ff,GS.fs12,GS.light]}>ONBO Awaz</Text>
        <Stack size={5} />
        <View style={[CS.imageborder]}>
          <Image style={[CS.imagecard]} source={require('../../../../assets/images/zee_business.jpeg')} />
        </View>
      </View>

  
    </ScrollView>

  );
};

const CS = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    ...GS.bg_dark,
  },
  imagecard: {
    height: 210,
    width: "100%",
    resizeMode: 'contain',

  },
  imageborder: {
    marginHorizontal:10
  },

  
});

export default Live;