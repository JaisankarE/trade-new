import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import GS from '../../../theme/Styles';
import {Stack} from 'react-native-spacing-system';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../../theme/Colors';

type NavProps = {
  navigation: NavigationProp<any>;
};

const Events = ({navigation}: NavProps) => {
  return (
    <ScrollView>
      <View style={CS.container}>
        <Stack size={20} />
        <View style={[CS.boxcontainer, GS.bg_light]}>
          <View style={CS.topcontainer}>
            <Icon name="calendar" size={18} style={[CS.icon]} />
            <Text style={[GS.ff,GS.fs14, GS.dark, GS.fw500, CS.text1]}>
              Economic Calendar (08 Jul - 12 Jul '24)
            </Text>
          </View>
          <Text style={[GS.ff,GS.dark, CS.text, GS.fs13]}>
            List of important international economic events of this Week.
          </Text>
        </View>

        <Stack size={15} />

        <View style={[CS.boxcontainer, GS.bg_light]}>
          <View style={CS.topcontainer}>
            <Icon name="volume-up" size={18} style={[CS.icon]} />
            <Text style={[GS.ff,GS.fs14, GS.dark, GS.fw500, CS.text1]}>
              Corporate Actions (08 Jul - 12 Jul '24)
            </Text>
          </View>
          <Text style={[GS.ff,GS.dark, CS.text, GS.fs13]}>
            List ofcorporate announcements (dividents/ splits/ bonus/ results)
            expected this week.
          </Text>
        </View>

        <Stack size={20} />

        <Text style={[GS.ff,GS.col_c6c6c6, GS.fw600]}>Tue , 09 Jul</Text>

        <Stack size={15} />
        <View>
          <View style={CS.topcontainer}>
            <Icon
              name="calendar"
              size={18}
              style={[CS.icon]}
              color={Colors.light}
            />
            <Text style={[GS.ff,GS.fs14, GS.light, GS.fw500, CS.text1]}>
              Economic events
            </Text>
          </View>
          <Stack size={15} />
          <Text style={[GS.ff,GS.fs11, GS.col_c6c6c6, GS.fw500, CS.text1]}>
            No Economic Events today!
          </Text>
        </View>

        <Stack size={30} />

        <View>
          <View style={CS.topcontainer}>
            <Icon
              name="volume-up"
              size={18}
              style={[CS.icon]}
              color={Colors.light}
            />
            <Text style={[GS.ff,GS.fs14, GS.light, GS.fw500, CS.text1]}>
              Corporate actions
            </Text>
          </View>
        </View>

        <Stack size={15} />

        <View>
          <Text style={[GS.ff,GS.light, GS.fw500, GS.fs16]}>Dividends</Text>
          <Stack size={10} />
          <View style={[CS.dividendcontent]}>
            <Text style={[GS.ff,GS.col_c6c6c6, GS.fs13]}>Bald Finserv Ltd</Text>
            <Text style={[GS.ff,GS.col_c6c6c6]}>0.1</Text>
          </View>
          <Text style={[GS.ff,GS.col_c6c6c6, GS.fs10]}>(announced 0n 27 may 24)</Text>
          <Stack size={10} />
          <View style={[CS.dividendcontent]}>
            <Text style={[GS.ff,GS.col_c6c6c6, GS.fs13]}>JSW Steel Ltd</Text>
            <Text style={[GS.ff,GS.col_c6c6c6]}>7.3</Text>
          </View>
          <Text style={[GS.ff,GS.light, GS.fs10]}>(announced 0n 17 may 24)</Text>
          <Stack size={10} />
          <View style={[CS.dividendcontent]}>
            <Text style={[GS.ff,GS.col_c6c6c6, GS.fs13]}>Bald Finserv Ltd</Text>
            <Text style={[GS.ff,GS.col_c6c6c6]}>17.0</Text>
          </View>
          <Text style={[GS.ff,GS.col_c6c6c6, GS.fs10]}>(announced 0n 06 may 24)</Text>
        </View>

        <Stack size={15} />

        <View>
          <Text style={[GS.ff,GS.light, GS.fw500, GS.fs16]}>Results</Text>
          <Stack size={10} />
          <View style={[CS.dividendcontent]}>
            <Text style={[GS.ff,GS.col_c6c6c6, GS.fs13]}>G M Breweries ltd</Text>
            <Text style={[GS.ff,GS.col_c6c6c6, GS.fs13]}>Tue, 09 Jul 24</Text>
          </View>
        </View>

        <Stack size={15} />

        <View>
          <Text style={[GS.ff,GS.light, GS.fw500, GS.fs16]}>Rights</Text>
          <Stack size={10} />
          <View style={[CS.dividendcontent]}>
            <Text style={[GS.ff,GS.col_c6c6c6, GS.fs13]}>Sar Televenture Ltd</Text>
            <Text style={[GS.ff,GS.col_c6c6c6, GS.fs13]}>Ratio 1:1; Premium 198.0</Text>
          </View>          
        </View>

        <Stack size={15} />

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
  topcontainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  boxcontainer: {
    borderRadius: 8,
    padding: 10,
  },
  text: {
    paddingTop: 8,
    lineHeight:20
  },
  text1: {
    paddingTop: 6,
  },

  icon: {
    marginEnd: 10,
    position: 'relative',
    top: 5,
  },
  dividendcontent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Events;
