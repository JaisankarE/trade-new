import React, {useEffect, useState} from 'react';
import {View, Button, StyleSheet, Alert, Text, ActivityIndicator} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {BASE_URL} from '@env';
import {getSessionId, getUserId} from '../../store/Store';
import Colors from '../../theme/Colors';
import TryAgain from './TryAgain';
import GS from '../../theme/Styles';

type NavProps = {
  navigation: NavigationProp<any>;
};

const SocketSession = ({navigation}: NavProps) => {
  const [sessionID, setSessionID] = useState('');
  const [userId, setUserId] = useState('');
  const [isTryAgainModal, setTryAgainModal] = useState(false);

  useEffect(() => {
    const initializeData = async () => {
      try {
        const userId = await getUserId();
        const sessionId = await getSessionId();
        console.log(sessionId);
        setUserId(userId || '');
        setSessionID(sessionId || '');
        checkMethod(userId, sessionId);
      } catch (error) {
        console.error('Initialization Error:', error);
      }
    };

    initializeData();
  }, []);

  const [isSessionCreated, setIsSessionCreated] = useState<boolean>(false);

  const checkMethod = (userId: string | null, sessionId: string | null) => {
    console.log(sessionId);
    if (sessionId && userId) {
      const AuthorizationToken = `Bearer ${userId} ${sessionId}`.trim();
      invalidateSession(AuthorizationToken);
      navigation.navigate('Home', {screen: 'WatchLists'});
    } else {
      console.log('UserSession Not found');
    }
  };

  const invalidateSession = (AuthorizationToken: string) => {
    const jsonObj = {loginType: 'API'};
    fetch(`${BASE_URL}/ws/invalidateSocketSess`, {
      method: 'POST',
      headers: {
        Authorization: AuthorizationToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonObj),
    })
      .then(response => {
        console.log('Invalidate Session Response:', response);
        if (!response.ok) {
          if (response.status === 401) {
            console.log('Unauthorized access. Please check your credentials.');
            return Promise.reject('Unauthorized access');
          }
          return response.text().then(text => {
            throw new Error(text);
          });
        }
        return response.json();
      })
      .then(msg => {
        if (msg.stat === 'Ok') {
          createSession(AuthorizationToken);
        } else {
          console.error('Invalidate Session Error:', msg);
        }
      })
      .catch(error => {
        console.error('Invalidate Session Catch:', error);
      });
  };

  const createSession = (AuthorizationToken: string) => {
    const jsonObj = {loginType: 'API'};
    fetch(`${BASE_URL}/ws/createSocketSess`, {
      method: 'POST',
      headers: {
        Authorization: AuthorizationToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonObj),
    })
      .then(response => {
        console.log('Create Session Response:', response);
        return response.json();
      })
      .then(msg => {
        if (msg.stat === 'Ok') {
          setIsSessionCreated(true);
        } else {
          console.log(msg);
        }
      })
      .catch(error => console.error('Create Session Catch:', error));
  };

  const Reload = async () => {
    setTimeout(() => {
      navigation.navigate('UserSession');
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

export default SocketSession;
