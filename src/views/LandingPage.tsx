import React, {useEffect} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import GS from '../theme/Styles';

type NavProps = {
  navigation: NavigationProp<any>;
};

const LandingPage = ({navigation}: NavProps) => {
  const scale = new Animated.Value(1);

  useEffect(() => {
    Animated.timing(scale, {
      toValue: 2,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      // navigation.navigate('Home', {screen: 'WatchLists'});
      navigation.navigate('UserSession');
    });
  }, []);

  return (
    <View style={CS.container}>
      <Animated.Image
        source={require('../../assets/images/logo-no-bg.png')}
        style={[CS.logo, {transform: [{scale}]}]}
      />
    </View>
  );
};

const CS = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ...GS.bg_dark,
  },
  logo: {
    width: 40,
    height: 40,
  },
});

export default LandingPage;
