import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import GS from '../../../theme/Styles';
import {Stack} from 'react-native-spacing-system';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../../theme/Colors';

type NavProps = {
  navigation: NavigationProp<any>;
};

const Active = ({navigation}: NavProps) => {
  return (
    <View style={CS.container}>
      <Stack size={20} />
      <View style={[CS.space_between,CS.triggerBox]}>
        <Text style={[GS.ff,GS.light, GS.fs14]}>Triggers Available</Text>
        <View style={CS.space_between}>
          <Text style={[GS.ff,GS.light, GS.fs14]}>20/20</Text>
          <View style={CS.iIcon}>
            <Text style={[GS.ff,CS.iText]}>i</Text>
          </View>          
        </View>
      </View>
      <View style={GS.middle}>
        <View style={CS.plusBox}>
          <View style={CS.plusBorder}>
            <Text style={[GS.ff,CS.plusText]}>+</Text>
          </View>
        </View>
        <Stack size={8} />
        <Text style={[GS.ff,GS.light, GS.fs14]}>Add Alert</Text>
      </View>
    </View>
  );
};

const CS = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    ...GS.bg_dark,
  },
  space_between: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  triggerBox:{
    ...GS.bg_313131,
    paddingHorizontal:10,
    paddingVertical:10,
    borderRadius:5
  },
  iIcon:{
    ...GS.bg_gray,
    height:18,
    width:18,
    borderRadius:100,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:10
  },
  iText:{
    ...GS.light, 
    ...GS.fs12,
  },
  plusBox: {
    ...GS.bg_1e1e1e,
    ...GS.fs24,
    height: 45,
    width: 45,
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusBorder: {
    borderColor: Colors.border_color,
    borderWidth: 2,
    height:30,
    width:30,
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusText: {
    ...GS.gray,
    ...GS.fs20,
  },
});

export default Active;
