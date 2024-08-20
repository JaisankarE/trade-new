import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GS from '../../../../theme/Styles';
import {Stack} from 'react-native-spacing-system';
import Colors from '../../../../theme/Colors';

const ChartTopContent = () => {
  return (
    <View>
      <View style={CS.topContainer}>
        <Text style={[GS.ff,CS.nifty]}>NIFTY 50</Text>
        <Text style={[GS.ff,CS.futures]}>FUTURES</Text>
        <Text style={[GS.ff,CS.options]}>OPTIONS</Text>
      </View>
      <Stack size={8} />
      <View style={CS.symbolCard}>
        <View style={CS.priceCard}>
          <Text style={[GS.ff,CS.price]}>24213.35</Text>
          <Text style={[GS.ff,CS.per]}>90.15{'\n'}0.38%</Text>
        </View>
        <Stack size={15} />
        <View style={CS.valueCard}>
          <Text style={[GS.ff,CS.value]}>O 24213.35</Text>
          <Text style={[GS.ff,CS.value]}>H 24213.35</Text>
          <Text style={[GS.ff,CS.value]}>L 24213.35</Text>
          <Text style={[GS.ff,CS.value]}>C 24213.35</Text>
        </View>
      </View>
    </View>
  );
};

export default ChartTopContent;

const CS = StyleSheet.create({
  topContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 5,
  },
  nifty: {
    flex: 4,
    ...GS.light,
    ...GS.fw700,
    ...GS.fs11,
    padding: 5,
  },
  futures: {
    flex: 2,
    ...GS.bg_1e1e1e,
    ...GS.fw700,
    borderRadius: 50,
    ...GS.tc,
    marginEnd: 10,
    ...GS.light,
    paddingVertical: 5,
    ...GS.fs11
  },
  options: {
    flex: 2,
    ...GS.bg_1e1e1e,
    ...GS.fw700,
    ...GS.tc,
    borderRadius: 50,
    ...GS.light,
    paddingVertical: 5,
    ...GS.fs11
  },

  symbolCard: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderTopWidth: 1,
    borderTopColor: Colors.h1c1c1c,
    borderRightWidth: 1,
    borderRightColor: Colors.h1c1c1c,
    borderBottomWidth: 1,
    borderBottomColor: Colors.h1c1c1c,
    borderLeftWidth: 1,
    borderLeftColor: Colors.h4caf5080,
    ...GS.bg_191919,
  },

  priceCard: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  price: {
    flex: 2,
    ...GS.light,
    ...GS.fs14,
    ...GS.fw700,
    paddingEnd: 10,
    position: 'relative',
    top: 5,
  },
  per: {
    flex: 6,
    ...GS.fs11,
    ...GS.success,
  },

  valueCard: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  value: {
    ...GS.gray,
    fontSize: 11,
    ...GS.fw500,
  },
});
