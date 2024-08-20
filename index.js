/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import 'react-native-reanimated';

import { BASE_URL, WS_URL } from 'react-native-dotenv';

AppRegistry.registerComponent(appName, () => App);
