import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import Colors from '../../../theme/Colors';
import {Stack} from 'react-native-spacing-system';
import GS from '../../../theme/Styles';

type NavProps = {
  navigation: NavigationProp<any>;
};

const MCXFutures = ({navigation}: NavProps) => {
  return (
    <View>
      <Stack size={22} />
      <ScrollView>
        <View style={CS.boxContainer}>
          <View style={[CS.box, CS.greenShadow]}>
            <View>
              <Text style={[GS.ff,CS.title]}>Gold</Text>
              <Text style={[GS.ff,CS.value]}>2390.89</Text>
              <Text style={[GS.ff,CS.changePositive]}>34.37 (1.46%)</Text>
            </View>
          </View>
          <View style={[CS.box, CS.greenShadow, CS.midBox]}>
            <Text style={[GS.ff,CS.title]}>Silver</Text>
            <Text style={[GS.ff,CS.value]}>31.204</Text>
            <Text style={[GS.ff,CS.changePositive]}>0.850 (2.80%)</Text>
          </View>
          <View style={[CS.box, CS.redShadow]}>
            <Text style={[GS.ff,CS.title]}>USDINR</Text>
            <Text style={[GS.ff,CS.value]}>83.488</Text>
            <Text style={[GS.ff,CS.changeNegative]}>-0.066 (-0.08%)</Text>
          </View>
        </View>
        <Text style={[GS.ff,CS.subtitle]}>FNO Near Month</Text>
        <View style={CS.boxContainer}>
          <View style={[CS.box, CS.greenShadow]}>
            <View>
              <Text style={[GS.ff,CS.title]}>Gold</Text>
              <Text style={[GS.ff,CS.date]}>05Aug</Text>
              <Text style={[GS.ff,CS.value]}>73038.00</Text>
              <Text style={[GS.ff,CS.changePositive]}>671.00 (0.93%)</Text>
            </View>
          </View>
          <View style={[CS.box, CS.greenShadow, CS.midBox]}>
            <Text style={[GS.ff,CS.title]}>Silver</Text>
            <Text style={[GS.ff,CS.date]}>05Sep</Text>
            <Text style={[GS.ff,CS.value]}>93595.00</Text>
            <Text style={[GS.ff,CS.changePositive]}>1634.00 (1.78%)</Text>
          </View>
          <View style={[CS.box, CS.redShadow]}>
            <Text style={[GS.ff,CS.title]}>Crude Oil</Text>
            <Text style={[GS.ff,CS.date]}>19Jul</Text>
            <Text style={[GS.ff,CS.value]}>6965.00</Text>
            <Text style={[GS.ff,CS.changeNegative]}>-59.00 (-0.84%)</Text>
          </View>
        </View>

        <View style={CS.boxContainer}>
          <View style={[CS.box, CS.greenShadow]}>
            <View>
              <Text style={[GS.ff,CS.title]}>Copper</Text>
              <Text style={[GS.ff,CS.date]}>31Jul</Text>
              <Text style={[GS.ff,CS.value]}>875.40</Text>
              <Text style={[GS.ff,CS.changePositive]}>7.25 (0.84%)</Text>
            </View>
          </View>
          <View style={[CS.box, CS.greenShadow, CS.midBox]}>
            <Text style={[GS.ff,CS.title]}>Aluminium</Text>
            <Text style={[GS.ff,CS.date]}>31Jul</Text>
            <Text style={[GS.ff,CS.value]}>233.85</Text>
            <Text style={[GS.ff,CS.changePositive]}>0.95 (0.41%)</Text>
          </View>
          <View style={[CS.box, CS.greenShadow]}>
            <Text style={[GS.ff,CS.title]}>Zinc</Text>
            <Text style={[GS.ff,CS.date]}>31Jul</Text>
            <Text style={[GS.ff,CS.value]}>275.90</Text>
            <Text style={[GS.ff,CS.changePositive]}>1.25 (0.46%)</Text>
          </View>
        </View>
        <View style={CS.boxContainer}>
          <View style={[CS.box, CS.greenShadow]}>
            <View>
              <Text style={[GS.ff,CS.title]}>Gold Mini</Text>
              <Text style={[GS.ff,CS.date]}>05Aug</Text>
              <Text style={[GS.ff,CS.value]}>72992.00</Text>
              <Text style={[GS.ff,CS.changePositive]}>636.00 (0.88%)</Text>
            </View>
          </View>
          <View style={[CS.box, CS.greenShadow, CS.midBox]}>
            <Text style={[GS.ff,CS.title]}>Silver Mini</Text>
            <Text style={[GS.ff,CS.date]}>30Aug</Text>
            <Text style={[GS.ff,CS.value]}>93420.00</Text>
            <Text style={[GS.ff,CS.changePositive]}>1528.00 (1.66%)</Text>
          </View>
        </View>

        <Text style={[GS.ff,CS.subtitle]}>FNO Far Month</Text>
        <View style={CS.boxContainer}>
          <View style={[CS.box, CS.greenShadow]}>
            <View>
              <Text style={[GS.ff,CS.title]}>Gold</Text>
              <Text style={[GS.ff,CS.date]}>04Oct</Text>
              <Text style={[GS.ff,CS.value]}>73420.00</Text>
              <Text style={[GS.ff,CS.changePositive]}>697.00 (0.96%)</Text>
            </View>
          </View>
          <View style={[CS.box, CS.greenShadow, CS.midBox]}>
            <Text style={[GS.ff,CS.title]}>Silver</Text>
            <Text style={[GS.ff,CS.date]}>05Dec</Text>
            <Text style={[GS.ff,CS.value]}>96201.00</Text>
            <Text style={[GS.ff,CS.changePositive]}>1573.00 (1.66%)</Text>
          </View>
          <View style={[CS.box, CS.redShadow]}>
            <Text style={[GS.ff,CS.title]}>Crude Oil</Text>
            <Text style={[GS.ff,CS.date]}>19Aug</Text>
            <Text style={[GS.ff,CS.value]}>6910.00</Text>
            <Text style={[GS.ff,CS.changeNegative]}>-54.00 (-0.78%)</Text>
          </View>
        </View>

        <View style={CS.boxContainer}>
          <View style={[CS.box, CS.greenShadow]}>
            <View>
              <Text style={[GS.ff,CS.title]}>Copper</Text>
              <Text style={[GS.ff,CS.date]}>30Aug</Text>
              <Text style={[GS.ff,CS.value]}>874.70</Text>
              <Text style={[GS.ff,CS.changePositive]}>6.35 (0.73%)</Text>
            </View>
          </View>
          <View style={[CS.box, CS.greenShadow, CS.midBox]}>
            <Text style={[GS.ff,CS.title]}>Aluminium</Text>
            <Text style={[GS.ff,CS.date]}>30Aug</Text>
            <Text style={[GS.ff,CS.value]}>233.40</Text>
            <Text style={[GS.ff,CS.changePositive]}>1.10 (0.47%)</Text>
          </View>
          <View style={[CS.box, CS.greenShadow]}>
            <Text style={[GS.ff,CS.title]}>Zinc</Text>
            <Text style={[GS.ff,CS.date]}>30Aug</Text>
            <Text style={[GS.ff,CS.value]}>275.40</Text>
            <Text style={[GS.ff,CS.changePositive]}>1.75 (0.64%)</Text>
          </View>
        </View>
        <Stack size={110} />
      </ScrollView>
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
  date: {
    ...GS.col_c6c6c6,
    ...GS.fs10,
    ...GS.fw700,
    ...GS.tc,
    marginBottom: 5,
  },
});

export default MCXFutures;
