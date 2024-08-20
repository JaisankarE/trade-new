import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CryptoJS from 'crypto-js';
import { NavigationProp } from '@react-navigation/native';
import { getSessionId, getUserId, storeData } from '../../store/Store';
import { WS_URL } from '@env';

type NavProps = {
  navigation: NavigationProp<any>;
};

const PageTwo = ({ navigation }: NavProps) => {
  const [userId, setUserId] = useState('');
  const [sessionId, setSessionId] = useState('');
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [webSocketData, setWebSocketData] = useState<{ ft: number; lp: number; }[]>([]);

  useEffect(() => {
    const initializeData = async () => {
      try {
        await storeData(); 
        const userId = await getUserId();
        const sessionId = await getSessionId(); 
        console.log("hi "+sessionId);
        setUserId(userId || '');
        setSessionId(sessionId || ''); 
      } catch (error) {
        console.error('Initialization Error:', error);
      }
    };
    initializeData();

    const newSocket = new WebSocket(WS_URL);
    setSocket(newSocket);

    newSocket.onopen = () => {
      console.log('WebSocket connection opened.');
      connectionRequest(newSocket);
    };

    newSocket.onmessage = msg => {
      console.log('Raw WebSocket Message:', msg.data);
      try {
        const response = JSON.parse(msg.data);

        if (response.ft && response.lp ) {
          setWebSocketData(prevData => [
            ...prevData,
            { 
              ft: response.ft, 
              lp: response.lp,
            },
          ]);
        }

        console.log(webSocketData)

        if (response.s === 'OK') {
          const channel = 'NSE|11536';
          const json = { k: channel, t: 't' };
          newSocket.send(JSON.stringify(json));
        }
      } catch (error) {
        console.error('WebSocket JSON Parse Error:', error);
      }
    };

    newSocket.onerror = error => {
      console.error('WebSocket Error:', error);
      console.log('WebSocket Error', 'An error occurred with the WebSocket connection.');
    };

    newSocket.onclose = () => {
      console.log('WebSocket connection closed.');
    };

    const intervalId = setInterval(() => {
      if (newSocket.readyState === WebSocket.OPEN) {
        const channel = 'NSE|11536';
        const json = { k: channel, t: 't' };
        newSocket.send(JSON.stringify(json));
        console.log('Message sent:', json);
      } else {
        console.error('WebSocket is not open. Current state:', newSocket.readyState);
      }
    }, 15 * 60 * 1000); 

    return () => {
      clearInterval(intervalId); 
      newSocket.close();
    };
  }, [WS_URL, userId, sessionId]);

  const connectionRequest = (socket: WebSocket) => {
    const encryptedToken = CryptoJS.SHA256(
      CryptoJS.SHA256(sessionId).toString(),
    ).toString();
    const initCon = {
      susertoken: encryptedToken,
      t: 'c',
      actid: `${userId}_API`,
      uid: `${userId}_API`,
      source: 'API',
    };
    console.log('Connection Request:', initCon);
    socket.send(JSON.stringify(initCon));
  };

  return (
    <View>
      {webSocketData.map((data, index) => (
        <Text key={index} style={styles.textInput}>
          ft: {data.ft}, lp: {data.lp}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginTop: 10,
    padding: 10,
    color: 'black',
  },
});

export default PageTwo;
