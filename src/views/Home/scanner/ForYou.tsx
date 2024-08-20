import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import GS from '../../../theme/Styles';
import {Stack} from 'react-native-spacing-system';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../../theme/Colors';

type NavProps = {
  navigation: NavigationProp<any>;
};

const ForYou = ({navigation}: NavProps) => {
  return (
    <View style={CS.container}>
      <Stack size={20} />

      <View style={CS.space_between}>
        <Text style={[GS.ff,CS.title]}>POPULAR</Text>
        <Text style={[GS.ff,CS.viewBtn]}>VIEW</Text>
      </View>
      <ScrollView horizontal={true} style={[CS.popularCards]}>
        <View style={[CS.card]}>
          <Text style={[GS.ff,CS.cardHeader]}>Gap up by x% </Text>
          <View style={[CS.flex_start, CS.cardBullet]}>
            <Text style={[GS.ff,CS.bullet, GS.success]}>{'\u2022'}</Text>
            <Text style={[GS.ff,CS.cardText, GS.success]}>Bullish</Text>
          </View>
        </View>
        <View style={[CS.card]}>
          <Text style={[GS.ff,CS.cardHeader]}>Bearish Engulfing</Text>
          <View style={[CS.flex_start, CS.cardBullet]}>
            <Text style={[GS.ff,CS.bullet, GS.error]}>{'\u2022'}</Text>
            <Text style={[GS.ff,CS.cardText, GS.error]}>Bullish</Text>
          </View>
        </View>
        <View style={[CS.card]}>
          <Text style={[GS.ff,CS.cardHeader]}>Bearish Engulfing</Text>
          <View style={[CS.flex_start, CS.cardBullet]}>
            <Text style={[GS.ff,CS.bullet, GS.error]}>{'\u2022'}</Text>
            <Text style={[GS.ff,CS.cardText, GS.error]}>Bullish</Text>
          </View>
        </View>
      </ScrollView>

      <Stack size={20} />

      <View style={CS.space_between}>
        <Text style={[GS.ff,CS.title]}>RECOMMENDED</Text>
        <Text style={[GS.ff,CS.viewBtn]}>VIEW</Text>
      </View>
      <ScrollView horizontal={true} style={[CS.popularCards]}>
        <View style={[CS.card]}>
          <Text style={[GS.ff,CS.cardHeader]}>SMA 1 higher than SMA2 </Text>
          <View style={[CS.flex_start, CS.cardBullet]}>
            <Text style={[GS.ff,CS.bullet, GS.success]}>{'\u2022'}</Text>
            <Text style={[GS.ff,CS.cardText, GS.success]}>Bullish</Text>
          </View>
        </View>
        <View style={[CS.card]}>
          <Text style={[GS.ff,CS.cardHeader]}>Sharp Price Gain on Large Vol</Text>
          <View style={[CS.flex_start, CS.cardBullet]}>
            <Text style={[GS.ff,CS.bullet, GS.success]}>{'\u2022'}</Text>
            <Text style={[GS.ff,CS.cardText, GS.success]}>Bullish</Text>
          </View>
        </View>
        <View style={[CS.card]}>
          <Text style={[GS.ff,CS.cardHeader]}>Bearish Engulfing</Text>
          <View style={[CS.flex_start, CS.cardBullet]}>
            <Text style={[GS.ff,CS.bullet, GS.error]}>{'\u2022'}</Text>
            <Text style={[GS.ff,CS.cardText, GS.error]}>Bullish</Text>
          </View>
        </View>
      </ScrollView>

      <Stack size={20} />

      <View style={CS.space_between}>
        <Text style={[GS.ff,CS.title]}>TUTORIALS</Text>
      </View>
      <ScrollView horizontal={true} style={[CS.popularCards]}>
        <View style={[CS.TutorialsCard]}>
          <Stack size={15} />
          <Text style={[GS.ff,CS.Tutorialsbody]}>
            Scanning Breakout Strategies Gap & Opening Range Breakout
          </Text>
          <Stack size={8} />
          <Icon
            name="youtube-play"
            size={20}
            style={CS.youtube_icon}
            color={Colors.error}
          />
        </View>
        <View style={[CS.TutorialsCard]}>
          <Stack size={15} />
          <Text style={[GS.ff,CS.Tutorialsbody]}>
            How To Trade a Breakout Price Volumke Breakout
          </Text>
          <Stack size={8} />
          <Icon
            name="youtube-play"
            size={20}
            style={CS.youtube_icon}
            color={Colors.error}
          />
        </View>
        <View style={[CS.TutorialsCard]}>
          <Stack size={15} />
          <Text style={[GS.ff,CS.Tutorialsbody]}>
            Scanning Breakout Strategies Gap & Opening Range Breakout
          </Text>
          <Stack size={8} />
          <Icon
            name="youtube-play"
            size={20}
            style={CS.youtube_icon}
            color={Colors.error}
          />
        </View>
      </ScrollView>
      <Stack size={300} />
    </View>
  );
};

const CS = StyleSheet.create({
  container:{
   ...GS.bg_dark
  },
  space_between: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  title: {
    ...GS.col_007AFF,
    ...GS.fs13,
  },
  viewBtn: {
    ...GS.gray,
    ...GS.fs12,
    ...GS.fw600,
    ...GS.bg_313131,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 30,
  },

  popularCards: {
    marginTop: 10,
    marginLeft: 12,
  },

  card: {
    ...GS.bg_313131,
    marginEnd: 6,
    width: 155,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  flex_start: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  cardHeader: {
    ...GS.light,
    ...GS.fs11,
    ...GS.fw600,
    height: 28,
    lineHeight: 14,
  },
  cardBullet: {
    height: 36,
  },

  bullet: {
    ...GS.fw700,
    ...GS.fs24,
    paddingEnd: 3,
    position: 'relative',
    top: -3,
  },
  cardText: {
    ...GS.fs11,
    lineHeight: 14,
    marginTop: 6,
  },
  TutorialsCard: {
    ...GS.bg_dark,
    marginEnd: 6,
    width: 155,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  Tutorialsbody: {
    ...GS.light,
    ...GS.fw500,
    ...GS.fs9,
    lineHeight: 13,
    borderLeftColor: 'lime',
    borderLeftWidth: 2,
    paddingLeft: 7,
  },
  youtube_icon: {
    textAlign: 'right',
  },
});

export default ForYou;
