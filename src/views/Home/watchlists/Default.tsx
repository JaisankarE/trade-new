import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import Colors from '../../../theme/Colors';
import { Stack } from 'react-native-spacing-system';
import GS from '../../../theme/Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

type NavProps = {
  navigation: NavigationProp<any>;
};

// Define the props for the Box component
type BoxProps = {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  onPress: () => void;
};

const Default = ({ navigation }: NavProps) => {
  useEffect(() => {
    const fetchSessionID = async () => {
      const id = await AsyncStorage.getItem('sessionID');
      console.log(id);
    };
    fetchSessionID();
  }, []);

  const Box: React.FC<BoxProps> = ({ title, value, change, isPositive, onPress }) => (
    <TouchableOpacity style={[CS.box, isPositive ? CS.greenShadow : CS.redShadow]} onPress={onPress}>
      <View>
        <Text style={[GS.ff, CS.title]}>{title}</Text>
        <Text style={[GS.ff, CS.value]}>{value}</Text>
        <Text style={[GS.ff, isPositive ? CS.changePositive : CS.changeNegative]}>
          {change}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={CS.container}>
      <Stack size={22} />
      <View style={CS.boxContainer}>
        <Box 
          title="NIFTY 50" 
          value="23465.60" 
          change="66.70 (0.29%)" 
          isPositive={true} 
          onPress={() => navigation.navigate('ChartScreen', { screen: 'Chart' })} 
        />
        <Box 
          title="Gold" 
          value="2324.75" 
          change="-7.77 (-0.33%)" 
          isPositive={false} 
          onPress={() => navigation.navigate('ChartScreen', { screen: 'Chart' })}
        />
        <Box 
          title="USDINR" 
          value="83.488" 
          change="-0.050 (-0.06%)" 
          isPositive={false} 
          onPress={() => navigation.navigate('ChartScreen', { screen: 'Chart' })}
        />
      </View>
      <Text style={[GS.ff, CS.subtitle]}>Cash</Text>
      <View style={CS.boxContainer}>
        <Box 
          title="RELIANCE" 
          value="2955.10" 
          change="24.60 (0.84%)" 
          isPositive={true} 
          onPress={() => navigation.navigate('ChartScreen', { screen: 'Chart' })}
        />
        <Box 
          title="SBIN" 
          value="839.20" 
          change="-4.70 (-0.56%)" 
          isPositive={false} 
          onPress={() => navigation.navigate('ChartScreen', { screen: 'Chart' })}
        />
        <Box 
          title="SBIN" 
          value="839.20" 
          change="-4.70 (-0.56%)" 
          isPositive={false} 
          onPress={() => navigation.navigate('ChartScreen', { screen: 'Chart' })}
        />
      </View>
      <Text style={CS.subtitle}>FNO Near Month</Text>
      <View style={CS.boxContainer}>
        <Box 
          title="RELIANCE" 
          value="2955.10" 
          change="24.60 (0.84%)" 
          isPositive={true} 
          onPress={() => navigation.navigate('ChartScreen', { screen: 'Chart' })}
        />
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
    justifyContent: 'space-between',
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

export default Default;
