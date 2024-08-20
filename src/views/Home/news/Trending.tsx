import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Button,
  LayoutChangeEvent,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import GS from '../../../theme/Styles';
import {Stack} from 'react-native-spacing-system';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Colors from '../../../theme/Colors';

type NavProps = {
  navigation: NavigationProp<any>;
};

const Trending = ({navigation}: NavProps) => {
  return (
    <ScrollView style={CS.container}>
        {/* <Stack size={20} /> */}

        <View style={CS.card}>
          <View style={[CS.space_between]}>
            <View style={[CS.space_between]}>
              <View style={CS.blueCircle}></View>
              <Text style={[GS.ff,GS.col_c6c6c6, GS.fw500, GS.fs13]}>
                BusinessLine
              </Text>
            </View>
            <View>
              <AntDesign
                name="down"
                size={15}
                color={Colors.gray}
                style={CS.downUpArrowIcon}
              />
            </View>
          </View>
          <Stack size={5} />
          <Text style={[GS.ff,GS.light, GS.fs14]}>
            Muskesh Ambani Weighs listing R Jio First
          </Text>
          <Stack size={15} />
          <Text style={[GS.ff,[CS.relianceLabel]]}>RELIANCE</Text>
          <Stack size={14} />
          <View style={CS.space_between}>
            <Text style={[GS.ff,GS.col_949494, GS.fs12, GS.fw500]}>
              07:35PM, Mon, 27 May
            </Text>
            <View style={[CS.row]}>
              <EvilIcons
                name="like"
                size={18}
                style={[CS.icon]}
                color={Colors.light}
              />
              <Foundation
                name="dislike"
                size={18}
                style={[CS.icon]}
                color={Colors.light}
              />
              <EvilIcons
                name="share-google"
                size={18}
                style={[CS.icon]}
                color={Colors.light}
              />
              <TouchableOpacity style={CS.readMoreBtn}>
                <Text style={[GS.ff, CS.readMoreBtnText]}>READ MORE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={CS.card}>
          <View style={[CS.space_between]}>
            <View style={[CS.space_between]}>
              <View style={CS.blueCircle}></View>
              <Text style={[GS.ff,GS.col_c6c6c6, GS.fw500, GS.fs13]}>
                BusinessLine
              </Text>
            </View>
            <View>
              <AntDesign
                name="down"
                size={15}
                color={Colors.gray}
                style={CS.downUpArrowIcon}
              />
            </View>
          </View>
          <Stack size={5} />
          <Text style={[GS.ff,GS.light, GS.fs14]}>
            Muskesh Ambani Weighs listing R Jio First
          </Text>
          <Stack size={15} />
          <Text style={[GS.ff,CS.relianceLabel]}>RELIANCE</Text>
          <Stack size={14} />
          <View style={CS.space_between}>
            <Text style={[GS.ff,GS.col_949494, GS.fs12, GS.fw500]}>
              07:35PM, Mon, 27 May
            </Text>
            <View style={[CS.row]}>
              <EvilIcons
                name="like"
                size={18}
                style={[CS.icon]}
                color={Colors.light}
              />
              <Foundation
                name="dislike"
                size={18}
                style={[CS.icon]}
                color={Colors.light}
              />
              <EvilIcons
                name="share-google"
                size={18}
                style={[CS.icon]}
                color={Colors.light}
              />
              <TouchableOpacity style={CS.readMoreBtn}>
                <Text style={[GS.ff,CS.readMoreBtnText]}>READ MORE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={CS.card}>
          <View style={[CS.space_between]}>
            <View style={[CS.space_between]}>
              <View style={CS.blueCircle}></View>
              <Text style={[GS.ff,GS.col_c6c6c6, GS.fw500, GS.fs13]}>
                BusinessLine
              </Text>
            </View>
            <View>
              <AntDesign
                name="down"
                size={15}
                color={Colors.gray}
                style={CS.downUpArrowIcon}
              />
            </View>
          </View>
          <Stack size={5} />
          <Text style={[GS.ff,GS.light, GS.fs14]}>
            Muskesh Ambani Weighs listing R Jio First
          </Text>
          <Stack size={15} />
          <Text style={[GS.ff,CS.relianceLabel]}>RELIANCE</Text>
          <Stack size={14} />
          <View style={CS.space_between}>
            <Text style={[GS.ff,GS.col_949494, GS.fs12, GS.fw500]}>
              07:35PM, Mon, 27 May
            </Text>
            <View style={[CS.row]}>
              <EvilIcons
                name="like"
                size={18}
                style={[CS.icon]}
                color={Colors.light}
              />
              <Foundation
                name="dislike"
                size={18}
                style={[CS.icon]}
                color={Colors.light}
              />
              <EvilIcons
                name="share-google"
                size={18}
                style={[CS.icon]}
                color={Colors.light}
              />
              <TouchableOpacity style={CS.readMoreBtn}>
                <Text style={[GS.ff,CS.readMoreBtnText]}>READ MORE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={CS.card}>
          <View style={[CS.space_between]}>
            <View style={[CS.space_between]}>
              <View style={CS.blueCircle}></View>
              <Text style={[GS.ff,GS.col_c6c6c6, GS.fw500, GS.fs13]}>
                BusinessLine
              </Text>
            </View>
            <View>
              <AntDesign
                name="down"
                size={15}
                color={Colors.gray}
                style={CS.downUpArrowIcon}
              />
            </View>
          </View>
          <Stack size={5} />
          <Text style={[GS.ff,GS.light, GS.fs14]}>
            Muskesh Ambani Weighs listing R Jio First
          </Text>
          <Stack size={15} />
          <Text style={[GS.ff,CS.relianceLabel]}>RELIANCE</Text>
          <Stack size={14} />
          <View style={CS.space_between}>
            <Text style={[GS.ff,GS.col_949494, GS.fs12, GS.fw500]}>
              07:35PM, Mon, 27 May
            </Text>
            <View style={[CS.row]}>
              <EvilIcons
                name="like"
                size={18}
                style={[CS.icon]}
                color={Colors.light}
              />
              <Foundation
                name="dislike"
                size={18}
                style={[CS.icon]}
                color={Colors.light}
              />
              <EvilIcons
                name="share-google"
                size={18}
                style={[CS.icon]}
                color={Colors.light}
              />
              <TouchableOpacity style={CS.readMoreBtn}>
                <Text style={[GS.ff,CS.readMoreBtnText]}>READ MORE</Text>
              </TouchableOpacity>
            </View>
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
  card: {
    borderBottomColor: Colors.border_color,
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingTop: 20,
  },
  space_between: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  blueCircle: {
    height: 18,
    width: 18,
    backgroundColor: Colors.h007AFF,
    borderRadius: 100,
    marginEnd: 10,
  },
  downUpArrowIcon: {
    ...GS.bg_1e1e1e,
    paddingHorizontal: 6,
    paddingTop: 7,
    paddingBottom: 4,
    borderRadius: 100,
  },
  relianceLabel: {
    ...GS.bg_1e1e1e,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 3,
    ...GS.gray,
    ...GS.fs12,
    alignSelf: 'flex-start',
  },
  row: {
    flexDirection: 'row',
  },
  icon: {
    justifyContent: 'center',
    padding: 5,
    borderRadius: 100,
    ...GS.bg_1e1e1e,
    marginEnd: 8,
  },
  readMoreBtn: {
    backgroundColor: Colors.h007AFF,
    ...GS.light,
    height: 22,
    paddingHorizontal: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3,
  },
  readMoreBtnText: {
    ...GS.light,
    ...GS.fw700,
    ...GS.fs12,
    padding: 0,
  },
});

export default Trending;
