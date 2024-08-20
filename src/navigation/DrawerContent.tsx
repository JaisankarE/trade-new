import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import GS from '../theme/Styles';
import {Stack} from 'react-native-spacing-system';
import Colors from '../theme/Colors';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

// const DrawerContent = () => {
const DrawerContent: React.FC<DrawerContentComponentProps> = props => {
  return (
    <ScrollView>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={CS.drawerStyle}>
        <View style={CS.drawerContent}>
          <View style={CS.topContent}>
            <Text style={[GS.ff,CS.topContentFirst]}>Hi,</Text>
            <Text style={[GS.ff,CS.topContentSecond]}>username</Text>
            <Text style={[GS.ff,CS.topContentThird]}>Basic Plan</Text>
          </View>

          <Stack size={10} />

          <View style={CS.topContent}>
            <Text style={[GS.ff,CS.secondRowFirstContent]}>
              Power up your analysis.
            </Text>
            <Text style={[GS.ff,CS.goPremiumBtn]}>GO PREMIUM</Text>
          </View>

          <Stack size={20} />

          <View style={CS.drawerbtns}>
            <Text style={[GS.ff,CS.btnText]}>Derivatives</Text>
            <Text style={[GS.ff,CS.btnText]}>FII/DII Data </Text>
            <Text style={[GS.ff,CS.btnText]}>Market Vidhya</Text>
            <Text style={[GS.ff,CS.btnText]}>Refer And Earn</Text>
            <Text style={[GS.ff,CS.btnText]}>My Plan</Text>
            <Text style={[GS.ff,CS.btnText]}>FAQ & Help</Text>
            <Text style={[GS.ff,CS.btnText]}>Contact Us</Text>
          </View>

          <Stack size={20} />
          
          <Image source={require('../../assets/images/drawer-image.jpeg')} style={CS.bottomImage} />

        </View>
      </DrawerContentScrollView>
    </ScrollView>
  );
};

const CS = StyleSheet.create({
  drawerStyle: {
    flex: 1,
    backgroundColor: Colors.h313131,
    borderBottomRightRadius: 95,
  },
  drawerContent: {
    padding: 15,
  },
  topContent: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContentFirst: {
    ...GS.light,
    ...GS.fw700,
    ...GS.fs14,
  },
  topContentSecond: {
    ...GS.light,
    ...GS.fw700,
    ...GS.fs14,
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
  topContentThird: {
    ...GS.gray,
    ...GS.fw700,
    ...GS.fs12,
    marginLeft: 10,
  },
  secondRowFirstContent: {
    ...GS.fs14,
    ...GS.warning,
    ...GS.fw700,
  },
  goPremiumBtn: {
    ...GS.bg_warning,
    marginLeft: 20,
    borderRadius: 100,
    padding: 13,
    ...GS.fs14,
    ...GS.dark,
    ...GS.fw700,
  },
  drawerbtns: {
    flex: 1,
  },
  btnText: {
    ...GS.fs14,
    ...GS.light,
    ...GS.fw400,
    paddingVertical: 10,
    width: '50%',
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray
  },
  bottomImage:{
  width:'100%',
  height:200,
  borderBottomRightRadius: 80,
  }
});

export default DrawerContent;
