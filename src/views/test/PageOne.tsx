import React, {useEffect, useState} from 'react';
import {View, Button, StyleSheet, Alert, Text} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {BASE_URL} from '@env';
import {getSessionId, getUserId } from '../../store/Store';

type NavProps = {
  navigation: NavigationProp<any>;
};

const PageOne = ({navigation}: NavProps) => {
  const [sessionID, setSessionID] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const initializeData = async () => {
      try {
        const userId = await getUserId();
        const sessionId = await getSessionId();
        setUserId(userId || '');
        setSessionID(sessionId || '');
      } catch (error) {
        console.error('Initialization Error:', error);
      }
    };

    initializeData();
  }, []);
  const [isSessionCreated, setIsSessionCreated] = useState<boolean>(false);

  const checkMethod = () => {
    if (sessionID && userId) {
      const AuthorizationToken = `Bearer ${userId} ${sessionID}`.trim();
      invalidateSession(AuthorizationToken);
      navigation.navigate('PageTwo');
    } else {
      console.log('Please enter a User Id and UserSession');
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

  return (
    <View style={styles.container}>
      <Button title="Connect" onPress={checkMethod} />
      <Text>{sessionID}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

export default PageOne;
