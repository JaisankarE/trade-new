import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Dimensions,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Alert from '../views/Home/alert/Alert';
import Scanner from '../views/Home/scanner/Scanner';
import WatchLists from '../views/Home/watchlists/WatchLists';
import Punch from '../views/Home/punch/Punch';
import News from '../views/Home/news/News';
import Colors from '../theme/Colors';
import GS from '../theme/Styles';
import DrawerContent from './DrawerContent';

import { createDrawerNavigator } from '@react-navigation/drawer';

type RootTabParamList = {
  Alert: undefined;
  Scanner: undefined;
  WatchLists: undefined;
  Punch: undefined;
  News: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();
const { width } = Dimensions.get('window');
const Drawer = createDrawerNavigator();

const getHeaderTitle = (routeName: string) => {
  switch (routeName) {
    case 'Alert':
      return 'Alert';
    case 'Scanner':
      return 'Scanner';
    case 'WatchLists':
      return 'WatchLists';
    case 'Punch':
      return 'Punch';
    case 'News':
      return 'News';
    default:
      return 'WatchLists';
  }
};

const HomeTabNavigator = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName="WatchLists"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: string;
          let iconColor = color;

          switch (route.name) {
            case 'Alert':
              iconName = 'bell-o';
              break;
            case 'Scanner':
              iconName = 'qrcode';
              break;
            case 'WatchLists':
              iconName = 'bookmark-o';
              break;
            case 'Punch':
              iconName = 'eercast';
              iconColor = '#02fe9d';
              break;
            case 'News':
              iconName = 'file-text-o';
              break;
            default:
              iconName = 'circle';
              break;
          }

          return <Icon name={iconName} size={20} color={iconColor} />;
        },
        headerShown: false,
        tabBarActiveTintColor: Colors.light,
        tabBarInactiveTintColor: Colors.gray,
        tabBarStyle: {
          backgroundColor: Colors.dark,
          height: 90,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          ...GS.fw700,
          ...GS.fs12,
          ...GS.ff,
          marginTop: 30,
          position: 'relative',
          top: -36,
          bottom: 1,
        },
      })}
      screenListeners={({ route }) => ({
        state: e => {
          const name = route.name;
          navigation.setOptions({ headerTitle: getHeaderTitle(name) });
        },
      })}
    // add font family

    >
      <Tab.Screen name="Alert" component={Alert} />
      <Tab.Screen name="Scanner" component={Scanner} />
      <Tab.Screen name="WatchLists" component={WatchLists} />
      <Tab.Screen name="Punch" component={Punch} />
      <Tab.Screen name="News" component={News} />
    </Tab.Navigator>
  );
};

const HeaderRight = () => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity>
        <Icon
          name="search"
          style={{ paddingRight: 20, ...GS.col_aeaeae, ...CS.icon }}
          size={18}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon
          name="bell-o"
          style={{ paddingRight: 15, ...GS.col_aeaeae, ...CS.icon }}
          size={18}
        />
      </TouchableOpacity>
      <Image
        source={require('../../assets/images/fast-trade.png')}
        style={CS.logo}
      />
    </View>
  );
};

const HomeNav = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeDrawer"
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={({ route }) => ({
        headerShown: true,
        headerTitle: getHeaderTitle(route.name),
        headerTitleAlign: 'left',
        headerTintColor: Colors.light,
        headerStyle: {
          backgroundColor: Colors.dark,
          elevation: 0,
        },
        headerTitleStyle: { ...GS.fs16 },
        headerRight: () => <HeaderRight />,
        drawerStyle: {
          width: width * 0.8,
          backgroundColor: 'transparent',
        },
      })}>
      <Drawer.Screen name="HomeDrawer" component={HomeTabNavigator} />
    </Drawer.Navigator>
  );
};

const CS = StyleSheet.create({
  icon: {
    position: 'relative',
    top: 14,
  },
  logo: {
    height: 40,
    width: 75,
    padding: 20,
    position: 'relative',
    top: 2,
  },
});

export default HomeNav;
