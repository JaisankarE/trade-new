import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import GS from '../../../theme/Styles';
import {Stack} from 'react-native-spacing-system';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../../theme/Colors';

type NavProps = {
  navigation: NavigationProp<any>;
};

const AllScans = ({navigation}: NavProps) => {
  return (
    <View style={CS.container}>
      <Stack size={20} />
      <View style={CS.horizontalline}>
        <View style={[CS.titlecontainer]}>
          <Text style={[GS.ff,GS.light]}>Price Scans (26)</Text>
          <Text style={[GS.ff,GS.light, CS.symbolstyle]}>
            <AntDesign name="right" size={12} color={Colors.light} />
          </Text>
        </View>
      </View>

      <View style={CS.horizontalline}>
        <View style={[CS.titlecontainer]}>
          <Text style={[GS.ff,GS.light]}>Volume Scans (4)</Text>
          <Text style={[GS.ff,GS.light, CS.symbolstyle]}>
            <AntDesign name="right" size={12} color={Colors.light} />
          </Text>
        </View>
      </View>

      <View style={CS.horizontalline}>
        <View style={[CS.titlecontainer]}>
          <Text style={[GS.ff,GS.light]}>Breakout Scans (5)</Text>
          <Text style={[GS.ff,GS.light, CS.symbolstyle]}>
            <AntDesign name="right" size={12} color={Colors.light} />
          </Text>
        </View>
      </View>

      <View style={CS.horizontalline}>
        <View style={[CS.titlecontainer]}>
          <Text style={[GS.ff,GS.light]}>Intraday Scans (6)</Text>
          <Text style={[GS.ff,GS.light, CS.symbolstyle]}>
            <AntDesign name="right" size={12} color={Colors.light} />
          </Text>
        </View>
      </View>

      <View style={CS.horizontalline}>
        <View style={[CS.titlecontainer]}>
          <Text style={[GS.ff,GS.light]}>Technical Scans (90)</Text>
          <Text style={[GS.ff,GS.light, CS.symbolstyle]}>
            <AntDesign name="right" size={12} color={Colors.light} />
          </Text>
        </View>
      </View>

      <View style={CS.horizontalline}>
        <View style={[CS.titlecontainer]}>
          <Text style={[GS.ff,GS.light]}>Combination Scans (8)</Text>
          <Text style={[GS.ff,GS.light, CS.symbolstyle]}>
            <AntDesign name="right" size={12} color={Colors.light} />
          </Text>
        </View>
      </View>

      <View style={CS.horizontalline}>
        <View style={[CS.titlecontainer]}>
          <Text style={[GS.ff,GS.light]}>Candlestick Pattern Scaans (21)</Text>
          <Text style={[GS.ff,GS.light, CS.symbolstyle]}>
            <AntDesign name="right" size={12} color={Colors.light} />
          </Text>
        </View>
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
  titlecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  symbolstyle: {
    ...GS.bg_313131,
    borderRadius: 50,
    padding: 5,
  },
  horizontalline: {
    borderBottomColor: Colors.border_color,
    borderWidth: 1,
    paddingBottom: 12,
    paddingTop: 10,
  },
});

export default AllScans;
