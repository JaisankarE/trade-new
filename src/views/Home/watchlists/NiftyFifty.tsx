import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import Colors from '../../../theme/Colors';
import {Stack} from 'react-native-spacing-system';
import GS from '../../../theme/Styles';

type NavProps = {
  navigation: NavigationProp<any>;
};

const NiftyFifty = ({navigation}: NavProps) => {
  return (
    <View>
      <Stack size={22} />
      <View style={CS.boxContainer}>
        <View style={[CS.box, CS.greenShadow]}>
          <View>
            <Text style={[GS.ff,CS.title]}>NIFTY 50</Text>
            <Text style={[GS.ff,CS.value]}>23432.35</Text>
            <Text style={[GS.ff,CS.changePositive]}>21.70 (0.09%)</Text>
          </View>
        </View>
        <View style={[CS.box, CS.redShadow, CS.midBox]}>
          <Text style={[GS.ff,CS.title]}>NIFTY BANK</Text>
          <Text style={[GS.ff,CS.value]}>52660.35</Text>
          <Text style={[GS.ff,CS.changeNegative]}>-443.35 (-0.83%)</Text>
        </View>
        <View style={[CS.box, CS.redShadow]}>
          <Text style={[GS.ff,CS.title]}>USDINR</Text>
          <Text style={[GS.ff,CS.value]}>83.488</Text>
          <Text style={[GS.ff,CS.changeNegative]}>-0.066 (-0.08%)</Text>
        </View>
      </View>
      <Text style={[GS.ff,CS.subtitle]}>Cash</Text>
      <View style={CS.boxContainer}>
        <View style={[CS.box, CS.greenShadow]}>
          <View>
            <Text style={[GS.ff,CS.title]}>ADANIENT</Text>
            <Text style={[GS.ff,CS.value]}>3147.90</Text>
            <Text style={[GS.ff,CS.changePositive]}>3.65 (0.12%)</Text>
          </View>
        </View>
        <View style={[CS.box, CS.redShadow, CS.midBox]}>
          <Text style={[GS.ff,CS.title]}>ADANIPORTS</Text>
          <Text style={[GS.ff,CS.value]}>1500.45</Text>
          <Text style={[GS.ff,CS.changeNegative]}>-3.20 (-0.21%)</Text>
        </View>
        <View style={[CS.box, CS.greenShadow]}>
          <Text style={[GS.ff,CS.title]}>APOLLOHOSP</Text>
          <Text style={[GS.ff,CS.value]}>6328.55</Text>
          <Text style={[GS.ff,CS.changePositive]}>103.50 (1.66%)</Text>
        </View>
      </View>

      <View style={CS.boxContainer}>
        <View style={[CS.box, CS.greenShadow]}>
          <View>
            <Text style={[GS.ff,CS.title]}>NIFTY 50</Text>
            <Text style={[GS.ff,CS.value]}>23432.35</Text>
            <Text style={[GS.ff,CS.changePositive]}>21.70 (0.09%)</Text>
          </View>
        </View>
        <View style={[CS.box, CS.greenShadow, CS.midBox]}>
          <Text style={[GS.ff,CS.title]}>NIFTY BANK</Text>
          <Text style={[GS.ff,CS.value]}>52660.35</Text>
          <Text style={[GS.ff,CS.changePositive]}>-443.35 (-0.83%)</Text>
        </View>
        <View style={[CS.box, CS.greenShadow]}>
          <Text style={[GS.ff,CS.title]}>USDINR</Text>
          <Text style={[GS.ff,CS.value]}>83.488</Text>
          <Text style={[GS.ff,CS.changePositive]}>-0.066 (-0.08%)</Text>
        </View>
      </View>
      <View style={CS.boxContainer}>
        <View style={[CS.box, CS.redShadow]}>
          <View>
            <Text style={[GS.ff,CS.title]}>BAJAJFINSV</Text>
            <Text style={[GS.ff,CS.value]}>1579.60</Text>
            <Text style={[GS.ff,CS.changeNegative]}>-6.10 (-0.38%)</Text>
          </View>
        </View>
        <View style={[CS.box, CS.greenShadow, CS.midBox]}>
          <Text style={[GS.ff,CS.title]}>ABJFINANCE</Text>
          <Text style={[GS.ff,CS.value]}>7130.00</Text>
          <Text style={[GS.ff,CS.changePositive]}>30.95 (0.44%)</Text>
        </View>
        <View style={[CS.box, CS.greenShadow]}>
          <Text style={[GS.ff,CS.title]}>BHARTIARTL</Text>
          <Text style={[GS.ff,CS.value]}>1429.70</Text>
          <Text style={[GS.ff,CS.changePositive]}>6.65 (0.47%)</Text>
        </View>
      </View>
    </View>
  );
};

const CS = StyleSheet.create({
  container: {
    flex: 1,
    ...GS.bg_dark,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  box: {
    ...GS.bg_dark,
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: Colors.h1c1c1c,
    borderRightWidth: 1,
    borderRightColor: Colors.h1c1c1c,
    borderBottomWidth: 1,
    borderBottomColor: Colors.h1c1c1c,
    width: '31%',
    elevation: 5,
  },
  midBox: {
    marginHorizontal: 10,
  },
  greenShadow: {
    borderLeftWidth: 1,
    borderLeftColor: Colors.h4caf5080,
  },
  redShadow: {
    borderLeftWidth: 1,
    borderLeftColor: Colors.hf4433680,
  },
  title: {
    ...GS.col_c6c6c6,
    ...GS.fs12,
    ...GS.fw700,
    ...GS.tc,
    marginBottom: 5,
  },
  value: {
    ...GS.light,
    ...GS.fs12,
    ...GS.fw700,
    ...GS.tc,
    marginBottom: 5,
  },
  changePositive: {
    ...GS.success,
    ...GS.fs12,
    ...GS.tc,
  },
  changeNegative: {
    ...GS.error,
    ...GS.fs12,
    ...GS.tc,
  },
  subtitle: {
    ...GS.gray,
    ...GS.fs14,
    ...GS.fw700,
    ...GS.tc,
    marginBottom: 10,
  },
});

export default NiftyFifty;
