import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import CryptoJS from 'crypto-js';
import GS from '../../theme/Styles';
import Colors from '../../theme/Colors';
import TryAgain from './TryAgain';
import {
  updateSessionId,
  getApiKey,
  storeData,
  getUserId,
  getSessionId,
  updateSessionDate,
  getSessionDate,
} from '../../store/Store';
import {BASE_URL} from '@env';

type NavProps = {
  navigation: NavigationProp<any>;
};

const UserSession = ({navigation}: NavProps) => {
  const [isTryAgainModal, setTryAgainModal] = useState(false);
  const [encKey, setEncKey] = useState('');
  const [userId, setUserId] = useState('');
  const [apiKey, setApiKey] = useState('');

  useEffect(() => {
    const initializeData = async () => {
      try {

        const sessionDate = await getSessionDate();
        const currentDate = new Date().toISOString().split('T')[0];

        if (sessionDate === currentDate) {
          const sessionId = await getSessionId();
          if (sessionId) {
            navigation.navigate('Home', {screen: 'WatchLists'});
            return;
          }
        }

        await storeData();

        const userId = await getUserId();
        const apiKey = await getApiKey();

        setUserId(userId || '');
        setApiKey(apiKey || '');

        setTimeout(() => {
          getAPIEncpkey(userId || '');
        }, 4000);
        
      } catch (error) {
        console.error('Initialization Error:', error);
      }
    };

    initializeData();
  }, []);

  useEffect(() => {
    if (encKey) {
      getUserSID(apiKey);
    }
  }, [encKey]);

  const getAPIEncpkey = async (userId: string) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/customer/getAPIEncpkey`,
        {userId},
        {headers: {'Content-Type': 'application/json'}},
      );
      const encKey = response.data.encKey;
      if (!encKey) {
        setTryAgainModal(true);
      } else {
        setEncKey(encKey);
      }
      console.log('encKey:', encKey);
    } catch (error) {
      console.error('getAPIEncpkey Error:', error);
      setTryAgainModal(true);
    }
  };

  const getUserSID = async (apiKey: string) => {
    const userData = computeStringToSha256Hash(userId + apiKey + encKey);
    try {
      const response = await axios.post(
        `${BASE_URL}/customer/getUserSID`,
        {userId, userData},
        {headers: {'Content-Type': 'application/json'}},
      );

      const sessionId = response.data.sessionID;
      console.log('sessionID:', sessionId);
      if (!sessionId) {
        setTryAgainModal(true);
      } else {
        await updateSessionId(sessionId);
        const currentDate = new Date().toISOString().split('T')[0];
        await updateSessionDate(currentDate);
        navigation.navigate('SocketSession');
      }
    } catch (error) {
      console.error('getUserSID Error:', error);
      setTryAgainModal(true);
    }
  };

  const computeStringToSha256Hash = (plainText: string): string => {
    return CryptoJS.SHA256(plainText).toString(CryptoJS.enc.Hex);
  };

  const Reload = async () => {
    setTimeout(() => {
      getAPIEncpkey(userId);
    }, 4000);
  };

  return (
    <View style={cs.container}>
      <ActivityIndicator
        size={18}
        color={Colors.light}
        style={cs.loadingIndicator}
      />
      {isTryAgainModal && <TryAgain onTryAgain={Reload} />}
    </View>
  );
};

const cs = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ...GS.bg_dark,
  },
  loadingIndicator: {
    transform: [{scale: 1.5}],
  },
});

export default UserSession;
