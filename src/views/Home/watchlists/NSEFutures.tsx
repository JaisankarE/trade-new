import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import Colors from '../../../theme/Colors';
import {Stack} from 'react-native-spacing-system';
import GS from '../../../theme/Styles';
type NavProps = {
  navigation: NavigationProp<any>;
};

const NSEFutures = ({navigation}: NavProps) => {
  return (
    <View>
      <Stack size={22} />
      <ScrollView>
      <Text style={[GS.ff,CS.subtitle]}>FNO Near Month</Text>
      <View style={CS.boxContainer}>
        <View style={[CS.box, CS.greenShadow]}>
          <View>
            <Text style={[GS.ff,CS.title]}>NIFTY</Text>
            <Text style={[GS.ff,CS.date]}>25 Jul</Text>
            <Text style={[GS.ff,CS.value]}>24386.00</Text>
            <Text style={[GS.ff,CS.changePositive]}>26.55 (0.11%)</Text>
          </View>
        </View>
        <View style={[CS.box, CS.redShadow, CS.midBox]}>
          <Text style={[GS.ff,CS.title]}>BANKNIFTY</Text>
          <Text style={[GS.ff,CS.date]}>31 Jul</Text>
          <Text style={[GS.ff,CS.value]}>52710.35</Text>
          <Text style={[GS.ff,CS.changeNegative]}>-455.85 (-0.86%)</Text>
        </View>
        <View style={[CS.box, CS.greenShadow]}>
          <Text style={[GS.ff,CS.title]}>ADANIENT</Text>
          <Text style={[GS.ff,CS.date]}>25 Jul</Text>
          <Text style={[GS.ff,CS.value]}>3165.70</Text>
          <Text style={[GS.ff,CS.changePositive]}>10.15 (-0.32%)</Text>
        </View>
      </View>

      <View style={CS.boxContainer}>
        <View style={[CS.box, CS.redShadow]}>
          <View>
            <Text style={[GS.ff,CS.title]}>ADANIPORTS</Text>
            <Text style={[GS.ff,CS.date]}>25 Jul</Text>
            <Text style={[GS.ff,CS.value]}>1507.35</Text>
            <Text style={[GS.ff,CS.changeNegative]}>-0.8 (0.05%)</Text>
          </View>
        </View>
        <View style={[CS.box, CS.greenShadow, CS.midBox]}>
          <Text style={[GS.ff,CS.title]}>APOLLOHOCSP</Text>
          <Text style={[GS.ff,CS.date]}>25 Jul</Text>
          <Text style={[GS.ff,CS.value]}>6354.90</Text>
          <Text style={[GS.ff,CS.changePositive]}>115.60 (1.85%)</Text>
        </View>
        <View style={[CS.box, CS.redShadow]}>
          <Text style={[GS.ff,CS.title]}>ASIANPAINT</Text>
          <Text style={[GS.ff,CS.date]}>25 Jul</Text>
          <Text style={[GS.ff,CS.value]}>2935.00</Text>
          <Text style={[GS.ff,CS.changeNegative]}>-5.90 (-0.20%)</Text>
        </View>
      </View>

      <View style={CS.boxContainer}>
        <View style={[CS.box, CS.greenShadow]}>
          <View>
            <Text style={[GS.ff,CS.title]}>AXISBANK</Text>
            <Text style={[GS.ff,CS.date]}>25 Jul</Text>
            <Text style={[GS.ff,CS.value]}>1288.50</Text>
            <Text style={[GS.ff,CS.changePositive]}>5.50 (0.43%)</Text>
          </View>
        </View>
        <View style={[CS.box, CS.greenShadow, CS.midBox]}>
          <Text style={[GS.ff,CS.title]}>BAJA-AUTO</Text>
          <Text style={[GS.ff,CS.date]}>25 Jul</Text>
          <Text style={[GS.ff,CS.value]}>9675.00</Text>
          <Text style={[GS.ff,CS.changePositive]}>158.55 (1.67%)</Text>
        </View>
        <View style={[CS.box, CS.greenShadow]}>
          <Text style={[GS.ff,CS.title]}>BAJFINANCE</Text>
          <Text style={[GS.ff,CS.date]}>25 Jul</Text>
          <Text style={[GS.ff,CS.value]}>7154.00</Text>
          <Text style={[GS.ff,CS.changePositive]}>26.25 (0.37%)</Text>
        </View>
      </View>
      <View style={CS.boxContainer}>
        <View style={[CS.box, CS.redShadow]}>
          <View>
            <Text style={[GS.ff,CS.title]}>BAJAJFINSV</Text>
            <Text style={[GS.ff,CS.date]}>25 Jul</Text>
            <Text style={[GS.ff,CS.value]}>158.80</Text>
            <Text style={[GS.ff,CS.changeNegative]}>-3.05 (-0.19%)</Text>
          </View>
        </View>
        <View style={[CS.box, CS.greenShadow, CS.midBox]}>
          <Text style={[GS.ff,CS.title]}>BPCL</Text>
          <Text style={[GS.ff,CS.date]}>25 Jul</Text>
          <Text style={[GS.ff,CS.value]}>308.30</Text>
          <Text style={[GS.ff,CS.changePositive]}>4.40 (1.45%)</Text>
        </View>
        <View style={[CS.box, CS.greenShadow]}>
          <Text style={[GS.ff,CS.title]}>BHARTIARTL</Text>
          <Text style={[GS.ff,CS.date]}>25 Jul</Text>
          <Text style={[GS.ff,CS.value]}>1433.35</Text>
          <Text style={[GS.ff,CS.changePositive]}>2.70 (0.19%)</Text>
        </View>
      </View>
      <Stack size={110} />
      </ScrollView>
    </View>
  );
};

const CS = StyleSheet.create({
  watchListsContainer: {
    flex: 1,
    ...GS.bg_dark,
  },

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
  date: {
    ...GS.col_c6c6c6,
    ...GS.fs10,
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

export default NSEFutures;
